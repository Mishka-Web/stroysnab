$(function () {
	$(document).on("touchstart", function () {
		true;
	});

	AOS.init({
		duration: 750,
		easing: "ease",
		once: true,
		offset: 350,
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
		speed: 600,
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
		on: {
			autoplayTimeLeft(s, time, progress) {
				$(".block-intro__main-slider .slider__progress").css("--progress", `${100 - progress * 100}%`);
			}
		},
		pagination: {
			el: ".block-intro__main-slider .slider__pagination",
			clickable: true,
			bulletClass: "slider__bullet",
			bulletActiveClass: "slider__bullet--is-active",
		},
	});

	new Swiper(".slider .swiper", {
		slidesPerView: 1,
		speed: 800,
		spaceBetween: 20,
		breakpoints: {},
		loop: true,
		observer: true,
		observeParents: true,
		on: {
			autoplayTimeLeft(s, time, progress) {
				$(".slider .slider__progress").css("--progress", `${100 - progress * 100}%`);
			}
		},
		pagination: {
			el: ".slider .slider__pagination",
			clickable: true,
			bulletClass: "slider__bullet",
			bulletActiveClass: "slider__bullet--is-active",
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
		slidesPerView: 6,
		speed: 500,
		spaceBetween: 20,
		breakpoints: {},
		navigation: {
			prevEl: ".block-brands .slider__btn-prev",
			nextEl: ".block-brands .slider__btn-next",
			disabledClass: "is-disabled",
		},
		observer: true,
		observeParents: true,
	});

	new Swiper(".shorts-slider .swiper", {
		slidesPerView: 4,
		speed: 650,
		spaceBetween: 20,
		breakpoints: {},
		navigation: {
			prevEl: ".block-shorts .slider__btn-prev",
			nextEl: ".block-shorts .slider__btn-next",
			disabledClass: "is-disabled",
		},
		observer: true,
		observeParents: true,
	});
});
