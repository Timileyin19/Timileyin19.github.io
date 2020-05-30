


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