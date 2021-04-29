 
const $ = jQuery;

function eventHandler() {


	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },
		// pagination: {
		// 	el: ' .swiper-pagination',
		// 	type: 'bullets',
		// 	clickable: true,
		// 	// renderBullet: function (index, className) {
		// 	// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// 	// }
		// },
	}

	// document.querySelector
	let sliders = document.querySelectorAll('.sShipingServises__slider--js');
	if (sliders) {
		sliders.forEach((el) =>{

			const swiper4 = new Swiper(el, {
				// slidesPerView: 5,
				...defaultSl,
		slidesPerView: 1,
		pagination: {
			el: el.querySelector(' .swiper-pagination'),
			type: 'bullets',
			clickable: true,
		},
		
	});
})
}
	// modal window

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }