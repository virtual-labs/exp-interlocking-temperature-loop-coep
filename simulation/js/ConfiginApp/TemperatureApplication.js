

//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//SINGLEACTINGCYLINDER.TemperatureControlSys = function() {
	
	TemperatureControlSys = function(){

	
//	 TCS_transnum = 4;
//	 TCS_PS1Val = 80;
//	 TCS_PS2Val = 20;
//	 TCS_PS3Val = 4;
	
	
	ref = 0;
	if(temp != 0 ){
		clearInterval(temp);
	}
	
	
	
	
//	ref1 = null;

	
	
	TCS_transnum = randomtrans(TCS_tansnumArr);
//	console.log(TCS_transnum);
	
	shuffle(TCS_PS1Arr);	
	TCS_PS1Condition = TCS_PS1Arr[0];
	if(TCS_PS1Condition == "above"){
		
		TCS_PS1Val = getRndInteger(70, 90);
	}
	if(TCS_PS1Condition == "below"){
		
		TCS_PS1Val = getRndInteger(10, 30);
	}
	

//	console.log(TCS_PS1Val);
	
	TCS_PS2Val = getRndInteger(10, 30);
//	console.log(TCS_PS2Val);
	
	TCS_PS3Val = randomtrans(TCS_changinRLArr);
//	console.log(TCS_PS3Val);
	
	shuffle(TCS_PS4Arr);
	TCS_PS4Condition1 = TCS_PS4Arr[0];
	TCS_PS4Condition2 = TCS_PS4Arr[1];
	
//	console.log("tansmitter no.= "+TCS_transnum+"  , TCS_PS1Val = "+TCS_PS1Val+", TCS_PS2Val = "+TCS_PS2Val+", TCS_PS3Val = "+TCS_PS3Val);
	
	
	chkOutputCnt = 0;
	v = 0;
		$("#mainDiv").html('');
		$("body").css("overflow"," hidden");
		var config_TCS = '';
		config_TCS += '<div id="Reqtimer" class="col-md-12 col-sm-12"><i><label id="minutes">00</label><span>:</span><label id="seconds">00</label></i></div><div id="canvas" class="col-md-8 col-sm-12"></div>'

				+ '<div class="col-md-4 col-sm-12" id="config_TCS">'
				+ '<div id = "PrblemStatementDiv" >'
				
				+'<h4>Requirements</h4>'			
				+'<p id = "PS1ques">1. User demand should not be satisfied if it is '+TCS_PS1Condition+' '+TCS_PS1Val+'% through TCV 200</p>'
				+'<div class="col-md-12"><input type="radio" id="PS1_selector" name="PS1_radiotype" value="selector"> <label for="PS1_selector">Selector</label>'
				+'<input type="radio" id="PS1_limiter" name="PS1_radiotype" value="limiter"> <label for="PS1_limiter">Limiter</label></div>'
				+'<div id="PS1_combobox" class="col-md-12"></div>'				
				+'<p id = "PS2ques">2. The cold water flow through TCV 300 should not be closed totally for saftey. It should be always minimum '+TCS_PS2Val+'%</p>'
				+'<div class="col-md-12"><input type="radio" id="PS2_selector" name="PS2_radiotype" value="selector"> <label for="PS2_selector">Selector</label>'
				+'<input type="radio" id="PS2_limiter" name="PS2_radiotype" value="limiter"> <label for="PS2_limiter">Limiter</label></div>'
				+'<div id="PS2_combobox" class="col-md-12"></div>'				
				+'<p id = "PS3ques">3. For maintaining temperature of outlet to customer satisfaction level whenever there is change in demand (through TCV 200) the rate of change should not be above '+TCS_PS3Val+' %/Sec</p>'
				+'<div class="col-md-12"><input type="radio" id="PS3_selector" name="PS3_radiotype" value="selector"> <label for="PS3_selector">Selector</label>'
				+'<input type="radio" id="PS3_limiter" name="PS3_radiotype" value="limiter"> <label for="PS3_limiter">Limiter</label></div>'
				+'<div id="PS3_combobox" class="col-md-12"></div>'		
				+'<p id = "PS4ques">4. For accurate control of temperature in the tank , '+TCS_transnum+' transmitters are connected. For temperature control '+TCS_PS4Condition1+' will be selected for TIC 100 and '+TCS_PS4Condition2+' will be selected for NIC 100.</p>'
				+'<label>For TIC 100 & For NIC 200</label><br/>'
				+'<div class="col-md-12"><input type="radio" id="PS4_selector" name="PS4_radiotype" value="selector"> <label for="PS4_selector">Selector</label>'
				+'<input type="radio" id="PS4_limiter" name="PS4_radiotype" value="limiter"> <label for="PS4_limiter">Limiter</label></div>'
				+'<div id="PS4_combobox" class="col-md-12"></div>'
//				+'<label>For LIC 100</label>'
//				+'<input type="radio" id="PS4_selectorforLIC100" name="PS4_radiotypeforLCV100" value="selector"> <label for="PS4_selectorforLIC100">Selector</label>'
//				+'<input type="radio" id="PS4_limiterforLIC100" name="PS4_radiotypeforLCV100" value="limiter"> <label for="PS4_limiterforLIC100">Limiter</label><br>'
//				+'<div id="PS4_comboboxforLIC100"></div>'				
				+'</div>'
				+'<button id="configbtn_TCS">Configure Plant</button><br/>'
				+'<button id="updateconfigbtn_TCS" hidden>Select Other Component</button><br/>'
				+'<div id="InFlowChangeDiv"></div>'
				
				
				
				
			
			$("#mainDiv").html(config_TCS);
		
		stop_timer();
		set_timer();
		
	//	paper = new Raphael(document.getElementById('canvas'), '100%', 700);
		var w = 900;
    var h = 700;

var width = $(window).width();

  if ($(window).width() < 500) {
	    width = $(this).width();
	    paper = new Raphael(document.getElementById('canvas'), '100%', 700);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 700);
  }else
  {
      paper = new Raphael(document.getElementById('canvas'), '100%', 800);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 800);
  }
	// onchange ps1	
		
		$("#PS1_selector").on("click", function(){
			
			$("#PS1_combobox").html('');
			var selector = '';
			selector +='<select class="form-control" name="PS1_box" id="PS1_box"  >' //onchange="PS1_boc_Select(this.value)"
			+'<option value= -1 >Select</option>'
			+'<option value="HS2">High Selector with 2 input</option>'	
			+'<option value="HS3">High Selector with 3 input</option>'	
			+'<option value="HS4">High Selector with 4 input</option>'
			+'<option value="LS2">Low Selector with 2 input</option>'	
			+'<option value="LS3">Low Selector with 3 input</option>'	
			+'<option value="LS4">Low Selector with 4 input</option>'
			+'</select>'
			
			$("#PS1_combobox").html(selector);
			
		});
		
		
		$("#PS1_limiter").on("change", function(){
			
			$("#PS1_combobox").html('');
			var limiter = '';
			limiter +='<select class="form-control" name="PS1_box" id="PS1_box"  >'
			+'<option value= -1 >Select</option>'
			+'<option value="RL">Rate Limiter</option>'	
			+'<option value="HL">High Limit</option>'	
			+'<option value="LL">Low Limit</option>'
			+'</select>'
			
			$("#PS1_combobox").html(limiter);
			
		});

		
		// onchange ps2	
		
			$("#PS2_selector").on("change", function(){
			
			$("#PS2_combobox").html('');
			var selector = '';
			selector +='<select class="form-control" name="PS2_box" id="PS2_box"  >'
			+'<option value= -1 >Select</option>'
			+'<option value="HS2">High Selector with 2 input</option>'	
			+'<option value="HS3">High Selector with 3 input</option>'	
			+'<option value="HS4">High Selector with 4 input</option>'
			+'<option value="LS2">Low Selector with 2 input</option>'	
			+'<option value="LS3">Low Selector with 3 input</option>'	
			+'<option value="LS4">Low Selector with 4 input</option>'
			+'</select>'
			
			$("#PS2_combobox").html(selector);
			
		});
		
		
		$("#PS2_limiter").on("change", function(){
			
			$("#PS2_combobox").html('');
			var limiter = '';
			limiter +='<select class="form-control" name="PS2_box" id="PS2_box"  >'
			+'<option value= -1 >Select</option>'
			+'<option value="RL">Rate Limiter</option>'	
			+'<option value="HL">High Limit</option>'	
			+'<option value="LL">Low Limit</option>'
			+'</select>'
			
			$("#PS2_combobox").html(limiter);
			
		});	
		
		
		
		// onchange ps3
		
		$("#PS3_selector").on("change", function(){
		
		$("#PS3_combobox").html('');
		var selector = '';
		selector +='<select class="form-control" name="PS3_box" id="PS3_box"  >'
		+'<option value= -1 >Select</option>'
		+'<option value="HS2">High Selector with 2 input</option>'	
		+'<option value="HS3">High Selector with 3 input</option>'	
		+'<option value="HS4">High Selector with 4 input</option>'
		+'<option value="LS2">Low Selector with 2 input</option>'	
		+'<option value="LS3">Low Selector with 3 input</option>'	
		+'<option value="LS4">Low Selector with 4 input</option>'
		+'</select>'
		
		$("#PS3_combobox").html(selector);
		
	});
	
	
	$("#PS3_limiter").on("change", function(){
		
		$("#PS3_combobox").html('');
		var limiter = '';
		limiter +='<select class="form-control" name="PS3_box" id="PS3_box"  >'
		+'<option value= -1 >Select</option>'
		+'<option value="RL">Rate Limiter</option>'	
		+'<option value="HL">High Limit</option>'	
		+'<option value="LL">Low Limit</option>'
		+'</select>'
		
		$("#PS3_combobox").html(limiter);
		
	});	
	
	
	// onchange ps4 TIC 100 & NIC 200
	
			$("#PS4_selector").on("change", function(){
			
			$("#PS4_combobox").html('');
			var selector = '';
			selector +='<select class="form-control" name="PS4_box" id="PS4_box"  >'
			+'<option value= -1 >Select</option>'
			+'<option value="HS2">High Selector with 2 input</option>'	
			+'<option value="HS3">High Selector with 3 input</option>'	
			+'<option value="HS4">High Selector with 4 input</option>'
			+'<option value="LS2">Low Selector with 2 input</option>'	
			+'<option value="LS3">Low Selector with 3 input</option>'	
			+'<option value="LS4">Low Selector with 4 input</option>'
			+'</select>'
			
			$("#PS4_combobox").html(selector);
			
		});
		
		
		$("#PS4_limiter").on("change", function(){
			
			$("#PS4_combobox").html('');
			var limiter = '';
			limiter +='<select class="form-control" name="PS4_box" id="PS4_box"  >'
			+'<option value= -1 >Select</option>'
			+'<option value="RL">Rate Limiter</option>'	
			+'<option value="HL">High Limit</option>'	
			+'<option value="LL">Low Limit</option>'
			+'</select>'
			
			$("#PS4_combobox").html(limiter);
			
		});	
		
		
		

		
	// config plant button click
	$("#configbtn_TCS").on("click", function(){
		
		
		 PS1_radiotypeVal = $("input[name='PS1_radiotype']:checked").val();
		 PS2_radiotypeVal = $("input[name='PS2_radiotype']:checked").val();
		 PS3_radiotypeVal = $("input[name='PS3_radiotype']:checked").val();
		 PS4_radiotypeVal = $("input[name='PS4_radiotype']:checked").val();

		
		
		 PS1_component = $( "#PS1_box option:selected" ).val();
		 PS2_component = $( "#PS2_box option:selected" ).val();
		 PS3_component = $( "#PS3_box option:selected" ).val();
		 PS4_component = $( "#PS4_box option:selected" ).val();
		 
		 
		
		 

		 if (PS1_radiotypeVal != undefined
			&& PS2_radiotypeVal != undefined
			&& PS3_radiotypeVal != undefined
			&& PS4_radiotypeVal != undefined

			){

				 if(PS1_component == -1 
					|| PS2_component == -1
					|| PS3_component == -1
					|| PS4_component == -1
			
			){
					 
					 alertify.alert("Please select all the fields");
				 }else{
// draw components 
					drawtempComponents();	
					
// hide div with its child  and button	 and show select another comp button
					
					var nodes = document.getElementById("PrblemStatementDiv").getElementsByTagName('*');
					for(var i = 0; i < nodes.length; i++){
					     nodes[i].disabled = true;
					}
					
					$("#configbtn_TCS").hide();
					$("#updateconfigbtn_TCS").show();
					
					
					
// show In Flow Value		
					
					
					
				// append In flow div	
					 $("#InFlowChangeDiv").html('');
					var InFlowChange = '';
					InFlowChange +='<div>'
						+'<label>Select Cold Water Flow (in %):</label>'
						+'<select name="App" id="changeinInFlow" >'
						+'<option value="-1">Select</option>'
						for(var i = 1; i <=100; i++){
							
							InFlowChange +='<option value="'+(i)+'">'+(i)+'</option>'
							
						}						
					InFlowChange +='</select><br/><br/>'						
						+'<div id = "UDChangeDiv"></div>'
						+'</div>'
					 $("#InFlowChangeDiv").html(InFlowChange);		
						
// show USer Demand Value
// show change in Water level in diagram
					
$('select#changeinInFlow').on(
		'change',
		function() {
			if(this.value != -1){
				
				ChangeinFolw = parseInt(this.value);
				
				lbl11.hide();
				lbl11 = OutputLabel((x+620), (y-30), ""+ChangeinFolw+" %", 'blue');
				
				
				
				clearInterval(ref);

				
				TCS_waterlevel.hide();
//				TCS_LblHT.hide();

//				TCS_LblHT = TCS_Height((x+110),y, ChangeinFolw, "blue");
				TCS_ht = TCS_setht(ChangeinFolw);
				TCS_waterlevel = TCS_drawWaterLevel(TCS_ht, "#7fbfff");
				
		// append User Demenad Div				
				 $("#UDChangeDiv").html('');
					var UDChangeDiv = '';
					UDChangeDiv +='<div>'
						+'<label>Select User Demand (in %):</label>'
						+'<select name="App" id="changeinUD" >'
						+'<option value="-1">Select</option>'
						for(var i = 1; i <=100; i++){
							
							UDChangeDiv +='<option value="'+(i)+'">'+(i)+'</option>'
							
						}						
					UDChangeDiv +='</select><br/><br/>'						
						+'<div id = "changeinRLdiv"></div>'
						+'</div>'
					 $("#UDChangeDiv").html(UDChangeDiv);	
				

// show RL change
// User demand change

								
$('#changeinUD').change(
	function() {
		
		if(this.value != -1){
			
			 ChangeUserDemand = parseInt(this.value);
			 
			 lbl12.hide();
			 lbl12 = OutputLabel((x+630), (y+90), ""+ChangeUserDemand+" %", 'blue');
			 
			 if(ChangeinFolw > ChangeUserDemand){
				 

				  clearInterval(ref);
				  ref = setInterval(increaseWaterLvl, 3000);	
//				  console.log("ref"+ref);
				 
			 }else if(ChangeinFolw < ChangeUserDemand){
				 

				 clearInterval(ref);
				 ref = setInterval(decreaseWaterLvl, 3000);	
//				 console.log("ref1"+ref);
				 
			 }else{
				 
				 clearInterval(ref);
				 
				 TCS_waterlevel.hide();
				 TCS_ht = TCS_setht(ChangeinFolw);
				 TCS_waterlevel = TCS_drawWaterLevel(TCS_ht, "#7fbfff");
				 
			 }
			 
		
			// append ChangeinRL div
			 $("#changeinRLdiv").html('');
				var changeinRLdiv = '';
				changeinRLdiv +='<div>'
					+'<label>Select Rate Limiter Value&nbsp;(in %/sec)&nbsp;:</label>'
					+'<select name="App" id="changeinRL" >'
					+'<option value="-1">Select</option>'
					for(var i = 0; i < TCS_changinRLArr.length; i++){
						
						changeinRLdiv +='<option value="'+(i+1)+'">'+(i+1)+'</option>'
						
					}						
				changeinRLdiv +='</select><br/><br/>'						
					+'<div id = "sliderDiv"></div>'
					+'</div>'						
			
			 $("#changeinRLdiv").html(changeinRLdiv);	
				
				
				
				
// show slider				 
// value for slider step i.e.change in RL
							
				$('select#changeinRL').on(
					'change',
					function() {
						if(this.value != -1){
						TCS_changeinRLVal  = this.value;
						slidermaxVal = 100;
						
						if(TCS_changeinRLVal == 3 ||  TCS_changeinRLVal == 9){
							
							slidermaxVal = 99;
							
						}
						if(TCS_changeinRLVal == 6 ||  TCS_changeinRLVal == 8){
							
							slidermaxVal = 96;
							
						}
						if(TCS_changeinRLVal == 7){
							
							slidermaxVal = 98;
							
						}
						$("#sliderDiv").html('');
						var sliderDiv = '';
							sliderDiv += '<div class="slidecontainer" id="TCS_Slider">'
									+ '<div class="header">Input value for Tank (Input  '
									+ 0
									+ '-'
									+ 100
									+ '  %)</div>'
									+ '<input step="'
									+ TCS_changeinRLVal
									+ '" type="range" min='
									+ 0
									+ ' max='
									+ slidermaxVal
									+ ' value='
									+ 0
									+ ' id="Input">'
									+ '<p>Value: <span id="demo"></span></p>'
									+ '</div><br/>'
									+ '</div>'
									+ '<button id="chkoutput_TCS" onclick="chkOutput_TCS()">Check Output</button><br/>'
						
						
						
						$("#sliderDiv").html(sliderDiv);
						
//value for TCS slider 	
						var TCSslider = document.getElementById("Input");
						var TCSoutput = document.getElementById("demo");
						TCSoutput.innerHTML = TCSslider.value;

						TCSslider.oninput = function() {
							
							 v = this.value;
							
							if(TCS_changeinRLVal == 3 ||  TCS_changeinRLVal == 9){
								
								highdiff = 100 - parseInt(v);
								if(highdiff == 1){
									v = parseInt(v) + 1;
								}
								lowdiff = 100 - parseInt(v);
								if(lowdiff == 99){
									v = parseInt(v) - 1;
								}
										
									
							}
							if(TCS_changeinRLVal == 6 ||  TCS_changeinRLVal == 8){
								
								highdiff = 100 - parseInt(v);
								if(highdiff == 4){
									v = parseInt(v) + 4;
								}
								lowdiff = 100 - parseInt(v);
								if(lowdiff == 96){
									v = parseInt(v) - 4;
								}
										
									
							}
							if(TCS_changeinRLVal == 7){
								
								highdiff = 100 - parseInt(v);
								if(highdiff == 2){
									v = parseInt(v) + 2;
								}
								lowdiff = 100 - parseInt(v);
								if(lowdiff == 98){
									v = parseInt(v) - 2;
								}
										
									
							}
							TCSoutput.innerHTML = v;
							var tanktemperature = v;
							TCS_checkPlacedComponents(tanktemperature);
							
							
							
						
						}
						
						}else{
							 $("#sliderDiv").html('');
							alertify.alert("Please select rate limiter value");
							
						}	
						
					});	
						
																		
																		
		// USer deman value else																	
						}else{
							
							
							 $("#changeinRLdiv").html('');
							 clearInterval(ref);
//							 clearInterval(ref1);
								alertify.alert("Please select user demand value");
							
						}	
						
					});
										
									
	 // in flow value else								
		}else{
			
			
			 $("#UDChangeDiv").html('');
			 clearInterval(ref);
//			 clearInterval(ref1);
				alertify.alert("Please select in flow value");
		}
		
		
	});
	
				 
		}	 
				 
	 }else{
		 
		 
		 alertify.alert("Please select all the fields");
		 
	 }
						   
		
	});

	
