"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;

function tabscostume(tab) {
	var tabs = document.querySelectorAll(tab); // const indexOf = element => Array.from(element.parentNode.children).indexOf(element);

	tabs.forEach(function (element) {
		var tabs = element;
		var tabsCaption = tabs.querySelector(".tabs__caption");
		var tabsBtn = tabsCaption.querySelectorAll(".tabs__btn");
		var tabsWrap = tabs.querySelector(".tabs__wrap");
		var tabsContent = tabsWrap.querySelectorAll(".tabs__content");
		var random = Math.trunc(Math.random() * 1000);
		tabsBtn.forEach(function (el, index) {
			var data = "tab-content-".concat(random, "-").concat(index);
			el.dataset.tabBtn = data;
			var content = tabsContent[index];
			content.dataset.tabContent = data;
			if (!content.dataset.tabContent == data) return;
			var active = content.classList.contains('active') ? 'active' : ''; // console.log(el.innerHTML);

			content.insertAdjacentHTML("beforebegin", "<div class=\"tabs__btn-accordion  btn btn-primary  mb-1 ".concat(active, "\" data-tab-btn=\"").concat(data, "\">").concat(el.innerHTML, "</div>"));
		});
		tabs.addEventListener('click', function (element) {
			var btn = element.target.closest("[data-tab-btn]:not(.active)");
			if (!btn) return;
			var data = btn.dataset.tabBtn;
			var tabsAllBtn = this.querySelectorAll("[data-tab-btn");
			var content = this.querySelectorAll("[data-tab-content]");
			tabsAllBtn.forEach(function (element) {
				element.dataset.tabBtn == data ? element.classList.add('active') : element.classList.remove('active');
			});
			content.forEach(function (element) {
				element.dataset.tabContent == data ? (element.classList.add('active'), element.previousSibling.classList.add('active')) : element.classList.remove('active');
			});
		});
	}); // $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
	// 	$(this)
	// 		.addClass('active').siblings().removeClass('active')
	// 		.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
	// 		.eq($(this).index()).fadeIn().addClass('active');
	// });
}

function eventHandler() {
	var _defaultSl;

	tabscostume('.tabs--js');
	var defaultSl = (_defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 6
		},
		watchOverflow: true
	}, _defineProperty(_defaultSl, "spaceBetween", 0), _defineProperty(_defaultSl, "loop", true), _defaultSl); // document.querySelector

	var sliders = document.querySelectorAll('.sShipingServises__slider--js');

	if (sliders) {
		sliders.forEach(function (el) {
			var swiper4 = new Swiper(el, _objectSpread(_objectSpread({}, defaultSl), {}, {
				slidesPerView: 1,
				pagination: {
					el: el.querySelector(' .swiper-pagination'),
					type: 'bullets',
					clickable: true
				}
			}));
		});
	}

	var swiper = new Swiper('.sGal__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 0,
			stretch: 560,
			depth: 200,
			modifier: 1,
			slideShadows: false
		},
		navigation: {
			nextEl: '.sGal .swiper-button-next',
			prevEl: '.sGal .swiper-button-prev'
		},
		pagination: {
			el: '.sGal .swiper-pagination'
		}
	}));
	var swiper33 = new Swiper('.sProjectMaterials__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		spaceBetween: 24,
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.sProjectMaterials .swiper-button-next',
			prevEl: '.sProjectMaterials .swiper-button-prev'
		}
	})); // modal window
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
} // window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }