$(function () {
	$(document).on("touchstart", function () {
		true;
	});

	$(document.body).data(
		"scrollbar-width",
		parseInt(document.documentElement.clientWidth) -
			parseInt(window.innerWidth)
	);

	AOS.init({
		duration: 750,
		easing: "ease",
		once: true,
		offset: 250,
	});

	Fancybox.bind("[data-fancybox]");

	$(window).on("load resize scroll", function () {
		$(".mob-menu").toggleClass(
			"is-visible",
			$(this).scrollTop() > $(".header-inner").height() + 24
		);
	});

	$("[data-action='close-popup']").on("click", function () {
		$($(this).closest(".popup")[0]).removeClass("active");

		$(".popup__container").css({
			"margin-left": 0,
		});

		$(document.body).css({
			"overflow-y": "visible",
			"margin-left": 0,
		});
	});

	$("[data-action='open-popup']").on("click", function () {
		$(".popup[data-popup-id='" + $(this).data("popup-id") + "']").addClass(
			"active"
		);

		$(".popup__container").css({
			"margin-left": $(document.body).data("scrollbar-width"),
		});

		$(document.body).css({
			"overflow-y": "hidden",
			"margin-left": $(document.body).data("scrollbar-width"),
		});
	});

	if ($(".mixi-container").get(0)) {
		mixitup(".mixi-container", {
			animation: {
				effects: "fade translateZ(-150px)",
				applyPerspective: true,
			},
		});
	}

	$(".tabs__content[data-tab-id=3]").addClass("active");

	$(".tabs__list").on("click", ".tabs__item", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});

	$(".mob-menu__list").on("click", "a", function () {
		window.navigator.vibrate(35);
	});

	$("[data-mask=tel], .data-mask--is-tel").inputmask("+7 (999)-999-99-99", {
		showMaskOnHover: false,
		placeholder: "+7 (___)-___-__-__",
	});

	$(window).on("click", function () {
		$(".modal, .header__menu-btn, .popup").removeClass("active");

		$(".popup__container").css({
			"margin-left": 0,
		});

		$(document.body).css({
			"overflow-y": "visible",
			"margin-left": 0,
		});
	});

	$(
		".modal__content, .header__menu, .popup__content, [data-action='open-popup']"
	).on("click", function (e) {
		e.stopPropagation();
	});

	new Swiper(".block-intro__main-slider .swiper", {
		slidesPerView: 1,
		speed: 1000,
		spaceBetween: 20,
		breakpoints: {},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
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
				$(".block-intro__main-slider")
					.find(".slider__bullet--is-active > span")
					.css("width", `${100 - progress * 100}%`);
			},
		},
	});

	new Swiper(".slider .swiper", {
		slidesPerView: 1,
		speed: 1000,
		spaceBetween: 10,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		observer: true,
		observeParents: true,
		on: {
			autoplayTimeLeft(s, time, progress) {
				$(".slider .slider__bullet--is-active > span").css(
					"width",
					`${100 - progress * 100}%`
				);
			},
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
		breakpoints: {
			380: {
				slidesPerView: 1.2,
			},
			480: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 1,
			},
		},
	});

	new Swiper(".actions-slider .swiper", {
		slidesPerView: 1.1,
		speed: 700,
		spaceBetween: 10,
		breakpoints: {
			576: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
		observer: true,
		observeParents: true,
		navigation: {
			prevEl: ".block-actions .slider__btn-prev",
			nextEl: ".block-actions .slider__btn-next",
			disabledClass: "is-disabled",
		},
	});

	new Swiper(".catalog-slider .swiper", {
		slidesPerView: 1.1,
		speed: 500,
		spaceBetween: 10,
		observer: true,
		observeParents: true,
		navigation: {
			prevEl: ".block-catalog .slider__btn-prev",
			nextEl: ".block-catalog .slider__btn-next",
			disabledClass: "is-disabled",
		},
		breakpoints: {
			480: {
				slidesPerView: 1.2,
			},
			576: {
				slidesPerView: 1.4,
			},
		},
	});

	new Swiper(".brands-slider .swiper", {
		slidesPerView: 2.15,
		speed: 500,
		spaceBetween: 10,
		observer: true,
		observeParents: true,
		navigation: {
			prevEl: ".block-brands .slider__btn-prev",
			nextEl: ".block-brands .slider__btn-next",
			disabledClass: "is-disabled",
		},
		breakpoints: {
			480: {
				slidesPerView: 3,
			},
			576: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
			640: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 6,
			},
		},
	});

	new Swiper(".shorts-slider .swiper", {
		slidesPerView: 1,
		speed: 650,
		spaceBetween: 10,
		observer: true,
		observeParents: true,
		navigation: {
			prevEl: ".block-shorts .slider__btn-prev",
			nextEl: ".block-shorts .slider__btn-next",
			disabledClass: "is-disabled",
		},
		breakpoints: {
			380: {
				slidesPerView: 1.15,
			},
			420: {
				slidesPerView: 1.2,
			},
			460: {
				slidesPerView: 2,
			},
			576: {
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
		},
	});
});
