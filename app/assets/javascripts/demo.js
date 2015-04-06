$(function() {
  $('#attendant_npi').on('keyup', validateNpiNumber);
   lookUpNpiNumber("NABARRETE")
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

function lookUpNpiNumber(last) {
    // link = 'http://www.bloomapi.com/api/search?limit=10&offset=0&key1=last_name&op1=eq&value1='+ last +'&key2=first_name&op2=eq&value2=' + first
  $.ajax({
    url: 'http://www.bloomapi.com/api/search/npi?limit=10&offset=0&key1=practice_address.zip&op1=eq&value1=98101',
    // url: 'http://www.bloomapi.com/api/search?offset=0&key1=last_name&op1=eq&value1=LIN&key2=first_name&op2=eq&value2=JOHN',
    dataType: 'jsonp'
  }).done(function(server_data) {
    console.log(server_data)
  }).fail(console.log("failed"));
}



// GET http://www.bloomapi.com/api/search/npi?limit=10&offset=0&key1=last_name&op1=eq&value1=lin&key2=first_name&op2=eq&value2=john
// http://www.bloomapi.com/api/search/npi?limit=10&offset=0&key1=last_name&op1=eq&value1=jansa&key2=first_name&op2=eq&value2=galeb

// 1013903475
// 101390347
