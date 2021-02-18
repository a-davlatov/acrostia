$(document).ready(function() {

	// Fixed header

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	
	checkScroll(scrollPos, introH);
	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	// Smooth scroll

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset + 2
		}, 700);
	});

	// Images filter

	$('.btn[filter="pht"]').click(function(){
		if($(this).attr('val')=='off') {
			$('.btn[filter]').attr('val', 'off');
			$(this).attr('val', 'on');
			$('.filter > div').hide(300);
			$('.filter > div[filter="pht"]').show(300);
		}
	});
	$('.btn[filter="logo"]').click(function(){
		if($(this).attr('val')=='off') {
			$('.btn[filter]').attr('val', 'off');
			$(this).attr('val', 'on');
			$('.filter > div').hide(300);
			$('.filter > div[filter="logo"]').show(300);
		}
	});
	$('.btn[filter="wd"]').click(function(){
		if($(this).attr('val')=='off') {
			$('.btn[filter]').attr('val', 'off');
			$(this).attr('val', 'on');
			$('.filter > div').hide(300);
			$('.filter > div[filter="wd"]').show(300);
		}
	});
	$('.btn[filter="all"]').click(function(){
		if($(this).attr('val')=='off') {
			$('.btn[filter]').attr('val', 'off');
			$(this).attr('val', 'on');
			$('.filter > div').show(300);
		}
	});

	let burger = $('#burger');
	burger.click(function(evt) {
		evt.preventDefault();

		nav.toggleClass('show');
	});

	// Slider: https://kenwheeler.github.io/slick

	const slider = $('#slider');
	slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: true,
        dots: true
    });
});