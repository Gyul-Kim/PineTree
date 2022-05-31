//오른쪽 클릭 방지
$(document).bind("contextmenu",function(e){return false;});
$(document).bind("ondragstart",function(e){return false;});
$(document).bind("onselectstart",function(e){return false;}); 
const isMobile = () => { 
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
  };
  

/* ------------------------------------------------------------------------------- */
/* 실시간예약 - 계정정보 */
var rv_ttl = "pinetreeps";

/* 실시간예약 - 타입여부 */
var type = "N";

/* 이미지,영상 - 경로 */
var vid = [
	["https://player.vimeo.com/video/714288357"],
	["https://player.vimeo.com/video/714288380"],
];
const url =  isMobile() && window.innerWidth <=768 ? 'http://gonylab8.speedgabia.com/pinetree/m/' : 'http://gonylab8.speedgabia.com/pinetree/';


/* 영상 */
var mov = [
	["main.mp4"],
	
];

/* 이미지 */
var img = [
	//main
	[14],
	//poolvilla + rooms
	// [16,16,
  //   7,7,7,7],
	[15,15,
    6,6,6,6],
	
];





/* ------------------------------------------------------------------------------- */
/* SNS */
var	INTRAGRAM = "#";				
var	FACEBOOK = "#";
var	KAKAO = "#";
var	NV_BLOG = "#";
var	NV_CAFE = "#";