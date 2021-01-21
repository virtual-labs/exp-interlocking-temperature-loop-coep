$(function () {
	
	
	LCS_checkPlacedComponents = function(tanklevel){
		

		

		

// draw Components		
		drawComponents();
		initiallevel.hide();
		tanklevelHeight((x+2), (y+110), tanklevel, 'blue');
		drawWaterLevel(tanklevel);
		
// Calculate Output of transmitters with random error		
		LT_Oparraywitherr = [];		
		LT_OpMinMaxArr = [];
		
		for(var i=1; i<=4; i++){
			
			err = randomErr_LC(LC_RandomErrArr);
//			console.log(err);
			var val = parseFloat(tanklevel) + parseFloat(err);
			LT_Oparraywitherr.push(val);
		}
			
//		console.log(LT_Oparraywitherr);
		
		
		
// calculation for PS4 placed component		
		if(PS4_radiotypeVal == "selector"){
			
			if(transnum == 2 &&(PS4_component =="HS2" || PS4_component == "LS2")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+335), (y+30), LT_Oparraywitherr[0], 'blue');
				OutputLabel((x+335), (y+80), LT_Oparraywitherr[1], 'blue');
				
				//pass value for min max of conected transmitter
				LT_OpMinMaxArr.push(LT_Oparraywitherr[0]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[1]);
				
				
				
				LTmax = Math.max.apply(null,LT_OpMinMaxArr);
				LTmin = Math.min.apply(null,LT_OpMinMaxArr);
				
				
				
			}
			if(transnum == 2 &&(PS4_component =="HS3" || PS4_component == "LS3")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+335), (y+30), LT_Oparraywitherr[0], 'blue');
				OutputLabel((x+335), (y+80), LT_Oparraywitherr[1], 'blue');
				OutputLabel((x+335), (y+130), LT_Oparraywitherr[2], 'red');
				
				//pass value for min max of conected transmitter
				LT_OpMinMaxArr.push(LT_Oparraywitherr[0]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[1]);
				
				
				
				LTmax = Math.max.apply(null,LT_OpMinMaxArr);
				LTmin = Math.min.apply(null,LT_OpMinMaxArr);
				
				
				
			}
			if(transnum == 2 &&(PS4_component =="HS4" || PS4_component == "LS4")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+335), (y+30), LT_Oparraywitherr[0], 'blue');
				OutputLabel((x+335), (y+80), LT_Oparraywitherr[1], 'blue');
				OutputLabel((x+335), (y+130), LT_Oparraywitherr[2], 'red');
				OutputLabel((x+335), (y+180), LT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				LT_OpMinMaxArr.push(LT_Oparraywitherr[0]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[1]);
				
			
				
				LTmax = Math.max.apply(null,LT_OpMinMaxArr);
				LTmin = Math.min.apply(null,LT_OpMinMaxArr);
				
				
				
			}
			
			
			if(transnum == 3 &&(PS4_component =="HS2" || PS4_component == "LS2")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+335), (y+30), LT_Oparraywitherr[0], 'blue');
				OutputLabel((x+335), (y+80), LT_Oparraywitherr[1], 'blue');
				OutputLabel((x+335), (y+130), LT_Oparraywitherr[2], 'red');
				
				//pass value for min max of conected transmitter
				LT_OpMinMaxArr.push(LT_Oparraywitherr[0]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[1]);
				
				
				
				LTmax = Math.max.apply(null,LT_OpMinMaxArr);
				LTmin = Math.min.apply(null,LT_OpMinMaxArr);
				
				
				
			}
			
			if(transnum == 3 &&(PS4_component =="HS3" || PS4_component == "LS3")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+335), (y+30), LT_Oparraywitherr[0], 'blue');
				OutputLabel((x+335), (y+80), LT_Oparraywitherr[1], 'blue');
				OutputLabel((x+335), (y+130), LT_Oparraywitherr[2], 'blue');
				
				//pass value for min max of conected transmitter
				LT_OpMinMaxArr.push(LT_Oparraywitherr[0]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[1]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[2]);
				
			
				
				LTmax = Math.max.apply(null,LT_OpMinMaxArr);
				LTmin = Math.min.apply(null,LT_OpMinMaxArr);				
				
			}
			if(transnum == 3 &&(PS4_component =="HS4" || PS4_component == "LS4")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+335), (y+30), LT_Oparraywitherr[0], 'blue');
				OutputLabel((x+335), (y+80), LT_Oparraywitherr[1], 'blue');
				OutputLabel((x+335), (y+130), LT_Oparraywitherr[2], 'blue');
				OutputLabel((x+335), (y+180), LT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				LT_OpMinMaxArr.push(LT_Oparraywitherr[0]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[1]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[2]);
				
			
				
				LTmax = Math.max.apply(null,LT_OpMinMaxArr);
				LTmin = Math.min.apply(null,LT_OpMinMaxArr);				
				
			}
			
			
			if(transnum == 4 &&(PS4_component =="HS2" || PS4_component == "LS2")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+335), (y+30), LT_Oparraywitherr[0], 'blue');
				OutputLabel((x+335), (y+80), LT_Oparraywitherr[1], 'blue');
				OutputLabel((x+335), (y+130), LT_Oparraywitherr[2], 'red');
				OutputLabel((x+335), (y+180), LT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				LT_OpMinMaxArr.push(LT_Oparraywitherr[0]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[1]);	
				
				
				LTmax = Math.max.apply(null,LT_OpMinMaxArr);
				LTmin = Math.min.apply(null,LT_OpMinMaxArr);
				
				
				
			}
			if(transnum == 4 &&(PS4_component =="HS3" || PS4_component == "LS3")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+335), (y+30), LT_Oparraywitherr[0], 'blue');
				OutputLabel((x+335), (y+80), LT_Oparraywitherr[1], 'blue');
				OutputLabel((x+335), (y+130), LT_Oparraywitherr[2], 'blue');
				OutputLabel((x+335), (y+180), LT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				LT_OpMinMaxArr.push(LT_Oparraywitherr[0]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[1]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[2]);	
				
				
				LTmax = Math.max.apply(null,LT_OpMinMaxArr);
				LTmin = Math.min.apply(null,LT_OpMinMaxArr);
				
				
				
			}
			if(transnum == 4 &&(PS4_component =="HS4" || PS4_component == "LS4")){
				//display connected & not connected transmitter o/p
				OutputLabel((x+335), (y+30), LT_Oparraywitherr[0], 'blue');
				OutputLabel((x+335), (y+80), LT_Oparraywitherr[1], 'blue');
				OutputLabel((x+335), (y+130), LT_Oparraywitherr[2], 'blue');
				OutputLabel((x+335), (y+180), LT_Oparraywitherr[3], 'blue');
				
				//pass value for min max of conected transmitter
				LT_OpMinMaxArr.push(LT_Oparraywitherr[0]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[1]);
				LT_OpMinMaxArr.push(LT_Oparraywitherr[2]);	
				LT_OpMinMaxArr.push(LT_Oparraywitherr[3]);	
				
				
				LTmax = Math.max.apply(null,LT_OpMinMaxArr);
				LTmin = Math.min.apply(null,LT_OpMinMaxArr);
				
				
				
			}
			