// click of select another component button ///////////////
	$("#updateconfigbtn_TCS").on("click", function(){
		
	
		 $("#changeinRLdiv").html('');
		 $("#sliderDiv").html('');
		 $("#UDChangeDiv").html('');
		 $("#InFlowChangeDiv").html('');
		 
		 clearInterval(ref);
//			clearInterval(ref1);
			
		 var nodes = document.getElementById("PrblemStatementDiv").getElementsByTagName('*');
			for(var i = 0; i < nodes.length; i++){
			     nodes[i].disabled = false;
			}
		 $("#updateconfigbtn_TCS").hide();
		 $("#configbtn_TCS").show();
		
		
	});
	
	
	
		
	redrawTemperatureControl();
			
}	







function redrawTemperatureControl(){
	
	 paper.clear();
	 TempControl();

	
	 if(TCS_transnum == 3){
		 

		  TY201_TE201_TO_TY101();
		  
	  }else if(TCS_transnum == 4){
		  

		  
		  TY201_TE201_TO_TY101();
		  TY301_TE301_TO_TY101();
		  
	  }
	
}	



function drawtempComponents(){
	
	
	 redrawTemperatureControl();	
	 	
	//PS1 select box starts here		


	if(PS1_component == 'HS2'){				 

		 HS2_Symbol((x+470), (y+75), "FY 501");
		 highrotation((x+470), (y+75)).rotate(180);

		}
	if(PS1_component == 'HS3'){				 
			
		 HS3_Symbol((x+470), (y+75), "FY 501");
		 highrotation((x+470), (y+75)).rotate(180);

		}
	if(PS1_component == 'HS4'){				 
			
		 HS4_Symbol((x+470), (y+75), "FY 501");
		 highrotation((x+470), (y+75)).rotate(180);

		}
	if(PS1_component == 'LS2'){				 
			
		 LS2_Symbol((x+470), (y+75), "FY 501");
		 lowrotation((x+470), (y+75)).rotate(180);

		}
	if(PS1_component == 'LS3'){				 
			
		 LS3_Symbol((x+470), (y+75), "FY 501");
		 lowrotation((x+470), (y+75)).rotate(180);

		}
	if(PS1_component == 'LS4'){				 
			
		 LS4_Symbol((x+470), (y+75), "FY 501");
		 lowrotation((x+470), (y+75)).rotate(180);

		}
	if(PS1_component == 'RL'){				 
			
		 RL_Symbol((x+470), (y+75), "FY 501");
		 RLrotation((x+470), (y+75)).rotate(0);
		 paper.text((x+505), (y+30), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	}); 

		}
	if(PS1_component == 'HL'){				 
			
		 HL_Symbol((x+470), (y+75), "FY 501");
		 HLrotation((x+470), (y+75)).rotate(180);
		 paper.text((x+505), (y+30), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	}); 

		}
	if(PS1_component == 'LL'){				 
			
		 LL_Symbol((x+470), (y+75), "FY 501");
		 LLrotation((x+470), (y+75)).rotate(180);
		 paper.text((x+505), (y+30), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	}); 

		}
	
