$(document).ready(function() {
	var $discography = $('#js-discography'),
  		$history     = $('#js-history'),
  		$latter      = $('#js-latter'),
  		$upcoming    = $('#js-upcoming'),
  		$slider      = $('#js-slider'),
      $contact     = $('#js-contact'),
  		$aLink       = $('#js-header li a'),
      $jsNav       = $('#js-nav');

    //scrolling functions
		$(window).scroll(function() {
			if ($(window).scrollTop() < $(window).height()) {
				$jsNav.removeClass('navigation');
			} else {
				$jsNav.addClass('navigation');
			}
		});
		//smooth scroll script
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
  $aLink.click(function(){
          $('.navbar-toggle:visible').click();
  });
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
			// temporary firefox change
			$aLink.removeClass('nav-item-active-js');
		} else {
			var scrolling = function() {
				$(window).on("scroll", function(){
          var scrollPos = $(window).scrollTop();
					$aLink.each(function() {
						var currLink = $(this);
						var refElement = $(currLink.attr("href"));
						if (refElement.position().top <= scrollPos + 290 && refElement.position().top + refElement.height() > scrollPos) {
							$aLink.removeClass("nav-item-active-js");
							currLink.addClass("nav-item-active-js");
						} else {
							currLink.removeClass("nav-item-active-js");
						}
					});
        });
			};
			scrolling();
		}

//animation function
	function animate() {
    var	$discrographyAnimation = [],
    		$concertAnimation = [],
    		$latterAnimation = [],
    		$newAnimation = [],
    		$upcomingAnimation = [],
    		$linesAnimation = [],
        $contactAnimation = [],
        eachElOf = function(items, animationArray){
          $(items).each(function(){
            var thisEl = $(this);
            animationArray.push(thisEl);
          });
        };
    eachElOf('.discography__row', $discrographyAnimation);
    eachElOf('.concert__list', $concertAnimation);
    eachElOf('.latter__item', $latterAnimation);
    eachElOf('.new-img', $newAnimation);
    eachElOf('.event', $upcomingAnimation);
    eachElOf('.lines', $linesAnimation);
    eachElOf('.contact__main', $contactAnimation);

    // fadeInDelay function
		function fadeInDelay(array, effect) {
		var i = 0,
			arrayLength = array.length;
			function delayLoop() {
				array[i].addClass(effect);
				i++;
				if (i < arrayLength) {
					setTimeout(delayLoop, 300);
				}
			}
			delayLoop();
	}
  $discrographyAnimation[0].waypoint(function() {
  	fadeInDelay($discrographyAnimation, 'fadeInUp');
  }, {
  	offset: '60%'
  });
  $concertAnimation[0].waypoint(function() {
  	fadeInDelay($concertAnimation, 'fadeInLeft');
  }, {
  	offset: '60%'
  });
  $latterAnimation[0].waypoint(function() {
  	fadeInDelay($latterAnimation, 'fadeInUp');
  }, {
  	offset: '50%'
  });
  $newAnimation[0].waypoint(function() {
  	fadeInDelay($newAnimation, 'fadeInLeft');
  }, {
  	offset: '50%'
  });
  $contactAnimation[0].waypoint(function() {
  	fadeInDelay($contactAnimation, 'fadeInLeft');
  }, {
  	offset: '60%'
  });
		// //upcoming animation
		$upcomingAnimation[0].waypoint(function() {
			$upcomingAnimation[0].addClass('fadeInLeft');
			setTimeout(function() {
				$linesAnimation[0].animate({
					height: '50px'
				}, 500);
			}, 500);
			setTimeout(function() {
				$upcomingAnimation[1].addClass('fadeInLeft');
			}, 800);
			$linesAnimation[1].delay(1000)
				.animate({
					height: '165px'
				}, 1000);
			setTimeout(function() {
				$upcomingAnimation[2].addClass('fadeInLeft');
			}, 1800);
			$linesAnimation[2].delay(2300)
				.animate({
					height: '50px'
				}, 500);
			setTimeout(function() {
				$upcomingAnimation[3].addClass('fadeInLeft');
			}, 2800);
		}, {
			offset: '50%'
		});
	}
//slider settings function
  function sliderSet() {
		//slider
		$slider.find('.slider__text').slick({
			arrows: true,
      autoplay:true,
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
      autoplay: true,
			slidesToScroll: 1,
			asNavFor: '.history__slider__text',
			infinite: true,
			centerMode: true,
			focusOnSelect: true,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 5,
				}
			}, {
				breakpoint: 550,
				settings: {
					slidesToShow: 3,
				}
			}, {
				breakpoint: 310,
				settings: {
					slidesToShow: 1,
					mobileFirst: true
				}
			}]
		});

		$history.find('.history__slider__text').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
		});
	}

  	var $jazzy = $latter.find('.jazzy-play'),
      	$happiness = $latter.find('.happiness-play'),
      	$sweet = $latter.find('.sweet-play'),
      	$jazzyPlay = $jazzy.find('.play-pause'),
      	$happinessPlay = $happiness.find('.play-pause'),
      	$sweetPlay = $sweet.find('.play-pause'),
      	music = [];

    (function (){
      $('.audio').each(function(){
        var thisEl = $(this).attr('src');
        music.push(new Audio(thisEl));
      });
    })();

  function player(song, section) {
  var	$seek = section.find('.seek'),
    	$play = section.find('.play-pause'),
    	$time = section.find('.current-time'),
    	$totalTime = section.find('.total-time');

    //click play button
    $play.on('click', function(e) {
      e.preventDefault();
      //set max length of song
      $seek.attr('max', song.duration);
      //play event
  		if (song.paused) {
  			for (var i = 0; i < music.length; i++) {
          //stop all music except this one
  				if (music[i] != song) {
  					music[i].pause();
  					music[i].currentTime = 0;
  				}
  				$('.play-pause').removeClass('fa-pause').addClass('fa-play');
  			}
        //click play event
  			song.play();
  			$play.removeClass('fa-play').addClass('fa-pause');
  		} else {
        //pause event
  			song.pause();
  			$play.removeClass('fa-pause').addClass('fa-play');
  		}
  	});
    //update song time on knob slide
  	$seek.on('change', function() {
  		song.currentTime = $(this).val();
      $seek.attr('max', song.duration);
  	});
    //uptade song current time
  	song.addEventListener('timeupdate', function() {
  		curtime = parseInt(song.currentTime, 10);
  		$seek.val(curtime);
  		$time.html(formatTime(song.currentTime));
  		$totalTime.after('<span class="total-time"> / ' + formatTime(song.duration) + '</span>').remove();
  	});
    //trigger when song ended
  	song.addEventListener('ended', function() {
  		$play.removeClass('fa-pause').addClass('fa-play');
  		song.currentTime = 0;
  	});

  	function formatTime(seconds) {
  		minutes = Math.floor(seconds / 60);
  		minutes = (minutes >= 10) ? minutes : "" + minutes;
  		seconds = Math.floor(seconds % 60);
  		seconds = (seconds >= 10) ? seconds : "0" + seconds;
  		return minutes + ":" + seconds;
  	}
  }

  animate();
  sliderSet();
  $jazzyPlay.on('click', player(music[0], $jazzy));
  $happinessPlay.on('click', player(music[1], $happiness));
  $sweetPlay.on('click', player(music[2], $sweet));
  });
