$(document).ready(function() {

	var $album1 = $(".album1Content");
	var $album2 = $(".album2Content");
	//var $nav = $(".cover1img");


$(".cover1img").click(function(event) {
		event.preventDefault();
	if($album1.hasClass("show")) {
		return;
	} else {
		$album1.siblings().removeClass("show");
		$album1.addClass("show");
		$(".cover1img, .cover2img").hide();
	}
});
//change size attempt & hide all else, but not sure how to return yet
$(".gator1").click(function(event) {
		event.preventDefault();
  		$(".gator2, .gator3, .gator4").hide();
	if ($(this).hasClass("bigger")){
		$(this).removeClass("bigger");
	}else{
		$(this).addClass("bigger");
	}
	});

$(".gator2").click(function(event) {
		event.preventDefault();
		$(".gator1, .gator3, .gator4").hide();
	if ($(this).hasClass("bigger")){
		$(this).removeClass("bigger");
	}else{
		$(this).addClass("bigger");
	}
	});
$(".gator3").click(function(event) {
		event.preventDefault();
  		$(".gator1, .gator2, .gator4").hide();
	if ($(this).hasClass("bigger")){
		$(this).removeClass("bigger");
	}else{
		$(this).addClass("bigger");
	}
	});
$(".gator4").click(function(event) {
		event.preventDefault();
  		$(".gator1, .gator2, .gator3").hide();
	if ($(this).hasClass("bigger")){
		$(this).removeClass("bigger");
	}else{
		$(this).addClass("bigger");
	}
	});
//album2
$(".cover2img").click(function(event) {
		event.preventDefault();
	if($album2.hasClass("show")) {
		return;
	} else {
		$album2.siblings().removeClass("show");
		$album2.addClass("show");
		$(".cover2img, .cover1img").hide();
	}
});
//change size attempt & hide 
$(".sunrise1").click(function(event) {
		event.preventDefault();
  		$(".sunrise2, .sunrise3, .sunrise4").hide();
	if ($(this).hasClass("bigger")){
		$(this).removeClass("bigger");
	}else{
		$(this).addClass("bigger");
	}
	});

$(".sunrise2").click(function(event) {
		event.preventDefault();
		$(".sunrise1, .sunrise3, .sunrise4").hide();
	if ($(this).hasClass("bigger")){
		$(this).removeClass("bigger");
	}else{
		$(this).addClass("bigger");
	}
	});
$(".sunrise3").click(function(event) {
		event.preventDefault();
  		$(".sunrise1, .sunrise2, .sunrise4").hide();
	if ($(this).hasClass("bigger")){
		$(this).removeClass("bigger");
	}else{
		$(this).addClass("bigger");
	}
	});
$(".sunrise4").click(function(event) {
		event.preventDefault();
  		$(".sunrise1, .sunrise2, .sunrise3").hide();
	if ($(this).hasClass("bigger")){
		$(this).removeClass("bigger");
	}else{
		$(this).addClass("bigger");
	}
	});


		
});	
