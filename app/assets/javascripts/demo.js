$(function() {
  $('#attendant_npi').on('keyup', validateNpiNumber);
  $('#npi-name-lookup').on('submit', lookUpNpiNumber);
  $('#search-table').on('click', '.npi-select', addSelectedNPInumber)
  $('body').on('click', '#npi-open-search', openNpiSearchBox)
});

function validateNpiNumber() {
    $('#npi-confrim').html("<p id='npi-confrim'>Enter A Valid NPI Number</p>")
    var npiNumber = $('#attendant_npi').val();
    if (npiNumber.length === 10) {
        $('#npi-confrim').html("<p id='npi-confrim'>Enter A Valid NPI Number</p>")
        $.ajax({
          type: 'GET',
          url: 'http://www.bloomapi.com/api/sources/usgov.hhs.npi/' + npiNumber,
          dataType: 'jsonp'
        }).done(function(server_data) {
          if (server_data) {
            $('#npi-confrim').text("NPI Number Found").css("color", "green");
          }
        });
    };
}

function lookUpNpiNumber(evt) {
  evt.preventDefault();
  var first = $('#npi-name-lookup').find('input[name="firstname"]').val();
  var last = $('#npi-name-lookup').find('input[name="lastname"]').val();
  $.ajax({
    type: 'GET',
    url: 'http://www.bloomapi.com/api/search?offset=0&key1=last_name&op1=eq&value1=' + last + '&key2=first_name&op2=eq&value2=' + first,
    dataType: 'jsonp',
    cache: true
  }).done(function(server_data) {
    var results = server_data.result.sort(function(a,b){return a.practice_address - b.practice_address })
    results.forEach(function(data) {
      var searchResultRow = "<tr><td>"+ data.first_name + " " + data.last_name +"</td><td>" + data.practice_address.address_line + "</td><td>"+ data.practice_address.city +"</td><td>"+ data.practice_address.state +"</td><td class='npi-result'>"+ data.npi +"</td><td><button type='button' class='btn btn-success btn-xs npi-select'>Select</button></td></tr>";
      $("#search-table tr:last").after(searchResultRow);
    })
  }).fail(console.log("failed"));
}

function addSelectedNPInumber() {
  var npiSelected = $(this).closest('tr').find(".npi-result").text();
  $('#attendant_npi').val(npiSelected);
  $('#npi-confrim').text("NPI Number Found").css("color", "green");
  $('.npi-search-bar').on('click', '.npi-select', function() {
    $( ".npi-search-bar" ).slideUp( "slow" );
  });
}

function openNpiSearchBox(evt) {
  evt.preventDefault();
  $('.npi-search-bar').slideToggle();
}

// 1013903475
// 101390347
