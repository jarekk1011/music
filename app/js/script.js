$(document).ready(function(){
  
  $(window).scroll(function(){
    if($(window).scrollTop() < $(window).height()){
      $('#js-nav').removeClass('navigation');
    }else{
      $('#js-nav').addClass('navigation');
    }
  });
//smooth scroll
  var $page = $('html, body');
  $('nav a').click(function() {
      var href = $.attr(this, 'href');
      $page.animate({
          scrollTop: $(href).offset().top
      }, 2000, function () {
          window.location.hash = href;
      });
      return false;
  });

  $(".nav a").on("click", function(){
    $(".nav a").removeClass("nav-item-active-js");
    $(this).addClass("nav-item-active-js");
  });


//slider
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
