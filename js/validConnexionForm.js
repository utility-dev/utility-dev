/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

    $("div.w3ls-validConnexionForm  input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var code = $("div.w3ls-validConnexionForm input#sendConexCode").val();
			var request = new XMLHttpRequest();

			request.open('GET', "https://tsoumbou.pythonanywhere.com/api/valid/auth/".concat(code), true)
			request.onload = function() {
			  var data = JSON.parse(this.response);
      		          console.log(data);
			  	

			  if (request.status >= 200 && request.status < 400) {
				sessionStorage.setItem("firstname", data.firstname);
				sessionStorage.setItem("name", data.name);
				sessionStorage.setItem("phone", data.phone);
				sessionStorage.setItem("gender", data.gender);
				sessionStorage.setItem("session_token", data.session_token);
			     $(location).attr('href','https://utility-dev.github.io/index.html');
			     $('#succesConnexion').empty();
				 $('#sendConexCode').hide();
			  } else {
				console.log('error');
			  }
			}

			request.send();
            /*$.ajax({
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
            })*/
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


/*When clicking on deconnexion button */
$('#deconnexion').click(function() {
	alert("test");
    //sessionStorage.clear();
   // $(location).attr('href','https://utility-dev.github.io/index.html');
});
