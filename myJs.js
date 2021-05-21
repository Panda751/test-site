function addNightBlock() {
	if(window.matchMedia('(max-width: 760px)').matches){
   let elem = document.querySelector('.footer');
  elem.insertAdjacentHTML("beforebegin", ` 
										  <section class="location__night__for-mob section">
											  <figure class="location__night__mob-figure">
												  <div class="location__img nightOnMap">
													 <img data-src="img/night.JPG" alt="img">
												  </div>
												  <figcaption>
													  <p>Не місцеві гості зможуть заночувати в мотелі в Макарові</p>
													  <h2>Night City</h2>
												  </figcaption>
											  </figure>
										  </section>`);
		  
}
}
addNightBlock();

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


let btnGoOut = document.querySelector('.location__exit');
let popUp = document.querySelector('.location__pop-up');
let goInForrest = document.querySelector('.location__forrest');

goInForrest.addEventListener('click', function (event) {
	popUp.style.display = 'flex';
  });
  
  btnGoOut.addEventListener('click', function (event) {
	popUp.style.display = 'none';
  });



