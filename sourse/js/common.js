 
const $ = jQuery;

function	tabscostume(tab) {
	const tabs = document.querySelectorAll(tab);
	// const indexOf = element => Array.from(element.parentNode.children).indexOf(element);
	tabs.forEach(element => {
		let tabs = element;
		const tabsCaption = tabs.querySelector(".tabs__caption");
		const tabsBtn = tabsCaption.querySelectorAll(".tabs__btn");
		const tabsWrap = tabs.querySelector(".tabs__wrap");
		const tabsContent = tabsWrap.querySelectorAll(".tabs__content");
		const random = Math.trunc(Math.random() * 1000);
		tabsBtn.forEach((el, index) => {
			const data = `tab-content-${random}-${index}`;
			el.dataset.tabBtn = data;
			const content = tabsContent[index];
			content.dataset.tabContent = data;
			if (!content.dataset.tabContent == data) return;

			const active = content.classList.contains('active') ? 'active' : '';
			// console.log(el.innerHTML);
			content.insertAdjacentHTML("beforebegin", `<div class="tabs__btn-accordion  btn btn-primary  mb-1 ${active}" data-tab-btn="${data}">${el.innerHTML}</div>`)
		})


		tabs.addEventListener('click', function (element) {
			const btn = element.target.closest(`[data-tab-btn]:not(.active)`);
			if (!btn) return;
			const data = btn.dataset.tabBtn;
			const tabsAllBtn = this.querySelectorAll(`[data-tab-btn`);
			const content = this.querySelectorAll(`[data-tab-content]`);
			tabsAllBtn.forEach(element => {
				element.dataset.tabBtn == data
					? element.classList.add('active')
					: element.classList.remove('active')
			});
			content.forEach(element => {
				element.dataset.tabContent == data
					? (element.classList.add('active'), element.previousSibling.classList.add('active'))
					: element.classList.remove('active')
			});
		})
	})

	// $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
	// 	$(this)
	// 		.addClass('active').siblings().removeClass('active')
	// 		.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
	// 		.eq($(this).index()).fadeIn().addClass('active');

	// });

}
function eventHandler() {

	tabscostume('.tabs--js')

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 6,
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

	var swiper = new Swiper('.sGal__slider--js', {
		...defaultSl,
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 0,
			stretch: 560,
			depth: 200,
			modifier: 1,
			slideShadows: false,
		},
			navigation: {
			nextEl: '.sGal .swiper-button-next',
			prevEl: '.sGal .swiper-button-prev',
		},
		pagination: {
			el: '.sGal .swiper-pagination',
		},
	});
	var swiper33 = new Swiper('.sProjectMaterials__slider--js', {
		...defaultSl, 
		spaceBetween: 24,
		slidesPerView: 'auto',
			navigation: {
			nextEl: '.sProjectMaterials .swiper-button-next',
			prevEl: '.sProjectMaterials .swiper-button-prev',
		},

	});
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