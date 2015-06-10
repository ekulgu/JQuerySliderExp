$(document).ready(function(){
	
	var speed = 500;					//Fade out
	var autoswitch = true;				//Austo slider options
	var autoswitch_speed = 4000;		//Auto slider speed
	
	//Add intial active class
	$(".slide").first().addClass("active");
	
	//Hide all the slides
	$(".slide").hide();
	
	//Show first slide.
	$(".active").show();
	
	//next handler
	$("#next").on("click", nextSlide);
	
	//prev handler
	$("#prev").on("click", prevSlide);
	
	//auto next handler
	if(autoswitch==true){
		setInterval(nextSlide, autoswitch_speed);
	}
	
	//Click on the next arrow
	function nextSlide(){
		$(".active").removeClass("active").addClass("oldActive");
		if($(".oldActive").is(":last-child")){
			$(".slide").first().addClass("active");
		}else{
			$(".oldActive").next().addClass("active");
		}
		$(".oldActive").removeClass("oldActive");
		$(".slide").fadeOut(speed);
		$(".active").fadeIn(speed);
	}
	
	//Click on the prev arrow
	function prevSlide(){
		$(".active").removeClass("active").addClass("oldActive");
		if($(".oldActive").is(":first-child")){
			$(".slide").last().addClass("active");
		}else{
			$(".oldActive").prev().addClass("active");
		}
		$(".oldActive").removeClass("oldActive");
		$(".slide").fadeOut(speed);
		$(".active").fadeIn(speed);
	}
	
	//Auto display slide
	/*if(autoswitch==true){
		setInterval(function(){
			$(".active").removeClass("active").addClass("oldActive");
			if($(".oldActive").is(":last-child")){
				$(".slide").first().addClass("active");
			}else{
				$(".oldActive").next().addClass("active");
			}
			$(".oldActive").removeClass("oldActive");
			$(".slide").fadeOut(speed);
			$(".active").fadeIn(speed);	
		}, autoswitch_speed);
	}*/
	
});