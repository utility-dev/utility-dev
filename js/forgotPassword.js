/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

    $("div.w3ls-forgotPassword input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var tel = $("div.w3ls-forgotPassword input#sendForgotPassword").val();
            // Check for white space in tel for Success/Fail message
            if (tel.indexOf(' ') >= 0) {
                tel = tel.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "https://tsoumbou.pythonanywhere.com/api/updatePassword/".concat(tel),
                dataType: "json",
                cache: false,
                success: function() {
                       // Success message
		    $( "#validForgotPassword" ).empty();
		    setTimeout(function(){ $('#validForgotPassword').html("<h3 class='other-nw alert-success'>Un mot de passe temporaire vous a été envoyé par sms </h3>"); }, 10000);
                    $('#forgotPassword').hide();
	            $("#loginForm").removeAttr("style");
                },
                error: function() {
                    // Fail message
					$( "#validForgotPassword" ).empty();
                    $('#validForgotPassword').html("<h3 class='other-nw alert-danger'>Désolé votre tel n'existe pas dans nos système</h3>");
                    //clear all fields
                    $('#forgotPassword').trigger("reset");
                    
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
