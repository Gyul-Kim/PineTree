function slide_01(h,j){
	//select
	var dht = $(window).height();
	var thumb = $("."+ h);			
	var thumb_sel = thumb.find("." + j);
	var i = 0;							
	
	thumb.css("height",dht);
	$(window).resize(function(){
		var dht = $(window).height(); 
		thumb.css("height",dht);
	});
	
	thumb.append(
		"<div id='nav'>" +
			"<a class='prev' href='#'><img src='images/prev_01.png' alt='이전' width='120' height='36' /></a>" +
			"<a class='next' href='#'><img src='images/next_01.png' alt='다음' width='120' height='36' /></a>" +
			"<ul></ul>" + 
		"</div>"
	);

	thumb_sel.each(function(e){ 
		var lt = 100 * e + "%"; $(this).css("left",lt); 
		thumb.find("#nav ul").append("<li><a href='#'><span class='alt'>"+ (e + 1) +"</span></a></li>");
	}); $("#nav ul").css("margin-left", $("#nav ul").width() / -2);
	
	//paging
	thumb_sel.eq(0).addClass("active"); thumb.find("#nav ul li:first").find("a").addClass("active");
		
	// Btn
	thumb.find(".prev").click(function(){thumb.slides("prev","slide_show > li",500,"swing");return false;});
	thumb.find(".next").click(function(){thumb.slides("next","slide_show > li",500,"swing");return false;});
	thumb.find("#nav li a").click(function(){
		targ = $(this).parent("li").index();
		if($(this).is(".active") == true) return false;
		thumb.slides(targ,"slide_show > li",500,"swing");
		return false;
	});	

	
	// Swipe
	thumb.swipe({
		swipe:function(event, direction, distance, duration){
		//event, direction, distance, duration, fingerCount, fingerData	
		var cp_left = (direction == "left" && distance > 50 && duration > 50);
		var cp_right = (direction == "right" && distance > 50 && duration > 50);
		
		if(cp_left) thumb.slides("next","slide_show > li",700,"swing");
		else if(cp_right) thumb.slides("prev","slide_show > li",700,"swing");
		
	},threshold:0});
	
	$(window).scroll(function(e){
		var video = document.getElementById("MyVideo");
		var dht = $(window).height() / 10 * 8;
		var poX = $(this).scrollTop();
		if($("body").is(".vid") == true){
			
			if(dht < poX) video.pause(); else video.play();
			
		}
	});
	
	// Keyboard
	$('body').keydown(function(e) {
		if(e.keyCode == 37) $(".slide").slides("prev","slide_show > li",500,"swing");
		else if(e.keyCode == 39) $(".slide").slides("next","slide_show > li",500,"swing");
	});

}

