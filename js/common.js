document.write('<script type="text/javascript" src="js/reserve.js"></script>');	// 함수 리스트 호출
document.write('<script type="text/javascript" src="js/modify.js"></script>');		// 함수 리스트 호출
document.write('<script type="text/javascript" src="js/swipe.js"></script>');		// 함수 리스트 호출
document.write(
"<!--[if lte IE 9]>"
+ "<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js'></script>"
+ "<script type='text/javascript'>alert('브라우저를 최신 버전으로 업그레이드하세요.'); window.open('http://outdatedbrowser.com/ko','_blank');</script>"
+ "<![endif]-->"
);

$(function(){
/*---------------------------------------------------------------*/	
//common
var video = document.getElementById("MyVideo");
var dht = $(window).height();
var dwh = $(window).width();
var num = location.href.substr(location.href.lastIndexOf('_') + 1);		//해당페이지
var val = num.slice(0, 2); val = val - 1;
var m = location.href.substr(location.href.lastIndexOf('=') + 1);			//해당페이지 영역
var v = m.slice(0, 2); v = (v - 1) + 1;	
var k = val;
const path = (location.href.substr(location.href.lastIndexOf("/") + 1)).split(".")[0]; 	//path
const detailPath = ((location.href.substr(location.href.lastIndexOf("=") + 1)).slice(0, 2) - 1 + 1) - 1; //detail Path

/*---------------------------------------------------------------*/	
//header
$('header .lnb').css('display', 'none');
$('header .gnb>li.gb02').on('mouseenter', function() {
	$('header .lnb_01').stop().slideDown();
});
$('header .gnb>li.gb02').on('mouseleave', function() {
	$('header .lnb_01').stop().slideUp();
});

$('header .gnb>li.gb03').on('mouseenter', function() {
	$('header .lnb_02').stop().slideDown();
});
$('header .gnb>li.gb03').on('mouseleave', function() {
	$('header .lnb_02').stop().slideUp();
});

/*---------------------------------------------------------------*/	
//banner


/*---------------------------------------------------------------*/	
//video
$(".video").css("height",dht); if(dht < 675){$(".video").css("height",675); } 
$(window).resize(function(){ var dht = $(window).height(); $(".video").css("height",dht); if(dht < 675){$(".video").css("height",675); } });


/*---------------------------------------------------------------*/
//index
switch(path) {
    case '' :
	
	// index
    case 'index' :
	$("#slide_01").append('<ul class="slide_show"></ul>');

	for(var i=0; i < img[0]; i++){
		$('#slide_01 .slide_show').append(
			'<li style="background:url('+ url +'/main/'+ (i + 1) +'.jpg)'+ 
			' no-repeat 50% 50%;background-size:cover;"></li>'
		);
	} 
	slide_01("slide","slide_show > li");
	

	$(".video h2").css({"transform":"translateY(0)","opacity":"1"});

	$(window).on("scroll", function() {
		var thisTop = $(this).scrollTop();
		var a = $("#index .text").offset().top - $(window).height();

		if(thisTop > a) {
			$("#index .text h3").css({"transform":"translateY(0)", "opacity":"1"});
		} else {}  
	});

	break;

/*---------------------------------------------------------------*/	
	case 'about' :
	
	var a = $(".movie iframe").width() / 16 * 9;
	$(".movie iframe").css("height",a);
	
	$(window).on("resize",function(){
		var a = $(".movie iframe").width() / 16 * 9;
		$(".movie iframe").css("height",a);	
	});
	$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/4',	//사업자 정보
	function(data){
		$(".map p").append(
			'<span>' + 
				'도로명 주소 : '+ data.result.NEW_USER_ADDR +'<br />' +
				'지번 주소 : ' + data.result.USER_ADDR +
			'</span>'
		);
	});	
	
	break;
/*---------------------------------------------------------------*/	
	//room	
	case 'room' :
	$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/8', function(data){	

		// var currRoomNum = parseInt(m) + 1;
		// console.log('currRoomNum', currRoomNum);

		// $('.section.text, .section.slide').css('display', 'none');
		// $('#slide_01').css('display', 'block');
		// $('#text_0' + currRoomNum).css('display', 'block');
		// $('#slide_0' + currRoomNum).css('display', 'block');

		$("#slide_01").append('<ul class="slide_show"></ul>'); 
		$("#slide_02").append('<ul class="slide_show"></ul>');
		$("#slide_03").append('<ul class="slide_show"></ul>'); 
		$("#slide_04").append('<ul class="slide_show"></ul>');


		var curr = parseInt(m);
		for(var i = 0; i <= img[1][detailPath]; i++){
			$('#slide_01 .slide_show').append(
				'<li style="background:url('+ url +'/room/'+ (detailPath + 1) +'/'+ (i + 1) +'.jpg) no-repeat 50% 50%;background-size:cover;"></li>'
			);
		}

		for(var i = 0; i < 3; i++) {
			$(".infos p").text(data.result[detailPath]["TYPE_DESC"]);
		}
		

		// for(var i=0; i < img[1][0]; i++){
		// 	$('#slide_01 .slide_show').append(
		// 		'<li style="background:url('+ url +'/room2/'+ (i + 1) +'.jpg) no-repeat 50% 50%;background-size:cover;"></li>'
		// 	);
		// } 
		
		// for(var i=0; i < img[1][1]; i++){
		// 	$('#slide_02 .slide_show').append(
		// 		'<li style="background:url('+ url +'/room2/1/'+ (i + 1) +'.jpg) no-repeat 50% 50%;background-size:cover;"></li>'
		// 	);
		// }
		
		// for(var i=0; i < img[1][2]; i++){
		// 	$('#slide_03 .slide_show').append(
		// 		'<li style="background:url('+ url +'/room2/2/'+ (i + 1) +'.jpg) no-repeat 50% 50%;background-size:cover;"></li>'
		// 	);
		// }
		
		// for(var i=0; i < img[1][3]; i++){
		// 	$('#slide_04 .slide_show').append(
		// 		'<li style="background:url('+ url +'/room2/3/'+ (i + 1) +'.jpg) no-repeat 50% 50%;background-size:cover;"></li>'
		// 	);
		// }
	
		slide_02("slide_01","slide_show > li"); 
		slide_02("slide_02","slide_show > li");
		slide_02("slide_03","slide_show > li"); 
		slide_02("slide_04","slide_show > li");
	
		var fwh = parseInt(dwh / 10 * 8.5); 
		var rwh = fwh / 16 * 9;
		$(".infos .img").css({"height":$(".infos .img").width()});	
		if(dwh < 1001) $(".movie #iframe").css({"width":"950px","height":"534px"});
		else $(".movie #iframe").css({"width":fwh,"height":rwh});	
		
		$(".infos .txt").append(
			'<dl><dt>객실구조 :</dt><dd>'+ data.result[0]["ROOM_TYPE"] +'</dd></dl>' +
			'<dl><dt>비품안내 :</dt><dd>'+ data.result[0]["INTERIOR"] +'</dd></dl>' +
			'<dl><dt>객실크기 :</dt><dd>'+ data.result[0]["ROOM_EXTN"] +'평형</dd></dl>' +
			'<dl><dt>입실인원 :</dt><dd>기준 '+ data.result[0]["ADLT_BASE_PERS"] +'명 ~ 최대 '+ data.result[0]["ADLT_MAX_PERS"] +'명(2명 초과시 추가요금 발생)</dd></dl>' +
			'<dl><dt>특이사항 :</dt><dd>'+ data.result[0]["ETC_DETL"] +'</dd></dl>' 
		);
		
		$(window).on("scroll",function(){ 
			var top = $(this).scrollTop(); 
			var heit = $(".infos").offset().top - ($(window).height() / 2);
			if(top > heit) $(".infos .img > div").css({"transition":" 0.75s","transform":"scale(1)","opacity":"1"});
			else $(".infos .img > div").css({"transition":" 0.75s","transform":"scale(0.7)","opacity":"0"});
		});
	
		$(window).on("resize",function(){ 
			var dwh = $(window).width();
			var fwh = parseInt(dwh / 10 * 8.5); 
			var rwh = fwh / 16 * 9;
			$(".infos .img").css({"height":$(".infos .img").width()});	
			if(dwh < 1001) $(".movie #iframe").css({"width":"950px","height":"534px"});
			else $(".movie #iframe").css({"width":fwh,"height":rwh});
		});	

		
	
	});
	break;

