$(document).ready(function() {

    //Scroll to element
    $("#buy").click(function(e) {
      e.preventDefault();
      var href = $(this).attr("href");
      $('html, body').animate({scrollTop:$(href).offset().top - 50}, 1200);
    });
	
	});