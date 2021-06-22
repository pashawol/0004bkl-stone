const $ = jQuery;
let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// мы должны вставить элемент в документ, иначе размеры будут равны 0
document.body.append(div);

let scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

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
function modalCall(){
	const link = ".link-modal-js";
	$(link).fancybox({
		arrows: false,
		infobar: false,
		touch: false,
		type: 'inline',
		autoFocus: false,
		i18n: {
			en: {
				CLOSE: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад",
				// PLAY_START: "Start slideshow",
				// PLAY_STOP: "Pause slideshow",
				// FULL_SCREEN: "Full screen",
				// THUMBS: "Thumbnails",
				// DOWNLOAD: "Download",
				// SHARE: "Share",
				// ZOOM: "Zoom"
			},
		},
		beforeLoad: function () {
			if (!document.querySelector("html").classList.contains(".fixed")) document.querySelector("html").style.marginRight = scrollWidth + 'px';
		},
		afterClose: function () {
			if (!document.querySelector("html").classList.contains(".fixed")) document.querySelector("html").style.marginRight = null;
			// 	document.querySelector("html").classList.remove("fixed")
		},
	});
	$(".modal-close-js").click(function () {
		$.fancybox.close();
	})
	$.fancybox.defaults.backFocus = false;
	const linkModal = document.querySelectorAll(link);
	function addData() {
		linkModal.forEach(element => {
			element.addEventListener('click', () => {
				let modal = document.querySelector(element.getAttribute("href"));
				const data = element.dataset;

				function setValue(val, elem) {
					if (elem && val) {
						const el = modal.querySelector(elem)
						el.tagName == "INPUT"
							? el.value = val
							: el.innerHTML = val;
						// console.log(modal.querySelector(elem).tagName)
					}
				}
				setValue(data.title, '.ttu');
				setValue(data.text, '.after-headline');
				setValue(data.btn, '.btn');
				setValue(data.order, '.order');
			})
		})
	}
	if (linkModal) addData();
}
function eventHandler() {
	tabscostume('.tabs--js');
	modalCall();

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
	//luckyone Js
	$('.inp-file-js').change(function (){
		let nameBox = document.querySelector('.inp-file-name-js');
		nameBox.innerHTML = this.files[0].name;
	});
	//stars
	//.star-label-js
	//stars js
	$('.star-js').click(function () {
		let thisIndex = $('.star-js').index(this);
		let allThis = this.parentElement.children;

		for (let i = 0; i <= thisIndex; i++) {
			allThis[i].classList.add('active');
		}
		for (let i = thisIndex + 1; i <= allThis.length - 1; i++) {
			allThis[i].classList.remove('active');
		}
	})
	//
	$('img.img-svg-js').each(function () {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg'); // Add replaced image's classes to the new SVG

			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			} // Remove any invalid XML tags as per http://validator.w3.org


			$svg = $svg.removeAttr('xmlns:a'); // Check if the viewport is set, if the viewport is not set the SVG wont't scale.

			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
			} // Replace image with new SVG


			$img.replaceWith($svg);
		}, 'xml');
	});

	//end luckyone Js

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}