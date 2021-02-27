$(document).ready(function () {
	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		scrollHorizontally: false,
		verticalCentered: false,
		navigation: true,
		scrollingSpeed: 400,

		onLeave: function(index, nextIndex, direction) {
			
			if(nextIndex == 2) {
				$('.main__message').css('display', 'grid')
			} 
		}
	})
	
})


let typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	typeSpeed: 20
})


function preload() {
	let preloader = document.querySelector('.preloader')
	preloader.style.display = 'none'
}
setTimeout(preload, 3000)


// function scrollHandler() {
// 	let point = document.querySelectorAll('#fp-nav ul li a')
//     for(point; point < 3; point++) {
// 		if(point.classList == 'active') {
// 			alert(active)
// 		}
// 	}
// }
// scrollHandler()