/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */


$(document).ready(function() {
    $("#btnSubmit").click(function(){
        alert("button");
    }); 
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
