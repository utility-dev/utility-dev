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
                success: function(data) {
					
		   
                   if(JSON.parse(data).checkToken == "OK"){
                       // Success message
                      $('#success').html("<div class='alert alert-success'>");
                      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                          .append("</button>");
                      $('#success > .alert-success')
                          .append("<strong>Your message has been sent. </strong>");
                      $('#success > .alert-success')
                          .append('</div>');
				   }else{
					       // Fail message
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-danger').append("<strong>Sorry "  + " it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com;>me@example.com</a> ? Sorry for the inconvenience!");
                        $('#success > .alert-danger').append('</div>');
                        //clear all fields
                        $('#contactForm').trigger("reset");
				   }
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry "  + " it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com;>me@example.com</a> ? Sorry for the inconvenience!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
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