//			console.log(LT_OpMinMaxArr);
//			console.log(" max = "+ LTmax + "  min = " + LTmin);
			if(PS4Condition1 =="lowest" && PS4Condition2 == "highest"){
				
				LY201_Output = LTmin;
				LY101_Output = LTmax;
			}else{
				
				LY201_Output = LTmax;
				LY101_Output = LTmin;
			}
			
			
			
			OutputLabel((x+455), (y-5), LY201_Output, 'blue');
			OutputLabel((x+435), (y+160), LY101_Output, 'blue');
			
			
		}
		
		if(PS4_radiotypeVal == "limiter"){
			
			if(transnum == 2){
				OutputLabel((x+335), (y+30), LT_Oparraywitherr[0], 'blue');
				OutputLabel((x+335), (y+80), LT_Oparraywitherr[1], 'blue');
			}
			if(transnum == 3){
				OutputLabel((x+335), (y+30), LT_Oparraywitherr[0], 'blue');
				OutputLabel((x+335), (y+80), LT_Oparraywitherr[1], 'blue');
				OutputLabel((x+335), (y+130), LT_Oparraywitherr[2], 'blue');
			}
			if(transnum == 4){
				OutputLabel((x+335), (y+30), LT_Oparraywitherr[0], 'blue');
				OutputLabel((x+335), (y+80), LT_Oparraywitherr[1], 'blue');
				OutputLabel((x+335), (y+130), LT_Oparraywitherr[2], 'blue');
				OutputLabel((x+335), (y+180), LT_Oparraywitherr[3], 'blue');
			}
			
			
			
			
			LY201_Output = 0;
			LY101_Output = 0;
			
			ly101totrans.hide();
			ly201totrans.hide();
			
			OutputLabel((x+455), (y-5), LY201_Output, 'red');
			OutputLabel((x+435), (y+160), LY101_Output, 'red');
			
		}
		
