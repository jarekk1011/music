$(document).ready(function() {
	var $discography = $('#js-discography'),
  		$history     = $('#js-history'),
  		$latter      = $('#js-latter'),
  		$new         = $('#js-new'),
  		$upcoming    = $('#js-upcoming'),
  		$slider      = $('#js-slider'),
      $contact     = $('#js-contact'),
  		$aLink       = $('#js-header ul li a'),
      $jsNav       = $('#js-nav');
//scrolling functions
	function scrolls() {
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
			//temporary firefox change
			$($aLink).removeClass('nav-item-active-js');
		} else {
			var scrolling = function() {
				$(document).on("scroll", onScroll);

				function onScroll(event) {
					var scrollPos = $(document).scrollTop();
					$($aLink).each(function() {
						var currLink = $(this);
						var refElement = $(currLink.attr("href"));
						if (refElement.position().top <= scrollPos + 290 && refElement.position().top + refElement.height() > scrollPos) {
							$($aLink).removeClass("nav-item-active-js");
							currLink.addClass("nav-item-active-js");
						} else {
							currLink.removeClass("nav-item-active-js");
						}
					});
				}
			};
			scrolling();
		}
	}
//animation function
	function animate() {

		var animation = [];
		$discrographyAnimation = [
			$discography.find('div.discography__row1--fadeInUp'),
			$discography.find('div.discography__row2--fadeInUp'),
			$discography.find('div.discography__row3--fadeInUp'),
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
			// $new.find('.new-img'),
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
    $contactAnimation = [
      $contact.find('div.contact__main')
    ];
		$animated = animation.concat($discrographyAnimation)
			.concat($concertAnimation)
			.concat($latterAnimation)
			.concat($newAnimation)
			.concat($upcomingAnimation)
      .concat($contactAnimation);

    //
    for (var i = 0; i < $animated.length; i++) {
			$animated[i].css('opacity', 0);
		}
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
  	offset: '50%'
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
  var
  // var jazzy = document.getElementById('jazzy'),
      // happiness = document.getElementById('happiness'),
      // sweet = document.getElementById('sweet'),
      $jazzy = $latter.find('.jazzy-play'),
      $happiness=$latter.find('.happiness-play'),
      $sweet= $latter.find('.sweet-play'),

      $jazzyPlay = $jazzy.find('.play-pause'),
      $happinessPlay = $happiness.find('.play-pause'),
      $sweetPlay = $sweet.find('.play-pause'),
      // $seek = $latter.find('.seek');
      music = [
            new Audio('../music/bensound-jazzyfrenchy.mp3'),
            new Audio('../music/bensound-happiness.mp3'),
            new Audio('../music/bensound-sweet.mp3'),
          ];

    function player(song, dupa) {
    var  e = music.length;
    var $seek = dupa.find('.seek');
    var $play = dupa.find('.play-pause');
    var $time = dupa.find('.current-time');
  	$play.on('click', function() {
      for(var t = 0 ;t < e ; t++){
        console.log(t);
        music[t].pause();
        $('.play-pause').removeClass('fa-pause').addClass('fa-play');
      }

  		if (song.paused) {
            song.play();
            console.log('Song played');
            $play.removeClass('fa-play').addClass('fa-pause');
            $seek.attr('max', song.duration);
  		} else {
    			song.pause();
          console.log('Song paused');
    			$play.removeClass('fa-pause').addClass('fa-play');
  		}


  	});
  	$seek.bind("change", function() {
  		song.currentTime = $(this).val();
  		$seek.attr("max", song.duration);
  	});

  	song.addEventListener('timeupdate', function() {
  		curtime = parseInt(song.currentTime, 10);
  		$seek.val(curtime);
  		$time.html(formatTime(song.currentTime));
  		$latter.find('.total-time').after('<span class="total-time"> / ' + formatTime(song.duration) + '</span>').remove();
  	});
  	song.addEventListener('ended', function() {
  		$play.removeClass('fa-pause').addClass('fa-play');
      console.log('Song ended and paused');
  	});

  	function formatTime(seconds) {
  		minutes = Math.floor(seconds / 60);
  		minutes = (minutes >= 10) ? minutes : "" + minutes;
  		seconds = Math.floor(seconds % 60);
  		seconds = (seconds >= 10) ? seconds : "0" + seconds;
  		return minutes + ":" + seconds;
  	}

  }
  // $jazzyPlay.on('click', player(jazzy, $jazzyPlay));
  // $happinessPlay.on('click',player(happiness, $happinessPlay));
  // $sweetPlay.on('click', player(sweet, $sweetPlay));

//array
  $jazzyPlay.on('click', player(music[0], $jazzy));
  $happinessPlay.on('click',player(music[1], $happiness));
  $sweetPlay.on('click', player(music[2], $sweet));


	scrolls();
	animate();
	sliderSet();
});
