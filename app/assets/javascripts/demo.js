$(function() {
  $('#attendant_npi').on('keyup', validateNpiNumber);
  $('#npi-name-lookup').on('submit', lookUpNpiNumber)
});

function validateNpiNumber() {
    $('#npi-confrim').html("<p id='npi-confrim'>Please Enter A Valid NPI Number</p>")
    var npiNumber = $('#attendant_npi').val();
    if (npiNumber.length === 10) {
        $('#npi-confrim').html("<p id='npi-confrim'>Please Enter A Valid NPI Number</p>")
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
    debugger
    results.forEach(function(data) {
      console.log(data.first_name)
      console.log(data.last_name)
      console.log(data.practice_address.address_line)
      console.log(data.practice_address.city)
      console.log(data.practice_address.state)
      console.log(data.practice_address.zip)
      var searchResultRow = "<tr><td>"+ data.first_name + " " + data.last_name +"</td><td>" + data.practice_address.address_line + "</td><td>"+ data.practice_address.city +"</td><td>"+ data.practice_address.state +"</td><td>"+ data.npi +"</td></tr>";
      $("#search-table tr:last").after(searchResultRow);
    })
  }).fail(console.log("failed"));
}
// Failed to load resource: the server responded with a status of 400 (Bad Request)

// GET http://www.bloomapi.com/api/search/npi?limit=10&offset=0&key1=last_name&op1=eq&value1=lin&key2=first_name&op2=eq&value2=john
// http://www.bloomapi.com/api/search/npi?limit=10&offset=0&key1=last_name&op1=eq&value1=jansa&key2=first_name&op2=eq&value2=galeb

// 1013903475
// 101390347
