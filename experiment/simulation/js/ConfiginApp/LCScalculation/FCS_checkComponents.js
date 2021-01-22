$(function () {
	
	
	FCS_checkPlacedComponents = function(tanklevel){
		

		

		

// draw Components		
		drawFolwComponents();
//		initiallevel.hide();
		tanklevelHeight((x+2), (y+65), tanklevel, 'blue');
		drawFlowWaterLevel(tanklevel);
		
// Calculate Output of transmitters with random error		
		FT_Oparraywitherr = [];		
		FT_OpMinMaxArr = [];
		
		for(var i=1; i<=4; i++){
			
			err = randomErr_FC(FC_RandomErrArr);
//			console.log(err);
			var val = parseFloat(tanklevel) + parseFloat(err);
			FT_Oparraywitherr.push(val);
		}
			
//		console.log(FT_Oparraywitherr);
		
		LT100_Output = OutputLabel((x+230), (y+103), tanklevel, 'blue');
		
		LT100_Outputtobehide =  OutputLabel((x+410), (y-150), tanklevel, 'blue');
		
// calculation for PS4 placed component		
		if(PS4_radiotypeVal == "selector"){
			
			if(FCS_transnum == 2 &&(PS4_component =="HS2" || PS4_component == "LS2")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+290), (y+103), FT_Oparraywitherr[0], 'blue');
				OutputLabel((x+350), (y+103), FT_Oparraywitherr[1], 'blue');

				
				//pass value for min max of conected transmitter
				FT_OpMinMaxArr.push(FT_Oparraywitherr[0]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[1]);
				
				
				
				FTmax = Math.max.apply(null,FT_OpMinMaxArr);
				FTmin = Math.min.apply(null,FT_OpMinMaxArr);
				
				
				
			}
			if(FCS_transnum == 2 &&(PS4_component =="HS3" || PS4_component == "LS3")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+290), (y+103), FT_Oparraywitherr[0], 'blue');
				OutputLabel((x+350), (y+103), FT_Oparraywitherr[1], 'blue');
				OutputLabel((x+410), (y+103), FT_Oparraywitherr[2], 'red');

				
				//pass value for min max of conected transmitter
				FT_OpMinMaxArr.push(FT_Oparraywitherr[0]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[1]);
				
				
				
				FTmax = Math.max.apply(null,FT_OpMinMaxArr);
				FTmin = Math.min.apply(null,FT_OpMinMaxArr);
				
				
				
			}
			if(FCS_transnum == 2 &&(PS4_component =="HS4" || PS4_component == "LS4")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+290), (y+103), FT_Oparraywitherr[0], 'blue');
				OutputLabel((x+350), (y+103), FT_Oparraywitherr[1], 'blue');
				OutputLabel((x+410), (y+103), FT_Oparraywitherr[2], 'red');
				OutputLabel((x+470), (y+103), FT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				FT_OpMinMaxArr.push(FT_Oparraywitherr[0]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[1]);
				
			
				
				FTmax = Math.max.apply(null,FT_OpMinMaxArr);
				FTmin = Math.min.apply(null,FT_OpMinMaxArr);
				
				
				
			}
			
			
			if(FCS_transnum == 3 &&(PS4_component =="HS2" || PS4_component == "LS2")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+290), (y+103), FT_Oparraywitherr[0], 'blue');
				OutputLabel((x+350), (y+103), FT_Oparraywitherr[1], 'blue');
				OutputLabel((x+410), (y+103), FT_Oparraywitherr[2], 'red');
				
				//pass value for min max of conected transmitter
				FT_OpMinMaxArr.push(FT_Oparraywitherr[0]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[1]);
				
				
				
				FTmax = Math.max.apply(null,FT_OpMinMaxArr);
				FTmin = Math.min.apply(null,FT_OpMinMaxArr);
				
				
				
			}
			
			if(FCS_transnum == 3 &&(PS4_component =="HS3" || PS4_component == "LS3")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+290), (y+103), FT_Oparraywitherr[0], 'blue');
				OutputLabel((x+350), (y+103), FT_Oparraywitherr[1], 'blue');
				OutputLabel((x+410), (y+103), FT_Oparraywitherr[2], 'blue');
				
				//pass value for min max of conected transmitter
				FT_OpMinMaxArr.push(FT_Oparraywitherr[0]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[1]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[2]);
				
			
				
				FTmax = Math.max.apply(null,FT_OpMinMaxArr);
				FTmin = Math.min.apply(null,FT_OpMinMaxArr);				
				
			}
			if(FCS_transnum == 3 &&(PS4_component =="HS4" || PS4_component == "LS4")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+290), (y+103), FT_Oparraywitherr[0], 'blue');
				OutputLabel((x+350), (y+103), FT_Oparraywitherr[1], 'blue');
				OutputLabel((x+410), (y+103), FT_Oparraywitherr[2], 'blue');
				OutputLabel((x+470), (y+103), FT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				FT_OpMinMaxArr.push(FT_Oparraywitherr[0]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[1]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[2]);
				
			
				
				FTmax = Math.max.apply(null,FT_OpMinMaxArr);
				FTmin = Math.min.apply(null,FT_OpMinMaxArr);				
				
			}
			
			
			if(FCS_transnum == 4 &&(PS4_component =="HS2" || PS4_component == "LS2")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+290), (y+103), FT_Oparraywitherr[0], 'blue');
				OutputLabel((x+350), (y+103), FT_Oparraywitherr[1], 'blue');
				OutputLabel((x+410), (y+103), FT_Oparraywitherr[2], 'red');
				OutputLabel((x+470), (y+103), FT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				FT_OpMinMaxArr.push(FT_Oparraywitherr[0]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[1]);	
				
				
				FTmax = Math.max.apply(null,FT_OpMinMaxArr);
				FTmin = Math.min.apply(null,FT_OpMinMaxArr);
				
				
				
			}
			if(FCS_transnum == 4 &&(PS4_component =="HS3" || PS4_component == "LS3")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+290), (y+103), FT_Oparraywitherr[0], 'blue');
				OutputLabel((x+350), (y+103), FT_Oparraywitherr[1], 'blue');
				OutputLabel((x+410), (y+103), FT_Oparraywitherr[2], 'blue');
				OutputLabel((x+470), (y+103), FT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				FT_OpMinMaxArr.push(FT_Oparraywitherr[0]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[1]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[2]);	
				
				
				FTmax = Math.max.apply(null,FT_OpMinMaxArr);
				FTmin = Math.min.apply(null,FT_OpMinMaxArr);
				
				
				
			}
			if(FCS_transnum == 4 &&(PS4_component =="HS4" || PS4_component == "LS4")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+290), (y+103), FT_Oparraywitherr[0], 'blue');
				OutputLabel((x+350), (y+103), FT_Oparraywitherr[1], 'blue');
				OutputLabel((x+410), (y+103), FT_Oparraywitherr[2], 'blue');
				OutputLabel((x+470), (y+103), FT_Oparraywitherr[3], 'blue');
				
				//pass value for min max of conected transmitter
				FT_OpMinMaxArr.push(FT_Oparraywitherr[0]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[1]);
				FT_OpMinMaxArr.push(FT_Oparraywitherr[2]);	
				FT_OpMinMaxArr.push(FT_Oparraywitherr[3]);	
				
				
				FTmax = Math.max.apply(null,FT_OpMinMaxArr);
				FTmin = Math.min.apply(null,FT_OpMinMaxArr);
				
				
				
			}
			
