$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        scrollHorizontally: false,
        verticalCentered: false,
		navigation: true
	});

    
});

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
	typeSpeed: 50
  });

function preload () {
		let preloader = document.querySelector('.preloader');
		preloader.style.display = 'none'
}

setTimeout(preload, 3000);


      