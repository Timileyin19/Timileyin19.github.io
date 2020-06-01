


/** Mini cart dropdown */    
$(".minicart-icon").on('click', function(){
    $(".cart-dropdown").slideToggle();
});

// Product Category
$(".vm-menu").on('click', function(){
	$(".vm-dropdown").slideToggle();
});
$(".vm-dropdown li").on('click', function() {
	$(this).children( 'ul.mega-menu').toggleClass('open');
})

/** Slider Area */
var mainSlider = $('.main-slider');
mainSlider.slick({
	arrows: false,
	prevArrow:"<button type='button' class='slick-prev'><i class='fa fa-angle-left'></i></button>",
	nextArrow:"<button type='button' class='slick-next'><i class='fa fa-angle-right'></i></button>",
	autoplay: true,
	autoplaySpeed: 5000,
	dots: true,
	pauseOnFocus: false,
	pauseOnHover: false,
	fade: true,
	infinite: true,
	slidesToShow: 1,
	responsive: [
		{
		  breakpoint: 767,
		  settings: {
			  arrows: false
		  }
		},
		{
			breakpoint: 479,
			settings: {
				arrows: false
			}
		}
	]
});
mainSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
	var sliderTitle = $('.main-slider h2');
	var currentTitle = $('.slick-current h2');
	sliderTitle.removeClass('cssanimation leDoorCloseLeft sequence');
	currentTitle.addClass('cssanimation leDoorCloseLeft sequence');
});
mainSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
	var sliderTitle = $('.main-slider h2');
	var currentTitle = $('.slick-current h2');
	sliderTitle.removeClass('cssanimation leDoorCloseLeft sequence');
	currentTitle.addClass('cssanimation leDoorCloseLeft sequence');
});

/** SLIDER JS */
function carousel_slider() {
    $('.carousel_slider').each( function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
            dots : $carousel.data("dots"),
            loop : $carousel.data("loop"),
            items: $carousel.data("items"),
            margin: $carousel.data("margin"),
            mouseDrag: $carousel.data("mouse-drag"),
            touchDrag: $carousel.data("touch-drag"),
            autoHeight: $carousel.data("autoheight"),
            center: $carousel.data("center"),
            nav: $carousel.data("nav"),
            rewind: $carousel.data("rewind"),
            navText: ['<i class="ion-ios-arrow-left"></i>', '<i class="ion-ios-arrow-right"></i>'],
            autoplay : $carousel.data("autoplay"),
            animateIn : $carousel.data("animate-in"),
            animateOut: $carousel.data("animate-out"),
            autoplayTimeout : $carousel.data("autoplay-timeout"),
            smartSpeed: $carousel.data("smart-speed"),
            responsive: $carousel.data("responsive")
        });	
    });
}
function slick_slider() {
    $('.slick_slider').each( function() {
        var $slick_carousel = $(this);
        $slick_carousel.slick({
            arrows: $slick_carousel.data("arrows"),
            dots: $slick_carousel.data("dots"),
            infinite: $slick_carousel.data("infinite"),
            centerMode: $slick_carousel.data("center-mode"),
            vertical: $slick_carousel.data("vertical"),
            fade: $slick_carousel.data("fade"),
            cssEase: $slick_carousel.data("css-ease"),
            autoplay: $slick_carousel.data("autoplay"),
            verticalSwiping: $slick_carousel.data("vertical-swiping"),
            autoplaySpeed: $slick_carousel.data("autoplay-speed"),
            speed: $slick_carousel.data("speed"),
            pauseOnHover: $slick_carousel.data("pause-on-hover"),
            draggable: $slick_carousel.data("draggable"),
            slidesToShow: $slick_carousel.data("slides-to-show"),
            slidesToScroll: $slick_carousel.data("slides-to-scroll"),
            asNavFor: $slick_carousel.data("as-nav-for"),
            focusOnSelect: $slick_carousel.data("focus-on-select"),
            responsive: $slick_carousel.data("responsive")
        });	
    });
}
$(document).on("ready", function() {
    carousel_slider();
    slick_slider();
});


/** POPUP JS */
$('.content-popup').magnificPopup({
    type: 'inline',
    preloader: true,
    mainClass: 'mfp-zoom-in',
});

$('.image_gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled: true,
        },
    });
});

$('.popup-ajax').magnificPopup({
    type: 'ajax',
    callbacks: {
        ajaxContentAdded: function() {
            carousel_slider();
            slick_slider();
         }
    }
});

$('.video_popup, .iframe_popup').magnificPopup({
    type: 'iframe',
    removalDelay: 160,
    mainClass: 'mfp-zoom-in',
    preloader: false,
    fixedContentPos: false
});


/** LIST GRID JS */
$('.shorting_icon').on('click',function() {
    if ($(this).hasClass('grid')) {
        $('.shop_container').removeClass('list').addClass('grid');
        $(this).addClass('active').siblings().removeClass('active');
    }
    else if($(this).hasClass('list')) {
        $('.shop_container').removeClass('grid').addClass('list');
        $(this).addClass('active').siblings().removeClass('active');
    }
    $(".shop_container").append('<div class="loading_pr"><div class="mfp-preloader"></div></div>');
    setTimeout(function(){
      $('.loading_pr').remove();
    }, 800);
});


/** SCROLL UP */
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 150) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

$(".scrollup").on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});