/*---------------------------------------------------------------*/
//reserve	
	case 'reserve' :
	$(".section .snb li a").on("click",function(){ var nb = $(this).parent("li").index();
		$(".section .snb > li").removeClass("active");
		$(".section .snb > li").eq(nb).addClass("active");
		if(nb == 0){
			$(".banner h1 strong").text("RESERVATION");
			$(".banner h1 span").text("실시간예약");
			$(".thumb").hide(); $(".tab_01").show();
		}else if(nb == 1){
			$(".banner h1 strong").text("GUIDE");
			$(".banner h1 span").text("예약안내");
			$(".thumb").hide(); $(".tab_02").show();
		}return false;
	});
	 reserInfo(rv_ttl);

	
	break;

	default : location.href = "index.html";
	break;
}
/*---------------------------------------------------------------*/
//footer
$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/4',	//사업자 정보
	function(data){
		$("footer").append(
			'<div class="InBox">' +
				'<h5><a href="index.html"><img src="images/ft_logo.png" alt="" width="124" height="144" /></a></h5>' +
				'<div>' +
					'<p>예약문의 : '+ data.result.USER_TEL1 +' | 주소 : '+ data.result.NEW_USER_ADDR +'</p>' +
					'<ul>' +
						'<li>상호명 : '+ data.result.BUSI_NM +' | 사업자번호 : <span class="BUSI_NO"></span>(대표 : <span class="BUSI_PRE_NM"></span>)</li>' +
						//'<li>계좌번호 : '+ data.result.USER_ACCO +'</li>' +
						'<li>통신판매업번호 : '+ data.result.COMM_SALE_NO +'</li>' +
					'</ul>' +
				'</div>' +
			'</div>'
		);
			
		//사업자 정보	
		$.getJSON('http://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/11', //사업자 정보
		function(data){
			var arr1 = new Array(); var arr2 = new Array();
			$.each(data.result,function(key,val){
				arr1.push(val["BUSI_PRE_NM"]); arr2.push(val["BUSI_NO"]);
				$(".BUSI_PRE_NM").text(arr1); $(".BUSI_NO").text(arr2);
			});
		});
			
		$(".sns_01").attr("href",INTRAGRAM);
		$(".sns_02").attr("href",FACEBOOK); 
		$(".sns_03").attr("href",NV_BLOG); 
		
		if(INTRAGRAM == "#"){$(".sns_01").on('click',function(){alert('준비중입니다.');return false;});}
		if(FACEBOOK == "#"){$(".sns_02").on('click',function(){alert('준비중입니다.');return false;});}
		if(NV_BLOG == "#"){$(".sns_03").on('click',function(){alert('준비중입니다.');return false;});}
	});
});	


/*------------------------------------------------------------------------------------------------*/
//function 
function numbering(n) { // 이미지 넘버링 10 보다 작을때
	var num = ''; var n = n + 1; var n = n.toString();
	if (n.length < 2){for (var i = 0; i < 2 - n.length; i++){num += '0';}}
	return num + n;
}


function char_size(t){//t = 텍스트가 75자 이상 노출 될 때
	t.each(function(e){ if(t.text().length >= 75) $(this).text($(this).text().substr(0,60) + '...'); }); 
}
