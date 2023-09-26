$(function () {
	/* aos 애니메이션 */
	$('html:not(.no-js) [data-aos=fade-left]').parent().css({ overflow: 'hidden' });

	AOS.init({
		duration: 1500,
		once: true,
	});

	// wingBannerWrap
	$(window).scroll(function () {
		const scrollY = $(window).scrollTop();
		const wingScroll = $('.wingBannerWrap');

		if (scrollY == $(document).height() - $(window).height()) {
			wingScroll.addClass('scroll');
		} else {
			wingScroll.removeClass('scroll');
		}
	});

	// topBtn
	$('.top_btn').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 300);
		return false;
	});

	// header

	// if (scrollY > 0) {
	//     $('#header').addClass('on');
	//     $("#header .logo img").attr("src", "images/logo_on.png");

	// } else {
	//     $('#header').removeClass('on');
	//     $("#header .logo img").attr("src", "images/logo.png");

	// }

	// 스크롤 위 아래 감지
	var beforePosition = document.documentElement.scrollTop;

	document.addEventListener('scroll', function () {
		var afterPosition = document.documentElement.scrollTop;

		if (afterPosition > 50) {
			if (beforePosition < afterPosition) {
				$('#header').removeClass('on');
			} else {
				$('#header').addClass('on');
			}
		} else {
			$('#header').removeClass('on');
		}
		beforePosition = afterPosition;
	});

	//sitemap 슬라이드

	var sitemap = $('#header .sitemap');

	$('.site_btn').click(function () {
		sitemap.addClass('on');
		$('body').addClass('body_bg');
		console.log('click');
	});

	$('.close_btn').click(function () {
		sitemap.removeClass('on');
		$('body').removeClass('body_bg');
	});

	$('.sitemap li a').click(function () {
		sitemap.removeClass('on');
		$('body').removeClass('body_bg');
	});
});
