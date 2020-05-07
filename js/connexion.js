/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

    $("div.w3ls-connexionForm input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var tel = $("div.w3ls-registrationForm input#tel").val();
            var pass = $("div.w3ls-registrationForm input#exampleInputPassword1").val();
            $.ajax({
                url: "https://tsoumbou.pythonanywhere.com/api/auth/".concat(tel,"/",pass),
                dataType: "json",
                cache: false,
                success: function(data) {
                    // Success message
					var obj = JSON.parse(data);
					sessionStorage.setItem("firstname", obj.firstname);
					sessionStorage.setItem("name", obj.name);
					sessionStorage.setItem("phone", obj.phone);
					sessionStorage.setItem("gender", obj.gender);
					$(location).attr('href','https://utility-dev.github.io/index.html');
					$('#succesConnexion').empty();
                },
                error: function() {
                    $('#succesConnexion').html("<h3 class='other-nw alert-danger'>Numéro ou mot de passe incorrect</h3>");
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
