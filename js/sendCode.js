/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

    $("div.w3ls-validRegisterForm input,div.w3ls-validRegisterForm input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var code = $("div.w3ls-validRegisterForm input#sendCode").val();
            // Check for white space in code for Success/Fail message
            if (code.indexOf(' ') >= 0) {
                code = code.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "https://tsoumbou.pythonanywhere.com/api/checkregister/".concat(code),
                dataType: "json",
                cache: false,
                success: function() {
                       // Success message
                    $('#success').html("<h3 class='other-nw alert-success-code'>Féliciations votre inscription est validée </h3>");		   
                },
                error: function() {
                    // Fail message
                    $('#success').html("<h3 class='other-nw alert-danger-code'>Désolé votre code ne correspond pas</h3>");
                    //clear all fields
                    $('#sendCodeForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
