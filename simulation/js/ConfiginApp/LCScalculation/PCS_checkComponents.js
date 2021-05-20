$(function () {
	
	
	PCS_checkPlacedComponents = function(tanklevel){
		

		

		

// draw Components		
		drawPressureComponents();
		PCS_initiallabel.hide();
		tanklevelHeight((x+2), (y+150), tanklevel, 'blue');
		PCS_drawWaterLevel(tanklevel);
		
// Calculate Output of transmitters with random error		
		PT_Oparraywitherr = [];		
		PT_OpMinMaxArr = [];
		
		for(var i=1; i<=4; i++){
			
			err = randomErr_PC(PC_RandomErrArr);
//			console.log(err);
			var val = parseFloat(tanklevel) + parseFloat(err);
			PT_Oparraywitherr.push(val);
		}
			
//		console.log(PT_Oparraywitherr);
		
		
		
// calculation for PS4 placed component		
		if(PS4_radiotypeVal == "selector"){
			
			if(PCS_transnum == 2 &&(PS4_component =="HS2" || PS4_component == "LS2")){
				//display connected & not connected transmitter o/p
				OutputLabel((x-85), (y-170), PT_Oparraywitherr[0], 'blue');
				OutputLabel((x-25), (y-170), PT_Oparraywitherr[1], 'blue');

				
				//pass value for min max of conected transmitter
				PT_OpMinMaxArr.push(PT_Oparraywitherr[0]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[1]);
				
				
				
				PTmax = Math.max.apply(null,PT_OpMinMaxArr);
				PTmin = Math.min.apply(null,PT_OpMinMaxArr);
				
				
				
			}
			if(PCS_transnum == 2 &&(PS4_component =="HS3" || PS4_component == "LS3")){
				//display connected & not connected transmitter o/p
				OutputLabel((x-85), (y-170), PT_Oparraywitherr[0], 'blue');
				OutputLabel((x-25), (y-170), PT_Oparraywitherr[1], 'blue');
				OutputLabel((x+35), (y-170), PT_Oparraywitherr[2], 'red');
				
				//pass value for min max of conected transmitter
				PT_OpMinMaxArr.push(PT_Oparraywitherr[0]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[1]);
				
				
				
				PTmax = Math.max.apply(null,PT_OpMinMaxArr);
				PTmin = Math.min.apply(null,PT_OpMinMaxArr);
				
				
				
			}
			if(PCS_transnum == 2 &&(PS4_component =="HS4" || PS4_component == "LS4")){
				//display connected & not connected transmitter o/p
				OutputLabel((x-85), (y-170), PT_Oparraywitherr[0], 'blue');
				OutputLabel((x-25), (y-170), PT_Oparraywitherr[1], 'blue');
				OutputLabel((x+35), (y-170), PT_Oparraywitherr[2], 'red');
				OutputLabel((x+95), (y-170), PT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				PT_OpMinMaxArr.push(PT_Oparraywitherr[0]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[1]);
				
			
				
				PTmax = Math.max.apply(null,PT_OpMinMaxArr);
				PTmin = Math.min.apply(null,PT_OpMinMaxArr);
				
				
				
			}
			
			
			if(PCS_transnum == 3 &&(PS4_component =="HS2" || PS4_component == "LS2")){
				//display connected & not connected transmitter o/p
				OutputLabel((x-85), (y-170), PT_Oparraywitherr[0], 'blue');
				OutputLabel((x-25), (y-170), PT_Oparraywitherr[1], 'blue');
				OutputLabel((x+35), (y-170), PT_Oparraywitherr[2], 'red');
				
				//pass value for min max of conected transmitter
				PT_OpMinMaxArr.push(PT_Oparraywitherr[0]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[1]);
				
				
				
				PTmax = Math.max.apply(null,PT_OpMinMaxArr);
				PTmin = Math.min.apply(null,PT_OpMinMaxArr);
				
				
				
			}
			
			if(PCS_transnum == 3 &&(PS4_component =="HS3" || PS4_component == "LS3")){
				//display connected & not connected transmitter o/p
				OutputLabel((x-85), (y-170), PT_Oparraywitherr[0], 'blue');
				OutputLabel((x-25), (y-170), PT_Oparraywitherr[1], 'blue');
				OutputLabel((x+35), (y-170), PT_Oparraywitherr[2], 'blue');
				
				//pass value for min max of conected transmitter
				PT_OpMinMaxArr.push(PT_Oparraywitherr[0]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[1]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[2]);
				
			
				
				PTmax = Math.max.apply(null,PT_OpMinMaxArr);
				PTmin = Math.min.apply(null,PT_OpMinMaxArr);				
				
			}
			if(PCS_transnum == 3 &&(PS4_component =="HS4" || PS4_component == "LS4")){
				//display connected & not connected transmitter o/p
				OutputLabel((x-85), (y-170), PT_Oparraywitherr[0], 'blue');
				OutputLabel((x-25), (y-170), PT_Oparraywitherr[1], 'blue');
				OutputLabel((x+35), (y-170), PT_Oparraywitherr[2], 'blue');
				OutputLabel((x+95), (y-170), PT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				PT_OpMinMaxArr.push(PT_Oparraywitherr[0]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[1]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[2]);
				
			
				
				PTmax = Math.max.apply(null,PT_OpMinMaxArr);
				PTmin = Math.min.apply(null,PT_OpMinMaxArr);				
				
			}
			
			
			if(PCS_transnum == 4 &&(PS4_component =="HS2" || PS4_component == "LS2")){
				//display connected & not connected transmitter o/p
				OutputLabel((x-85), (y-170), PT_Oparraywitherr[0], 'blue');
				OutputLabel((x-25), (y-170), PT_Oparraywitherr[1], 'blue');
				OutputLabel((x+35), (y-170), PT_Oparraywitherr[2], 'red');
				OutputLabel((x+95), (y-170), PT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				PT_OpMinMaxArr.push(PT_Oparraywitherr[0]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[1]);	
				
				
				PTmax = Math.max.apply(null,PT_OpMinMaxArr);
				PTmin = Math.min.apply(null,PT_OpMinMaxArr);
				
				
				
			}
			if(PCS_transnum == 4 &&(PS4_component =="HS3" || PS4_component == "LS3")){
				//display connected & not connected transmitter o/p
				OutputLabel((x-85), (y-170), PT_Oparraywitherr[0], 'blue');
				OutputLabel((x-25), (y-170), PT_Oparraywitherr[1], 'blue');
				OutputLabel((x+35), (y-170), PT_Oparraywitherr[2], 'blue');
				OutputLabel((x+95), (y-170), PT_Oparraywitherr[3], 'red');
				
				//pass value for min max of conected transmitter
				PT_OpMinMaxArr.push(PT_Oparraywitherr[0]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[1]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[2]);	
				
				
				PTmax = Math.max.apply(null,PT_OpMinMaxArr);
				PTmin = Math.min.apply(null,PT_OpMinMaxArr);
				
				
				
			}
			if(PCS_transnum == 4 &&(PS4_component =="HS4" || PS4_component == "LS4")){
				//display connected & not connected transmitter o/p
				OutputLabel((x-85), (y-170), PT_Oparraywitherr[0], 'blue');
				OutputLabel((x-25), (y-170), PT_Oparraywitherr[1], 'blue');
				OutputLabel((x+35), (y-170), PT_Oparraywitherr[2], 'blue');
				OutputLabel((x+95), (y-170), PT_Oparraywitherr[3], 'blue');
				
				//pass value for min max of conected transmitter
				PT_OpMinMaxArr.push(PT_Oparraywitherr[0]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[1]);
				PT_OpMinMaxArr.push(PT_Oparraywitherr[2]);	
				PT_OpMinMaxArr.push(PT_Oparraywitherr[3]);	
				
				
				PTmax = Math.max.apply(null,PT_OpMinMaxArr);
				PTmin = Math.min.apply(null,PT_OpMinMaxArr);
				
				
				
			}
			
//			console.log(PT_OpMinMaxArr);
//			console.log(" max = "+ PTmax + "  min = " + PTmin);
			if(PCS_PS4Condition1 =="lowest" && PCS_PS4Condition2 == "highest"){
				
				PY101_Output = PTmin;
				PY201_Output = PTmax;
			}else{
				
				PY101_Output = PTmax;
				PY201_Output = PTmin;
			}
			
			
			
			OutputLabel((x-35), (y-270), PY101_Output, 'blue');
			OutputLabel((x+230), (y-170), PY201_Output, 'blue');
			
			
		}
		
		if(PS4_radiotypeVal == "limiter"){
			
			if(PCS_transnum == 2){
				OutputLabel((x-85), (y-170), PT_Oparraywitherr[0], 'blue');
				OutputLabel((x-25), (y-170), PT_Oparraywitherr[1], 'blue');
			}
			if(PCS_transnum == 3){
				OutputLabel((x-85), (y-170), PT_Oparraywitherr[0], 'blue');
				OutputLabel((x-25), (y-170), PT_Oparraywitherr[1], 'blue');
				OutputLabel((x+35), (y-170), PT_Oparraywitherr[2], 'blue');
			}
			if(PCS_transnum == 4){
				OutputLabel((x-85), (y-170), PT_Oparraywitherr[0], 'blue');
				OutputLabel((x-25), (y-170), PT_Oparraywitherr[1], 'blue');
				OutputLabel((x+35), (y-170), PT_Oparraywitherr[2], 'blue');
				OutputLabel((x+95), (y-170), PT_Oparraywitherr[3], 'blue');
			}
			
			
			
			
			PY201_Output = 0;
			PY101_Output = 0;
			
			transtopy101.hide();
			
			OutputLabel((x-35), (y-270), PY101_Output, 'red');
			OutputLabel((x+230), (y-170), PY201_Output, 'red');
			
			
		}
		
// calculation for PS1 placed component
		
		if(PS1_radiotypeVal == "selector"){
			
			pic301topy401.hide();
			
			PS1Comp_Output = 0;
			
			OutputLabel((x+335), (y-80), PS1Comp_Output, 'red');		
		}
		
		
		if(PS1_radiotypeVal == "limiter"){
			
			
			
			if(PY201_Output == 0){
				
				PS1Comp_Output = 0;				
				OutputLabel((x+335), (y-80), PS1Comp_Output, 'red');
				
			}
				
				
				if(PS1_component == "HL"){
					
					paper.text((x+420), (y-112), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					OutputLabel((x+450), (y-112), PCS_PS1Val, 'blue');
					
					paper.text((x+465), (y-112), " %").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					
					
					if(PY201_Output >= PCS_PS1Val){
						
						PS1Comp_Output = PCS_PS1Val;
						OutputLabel((x+335), (y-80), PS1Comp_Output, 'red');
					}else{
						PS1Comp_Output = PY201_Output;
						OutputLabel((x+335), (y-80), PS1Comp_Output, 'blue');
						
					}
					
					
				}
				
				if(PS1_component == "LL"){
					
					
						paper.text((x+420), (y-112), "X = ").attr({
							stroke : 'blue',
							'font-size' : 15,
							"font-family": "sans-serif" 
						}) 
						
						OutputLabel((x+450), (y-112), PCS_PS1Val, 'blue');
						
						paper.text((x+465), (y-112), " %").attr({
							stroke : 'blue',
							'font-size' : 15,
							"font-family": "sans-serif" 
						}) 
					
					if(PY201_Output != 0){
						
						if(PY201_Output <= PCS_PS1Val){
							
							PS1Comp_Output = PCS_PS1Val;
							OutputLabel((x+335), (y-80), PS1Comp_Output, 'red');
						}else{
							
							PS1Comp_Output = PY201_Output;
							OutputLabel((x+335), (y-80), PS1Comp_Output, 'blue');
							
						}
						
					}	
					
					
					
				}
				if(PS1_component == "RL"){
					
					paper.text((x+420), (y-112), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					OutputLabel((x+440), (y-112), PCS_PS3Val, 'blue');
					
					paper.text((x+470), (y-112), " %/Sec").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					paper.text((x+450), (y-90), "a = "+PCS_changeinRLVal+" %/Sec").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					if(PCS_changeinRLVal > PCS_PS3Val){
						
						PS1Comp_Output = 0;
						OutputLabel((x+335), (y-80), PS1Comp_Output, 'red');
						
					}else{
						if(PY201_Output != 0){
							PS1Comp_Output = 1;
							OutputLabel((x+335), (y-80), PS1Comp_Output, 'blue');
						}
						
						
					}
					
					
				}
				
			
			
			
		}
		
		
// calculation for PS2 placed component
		
		if(PS2_radiotypeVal == "selector"){
			
			pic100toPS2Comp.hide();
			
			PS2Comp_Output = 0;
			
			OutputLabel((x-270), (y-245), PS2Comp_Output, 'red');		
		}	
		if(PS2_radiotypeVal == "limiter"){
			
			if(PY101_Output == 0){
				
				PS2Comp_Output = 0;				
				OutputLabel((x-270), (y-245), PS2Comp_Output, 'red');			
				
			}
				
				
				if(PS2_component == "HL"){
					
					paper.text((x-215), (y-335), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					
					OutputLabel((x-190), (y-335), PCS_PS2Val, 'blue');
				
					paper.text((x-170), (y-335), " %").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					
					if(PY101_Output >= PCS_PS2Val){
						
						PS2Comp_Output = PCS_PS2Val;
						OutputLabel((x-270), (y-245), PS2Comp_Output, 'red');		
					}else{
						PS2Comp_Output = PY101_Output;
						OutputLabel((x-270), (y-245), PS2Comp_Output, 'blue');		
						
					}
					
					
				}
				if(PS2_component == "LL"){
					
					paper.text((x-215), (y-335), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					
					OutputLabel((x-190), (y-335), PCS_PS2Val, 'blue');
				
					paper.text((x-170), (y-335), " %").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					if(PY101_Output != 0){
						if(PY101_Output <= PCS_PS2Val){
							
							PS2Comp_Output = PCS_PS2Val;
							OutputLabel((x-270), (y-245), PS2Comp_Output, 'red');
						}else{
							PS2Comp_Output = PY101_Output;
							OutputLabel((x-270), (y-245), PS2Comp_Output, 'blue');
							
						}
						
						
					}
					
					
					
					
				}
				if(PS2_component == "RL"){
					
					paper.text((x-215), (y-335), "X = ").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					
					OutputLabel((x-190), (y-335), PCS_PS3Val, 'blue');
				
					paper.text((x-160), (y-335), " %/Sec").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) ;
					
					paper.text((x-183), (y-357), "a =  "+PCS_changeinRLVal+" %/Sec").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
					
					
					
					if(PCS_changeinRLVal > PCS_PS3Val){
						
						PS2Comp_Output = 0;
						OutputLabel((x-270), (y-245), PS2Comp_Output, 'red');
						
					}else{
						if(PY101_Output != 0){
							PS2Comp_Output = 1;
							OutputLabel((x-270), (y-245), PS2Comp_Output, 'blue');
						}
						
						
					}
					
				}
				
				
				
			
			
			
			
			
		}
		
		
		
// calculation for PS3 placed component
		
		if(PS3_radiotypeVal == "selector"){
			
			ps1Comptops3Comp.hide();
			
			PS3Comp_Output = 0;
			
			OutputLabel((x+310), (y+20), PS3Comp_Output, 'red');	
			//o/p of py301
			OutputLabel((x+230), (y+40), PS3Comp_Output, 'red');
		}	
		if(PS3_radiotypeVal == "limiter"){
			
			if(PY201_Output == 0 || PS1Comp_Output == 0 ){
				
				PS3Comp_Output = 0;
				
				OutputLabel((x+310), (y+20), PS3Comp_Output, 'red');
				//o/p of py301
				OutputLabel((x+230), (y+40), PS3Comp_Output, 'red');
			}
			if(PS3_component == "HL"){
				
				paper.text((x+420), (y-5), "X = ").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				OutputLabel((x+450), (y-5), PCS_PS1Val, 'blue');
				
				paper.text((x+465), (y-5), " %").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				
				if(PS1Comp_Output >= PCS_PS1Val){
					
					PS3Comp_Output = PCS_PS1Val;
					OutputLabel((x+310), (y+20), PS3Comp_Output, 'red');
					//o/p of py301
					OutputLabel((x+230), (y+40), PS3Comp_Output, 'red');
				}else{
					PS3Comp_Output = PS1Comp_Output;
					OutputLabel((x+310), (y+20), PS3Comp_Output, 'blue');
					//o/p of py301
					OutputLabel((x+230), (y+40), PS3Comp_Output, 'blue');
					
				}
				
				
			}
			
			if(PS3_component == "LL"){
				
				paper.text((x+420), (y-5), "X = ").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				OutputLabel((x+450), (y-5), PCS_PS1Val, 'blue');
				
				paper.text((x+465), (y-5), " %").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				
				if(PS1Comp_Output != 0){
					if(PS1Comp_Output <= PCS_PS1Val){
						
						PS3Comp_Output = PCS_PS1Val;
						OutputLabel((x+310), (y+20), PS3Comp_Output, 'red');
						//o/p of py301
						OutputLabel((x+230), (y+40), PS3Comp_Output, 'red');
					}else{
						
						PS3Comp_Output = PS1Comp_Output;
						OutputLabel((x+310), (y+20), PS3Comp_Output, 'blue');
						//o/p of py301
						OutputLabel((x+230), (y+40), PS3Comp_Output, 'blue');
						
					}
				}
				
				
				
			}
			
			if(PS3_component == "RL"){
				
				paper.text((x+420), (y-5), "X = ").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 
				
				OutputLabel((x+440), (y-5), PCS_PS3Val, 'blue');
				
				paper.text((x+470), (y-5), " %/Sec").attr({
					stroke : 'blue',
					'font-size' : 15,
					"font-family": "sans-serif" 
				}) 		
				
				
				paper.text((x+450), (y+17), "a = "+PCS_changeinRLVal+" %/Sec").attr({
						stroke : 'blue',
						'font-size' : 15,
						"font-family": "sans-serif" 
					}) 
				
				
				if(PCS_changeinRLVal > PCS_PS3Val){
					
					PS3Comp_Output = 0;
					OutputLabel((x+310), (y+20), PS3Comp_Output, 'red');
					//o/p of py301
					OutputLabel((x+230), (y+40), PS3Comp_Output, 'red');
				}else{
					if(PS1Comp_Output != 0){
						PS3Comp_Output = 1;
						OutputLabel((x+310), (y+20), PS3Comp_Output, 'blue');
						//o/p of py301
						OutputLabel((x+230), (y+40), PS1Comp_Output, 'blue');
					}
					
					
				}
				
				
			}
			
		}
		
		
		
		
		
		
	}
});