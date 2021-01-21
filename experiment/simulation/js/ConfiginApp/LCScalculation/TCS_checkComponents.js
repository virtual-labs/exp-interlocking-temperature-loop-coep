$(function () {
	
	
	TCS_checkPlacedComponents = function(tanklevel){

// draw Components		
//		drawtempComponents();
		

		lbl1.hide();
		lbl2.hide();
		lbl3.hide();
		lbl4.hide();
		lbl5.hide();
		lbl6.hide();
		lbl7.hide();
		lbl8.hide();
		lbl9.hide();
		lbl10.hide();
		
		lbl13.hide();
		lbl14.hide();
		lbl15.hide();
		
		lbl16.hide();
		lbl17.hide();
		lbl18.hide();

		
// Calculate Output of transmitters with random error		
		TT_Oparraywitherr = [];		
		TT_OpMinMaxArr = [];
		
		for(var i=1; i<=4; i++){
			
			err = randomErr_LC(LC_RandomErrArr);
//			console.log(err);
			var val = parseFloat(tanklevel) + parseFloat(err);
			TT_Oparraywitherr.push(val);
		}
			
//		console.log(TT_Oparraywitherr);
		
		
		
// calculation for PS4 placed component		
		if(PS4_radiotypeVal == "selector"){
			
			if(TCS_transnum == 2 &&(PS4_component =="HS2" || PS4_component == "LS2")){
				//display connected & not connected transmitter o/p
				lbl1 = OutputLabel((x+50), (y-75), TT_Oparraywitherr[0], 'blue');
				lbl2 = OutputLabel((x+50), (y-125), TT_Oparraywitherr[1], 'blue');
				
				//pass value for min max of conected transmitter
				TT_OpMinMaxArr.push(TT_Oparraywitherr[0]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[1]);
				
				
				
				TTmax = Math.max.apply(null,TT_OpMinMaxArr);
				TTmin = Math.min.apply(null,TT_OpMinMaxArr);
				
				
				
			}
			if(TCS_transnum == 2 &&(PS4_component =="HS3" || PS4_component == "LS3")){
				//display connected & not connected transmitter o/p
				lbl1 = OutputLabel((x+50), (y-75), TT_Oparraywitherr[0], 'blue');
				lbl2 = OutputLabel((x+50), (y-125), TT_Oparraywitherr[1], 'blue');
				lbl3 = OutputLabel((x+50), (y-175), TT_Oparraywitherr[2], 'red');
				
			
				
				
				//pass value for min max of conected transmitter
				TT_OpMinMaxArr.push(TT_Oparraywitherr[0]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[1]);
				
				
				
				TTmax = Math.max.apply(null,TT_OpMinMaxArr);
				TTmin = Math.min.apply(null,TT_OpMinMaxArr);
				
				
				
			}
			if(TCS_transnum == 2 &&(PS4_component =="HS4" || PS4_component == "LS4")){
				//display connected & not connected transmitter o/p
				lbl1 = OutputLabel((x+50), (y-75), TT_Oparraywitherr[0], 'blue');
				lbl2 = OutputLabel((x+50), (y-125), TT_Oparraywitherr[1], 'blue');
				lbl3 = OutputLabel((x+50), (y-175), TT_Oparraywitherr[2], 'red');
				lbl4 = OutputLabel((x+50), (y-225), TT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				TT_OpMinMaxArr.push(TT_Oparraywitherr[0]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[1]);
				
			
				
				TTmax = Math.max.apply(null,TT_OpMinMaxArr);
				TTmin = Math.min.apply(null,TT_OpMinMaxArr);
				
				
	
				
				
				
			}
			
			
			if(TCS_transnum == 3 &&(PS4_component =="HS2" || PS4_component == "LS2")){
				//display connected & not connected transmitter o/p
				lbl1 = OutputLabel((x+50), (y-75), TT_Oparraywitherr[0], 'blue');
				lbl2 = OutputLabel((x+50), (y-125), TT_Oparraywitherr[1], 'blue');
				lbl3 = OutputLabel((x+50), (y-175), TT_Oparraywitherr[2], 'red');
				
				//pass value for min max of conected transmitter
				TT_OpMinMaxArr.push(TT_Oparraywitherr[0]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[1]);
				
				
				
				TTmax = Math.max.apply(null,TT_OpMinMaxArr);
				TTmin = Math.min.apply(null,TT_OpMinMaxArr);
				
				
			}
			
			if(TCS_transnum == 3 &&(PS4_component =="HS3" || PS4_component == "LS3")){
				//display connected & not connected transmitter o/p
				lbl1 = OutputLabel((x+50), (y-75), TT_Oparraywitherr[0], 'blue');
				lbl2 = OutputLabel((x+50), (y-125), TT_Oparraywitherr[1], 'blue');
				lbl3 = OutputLabel((x+50), (y-175), TT_Oparraywitherr[2], 'blue');
				
				//pass value for min max of conected transmitter
				TT_OpMinMaxArr.push(TT_Oparraywitherr[0]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[1]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[2]);
				
				
				TTmax = Math.max.apply(null,TT_OpMinMaxArr);
				TTmin = Math.min.apply(null,TT_OpMinMaxArr);				
				
			}
			if(TCS_transnum == 3 &&(PS4_component =="HS4" || PS4_component == "LS4")){
				//display connected & not connected transmitter o/p
				lbl1 = OutputLabel((x+50), (y-75), TT_Oparraywitherr[0], 'blue');
				lbl2 = OutputLabel((x+50), (y-125), TT_Oparraywitherr[1], 'blue');
				lbl2 = OutputLabel((x+50), (y-175), TT_Oparraywitherr[2], 'blue');
				lbl4 = OutputLabel((x+50), (y-225), TT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				TT_OpMinMaxArr.push(TT_Oparraywitherr[0]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[1]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[2]);	
				
				
				TTmax = Math.max.apply(null,TT_OpMinMaxArr);
				TTmin = Math.min.apply(null,TT_OpMinMaxArr);				
				
			}
			
			
			if(TCS_transnum == 4 &&(PS4_component =="HS2" || PS4_component == "LS2")){
				//display connected & not connected transmitter o/p
				lbl1 = OutputLabel((x+50), (y-75), TT_Oparraywitherr[0], 'blue');
				lbl2 = OutputLabel((x+50), (y-125), TT_Oparraywitherr[1], 'blue');
				lbl3 = OutputLabel((x+50), (y-175), TT_Oparraywitherr[2], 'red');
				lbl4 = OutputLabel((x+50), (y-225), TT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				TT_OpMinMaxArr.push(TT_Oparraywitherr[0]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[1]);	
				
				
				TTmax = Math.max.apply(null,TT_OpMinMaxArr);
				TTmin = Math.min.apply(null,TT_OpMinMaxArr);
				
				
				
			}
			if(TCS_transnum == 4 &&(PS4_component =="HS3" || PS4_component == "LS3")){
				//display connected & not connected transmitter o/p
				lbl1 = OutputLabel((x+50), (y-75), TT_Oparraywitherr[0], 'blue');
				lbl2 = OutputLabel((x+50), (y-125), TT_Oparraywitherr[1], 'blue');
				lbl3 = OutputLabel((x+50), (y-175), TT_Oparraywitherr[2], 'blue');
				lbl4 = OutputLabel((x+50), (y-225), TT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				TT_OpMinMaxArr.push(TT_Oparraywitherr[0]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[1]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[2]);	
				
				
				TTmax = Math.max.apply(null,TT_OpMinMaxArr);
				TTmin = Math.min.apply(null,TT_OpMinMaxArr);
				
				
				
				
			}
			if(TCS_transnum == 4 &&(PS4_component =="HS4" || PS4_component == "LS4")){
				//display connected & not connected transmitter o/p
				lbl1 = OutputLabel((x+50), (y-75), TT_Oparraywitherr[0], 'blue');
				lbl2 = OutputLabel((x+50), (y-125), TT_Oparraywitherr[1], 'blue');
				lbl3 = OutputLabel((x+50), (y-175), TT_Oparraywitherr[2], 'blue');
				lbl4 = OutputLabel((x+50), (y-225), TT_Oparraywitherr[3], 'blue');
				
				//pass value for min max of conected transmitter
				TT_OpMinMaxArr.push(TT_Oparraywitherr[0]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[1]);
				TT_OpMinMaxArr.push(TT_Oparraywitherr[2]);	
				TT_OpMinMaxArr.push(TT_Oparraywitherr[3]);	
				
				
				TTmax = Math.max.apply(null,TT_OpMinMaxArr);
				TTmin = Math.min.apply(null,TT_OpMinMaxArr);
				
				
			}
			
//			console.log(TT_OpMinMaxArr);
//			console.log(" max = "+ TTmax + "  min = " + TTmin);
			if(TCS_PS4Condition1 =="highest" && TCS_PS4Condition2 == "lowest"){
				
				TY201_Output = TTmin;
				TY101_Output = TTmax;
			}else{
				
				TY201_Output = TTmax;
				TY101_Output = TTmin;
			}
			
			
			
			lbl5 = OutputLabel((x+60), (y-275), TY201_Output, 'blue');
			lbl6 = OutputLabel((x-75), (y-215), TY101_Output, 'blue');
			
			
		}
		
		if(PS4_radiotypeVal == "limiter"){
			
			if(TCS_transnum == 2){
				lbl1 = OutputLabel((x+50), (y-75), TT_Oparraywitherr[0], 'blue');
				lbl2 = OutputLabel((x+50), (y-125), TT_Oparraywitherr[1], 'blue');
			}
			if(TCS_transnum == 3){
				lbl1 = OutputLabel((x+50), (y-75), TT_Oparraywitherr[0], 'blue');
				lbl2 = OutputLabel((x+50), (y-125), TT_Oparraywitherr[1], 'blue');
				lbl3 = OutputLabel((x+50), (y-175), TT_Oparraywitherr[2], 'blue');
			}
			if(TCS_transnum == 4){
				lbl1 = OutputLabel((x+50), (y-75), TT_Oparraywitherr[0], 'blue');
				lbl2 = OutputLabel((x+50), (y-125), TT_Oparraywitherr[1], 'blue');
				lbl3 = OutputLabel((x+50), (y-175), TT_Oparraywitherr[2], 'blue');
				lbl4 = OutputLabel((x+50), (y-225), TT_Oparraywitherr[3], 'blue');
			}
			
			
			
			
			TY201_Output = 0;
			TY101_Output = 0;
			
			transtoPS4Comp.hide();
			
			lbl5 = OutputLabel((x+60), (y-275), TY201_Output, 'red');
			lbl6 = OutputLabel((x-75), (y-215), TY101_Output, 'red');
			
		}
		
// calculation for PS1 placed component
		
		if(PS1_radiotypeVal == "selector"){
			
			PS1Comptofic201.hide();
			
			PS1Comp_Output = 0;
			
			lbl7 = OutputLabel((x+430), (y+65), PS1Comp_Output, 'red');		
		}
		
		
		if(PS1_radiotypeVal == "limiter"){
			
				
				if(PS1_component == "HL"){
					
//					lbl8 = OutputLabel((x+370), (y+5), "X = "+TCS_PS1Val+" %", 'blue');
					
					lbl8 = OutputLabel((x+470), (y+5), "X = "+TCS_PS1Val+" %", 'blue');
					
					if(ChangeUserDemand >= TCS_PS1Val){
						
						PS1Comp_Output = TCS_PS1Val;
						lbl7 = OutputLabel((x+430), (y+65), PS1Comp_Output, 'red');		
					}else{
						PS1Comp_Output = ChangeUserDemand;
						lbl7 = OutputLabel((x+430), (y+65), PS1Comp_Output, 'blue');		
						
					}
					
					
				}
				
				if(PS1_component == "LL"){
					
					lbl8 = OutputLabel((x+470), (y+5), "X = "+TCS_PS1Val+" %", 'blue');
						
						if(ChangeUserDemand <= TCS_PS1Val){
							
							PS1Comp_Output = TCS_PS1Val;
							lbl7 = OutputLabel((x+430), (y+65), PS1Comp_Output, 'red');
						}else{
							
							PS1Comp_Output = ChangeUserDemand;
							lbl7 = OutputLabel((x+430), (y+65), PS1Comp_Output, 'blue');
							
						}
					
				}
				if(PS1_component == "RL"){
					
					lbl8 = OutputLabel((x+470), (y+5), "X = "+TCS_PS3Val+" %/Sec", 'blue');
					
					lbl16 = OutputLabel((x+470), (y-20), "a = "+TCS_changeinRLVal+" %/Sec", 'blue');
					
					if(TCS_changeinRLVal > TCS_PS3Val){
						
						PS1Comp_Output = 0;
						lbl7 = OutputLabel((x+430), (y+65), PS1Comp_Output, 'red');	
						
					}else{

							PS1Comp_Output = 1;
							lbl7 = OutputLabel((x+430), (y+65), PS1Comp_Output, 'blue');	

						
						
					}
					
					
				}
				
			
			
			
		}
		
		
// calculation for PS2 placed component
		
		if(PS2_radiotypeVal == "selector"){
			
			PS2ComptoFIC301.hide();
			
			PS2Comp_Output = 0;
			
			lbl9 = OutputLabel((x+320), (y-215), PS2Comp_Output, 'red');		
		}	
		if(PS2_radiotypeVal == "limiter"){
			

				
				if(PS2_component == "HL"){
					
					lbl10 = OutputLabel((x+375), (y-270), "X = "+TCS_PS2Val+" %", 'blue');
					
					if(ChangeinFolw >= TCS_PS2Val){
						
						PS2Comp_Output = TCS_PS2Val;
						lbl9 = OutputLabel((x+320), (y-215), PS2Comp_Output, 'red');
					}else{
						PS2Comp_Output = ChangeinFolw;
						lbl9 = OutputLabel((x+320), (y-215), PS2Comp_Output, 'blue');
						
					}
					
					
				}
				if(PS2_component == "LL"){
					
					lbl10 = OutputLabel((x+375), (y-270), "X = "+TCS_PS2Val+" %", 'blue');
					

						if(ChangeinFolw <= TCS_PS2Val){
							
							PS2Comp_Output = TCS_PS2Val;
							lbl9 = OutputLabel((x+320), (y-215), PS2Comp_Output, 'red');
						}else{
							PS2Comp_Output = ChangeinFolw;
							lbl9 = OutputLabel((x+320), (y-215), PS2Comp_Output, 'blue');
							
						}
						
						

					
					
					
				}
				if(PS2_component == "RL"){
					
					lbl10 = OutputLabel((x+375), (y-270), "X = "+TCS_PS3Val+" %/Sec", 'blue');
					
					lbl17 = OutputLabel((x+375), (y-295), "a = "+TCS_changeinRLVal+" %/Sec", 'blue');
					
					if(TCS_changeinRLVal > TCS_PS3Val){
						
						PS2Comp_Output = 0;
						lbl9 = OutputLabel((x+320), (y-215), PS2Comp_Output, 'red');		
						
					}else{

						PS2Comp_Output = 1;
						lbl9 = OutputLabel((x+320), (y-215), PS2Comp_Output, 'blue');		

						
						
					}
					
				}
				
				
				
			
			
			
			
			
		}
		
		
		
// calculation for PS3 placed component
		
		if(PS3_radiotypeVal == "selector"){
			
			PS1ComptoPS3Comp.hide();
			
			PS3Comp_Output = 0;
			
			lbl13 = OutputLabel((x+350), (y+120), PS3Comp_Output, 'red');
			//o/p of FY 203
			lbl15 = OutputLabel((x+395), (y+200), PS3Comp_Output, 'red');
		}	
		if(PS3_radiotypeVal == "limiter"){
			
			if(PS1Comp_Output == 0 ){
				
				PS3Comp_Output = 0;
				
				lbl13 = OutputLabel((x+350), (y+120), PS3Comp_Output, 'red');
				//o/p of FY 203
				lbl15 = OutputLabel((x+395), (y+200), PS3Comp_Output, 'red');
			}
			if(PS3_component == "HL"){
				
				lbl14 = OutputLabel((x+370), (y+5), "X = "+TCS_PS1Val+" %", 'blue');
				
				if(PS1Comp_Output != 0){
					
					if(PS1Comp_Output >= TCS_PS1Val){
						
						PS3Comp_Output = TCS_PS1Val;
						lbl13 = OutputLabel((x+350), (y+120), PS3Comp_Output, 'red');
						//o/p of FY 203
						lbl15 = OutputLabel((x+395), (y+200), PS3Comp_Output, 'red');
					}else{
						PS3Comp_Output = PS1Comp_Output;
						lbl13 = OutputLabel((x+350), (y+120), PS3Comp_Output, 'blue');
						//o/p of FY 203
						lbl15 = OutputLabel((x+395), (y+200), PS3Comp_Output, 'blue');
						
					}
				}
				
				
				
			}
			
			if(PS3_component == "LL"){
				
				lbl14 = OutputLabel((x+370), (y+5), "X = "+TCS_PS1Val+" %", 'blue');
				
				
				if(PS1Comp_Output != 0){
					if(PS1Comp_Output <= TCS_PS1Val){
						
						PS3Comp_Output = TCS_PS1Val;
						lbl13 = OutputLabel((x+350), (y+120), PS3Comp_Output, 'red');
						//o/p of FY 203
						lbl15 = OutputLabel((x+395), (y+200), PS3Comp_Output, 'red');
					}else{
						
						PS3Comp_Output = PS1Comp_Output;
						lbl13 = OutputLabel((x+350), (y+120), PS3Comp_Output, 'blue');
						//o/p of FY 203
						lbl15 = OutputLabel((x+395), (y+200), PS3Comp_Output, 'blue');
						
					}
				}
				
				
				
			}
			
			if(PS3_component == "RL"){
				
				lbl14 = OutputLabel((x+370), (y+5), "X = "+TCS_PS3Val+" %/Sec", 'blue');	
				
				lbl18 = OutputLabel((x+370), (y-20), "a = "+TCS_changeinRLVal+" %/Sec", 'blue');
				
				if(PS1Comp_Output != 0){
				if(TCS_changeinRLVal > TCS_PS3Val){
					
					PS3Comp_Output = 0;
					lbl13 = OutputLabel((x+350), (y+120), PS3Comp_Output, 'red');
					//o/p of FY 203
					lbl15 = OutputLabel((x+395), (y+200), PS3Comp_Output, 'red');
				}else{
					
						PS3Comp_Output = 1;
						lbl13 = OutputLabel((x+350), (y+120), PS3Comp_Output, 'blue');
						//o/p of FY 203
						lbl15 = OutputLabel((x+395), (y+200), PS1Comp_Output, 'blue');
					}
					
					
				}
				
				
			}
			
		}
		
		
		
		
		
		
	}
});