//			console.log(FT_OpMinMaxArr);
//			console.log(" max = "+ FTmax + "  min = " + FTmin);
			if(FCS_PS4Condition1 =="lowest"){
				
				FY201_Output = FTmin;
			
			}
			if(FCS_PS4Condition1 == "highest"){
				
				FY201_Output = FTmax;
				
			}
			
			
			
			OutputLabel((x+280), (y), FY201_Output, 'blue');
			OutputLabel((x+370), (y-60), FY201_Output, 'blue');
			
			FY201OutputTobeHide = OutputLabel((x+325), (y-100), FY201_Output, 'blue');
		
			
			
		}
		
		if(PS4_radiotypeVal == "limiter"){
			
			if(FCS_transnum == 2){
				OutputLabel((x+290), (y+103), FT_Oparraywitherr[0], 'blue');
				OutputLabel((x+350), (y+103), FT_Oparraywitherr[1], 'blue');
			}
			if(FCS_transnum == 3){
				OutputLabel((x+290), (y+103), FT_Oparraywitherr[0], 'blue');
				OutputLabel((x+350), (y+103), FT_Oparraywitherr[1], 'blue');
				OutputLabel((x+410), (y+103), FT_Oparraywitherr[2], 'blue');
				
			}
			if(FCS_transnum == 4){
				OutputLabel((x+290), (y+103), FT_Oparraywitherr[0], 'blue');
				OutputLabel((x+350), (y+103), FT_Oparraywitherr[1], 'blue');
				OutputLabel((x+410), (y+103), FT_Oparraywitherr[2], 'blue');
				OutputLabel((x+470), (y+103), FT_Oparraywitherr[3], 'blue');
			}
			
			
			
			
			FY201_Output = 0;
		
			transtofy201.hide();
//			ly201totrans.hide();
			
			OutputLabel((x+280), (y), FY201_Output, 'red');
			OutputLabel((x+370), (y-60), FY201_Output, 'red');
			
			FY201OutputTobeHide = OutputLabel((x+325), (y-100), FY201_Output, 'red');
			
		}
		
