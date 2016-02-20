$(document).ready(function(){
  var $discography = $('#js-discography'),
      $history     = $('#js-history'),
      $latter      = $('#js-latter'),
      $new         = $('#js-new'),
      $upcoming    = $('#js-upcoming'),
      $slider      = $('#js-slider');

  $(window).scroll(function(){
    if($(window).scrollTop() < $(window).height()){
      $('#js-nav').removeClass('navigation');
    }else{
      $('#js-nav').addClass('navigation');
    }
  });
//smooth scroll script
  $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
//nav active
  $(".nav a").on("click", function(){
    $(".nav a").removeClass("nav-item-active-js");
    $(this).addClass("nav-item-active-js");
  });
//waypoints animations
  var animation = [];
      $discrographyAnimation = [
        $discography.find('.discography__row1--fadeInUp'),
        $discography.find('.discography__row2--fadeInUp'),
        $discography.find('.discography__row3--fadeInUp'),
      ];
      $concertAnimation = [
        $('#concert__list--fadeInLeft'),
      ];
      $latterAnimation = [
        $latter.find('.latter__1'),
        $latter.find('.latter__2'),
        $latter.find('.latter__3'),
      ];
      $newAnimation = [
        $new.find('.new-img'),
        $new.find('.new_01'),
        $new.find('.new_02'),
        $new.find('.new_03'),
        $new.find('.new_04'),
        $new.find('.new_05'),
        $new.find('.new_06'),
      ];
      $upcomingAnimation = [
        $upcoming.find('.upcoming__event-1'),
        $upcoming.find('.song-date1'),
        $upcoming.find('.upcoming__event-2'),
        $upcoming.find('.song-date2'),
      ];
      $linesAnimation = [
        $upcoming.find('.vertical-line-short1'),
        $upcoming.find('.vertical-line-long'),
        $upcoming.find('.vertical-line-short2'),
      ];
      $animated = animation.concat($discrographyAnimation)
                            .concat($concertAnimation)
                            .concat($latterAnimation)
                            .concat($newAnimation)
                            .concat($upcomingAnimation);

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   console.log('Mobile device detected');
  }
  else{
    console.log('Computer detected');
    for (var i = 0; i < $animated.length; i++) {
     $animated[i].css('opacity', 0);
    }
    //discography
    $discrographyAnimation[0].waypoint(function() {
      $discrographyAnimation[0].addClass('fadeInUp');
      setTimeout(function(){
        $discrographyAnimation[1].addClass('fadeInUp');
      }, 300);
      setTimeout(function(){
        $discrographyAnimation[2].addClass('fadeInUp');
      }, 600);
    }, { offset: '50%' });
    //concert
    $concertAnimation[0].waypoint(function() {
       $concertAnimation[0].addClass('fadeInLeft');
    }, { offset: '50%' });
    //latter
    $latterAnimation[0].waypoint(function() {
      $latterAnimation[0].addClass('fadeInUp');
      setTimeout(function(){
        $latterAnimation[1].addClass('fadeInUp');
      }, 300);
      setTimeout(function(){
        $latterAnimation[2].addClass('fadeInUp');
      }, 600);
    }, { offset: '50%' });
     //new
    $newAnimation[0].waypoint(function() {
        $newAnimation[1].addClass('fadeInLeft');
      setTimeout(function(){
        $newAnimation[2].addClass('fadeInLeft');
      }, 300);
      setTimeout(function(){
        $newAnimation[3].addClass('fadeInLeft');
      }, 600);
      setTimeout(function(){
        $newAnimation[4].addClass('fadeInLeft');
      }, 900);
      setTimeout(function(){
        $newAnimation[5].addClass('fadeInLeft');
      }, 1200);
      setTimeout(function(){
        $newAnimation[6].addClass('fadeInLeft');
      }, 1500);
    }, { offset: '50%' });
    //upcoming animation
    $upcomingAnimation[0].waypoint(function(){
      $upcomingAnimation[0].addClass('fadeInLeft');
      $linesAnimation[0].animate({height: '50px'}, 500);
      setTimeout(function(){
        $upcomingAnimation[1].addClass('fadeInLeft');
      }, 500);
      $linesAnimation[1].delay(800)
                        .animate({height: '165px'}, 1000);
      setTimeout(function(){
        $upcomingAnimation[2].addClass('fadeInLeft');
      }, 1800);
      $linesAnimation[2].delay(2300)
                        .animate({height: '50px'}, 500);
      setTimeout(function(){
        $upcomingAnimation[3].addClass('fadeInLeft');
      }, 2800);
    }, { offset: '50%' });

  }
//slider
	$slider.find('.slider__text').slick({
		arrows: true,
		prevArrow: $slider.find('.left'),
		nextArrow: $slider.find('.right'),
		dots: true,
		swipe: true
	});

//History slider
	$history.find('.history__slider').slick({
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

	$history.find('.history__slider__text').slick({
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 arrows: false,
	 fade: true,
	});
});
