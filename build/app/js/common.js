$(function () {
	$(document).on("touchstart", function () {
		true;
	});

	AOS.init({
		duration: 750,
		easing: "ease",
		once: true,
		offset: 300,
	});

	$(window).on("resize scroll", function () {
		AOS.refresh();
	});

	Fancybox.bind("[data-fancybox]");

	$("[data-mask=tel], .data-mask--tel").inputmask("+7 (999)-999-99-99", {
		showMaskOnHover: false,
		placeholder: "+7 (___)-___-__-__",
	});

	$(window).on("click", function () {
		$(".modal, .header__menu-btn").removeClass("active");
		$(document.body).css({ overflow: "visible" });
	});

	$(".modal__content, .header__menu").on("click", function (e) {
		e.stopPropagation();
	});

	new Swiper(".block-intro__main-slider .swiper", {
		slidesPerView: 1,
		speed: 1000,
		spaceBetween: 20,
		breakpoints: {},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},      
		observer: true,
		observeParents: true,
		pagination: {
			el: ".block-intro__main-slider .slider__pagination",
			clickable: true,
			bulletClass: "slider__bullet",
			bulletActiveClass: "slider__bullet--is-active",
			renderBullet: function (index, className) {
				return `<button type="button" class="${className}"><span></span></button>`;
			},
		},
		on: {
			autoplayTimeLeft(s, time, progress) {
				$(".block-intro__main-slider").find(".slider__bullet--is-active > span").css("width", `${100 - progress * 100}%`);
			}
		},
	});

	new Swiper(".slider .swiper", {
		slidesPerView: 1,
		speed: 1000,
		spaceBetween: 20,
		breakpoints: {},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		observer: true,
		observeParents: true,
		on: {
			autoplayTimeLeft(s, time, progress) {
				$(".slider .slider__bullet--is-active > span").css("width", `${100 - progress * 100}%`);
			}
		},
		pagination: {
			el: ".slider .slider__pagination",
			clickable: true,
			bulletClass: "slider__bullet",
			bulletActiveClass: "slider__bullet--is-active",
			renderBullet: function (index, className) {
				return `<button type="button" class="${className}"><span></span></button>`;
			},
		},
	});

	new Swiper(".actions-slider .swiper", {
		slidesPerView: 1,
		speed: 700,
		spaceBetween: 20,
		breakpoints: {},
		observer: true,
		observeParents: true,
		navigation: {
			prevEl: ".block-actions .slider__btn-prev",
			nextEl: ".block-actions .slider__btn-next",
			disabledClass: "is-disabled",
		},
	});

	new Swiper(".brands-slider .swiper", {
		slidesPerView: 4,
		speed: 500,
		spaceBetween: 20,
		breakpoints: {
			992: {
				slidesPerView: 6
			}
		},
		navigation: {
			prevEl: ".block-brands .slider__btn-prev",
			nextEl: ".block-brands .slider__btn-next",
			disabledClass: "is-disabled",
		},
		observer: true,
		observeParents: true,
	});

	new Swiper(".shorts-slider .swiper", {
		slidesPerView: 3,
		speed: 650,
		spaceBetween: 20,
		breakpoints: {
			992: {
				slidesPerView: 4
			}
		},
		navigation: {
			prevEl: ".block-shorts .slider__btn-prev",
			nextEl: ".block-shorts .slider__btn-next",
			disabledClass: "is-disabled",
		},
		observer: true,
		observeParents: true,
	});
});