// calculation for PS1 placed component
		
		if(PS1_radiotypeVal == "selector"){
			
			fic100toPS1comp.hide();
			
			PS1Comp_Output = 0;
			
			OutputLabel((x+520), (y-60), PS1Comp_Output, 'red');		
		}
		
		
		if(PS1_radiotypeVal == "limiter"){
			
			
			
			if(FY201_Output == 0){
				
				PS1Comp_Output = 0;				
				OutputLabel((x+520), (y-60), PS1Comp_Output, 'red');	
				
			}
				
				
				if(PS1_component == "HL"){
					
					paper.text((x+430), (y-10), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					OutputLabel((x+455), (y-10), FCS_PS1Val, 'blue');
					
					paper.text((x+475), (y-10), " %").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					
					
					if(FY201_Output >= FCS_PS1Val){
						
						PS1Comp_Output = FCS_PS1Val;
						OutputLabel((x+520), (y-60), PS1Comp_Output, 'red');	
					}else{
						PS1Comp_Output = FY201_Output;
						OutputLabel((x+520), (y-60), PS1Comp_Output, 'blue');	
						
					}
					
					
				}
				
				if(PS1_component == "LL"){
					
					paper.text((x+430), (y-10), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					OutputLabel((x+455), (y-10), FCS_PS1Val, 'blue');
					
					paper.text((x+475), (y-10), " %").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					
					if(FY201_Output != 0){
						
						if(FY201_Output <= FCS_PS1Val){
							
							PS1Comp_Output = FCS_PS1Val;
							OutputLabel((x+520), (y-60), PS1Comp_Output, 'red');	
						}else{
							
							PS1Comp_Output = FY201_Output;
							OutputLabel((x+520), (y-60), PS1Comp_Output, 'blue');	
							
						}
						
					}	
					
					
					
				}
				if(PS1_component == "RL"){
					
					paper.text((x+430), (y-10), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					OutputLabel((x+455), (y-10), FCS_PS3Val, 'blue');
					
					paper.text((x+490), (y-10), " %/Sec").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					paper.text((x+458), (y+10), "a = "+FCS_changeinRLVal+" %/Sec").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					if(FCS_changeinRLVal > FCS_PS3Val){
						
						PS1Comp_Output = 0;
						OutputLabel((x+520), (y-60), PS1Comp_Output, 'red');
						
					}else{
						if(FY201_Output != 0){
							PS1Comp_Output = 1;
							OutputLabel((x+520), (y-60), PS1Comp_Output, 'blue');	
						}
						
						
					}
					
					
				}
				
			
			
			
		}
		
		
// calculation for PS2 placed component
		
		if(PS2_radiotypeVal == "limiter"){
			
			lt100toPS2Comp.hide();
			LT100_Outputtobehide.hide();
			
			fy201toPS2Comp.hide();
			FY201OutputTobeHide.hide();
			
			
			PS2Comp_Output = 0;
			
			OutputLabel((x+350), (y-185), PS2Comp_Output, 'red');		
		}	
		if(PS2_radiotypeVal == "selector"){
				
				if(PS2_component == "HS2"){					
					
					PS2Comp_Output = Math.max(tanklevel, FY201_Output);
					
					OutputLabel((x+350), (y-185), PS2Comp_Output, 'blue');
					
				}else if(PS2_component == "LS2"){
					
					PS2Comp_Output = Math.min(tanklevel, FY201_Output);
					
					OutputLabel((x+350), (y-185), PS2Comp_Output, 'blue');
				}else {
					
					
					PS2Comp_Output = 0;					
					OutputLabel((x+350), (y-185), PS2Comp_Output, 'red');
					
				}
				
				
				
				
				
			
			
			
			
			
		}
		
		
		
// calculation for PS3 placed component
		
		if(PS3_radiotypeVal == "selector"){
			
			PS1comptoPS3comp.hide();
			
			PS3Comp_Output = 0;
			
			OutputLabel((x+541), (y+58), PS3Comp_Output, 'red');		
		}	
		if(PS3_radiotypeVal == "limiter"){
			
			if(FY201_Output == 0 || PS1Comp_Output == 0 ){
				
				PS3Comp_Output = 0;
				
				OutputLabel((x+541), (y+58), PS3Comp_Output, 'red');
			}
			if(PS3_component == "HL"){
				
				paper.text((x+610), (y+18), "X = ").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				OutputLabel((x+635), (y+18), FCS_PS1Val, 'blue');
				
				paper.text((x+655), (y+18), " %").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				
				if(PS1Comp_Output >= FCS_PS1Val){
					
					PS3Comp_Output = FCS_PS1Val;
					OutputLabel((x+541), (y+58), PS3Comp_Output, 'red');
					//fy100 o/p
					OutputLabel((x+541), (y+150), PS3Comp_Output, 'red');
				}else{
					PS3Comp_Output = PS1Comp_Output;
					OutputLabel((x+541), (y+58), PS3Comp_Output, 'blue');
					//fy100 o/p
					OutputLabel((x+541), (y+150), PS3Comp_Output, 'blue');
					
				}
				
				
			}
			
			if(PS3_component == "LL"){
				
				paper.text((x+610), (y+18), "X = ").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				OutputLabel((x+635), (y+18), FCS_PS1Val, 'blue');
				
				paper.text((x+655), (y+18), " %").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				
				if(PS1Comp_Output != 0){
					if(PS1Comp_Output <= FCS_PS1Val){
						
						PS3Comp_Output = FCS_PS1Val;
						OutputLabel((x+541), (y+58), PS3Comp_Output, 'red');
						//fy100 o/p
						OutputLabel((x+541), (y+150), PS3Comp_Output, 'red');
					}else{
						
						PS3Comp_Output = PS1Comp_Output;
						OutputLabel((x+541), (y+58), PS3Comp_Output, 'blue');
						//fy100 o/p
						OutputLabel((x+541), (y+150), PS3Comp_Output, 'blue');
						
					}
				}
				
				
				
			}
			
			if(PS3_component == "RL"){
				
				paper.text((x+610), (y+18), "X = ").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				OutputLabel((x+635), (y+18), FCS_PS3Val, 'blue');
				
				paper.text((x+665), (y+18), " %/Sec").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				paper.text((x+638), (y+38), "a = "+FCS_changeinRLVal+" %/Sec").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				if(FCS_changeinRLVal > FCS_PS3Val){
					
					PS3Comp_Output = 0;
					OutputLabel((x+541), (y+58), PS3Comp_Output, 'red');
					//fy100 o/p
					OutputLabel((x+541), (y+150), PS3Comp_Output, 'red');
					
				}else{
					if(PS1Comp_Output != 0){
						PS3Comp_Output = 1;
						OutputLabel((x+541), (y+58), PS3Comp_Output, 'blue');
						//fy100 o/p
						OutputLabel((x+541), (y+150), PS1Comp_Output, 'blue');
					}
					
					
				}
				
				
			}
			
		}
		
		
		
		
		
		
	}
});