// calculation for PS1 placed component
		
		if(PS1_radiotypeVal == "selector"){
			
			lic100toPS1comp.hide();
			
			PS1Comp_Output = 0;
			
			OutputLabel((x+545), (y+230), PS1Comp_Output, 'red');		
		}
		
		
		if(PS1_radiotypeVal == "limiter"){
			
			
			
			if(LY101_Output == 0){
				
				PS1Comp_Output = 0;				
				OutputLabel((x+545), (y+230), PS1Comp_Output, 'red');
				
			}
				
				
				if(PS1_component == "HL"){
					
					paper.text((x+565), (y+200), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					OutputLabel((x+590), (y+200), PS1Val, 'blue');
					
					paper.text((x+605), (y+200), " %").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					
					
					if(LY101_Output >= PS1Val){
						
						PS1Comp_Output = PS1Val;
						OutputLabel((x+545), (y+230), PS1Comp_Output, 'red');
					}else{
						PS1Comp_Output = LY101_Output;
						OutputLabel((x+545), (y+230),PS1Comp_Output , 'blue');
						
					}
					
					
				}
				
				if(PS1_component == "LL"){
					
					paper.text((x+565), (y+200), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					});
					
					OutputLabel((x+590), (y+200), PS1Val, 'blue');
					
					paper.text((x+605), (y+200), " %").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}); 
					
					if(LY101_Output != 0){
						
						if(LY101_Output <= PS1Val){
							
							PS1Comp_Output = PS1Val;
							OutputLabel((x+545), (y+230), PS1Comp_Output, 'red');
						}else{
							
							PS1Comp_Output = LY101_Output;
							OutputLabel((x+545), (y+230), PS1Comp_Output, 'blue');
							
						}
						
					}	
					
					
					
				}
				if(PS1_component == "RL"){
					
					paper.text((x+565), (y+200), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					});
					
					OutputLabel((x+590), (y+200), PS3Val, 'blue');
					
					paper.text((x+620), (y+200), "  %/Sec , ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}); 
					
					paper.text((x+700), (y+200), "a = "+changeinRLVal+" %/Sec").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					
					if(changeinRLVal > PS3Val){
						
						PS1Comp_Output = 0;
						OutputLabel((x+545), (y+230), PS1Comp_Output, 'red');
						
					}else{
						if(LY101_Output != 0){
							PS1Comp_Output = 1;
							OutputLabel((x+545), (y+230), PS1Comp_Output, 'blue');
						}
						
						
					}
					
					
				}
				
			
			
			
		}
		
		
