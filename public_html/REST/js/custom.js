//info.html 창띄우기
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

    


//유효성 검사
function vali(){
        $(function () {
        $.each($.validator.methods, function (key, value) {
            $.validator.methods[key] = function () {
                var el = $(arguments[1]);
                if (el.is('[placeholder]') && arguments[0] == el.attr('placeholder'))
                    arguments[0] = '';
                return value.apply(this, arguments);
            };
        });
    });

	$('form').each(function () {
		$(this).validate({
			rules    : {
				user_name : {
					required: true,
					letter   : true
				},
				'나이': {
					digits: true,
					required: true,
					exactlength: 2
				},
				'전화번호': {
					required: true,
					phoneUS : true
				},
				'주소': {
					required: true
				},
				'개인정보보호정책동의': {
					required: true
				}
			},
		 highlight: function(element) {
		   $(element).closest('.control-group').removeClass('success').addClass('error');
		   $(element).closest('.control-group').children().removeClass('success').addClass('error');
		 },
		  success: function(element) {
			//element
			//.text('OK!').addClass('valid')
			$(element).closest('.control-group').removeClass('error').addClass('success');
			$(element).closest('.control-group').children().removeClass('error').addClass('success');
		  }
		 });
	   });

}

//새로고침시 페이지 최상단 위치      
window.onload = function() {
    setTimeout (function () {
        scrollTo(0,0);
    }, 100);
}
    
$(document).ready(function() {
    //유효성검사
    vali();
    
    //슬라이드 메뉴
//    $('.slider').bxSlider();
//    
    
    
    

    
            $('.bb ul li').mouseover(function(){
                $(this).children('.box').fadeIn(200);
                $(this).children('img').css({ 'transform': 'scale(1.4)' });
            }).mouseleave(function(){
              $(this).children('.box').fadeOut(200);
                $(this).children('img').css({ 'transform': 'scale(1)' });
            });
     
      
    
    
    
    
    
        // lightb-box 확대
    
    // 마우스 오버하면, 선택한 자식의 박스가 나타나고,자식의 a가 스케일이커진다
//    $('.tab-contents ul li').mouseover(function(){
//        $(this).children('.box').css('opacity','1');
//        $(this).children('a.zoom').css('transform','scale(1.15)');
//    }).mouseout(function(){
//        $(this).children('.box').css('opacity','0');
//        $(this).children('a.zoom').css('transform','scale(1)');
//    });
     // 마우스 아웃하면, 선택한 자식의 박스가 사라지고, 자식 a가 스케일이 원상태로 돌아온다.
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  //탭메뉴
    //con01-tab
    $(".con02-tab-con").hide();
    
    $(".con02-tab-con:first").show();
    

    $('.con02-tab-menu p').click(function() {
        $('.con02-tab-menu p.active').removeClass("active");
        $(this).addClass('active');  
    });        
    
    $('.con02-tab-menu').click(function() {
        $(".con02-tab-con").hide();
        var activeTab = $(this).attr("rel");  
        //active에서 탭한 선택한 부분을 연결.
        //alert(activeTab);
        $('#'+activeTab).fadeIn();
        //선택한 값을 보여지게한다.
    });        
            
  //Preloader
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
    });      
    
    $(window).on('resize', function () {
        w = $(this).width();
        if (w >= 940 && $('nav').is(':hidden')) {
            $('nav').removeAttr('style');
        }
    }); 
       
    $('.toggle').click(function() {
        $('nav').fadeToggle();
    }); 
    
    
    
    
    //slick slider
    $('.slider-main').slick({
  slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnFocus:false,
      pauseOnHover:false
    });  

     $('.slider-for01').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav01'
    });
    $('.slider-nav01').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for01',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });

    $('.slider-for02').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav02'
    });
    $('.slider-nav02').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for02',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });
            
    
  
    
    
    
    
    
    
    
    
    //main글자 텍스트 날아오기

//    $('.mainBg').addClass('on');

    
    

    
    //html,body,document 동작안됨
    //html,body 동작안됨
    //    document.body.parentNode.scrollTop 안됨
    //document.documentElement.scrollTop
    //
 
    //Scroll Event     
    $(window).scroll(function () {
        
       var scroll = $(window).scrollTop();
     

       
       var base_line = 500;
       var pos1 = $('#con01Bg').offset().top - base_line
           , pos2 = $('#con02Bg').offset().top - base_line
           , pos3 = $('#con03Bg').offset().top - base_line
           , pos4 = $('#con04Bg').offset().top - base_line
           , pos5 = $('#formBg').offset().top - base_line;
       if (scroll > pos1) {
           $('#con01').addClass('on');
           console.log(pos1);
       }
       else {
           $('#con01').removeClass('on');
       }
       if (scroll > pos2) {
           $('#con02').addClass('on');
       }
       else {
           $('#con02').removeClass('on');
       }
       if (scroll > pos3) {
           $('#con03').addClass('on');
       }
       else {
           $('#con03').removeClass('on');
       }
       if (scroll > pos4) {
           $('#con04').addClass('on');
       }
       else {
           $('#con04').removeClass('on');
       }
       if (scroll > pos5) {
           $('#formBg').addClass('on');
       }
       else {
           $('#formBg').removeClass('on');
       }

    

    
    

    
    

        
        
     //네비게이션 노출
       
            if (scroll > 0) {
                $('#header').fadeIn(200).css({
                    'background-color':'rgb(2, 130,194)',
                    'transition':'0.4s',
                    
                });
           

            } else{
                 $('#header').fadeOut(200).css("background","none");
            }   
//  
//        $('#header').hide();
//        
    
    
    //네비게이션 이동   
    var w = $(window).width();
    var scroll = $(window).scrollTop();
    
    var base_line = 50;
    var pos1 = $('#con01Bg').offset().top - base_line,
        pos2 = $('#con02Bg').offset().top - base_line,
        pos3 = $('#con03Bg').offset().top - base_line,
        pos4 = $('#con04Bg').offset().top - base_line,
        pos5 = $('#formBg').offset().top - base_line;
    
    $('.logo a, .top').on('click', function () {
         $('html, body').stop().animate({
                'scrollTop': 0
            }, 1000);
    });
        
            
    $('.main .scroll').on('click', function () {
         $('html, body').stop().animate({
                'scrollTop':pos1
            }, 1000);
    });
        
        
        
    $('#gnb>li').on('click', function () {
        var index = $(this).index();
        if (index == 0) {
            $('html, body').stop().animate({
                'scrollTop': pos1
            }, 1000);
        }
        if (index == 1) {
            $('html, body').stop().animate({
                'scrollTop': pos2
            }, 1000);
        }
        if (index == 2) {
            $('html, body').stop().animate({
                'scrollTop': pos3
            }, 1000);
        }
       
        
           if (index == 3) {
            $('html, body').stop().animate({
                'scrollTop': pos4
            }, 1000);
        } 
        
        if (index == 4) {
            $('html, body').stop().animate({
                'scrollTop': pos5
            }, 1000);
        } 
        
      

        

    });
  
        
    });

   });

    
        
    //PC, Mobile 구분
    var filter = "win16|win32|win64|mac|macintel";
    if ( navigator.platform ) {
        if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { 
            //mobile
            $('.videoBgBox').hide();
            $('#con06Bg').css({
                'background':'url("../img/video_bg.jpg") 50% top no-repeat',
                'background-size':'cover'
            });
        } else { 
            //pc
            $('.videoBgBox').show();
            $('#con06Bg').css('background','none');
        } 
    }
    


    
    