function slide_02(h,j){
	//select
	var dht = $(window).height();
	var thumb = $("#"+ h);			
	var thumb_sel = thumb.find("." + j);
	var i = 0;							
	
	
	thumb.css("height",dht);
	$(window).resize(function(){
		var dht = $(window).height(); 
		thumb.css("height",dht);
	});
	
	thumb.append(
		"<div id='nav'>" +
			"<a class='prev' href='#'><img src='images/prev_01.png' alt='이전' width='120' height='36' /></a>" +
			"<a class='next' href='#'><img src='images/next_01.png' alt='다음' width='120' height='36' /></a>" +
			"<ul></ul>" + 
		"</div>"
	);

	thumb_sel.each(function(e){ 
		var lt = 100 * e + "%"; $(this).css("left",lt); 
		thumb.find("#nav ul").append("<li><a href='#'><span class='alt'>"+ (e + 1) +"</span></a></li>");
	}); $("#nav ul").css("margin-left", $("#nav ul").width() / -2);
	
	//paging
	thumb_sel.eq(0).addClass("active"); thumb.find("#nav ul li:first").find("a").addClass("active");
		
	// Btn
	thumb.find(".prev").click(function(){thumb.slides("prev","slide_show > li",500,"swing");return false;});
	thumb.find(".next").click(function(){thumb.slides("next","slide_show > li",500,"swing");return false;});
	thumb.find("#nav li a").click(function(){
		targ = $(this).parent("li").index();
		if($(this).is(".active") == true) return false;
		thumb.slides(targ,"slide_show > li",500,"swing");
		return false;
	});	

	
	// Swipe
	thumb.swipe({
		swipe:function(event, direction, distance, duration){
		//event, direction, distance, duration, fingerCount, fingerData	
		var cp_left = (direction == "left" && distance > 50 && duration > 50);
		var cp_right = (direction == "right" && distance > 50 && duration > 50);
		
		if(cp_left) thumb.slides("next","slide_show > li",700,"swing");
		else if(cp_right) thumb.slides("prev","slide_show > li",700,"swing");
		
	},threshold:0});
	
	$(window).scroll(function(e){
		var video = document.getElementById("MyVideo");
		var dht = $(window).height() / 10 * 8;
		var poX = $(this).scrollTop();
		if($("body").is(".vid") == true){
			
			if(dht < poX) video.pause(); else video.play();
			
		}
	});
	
	// Keyboard
	$('body').keydown(function(e) {
		if(e.keyCode == 37) $(".slide").slides("prev","slide_show > li",500,"swing");
		else if(e.keyCode == 39) $(".slide").slides("next","slide_show > li",500,"swing");
	});
}

	
//slide PlugIn
(function( $ ){
	$.fn.slides = function(e, s, spd, eft, roll){
	var thumb =  this;
	var thumb_sel = this.find("." + s);
	var total =  thumb_sel.length - 1;
	var pct = 100;						//% 퍼센트
	var i = 0;
	
	if (thumb_sel.is(":animated")) return false; 	
	thumb_sel.each(function(k){
		if($(this).attr("class") == "active") i = k;
	});	
		
	//Mov
	function VidMove(){
		var video = document.getElementById("MyVideo");
		if($("body").is(".vid") == true){
			var dht = $(window).height() / 10 * 6; var poX = $(this).scrollTop();
		
			if(dht < poX) video.pause(); else video.play();
			
			if(i == 0){ if(dht < poX) video.pause(); else video.play(); } 
			else{ video.pause(); }
			
		}
	}

	//prev
	if(e == "prev"){
		if(i <= 0) i = total; else i = i - 1;
		if(thumb_sel.eq(0).attr("class") == "active"){
			$(thumb_sel.get().reverse()).each(function(e){
				if($(this).attr("class") != "active"){ e = e + 1; 
					$(this).css("left",-pct * e + "%");
				}
			});
			thumb_sel.animate({"left":"+=" + pct + "%"},spd,eft,function(){ thumb_sel.eq(0).css("left",(-pct * total) + "%"); });
		}else{
			thumb_sel.animate({"left":"-=" + -pct + "%"},spd,eft);
		}VidMove();
	
	//next
	}else if(e == "next"){
		if(i == total) i = 0; else i = i + 1;
		if(thumb_sel.eq(total).attr("class") == "active"){
			thumb_sel.each(function(e){
				if($(this).attr("class") != "active"){ $(this).css("left",pct * e + pct + "%"); }
			});
			thumb_sel.animate({"left":"-=" + pct + "%"},spd,eft,function(){ thumb_sel.eq(total).css("left",(pct * total) + "%"); });
		}else{
			thumb_sel.animate({"left":"-=" + pct + "%"},spd,eft);
		}VidMove();
		
	//page
	}else{ i = e;
		if($(window).width() <= 1200) var dom_w = 1200 / pct; 
		else var dom_w = thumb.width() / pct;
						
		s_left = thumb_sel.eq(i).position().left; 
		s_left = s_left / dom_w; 
		
		thumb_sel.animate({"left":"-=" + s_left + "%"},spd,eft);
		VidMove();
	}
	
	thumb_sel.removeClass("active");
	thumb_sel.eq(i).addClass("active");
	
	thumb.find("#nav li a").removeClass("active");
	thumb.find("#nav li").eq(i).find("a").addClass("active");
			
	};
}(jQuery));