// calculation for PS2 placed component
		
		if(PS2_radiotypeVal == "selector"){
			
			lic200toPS2comp.hide();
			
			PS2Comp_Output = 0;
			
			OutputLabel((x+460), (y-100), PS2Comp_Output, 'red');		
		}	
		if(PS2_radiotypeVal == "limiter"){
			
			if(LY201_Output == 0){
				
				PS2Comp_Output = 0;				
				OutputLabel((x+460), (y-100), PS2Comp_Output, 'red');	
				
			}
				
				
				if(PS2_component == "HL"){
					
					paper.text((x+565), (y-80), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					
					OutputLabel((x+590), (y-80), PS2Val, 'blue');
					
					paper.text((x+605), (y-80), " %").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					
					if(LY201_Output >= PS2Val){
						
						PS2Comp_Output = PS2Val;
						OutputLabel((x+460), (y-100), PS2Comp_Output, 'red');
					}else{
						PS2Comp_Output = LY201_Output;
						OutputLabel((x+460), (y-100), PS2Comp_Output, 'blue');
						
					}
					
					
				}
				if(PS2_component == "LL"){
					
					paper.text((x+565), (y-80), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					
					OutputLabel((x+590), (y-80), PS2Val, 'blue');
					
					paper.text((x+605), (y-80), " %").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					if(LY201_Output != 0){
						if(LY201_Output <= PS2Val){
							
							PS2Comp_Output = PS2Val;
							OutputLabel((x+460), (y-100), PS2Comp_Output, 'red');
						}else{
							PS2Comp_Output = LY201_Output;
							OutputLabel((x+460), (y-100), PS2Comp_Output, 'blue');
							
						}
						
						
					}
					
					
					
					
				}
				if(PS2_component == "RL"){
					
					paper.text((x+565), (y-80), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					
					OutputLabel((x+590), (y-80), PS3Val, 'blue');
					
					paper.text((x+620), (y-80), " %/Sec").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					
					paper.text((x+590), (y-50), "a = "+changeinRLVal+" %/Sec").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					
					if(changeinRLVal > PS3Val){
						
						PS2Comp_Output = 0;
						OutputLabel((x+460), (y-100), PS2Comp_Output, 'red');
						
					}else{
						if(LY201_Output != 0){
							PS2Comp_Output = 1;
							OutputLabel((x+460), (y-100), PS2Comp_Output, 'blue');
						}
						
						
					}
					
				}
				
				
				
			
			
			
			
			
		}
		
		
		
// calculation for PS3 placed component
		
		if(PS3_radiotypeVal == "selector"){
			
			PS1comptoPS3Comp.hide();
			
			PS3Comp_Output = 0;
			
			OutputLabel((x+480), (y+310), PS3Comp_Output, 'red');		
		}	
		if(PS3_radiotypeVal == "limiter"){
			
			if(LY101_Output == 0 || PS1Comp_Output == 0 ){
				
				PS3Comp_Output = 0;
				
				OutputLabel((x+480), (y+310), PS3Comp_Output, 'red');
			}
			if(PS3_component == "HL"){
				
				paper.text((x+565), (y+290), "X = ").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				OutputLabel((x+590), (y+290), PS1Val, 'blue');
				
				paper.text((x+605), (y+290), " %").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				
				if(PS1Comp_Output >= PS1Val){
					
					PS3Comp_Output = PS1Val;
					OutputLabel((x+480), (y+310), PS3Comp_Output, 'red');
					//ly100 o/p
					OutputLabel((x+440), (y+350), PS3Comp_Output, 'red');
				}else{
					PS3Comp_Output = PS1Comp_Output;
					OutputLabel((x+480), (y+310), PS3Comp_Output, 'blue');
					//ly100 o/p
					OutputLabel((x+440), (y+350), PS3Comp_Output, 'blue');
					
				}
				
				
			}
			
			if(PS3_component == "LL"){
				
				paper.text((x+565), (y+290), "X = ").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) ;
				
				OutputLabel((x+590), (y+290), PS1Val, 'blue');
				
				paper.text((x+605), (y+290), " %").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) ;
				
				
				if(PS1Comp_Output != 0){
					if(PS1Comp_Output <= PS1Val){
						
						PS3Comp_Output = PS1Val;
						OutputLabel((x+480), (y+310), PS3Comp_Output, 'red');
						//ly100 o/p
						OutputLabel((x+440), (y+350), PS3Comp_Output, 'red');
					}else{
						
						PS3Comp_Output = PS1Comp_Output;
						OutputLabel((x+480), (y+310), PS3Comp_Output, 'blue');
						//ly100 o/p
						OutputLabel((x+440), (y+350), PS3Comp_Output, 'blue');
						
					}
				}
				
				
				
			}
			
			if(PS3_component == "RL"){
				
				paper.text((x+565), (y+290), "X = ").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) ;
				
				OutputLabel((x+590), (y+290), PS3Val, 'blue');
				
				paper.text((x+620), (y+290), " %/Sec").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) ;			
				
				paper.text((x+590), (y+320), "a = "+changeinRLVal+" %/Sec").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) ;
				
				if(changeinRLVal > PS3Val){
					
					PS3Comp_Output = 0;
					OutputLabel((x+480), (y+310), PS3Comp_Output, 'red');
					//ly100 o/p
					OutputLabel((x+440), (y+350), PS3Comp_Output, 'red');
				}else{
					if(PS1Comp_Output != 0){
						PS3Comp_Output = 1;
						OutputLabel((x+480), (y+310), PS3Comp_Output, 'blue');
						//ly100 o/p
						OutputLabel((x+440), (y+350), PS1Comp_Output, 'blue');
					}
					
					
				}
				
				
			}
			
		}
		
		
		
		
		
		
	}
});