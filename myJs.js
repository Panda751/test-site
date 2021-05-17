$(document).ready(function () {
	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		scrollHorizontally: false,
		verticalCentered: false,
		navigation: true,
		scrollingSpeed: 800,

		onLeave: function(index, nextIndex, direction) {
			
			if(nextIndex == 2) {
				$('.main__message').css('display', 'grid')
				let typed = new Typed('#typed', {
					stringsElement: '#typed-strings',
					showCursor: false,
					typeSpeed: 0,
					fadeOut: true,
				})
				 
			} 
			
		}
		
	})
	
})





function preload() {
	let preloader = document.querySelector('.preloader')
	preloader.style.display = 'none'
}
setTimeout(preload, 3000)


let mapBtn = document.querySelector('.location__exit');
let popUp = document.querySelector('.location__pop-up');

mapBtn.addEventListener('click', function (event) {
	popUp.style.display = 'flex'
  });