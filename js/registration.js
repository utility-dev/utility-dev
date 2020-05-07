/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

    $("div.w3ls-registrationForm input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
	    var genre = $("#gender :selected").val();
            var name = $("div.form-horizontal input#nom").val();
            var tel = $("div.w3ls-registrationForm input#mobile").val();
            var pass = $("div.w3ls-registrationForm input#password").val();
            var prenom = $("div.w3ls-registrationForm input#prenom").val();
            $.ajax({
                url: "https://tsoumbou.pythonanywhere.com/api/save/".concat(name,"/",prenom,"/",tel,"/",genre,"/",pass),
                type: "json",
                cache: false,
                success: function() {
                    // Success message
                    $('#Registration').hide();
		   $('#sendCodeForm').show();
                },
                error: function() {
                    $('#succes').html("<h3 class='other-nw alert-danger'>Erreur lors de l'inscription</h3>");
                    //clear all fields
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