//PS2 select box starts here	
	if(PS2_component == 'HS2'){		
		
		HS2_Symbol((x+375), (y-204), "FY 301");
		highrotation((x+375), (y-204)).rotate(180);
	}
	if(PS2_component == 'HS3'){		
		
		HS3_Symbol((x+375), (y-204), "FY 301");
		highrotation((x+375), (y-204)).rotate(180);
	}
	if(PS2_component == 'HS4'){		
		
		HS4_Symbol((x+375), (y-204), "FY 301");
		highrotation((x+375), (y-204)).rotate(180);
	}
	if(PS2_component == 'LS2'){		
		
		LS2_Symbol((x+375), (y-204), "FY 301");
		lowrotation((x+375), (y-204)).rotate(180);
		
	}
	if(PS2_component == 'LS3'){		
		
		LS3_Symbol((x+375), (y-204), "FY 301");
		lowrotation((x+375), (y-204)).rotate(180);
	}
	if(PS2_component == 'LS4'){		
		
		LS4_Symbol((x+375), (y-204), "FY 301");
		lowrotation((x+375), (y-204)).rotate(180);
	}
	if(PS2_component == 'RL'){		
		
		RL_Symbol((x+375), (y-204), "FY 301");
		RLrotation((x+375), (y-204)).rotate(0);
		paper.text((x+410), (y-249), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	if(PS2_component == 'HL'){		
		
		HL_Symbol((x+375), (y-204), "FY 301");
		HLrotation((x+375), (y-204)).rotate(180);
		paper.text((x+410), (y-249), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	if(PS2_component == 'LL'){		
		
		LL_Symbol((x+375), (y-204), "FY 301");
		LLrotation((x+375), (y-204)).rotate(180);
		paper.text((x+410), (y-249), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	

	//PS3 select box starts here						 
	 if(PS3_component == 'HS2'){				 
		
		HS2_Symbol((x+370), (y+75), "FY 401");
		highrotation((x+370), (y+75)).rotate(180);
		
	}
	if(PS3_component == 'HS3'){	
		
		HS3_Symbol((x+370), (y+75), "FY 401");
		highrotation((x+370), (y+75)).rotate(180);
			
	}
	if(PS3_component == 'HS4'){	
		
		HS4_Symbol((x+370), (y+75), "FY 401");
		highrotation((x+370), (y+75)).rotate(180);
	}
	if(PS3_component == 'LS2'){	
		
		LS2_Symbol((x+370), (y+75), "FY 401");
		lowrotation((x+370), (y+75)).rotate(180);
	}
	if(PS3_component == 'LS3'){	
		
		LS3_Symbol((x+370), (y+75), "FY 401");
		lowrotation((x+370), (y+75)).rotate(180);
	}
	if(PS3_component == 'LS4'){	
		
		LS4_Symbol((x+370), (y+75), "FY 401");
		lowrotation((x+370), (y+75)).rotate(180);
	}
	
	if(PS3_component == 'RL'){
		
		RL_Symbol((x+370), (y+75), "FY 401");
		RLrotation((x+370), (y+75)).rotate(0);
		paper.text((x+405), (y+30), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	if(PS3_component == 'HL'){	
		
		HL_Symbol((x+370), (y+75), "FY 401");
		HLrotation((x+370), (y+75)).rotate(180);
		paper.text((x+405), (y+30), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	if(PS3_component == 'LL'){	
		
		LL_Symbol((x+370), (y+75), "FY 401");
		LLrotation((x+370), (y+75)).rotate(180);
		paper.text((x+405), (y+30), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}

	
	
	
	
	
	
	
	

//PS4 select box starts here		


if(PS4_component == 'HS2'){				 
	 
	// rect with symbol for ty101
	paper.rect((x-50), (y-180), 25, 25).attr({"stroke-width" : 1});
	highrotation((x-73), (y-145)).rotate(180);
	
	// rect with symbol for ty201
	paper.rect((x+10), (y-300), 25, 25).attr({"stroke-width" : 1});
	highrotation((x-10), (y-265)).rotate(0);
	 
	if(TCS_transnum == 3){
		TETT201_Conn.hide();
		NotConTY201_TE201_TO_TY101();						
	}
	if(TCS_transnum == 4){
		
		TETT201_Conn.hide();
		NotConTY201_TE201_TO_TY101();	
		TETT301_Conn.hide();
		NotConTY301_TE301_TO_TY101();''
	}

}

if(PS4_component == 'HS3'){				 
	// rect with symbol for ty101
	paper.rect((x-50), (y-180), 25, 25).attr({"stroke-width" : 1});
	highrotation((x-73), (y-145)).rotate(180);
	
	// rect with symbol for ty201
	paper.rect((x+10), (y-300), 25, 25).attr({"stroke-width" : 1});
	highrotation((x-10), (y-265)).rotate(0);
	
	 if(TCS_transnum == 4){
			
		 TETT301_Conn.hide();
		 NotConTY301_TE301_TO_TY101();
		}
	 if(TCS_transnum == 2){							
			
		 NotConTY201_TE201_TO_TY101();
	 }
}
if(PS4_component == 'HS4'){				 
	// rect with symbol for ty101
	paper.rect((x-50), (y-180), 25, 25).attr({"stroke-width" : 1});
	highrotation((x-73), (y-145)).rotate(180);
	
	// rect with symbol for ty201
	paper.rect((x+10), (y-300), 25, 25).attr({"stroke-width" : 1});
	highrotation((x-10), (y-265)).rotate(0);
	
	 if(TCS_transnum == 3){
		 
		 NotConTY301_TE301_TO_TY101();
		}
	 if(TCS_transnum == 2){							
			
		 NotConTY201_TE201_TO_TY101();
		 NotConTY301_TE301_TO_TY101();
	 }
}




if(PS4_component == 'LS2'){	
		
		// rect with symbol for ty101
		paper.rect((x-50), (y-180), 25, 25).attr({"stroke-width" : 1});
		lowrotation((x-73), (y-145)).rotate(180);
		
		// rect with symbol for ty201
		paper.rect((x+10), (y-300), 25, 25).attr({"stroke-width" : 1});
		lowrotation((x-10), (y-265)).rotate(0);
	 
		if(TCS_transnum == 3){
			TETT201_Conn.hide();
			NotConTY201_TE201_TO_TY101();						
		}
		if(TCS_transnum == 4){
			
			TETT201_Conn.hide();
			NotConTY201_TE201_TO_TY101();	
			TETT301_Conn.hide();
			NotConTY301_TE301_TO_TY101();''
		}


}

if(PS4_component == 'LS3'){		
	
	// rect with symbol for ty101
	paper.rect((x-50), (y-180), 25, 25).attr({"stroke-width" : 1});
	lowrotation((x-73), (y-145)).rotate(180);
	
	// rect with symbol for ty201
	paper.rect((x+10), (y-300), 25, 25).attr({"stroke-width" : 1});
	lowrotation((x-10), (y-265)).rotate(0);
	 
	 if(TCS_transnum == 4){
			
		 TETT301_Conn.hide();
		 NotConTY301_TE301_TO_TY101();
		}
	 if(TCS_transnum == 2){							
			
		 NotConTY201_TE201_TO_TY101();
	 }
}
if(PS4_component == 'LS4'){				 
		
	// rect with symbol for ty101
	paper.rect((x-50), (y-180), 25, 25).attr({"stroke-width" : 1});
	lowrotation((x-73), (y-145)).rotate(180);
	
	// rect with symbol for ty201
	paper.rect((x+10), (y-300), 25, 25).attr({"stroke-width" : 1});
	lowrotation((x-10), (y-265)).rotate(0);
	 
	if(TCS_transnum == 3){
		 
		 NotConTY301_TE301_TO_TY101();
		}
	 if(TCS_transnum == 2){							
			
		 NotConTY201_TE201_TO_TY101();
		 NotConTY301_TE301_TO_TY101();
	 }
}


if(PS4_component == 'RL'){				 
		
	 TY101Circle.hide();
	 TY201Circle.hide();
	 
	 RL_Symbol((x-70), (y-140), "TY 101");	 
	 RLrotation((x-70), (y-140)).rotate(0);
	 paper.text((x+25), (y-305), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
	 RL_Symbol((x-10), (y-260), "TY 201");	 
	 RLrotation((x-10), (y-260)).rotate(0);
	 paper.text((x-35), (y-185), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
		
	}

if(PS4_component == 'HL'){		

	 TY101Circle.hide();
	 TY201Circle.hide();
	 
	 RL_Symbol((x-70), (y-140), "TY 101");	 
	 HLrotation((x-70), (y-140)).rotate(180);
	 paper.text((x+25), (y-305), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
	 RL_Symbol((x-10), (y-260), "TY 201");	 
	 HLrotation((x-10), (y-260)).rotate(0);
	 paper.text((x-35), (y-185), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});	 
	 
		
	}

if(PS4_component == 'LL'){				 
		
	 
	 TY101Circle.hide();
	 TY201Circle.hide();
	 
	 RL_Symbol((x-70), (y-140), "TY 101");	 
	 LLrotation((x-70), (y-140)).rotate(180);
	 paper.text((x+25), (y-305), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
	 RL_Symbol((x-10), (y-260), "TY 201");	 
	 LLrotation((x-10), (y-260)).rotate(0);
	 paper.text((x-35), (y-185), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});	 
	 
		 
		
	}

	
}








		
	});

function chkOutput_TCS(){
	
    if(v!= 0){
    	
    	if(TCS_PS1Condition == "above"){
    		
    		
    		if (PS1_component == "HL"
    			&& PS2_component == "LL"
    			&& PS3_component == "RL"
    			&&( (TCS_transnum == 2 && (PS4_component == "HS2" || PS4_component == "LS2"))
    			|| (TCS_transnum == 3 && (PS4_component == "HS3" || PS4_component == "LS3"))
    			|| (TCS_transnum == 4 && (PS4_component == "HS4" || PS4_component == "LS4")))
    			&& TCS_changeinRLVal <= TCS_PS3Val 
    			&& ChangeinFolw >= TCS_PS2Val 
    			&& ChangeUserDemand <= TCS_PS1Val){
    			
        		chkOutputCnt++;
        		
        		clearInterval(ref);
        		
        		stop_timer();
        		
        		minutes = document.getElementById("minutes").textContent;
        		seconds = document.getElementById("seconds").textContent;
//        		console.log(minutes+":"+seconds);
        		
        		
        		var TCApp_Time = {};
        		TCApp_Time.minutes = minutes;
        		TCApp_Time.seconds = seconds;
        		
        		
        		var TCApp_ConfigData = {};
        		
        		PS1QuesText = document.getElementById("PS1ques").textContent;
        		PS2QuesText = document.getElementById("PS2ques").textContent;
        		PS3QuesText = document.getElementById("PS3ques").textContent;
        		PS4QuesText = document.getElementById("PS4ques").textContent;
        		
        		TCApp_ConfigData.PS1QuesText = PS1QuesText;
        		TCApp_ConfigData.PS1Ans = PS1_component;
        		
        		TCApp_ConfigData.PS2QuesText = PS2QuesText;
        		TCApp_ConfigData.PS2Ans = PS2_component;
        		
        		TCApp_ConfigData.PS3QuesText = PS3QuesText;
        		TCApp_ConfigData.PS3Ans = PS3_component;
        		
        		TCApp_ConfigData.PS4QuesText = PS4QuesText;
        		TCApp_ConfigData.PSAns = PS4_component;
        		
        		TCApp_ConfigData.changeInRL = TCS_changeinRLVal;        		
        		TCApp_ConfigData.changeInFlowVal = ChangeinFolw;
        		TCApp_ConfigData.ChangeUserDemandVal = ChangeUserDemand;
        		
        		
        		TCApp_ConfigData.noOfWrongAttempts = chkOutputCnt;
        		
        		TCApp_ConfigData.timeforExp = TCApp_Time;
        		
//        		console.log(TCApp_ConfigData);
        		alertify.alert("Correct Answer");
        		$("#mainDiv").html('');
        		$("#mainDiv").html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:16px; font-weight:bold; text-align:center;">Congratulations !!!<br/> You have successfully completed this experiment</div></div>');
    			
    	     
    			
    		}else{
    			
    			alertify.alert("Wrong component/value Selected, Please try again by selecting other component/value.");
    			chkOutputCnt++;
    			 if(chkOutputCnt >= 3){
    					alertify.alert("Answers for requirements:\n 1. High Limiter\n 2. Low Limiter\n 3. Rate Limiter and by selecting Rate Limit Value <="
    										 + TCS_PS3Val
    										 + " %/sec. \n 4. High/Low selector with "
    										 + TCS_transnum
    										 + " input \n 5. Clod Water Flow Value >= "+TCS_PS2Val+" \n 6. User Demand Value <= "+TCS_PS1Val);		
    					
    				}
    		}
    		
    		
    	}else{
    		

    		
    		
    		if (PS1_component == "LL"
    			&& PS2_component == "LL"
    			&& PS3_component == "RL"
    			&&( (TCS_transnum == 2 && (PS4_component == "HS2" || PS4_component == "LS2"))
    			|| (TCS_transnum == 3 && (PS4_component == "HS3" || PS4_component == "LS3"))
    			|| (TCS_transnum == 4 && (PS4_component == "HS4" || PS4_component == "LS4")))
    			&& TCS_changeinRLVal <= TCS_PS3Val
    			&& ChangeinFolw <= TCS_PS2Val 
    			&& ChangeUserDemand >= TCS_PS1Val){
    			
        		chkOutputCnt++;
        		
        		clearInterval(ref);        		
        		
        		stop_timer();
        		
        		minutes = document.getElementById("minutes").textContent;
        		seconds = document.getElementById("seconds").textContent;
//        		console.log(minutes+":"+seconds);
        		
        		
        		
        		var TCApp_Time = {};
        		TCApp_Time.minutes = minutes;
        		TCApp_Time.seconds = seconds;
        		
        		
        		var TCApp_ConfigData = {};
        		
        		PS1QuesText = document.getElementById("PS1ques").textContent;
        		PS2QuesText = document.getElementById("PS2ques").textContent;
        		PS3QuesText = document.getElementById("PS3ques").textContent;
        		PS4QuesText = document.getElementById("PS4ques").textContent;
        		
        		TCApp_ConfigData.PS1QuesText = PS1QuesText;
        		TCApp_ConfigData.PS1Ans = PS1_component;
        		
        		TCApp_ConfigData.PS2QuesText = PS2QuesText;
        		TCApp_ConfigData.PS2Ans = PS2_component;
        		
        		TCApp_ConfigData.PS3QuesText = PS3QuesText;
        		TCApp_ConfigData.PS3Ans = PS3_component;
        		
        		TCApp_ConfigData.PS4QuesText = PS4QuesText;
        		TCApp_ConfigData.PSAns = PS4_component;
        		
        		TCApp_ConfigData.changeInRL = TCS_changeinRLVal;        		
        		TCApp_ConfigData.changeInFlowVal = ChangeinFolw;
        		TCApp_ConfigData.ChangeUserDemandVal = ChangeUserDemand;
        		
        		
        		TCApp_ConfigData.noOfWrongAttempts = chkOutputCnt;
        		
        		TCApp_ConfigData.timeforExp = TCApp_Time;
        		
//        		console.log(TCApp_ConfigData);
        		
        		
        		
        		
    			alertify.alert("Correct Answer");
    			$("#mainDiv").html('');
    			$("#mainDiv").html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:16px; font-weight:bold; text-align:center;">Congratulations !!!<br/> You have successfully completed this experiment</div></div>');
    			
    			
    	     
    			
    		}else{
    			
    			alertify.alert("Wrong component/value Selected, Please try again by selecting other component/value.");
    			chkOutputCnt++;
    			 if(chkOutputCnt >= 3){
    					alertify.alert("Answers for requirements:\n 1. Low Limiter\n 2. Low Limiter\n 3. Rate Limiter and by selecting Rate Limit Value <="
    										 + TCS_PS3Val
    										 + " %/sec. \n 4. High/Low selector with "
    										 + TCS_transnum
    										 + " input \n 5. Cold Water Flow Value <= "+TCS_PS2Val+" \n 6. User Demand Value >= "+TCS_PS1Val);	
    					
    				}
    		}
    		
    		
    	
    		
    	}
    	
    
    	
    }else{
    	
    	alertify.alert("Select input value for tank");
    }
	
	 
	
			
		
}
							
							
			