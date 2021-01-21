ConnHint = function(hlselectorType, hlselectorInput, limitValue) {

	//		console.log(appId,type) ;

	// high selector connection hint

	// high selector with 2 inputs connection hint 
	if (hlselectorType == "high" && hlselectorInput == "2") {

		$("#HS_2Input").css("display", "block");

	}
	// high selector with 3 inputs connection hint 
	if (hlselectorType == "high" && hlselectorInput == "3") {

		$("#HS_3Input").css("display", "block");
	}
	// high selector with 4 inputs connection hint 
	if (hlselectorType == "high" && hlselectorInput == "4") {

		$("#HS_4Input").css("display", "block");

	}

	// low selector connection hint

	// low selector with 2 inputs connection hint 
	if (hlselectorType == "low" && hlselectorInput == "2") {

		$("#LS_2Input").css("display", "block");

	}
	// low selector with 3 inputs connection hint 
	if (hlselectorType == "low" && hlselectorInput == "3") {

		$("#LS_3Input").css("display", "block");

	}
	// low selector with 4 inputs connection hint 
	if (hlselectorType == "low" && hlselectorInput == "4") {

		$("#LS_4Input").css("display", "block");
	}

	// Limiter Selector Connection hint	 
	// Rate Limiter connection hint

	// rate limiter with 1 inputs connection hint 
	if (hlselectorType == "ratelimiter") {

		$("#Limiter_RL").css("display", "block");

	}

	// High Limit connection hint				 
	// High Limit with 1 inputs connection hint 
	if (hlselectorType == "highlimit") {

		$("#Limiter_HL").css("display", "block");

	}

	// Low Limit connection check				 
	// Low Limit with 1 inputs connection check 
	if (hlselectorType == "lowlimit") {

		$("#Limiter_LL").css("display", "block");

	}

}
