
checkConnectionsForH2L = function(hlselectorType, hlselectorInput, limitValue,
		jsonarray) {

	var temp = JSON.parse(jsonarray);

	var connData = {};

	if (temp.length != 0) {

		if (temp.length == 1) {

			// high selector connection check

			// high selector with 2 inputs connection check 
			if (hlselectorType == "high" && hlselectorInput == "2") {

				Identify_H2L_HS2Input(hlselectorType, hlselectorInput,
						jsonarray);

			}
			// high selector with 3 inputs connection check 
			if (hlselectorType == "high" && hlselectorInput == "3") {

				Identify_H2L_HS3Input(hlselectorType, hlselectorInput,
						jsonarray);
			}
			// high selector with 4 inputs connection check 
			if (hlselectorType == "high" && hlselectorInput == "4") {

				Identify_H2L_HS4Input(hlselectorType, hlselectorInput,
						jsonarray);

			}

			// low selector connection check

			// low selector with 2 inputs connection check 
			if (hlselectorType == "low" && hlselectorInput == "2") {

				Identify_H2L_LS2Input(hlselectorType, hlselectorInput,
						jsonarray);

			}
			// low selector with 3 inputs connection check 
			if (hlselectorType == "low" && hlselectorInput == "3") {

				Identify_H2L_LS3Input(hlselectorType, hlselectorInput,
						jsonarray);

			}
			// low selector with 4 inputs connection check 
			if (hlselectorType == "low" && hlselectorInput == "4") {

				Identify_H2L_LS4Input(hlselectorType, hlselectorInput,
						jsonarray);

			}

			// Limiter Selector Connection check

			// Rate Limiter connection check
			// rate limiter with 1 inputs connection check
			if (hlselectorType == "ratelimiter") {

				Identify_RateLimiter(hlselectorType, limitValue, jsonarray);

			}

			// High Limit connection check
			// High Limit with 1 inputs connection check
			if (hlselectorType == "highlimit") {

				Identify_HighLimit(hlselectorType, limitValue, jsonarray);

			}

			// Low Limit connection check
			// Low Limit with 1 inputs connection check
			if (hlselectorType == "lowlimit") {

				Identify_LowLimit(hlselectorType, limitValue, jsonarray);

			}
			
			

			connData.HLselectorType = hlselectorType;
			connData.HLselectorInput = hlselectorInput;
			connData.connDiagjson = jsonarray;
			connData.chkConnCnt = ConnFlagCnt;
			connData.chkRightConn = rightConn;
			//		    console.log(connData);
			ExpTrackData.connData = connData
//			console.log(ExpTrackData);
		} else {

			alertify.alert("Please select only one symbol at a time to identify");
		}
	} else {

		alertify.alert("Please select right symbol to identify");

	}

}
