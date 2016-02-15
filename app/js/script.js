$(document).ready(function(){
	$(".slider__text").slick({
		arrows: true,
		prevArrow: $(".left"),
		nextArrow: $(".right"),
		dots: true,
		swipe: true
	});

//History slider
	$('.history__slider').slick({
	  slidesToShow: 5,
		mobileFirst: true,
		arrows: false,
	  slidesToScroll: 1,
	  asNavFor: '.history__slider__text',
		infinite: true,
	  centerMode: true,
	  focusOnSelect: true,
		responsive: [
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 5,
						}
					},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 300,
				settings: {
					slidesToShow: 1,
					mobileFirst: true
				}
			}
		]
	});
	
	$('.history__slider__text').slick({
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 arrows: false,
	 fade: true,
	});
});
