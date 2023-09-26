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
				'지역': {
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

//ppcall
function ppcall(){
    var now = new Date()
        var day = now.getDay() //일요일:0, 월요일:1
        var hour = now.getHours()
        var minute = now.getMinutes()
        var ppcallArrow = '<span><img src="img/ppcall_next.png"></span>';
        if((1 <= day) && (day <= 5)){//월요일~금요일
            if ( (hour >= 10) && (hour <= 17) ){ //10:00 ~ 18:00 번호노출
                setInterval(function(){ $(".ppcallPhone").fadeOut(1000).fadeIn(2000); }, 300); //전화깜빡임효과
                //web
                $('.headerTel').css('display','block');
                $('#ppcallCopyWrap .ppcallImg').html('<img src="img/ppcall_w_phone_on.png" width="66" alt="" />');
                $('#ppcallCopyWrap .ppcallCopyText').html('<p class="ppcallInfo">바로 상담을 원하세요?</p>');
                //mobile
                $('.ppcallPhone').css('display','block');
                $('.ppcallText').html('바로 상담을 원하시나요?');
                $('.ppcallBtn').html('전화상담' + ppcallArrow);
                $('#ppcallRing div, #footer a.footerTel').css('display','block'); //#footer span.footerTel공통
                $('.ppcallProh').css('display','none');
            }else{
                //web
                $('.headerTel').css('display','none');
                $('#ppcallCopyWrap .ppcallImg').html('<img src="img/ppcall_w_phone_off.png" width="66" alt="" />');
                $('#ppcallCopyWrap .ppcallCopyText').html('<p class="ppcallInfo">지금은 전화상담이 종료되었습니다.</p><p class="ppcallTime">전화상담 가능시간 : 오전 10:00 ~ 오후 6:00</p>');
                $('#ppcallCopyWrap .ppcallCopyText p.ppcallInfo').css({'color':'#000', 'font-size':'17px', 'line-height':'23px', 'padding-top':'10px'});
                //mobile
                $('.ppcallPhone').css('display','none');
                $('.ppcallText').html('전화상담이 종료되었습니다');
                $('.ppcallBtn').html('번호저장' + ppcallArrow);
                $('#ppcallRing div, #footer a.footerTel').css('display','none'); //#footer span.footerTel공통
                $('.ppcallProh').css('display','block');
            }
        }
        else if(day == 6){//토요일
            if ( (hour >= 10) && (hour <= 15) ){ //10:00 ~ 16:00 번호노출
                setInterval(function(){ $(".ppcallPhone").fadeOut(1000).fadeIn(2000); }, 300); //전화깜빡임효과
                //web
                $('.headerTel').css('display','block');
                $('#ppcallCopyWrap .ppcallImg').html('<img src="img/ppcall_w_phone_on.png" width="66" alt="" />');
                $('#ppcallCopyWrap .ppcallCopyText').html('<p class="ppcallInfo">바로 상담을 원하세요?</p>');
                //mobile
                $('.ppcallPhone').css('display','block');
                $('.ppcallText').html('바로 상담을 원하시나요?');
                $('.ppcallBtn').html('전화상담' + ppcallArrow);
                $('#ppcallRing div, #footer a.footerTel').css('display','block'); //#footer span.footerTel공통
                $('.ppcallProh').css('display','none');
            }else{
                //web
                $('.headerTel').css('display','none');
                $('#ppcallCopyWrap .ppcallImg').html('<img src="img/ppcall_w_phone_off.png" width="66" alt="" />');
                $('#ppcallCopyWrap .ppcallCopyText').html('<p class="ppcallInfo">지금은 전화상담이 종료되었습니다.</p><p class="ppcallTime">전화상담 가능시간 : 오전 10:00 ~ 오후 6:00</p>');
                $('#ppcallCopyWrap .ppcallCopyText p.ppcallInfo').css({'color':'#000', 'font-size':'17px', 'line-height':'23px', 'padding-top':'10px'});
                //mobile
                $('.ppcallPhone').css('display','none');
                $('.ppcallText').html('전화상담이 종료되었습니다');
                $('.ppcallBtn').html('번호저장' + ppcallArrow);
                $('#ppcallRing div, #footer a.footerTel').css('display','none'); //#footer span.footerTel공통
                $('.ppcallProh').css('display','block');
            }
        }
        else{
                //web
                $('.headerTel').css('display','none');
                $('#ppcallCopyWrap .ppcallImg').html('<img src="img/ppcall_w_phone_off.png" width="66" alt="" />');
                $('#ppcallCopyWrap .ppcallCopyText').html('<p class="ppcallInfo">지금은 전화상담이 종료되었습니다.</p><p class="ppcallTime">전화상담 가능시간 : 오전 10:00 ~ 오후 6:00</p>');
                $('#ppcallCopyWrap .ppcallCopyText p.ppcallInfo').css({'color':'#000', 'font-size':'17px', 'line-height':'23px', 'padding-top':'10px'});
                //mobile
                $('.ppcallPhone').css('display','none');
                $('.ppcallText').html('전화상담이 종료되었습니다');
                $('.ppcallBtn').html('번호저장' + ppcallArrow);
                $('#ppcallRing div, #footer a.footerTel').css('display','none'); //#footer span.footerTel공통
                $('.ppcallProh').css('display','block');
            }
}

//하단정보 숨기기
function hide_footer(){
    var pageURL = location.href;            //파라미터값을 변수에 저장
        if (pageURL.match('sender')){           //파라미터값에 'sender'가 포함되면
            $('#footerBg').css('display','none');
        }
        else if (pageURL.match('sender=G')){           //파라미터값에 'sender'가 포함되면
            $('.gText').css('display','none');
        }
        else {                              //파라미터값에 'sender'가 포함되지 않으면
            $('#footerBg').css('display','block');
        }
}

// 상담신청 폼으로 이동
function moveHref(){
    $("#bottom").click(function(){
        var param = location.search;
        location.href ='../'+param;
    });

    $("#quickmenu").click(function(){
        var param = location.search;
        location.href ='../'+param;
    });

}

// 상담신청 폼으로 이동
function moveCTA(){
    $("#bottomBar").click(function(){

        var formTop = $("#contact-form").offset().top;
        if( $(window).scrollTop()<5489 ){
            $('html, body').animate({
                scrollTop : formTop
            }, 1500);
            return false;
        } else {
            return false;
        }

    });
}

// 플레이스 홀더안에 또다른 플레이스 홀더
function placeholder_span(){

    $('.hope input').focusin(function() {
        if($(this).val()==''){
            $('.hope span').css('display','none');
        }

    });
    $('.hope input').focusout(function() {
        if($(this).val()==''){
            $('.hope span').css('display','block');
        }
    });

    $('.hope span').click(function(){
        if($('.hope input').val()==''){
            $('.hope input').trigger( "focus" );
        }
    });
}

// 퀵메뉴e
function quick(){
      var yPosition = 0;   // 세로 위치 값
    var yStartPosition = 415;  // 퀵메뉴 시작 위치

    function quickMenu() {
        var quickmenu = $("#quick"); //퀵메뉴의 id
        var quickType = "A";  // 퀵메뉴 타입 (A:귀여운타입, B:일반)
        var scrollPosition = $(window).scrollTop();
        var yStartPosition2;
        if(scrollPosition > yStartPosition) yStartPosition2 = 60;
        else yStartPosition2 = parseInt(yStartPosition - scrollPosition);
        var Y_B = parseInt(yStartPosition2 + scrollPosition);
        var quickmenuTop = quickmenu.offset().top;

        if (quickType == "B") {
            if (parseInt(quickmenu.offset().top) < Y_B - 1){
                yPosition += 2;
            } else if (parseInt(quickmenu.offset().top) > Y_B + 1){
                yPosition -= 2;
            }
            yPosition *= 0.85;
            quickmenu.css("top", (parseInt(quickmenuTop + yPosition)) + "px");
        } else {
            var Y_A = parseInt(quickmenuTop, 10);
            if (Y_A != Y_B) {
                yOffset = Math.ceil(Math.abs(Y_B - Y_A) / 20);
                if (Y_B < Y_A)
                    yOffset = -yOffset;
                quickmenu.css("top", (parseInt(quickmenuTop, 10) + yOffset) + "px");
            }
        }
    }
    $(document).ready(function(e) {
        window.setInterval("quickMenu()", 1);
    });
}

function banner(){
    var bannerHeight = $('#banner').outerHeight();
    var bodyHeight = $('body').height();
    //alert(bannerHeight);

    $('body').css('padding-bottom',bannerHeight);
}

function movieChange(){
    var mobileArr = new Array("iPad","iPhone", "iPod", "BlackBerry", "Android", "Windows CE", "LG", "MOT", "SAMSUNG", "SonyEricsson");
    for(var txt in mobileArr){
        if(navigator.userAgent.match(mobileArr[txt]) != null){
            //모바일일때 작업
        }
    }
}

//contents
$(document).ready(function () {
    vali(); //밸리데이션 체크
    ppcall(); //피피콜
    // banner();//하단바 여백 자동 조정
    // hide_footer();//하단정보 숨기기
    //moveCTA(); // 상담신청 폼으로 이동
    //placeholder_span()// 플레이스 홀더안에 또다른 플레이스 홀더
    //quick(); // 퀵메뉴e
    //movieChange() //모바일 구분 작업하기


    var pageURL = location.href;            //파라미터값을 변수에 저장
        if (pageURL.match('index2') || pageURL.match('index3')){           //파라미터값에 'index2' 또는 'index3'이 포함되면
            $('.form h1 img').attr('src','img/form_title02.png');
        }
});

