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


let btnGoOutForrest = document.querySelector('.location__forrest-pop-up .location__exit');
let btnGoOutNight = document.querySelector('.location__night-pop-up .location__exit');
let popUpForrest = document.querySelector('.location__forrest-pop-up');
let popUpNight = document.querySelector('.location__night-pop-up');
let goInForrest = document.querySelector('.location__forrest');
let goInNight = document.querySelector('.location__night');

goInForrest.addEventListener('click', function (event) {
	popUpForrest.style.display = 'flex';
  });

goInNight.addEventListener('click', function (event) {
	popUpNight.style.display = 'flex';
  });
  
  btnGoOutForrest.addEventListener('click', function (event) {
	popUpForrest.style.display = 'none';
  });
  btnGoOutNight.addEventListener('click', function (event) {
	popUpNight.style.display = 'none';
  });





