$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        scrollHorizontally: false,
        verticalCentered: false,
		navigation: true,
		parallax: true,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'}
	});

    
});

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
	typeSpeed: 50
  });

  

      