


//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//SINGLEACTINGCYLINDER.PressureControlSys = function() {
	
	PressureControlSys = function(){

	
//	 PCS_transnum = 4;
//	 PCS_PS1Val = 80;
//	 PCS_PS2Val = 20;
//	 PCS_PS3Val = 4;
	
	

	if(temp != 0 ){
		clearInterval(temp);
	}
	
	
	PCS_transnum = randomtrans(PCS_tansnumArr);
//	console.log(PCS_transnum);
	
	shuffle(PCS_PS1Arr);
	PCS_PS1Condition = PCS_PS1Arr[0];
	
	if(PCS_PS1Condition == "above"){
		
		PCS_PS1Val = getRndInteger(70, 90);
	}
	
	if(PCS_PS1Condition == "below"){
		
		PCS_PS1Val = getRndInteger(10, 30);
	}
	

	
	PCS_PS2Val = getRndInteger(10, 30);
//	console.log(PCS_PS2Val);
	
	PCS_PS3Val = randomtrans(PCS_changinRLArr);
//	console.log(PCS_PS3Val);
	
	shuffle(PCS_PS4Arr);
	PCS_PS4Condition1 = PCS_PS4Arr[0];
	PCS_PS4Condition2 = PCS_PS4Arr[1];
	
//	console.log("tansmitter no.= "+PCS_transnum+"  , PCS_PS1Val = "+PCS_PS1Val+", PCS_PS2Val = "+PCS_PS2Val+", PCS_PS3Val = "+PCS_PS3Val);
	
	
	chkOutputCnt = 0;
	v = 0;
		$("#mainDiv").html('');
		$("body").css("overflow"," hidden");
		var config_PCS = '';
		config_PCS += '<div id="Reqtimer" class="col-md-12 col-sm-12"><i><label id="minutes">00</label><span>:</span><label id="seconds">00</label></i></div><div id="canvas" class="col-md-8 col-sm-12"></div>'

				+ '<div class="col-md-4 col-sm-12" id="config_PCS">'
				+ '<div id = "PrblemStatementDiv" >'
				
				+'<h4>Requirements</h4>'			
				+'<p id = "PS1ques">1. User demand should not be satisfied if it is '+PCS_PS1Condition+' '+PCS_PS1Val+'% through PCV 200</p>'
				+'<div class="col-md-12"><input type="radio" id="PS1_selector" name="PS1_radiotype" value="selector"> <label for="PS1_selector">Selector</label>'
				+'<input type="radio" id="PS1_limiter" name="PS1_radiotype" value="limiter"> <label for="PS1_limiter">Limiter</label></div>'
				+'<div id="PS1_combobox" class="col-md-12"></div>'				
				+'<p id = "PS2ques">2. The gas flow through PCV 100 should not be closed totally for saftey. It should be always minimum '+PCS_PS2Val+'%</p>'
				+'<div class="col-md-12"><input type="radio" id="PS2_selector" name="PS2_radiotype" value="selector"> <label for="PS2_selector">Selector</label>'
				+'<input type="radio" id="PS2_limiter" name="PS2_radiotype" value="limiter"> <label for="PS2_limiter">Limiter</label></div>'
				+'<div id="PS2_combobox" class="col-md-12"></div>'				
				+'<p id = "PS3ques">3. For maintaining pressure of outlet to customer satisfaction level whenever there is change in demand (through PCV 200) the rate of change should not be above '+PCS_PS3Val+' %/Sec</p>'
				+'<div class="col-md-12"><input type="radio" id="PS3_selector" name="PS3_radiotype" value="selector"> <label for="PS3_selector">Selector</label>'
				+'<input type="radio" id="PS3_limiter" name="PS3_radiotype" value="limiter"> <label for="PS3_limiter">Limiter</label></div>'
				+'<div id="PS3_combobox" class="col-md-12"></div>'		
				+'<p id = "PS4ques">4. For accurate control of pressure in the tank , '+PCS_transnum+' transmitters are connected. For pressure control '+PCS_PS4Condition1+' will be selected for PIC 100 and '+PCS_PS4Condition2+' will be selected for PIC 301.</p>'
				+'<label>For PIC 100 & For PIC 301</label><br/>'
				+'<div class="col-md-12"><input type="radio" id="PS4_selector" name="PS4_radiotype" value="selector"> <label for="PS4_selector">Selector</label>'
				+'<input type="radio" id="PS4_limiter" name="PS4_radiotype" value="limiter"> <label for="PS4_limiter">Limiter</label></div>'
				+'<div id="PS4_combobox" class="col-md-12"></div>'
//				+'<label>For LIC 100</label>'
//				+'<input type="radio" id="PS4_selectorforLIC100" name="PS4_radiotypeforLCV100" value="selector"> <label for="PS4_selectorforLIC100">Selector</label>'
//				+'<input type="radio" id="PS4_limiterforLIC100" name="PS4_radiotypeforLCV100" value="limiter"> <label for="PS4_limiterforLIC100">Limiter</label><br>'
//				+'<div id="PS4_comboboxforLIC100"></div>'				
				+'</div>'
				+'<button id="configbtn_PCS">Configure Plant</button><br/>'
				+'<button id="updateconfigbtn_PCS" hidden>Select Other Component</button><br/>'
				+'<div id="InFlowChangeDiv"></div>'
				+'<div id="changeinRLdiv"></div>'
				
				
				
				
			
			$("#mainDiv").html(config_PCS);
		
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
	$("#configbtn_PCS").on("click", function(){
		
		
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
					drawPressureComponents();	
					
// hide div with its child  and button	 and show select another comp button
					
					var nodes = document.getElementById("PrblemStatementDiv").getElementsByTagName('*');
					for(var i = 0; i < nodes.length; i++){
					     nodes[i].disabled = true;
					}
					
					$("#configbtn_PCS").hide();
					$("#updateconfigbtn_PCS").show();
					
					
			
	
		
			// append ChangeinRL div
			 $("#changeinRLdiv").html('');
				var changeinRLdiv = '';
				changeinRLdiv +='<div>'
					+'<label>Select Rate Limiter Value&nbsp;(in %/sec)&nbsp;:</label>'
					+'<select name="App" id="changeinRL" >'
					+'<option value="-1">Select</option>'
					for(var i = 0; i < PCS_changinRLArr.length; i++){
						
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
						PCS_changeinRLVal  = this.value;
						slidermaxVal = 100;
						
						if(PCS_changeinRLVal == 3 ||  PCS_changeinRLVal == 9){
							
							slidermaxVal = 99;
							
						}
						if(PCS_changeinRLVal == 6 ||  PCS_changeinRLVal == 8){
							
							slidermaxVal = 96;
							
						}
						if(PCS_changeinRLVal == 7){
							
							slidermaxVal = 98;
							
						}
						$("#sliderDiv").html('');
						var sliderDiv = '';
							sliderDiv += '<div class="slidecontainer" id="PCS_Slider">'
									+ '<div class="header">Input value for Tank (Input  '
									+ 0
									+ '-'
									+ 100
									+ '  %)</div>'
									+ '<input step="'
									+ PCS_changeinRLVal
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
									+ '<button id="chkoutput_PCS" onclick="chkOutput_PCS()">Check Output</button><br/>'
						
						
						
						$("#sliderDiv").html(sliderDiv);
						
//value for PCS slider 	
						var PCSslider = document.getElementById("Input");
						var PCSoutput = document.getElementById("demo");
						PCSoutput.innerHTML = PCSslider.value;

						PCSslider.oninput = function() {
							
							 v = this.value;
							
							if(PCS_changeinRLVal == 3 ||  PCS_changeinRLVal == 9){
								
								highdiff = 100 - parseInt(v);
								if(highdiff == 1){
									v = parseInt(v) + 1;
								}
								lowdiff = 100 - parseInt(v);
								if(lowdiff == 99){
									v = parseInt(v) - 1;
								}
										
									
							}
							if(PCS_changeinRLVal == 6 ||  PCS_changeinRLVal == 8){
								
								highdiff = 100 - parseInt(v);
								if(highdiff == 4){
									v = parseInt(v) + 4;
								}
								lowdiff = 100 - parseInt(v);
								if(lowdiff == 96){
									v = parseInt(v) - 4;
								}
										
									
							}
							if(PCS_changeinRLVal == 7){
								
								highdiff = 100 - parseInt(v);
								if(highdiff == 2){
									v = parseInt(v) + 2;
								}
								lowdiff = 100 - parseInt(v);
								if(lowdiff == 98){
									v = parseInt(v) - 2;
								}
										
									
							}
							PCSoutput.innerHTML = v;
							var tankPressure = v;
							PCS_checkPlacedComponents(tankPressure);
							
							
							
						
						}
						
						}else{
							 $("#sliderDiv").html('');
							alertify.alert("Please select rate limiter value");
							
						}	
						
					});	
						
				 
		}	 
				 
	 }else{
		 
		 
		 alertify.alert("Please select all the fields");
		 
	 }
						   
		
	});

	
// click of select another component button ///////////////
	$("#updateconfigbtn_PCS").on("click", function(){
		
	
		 $("#changeinRLdiv").html('');
		 $("#sliderDiv").html('');
		 $("#UDChangeDiv").html('');
		 $("#InFlowChangeDiv").html('');
		 

			
		 var nodes = document.getElementById("PrblemStatementDiv").getElementsByTagName('*');
			for(var i = 0; i < nodes.length; i++){
			     nodes[i].disabled = false;
			}
		 $("#updateconfigbtn_PCS").hide();
		 $("#configbtn_PCS").show();
		
		
	});
	
	
	
		
	redrawPressureControl();
			
}	



		
	});



function redrawPressureControl(){
	
	 paper.clear();
	 PressureControl();

	
	 if(PCS_transnum == 3){
		 

		 PEPT201Connected();
		  
	  }else if(PCS_transnum == 4){
		  

		  
		  PEPT201Connected();
		  PEPT301Connected();
		  
	  }
	
}



function drawPressureComponents(){
	
	
	redrawPressureControl();
	py301topic301.hide();
	
	
	//PIC301 to PY401
	pic301topy401 = paper.path('M'+(x+225)+' '+(y-112)+ 'l 110 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	//PY401 to PY601
	ps1Comptops3Comp = paper.path('M'+(x+360)+' '+(y-90)+ 'l 0 88').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	//PY601toPY301
	paper.path('M'+(x+360)+' '+(y-5)+ 'l -140 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	
	 
//PS1 select box starts here						 
	 if(PS1_component == 'HS2'){				 
		
		HS2_Symbol((x+360), (y-112), "PY 401");
		highrotation((x+360), (y-112)).rotate(90);
		
	}
	if(PS1_component == 'HS3'){	
		
		HS3_Symbol((x+360), (y-112), "PY 401");
		highrotation((x+360), (y-112)).rotate(90);
			
	}
	if(PS1_component == 'HS4'){	
		
		HS4_Symbol((x+360), (y-112), "PY 401");
		highrotation((x+360), (y-112)).rotate(90);
	}
	if(PS1_component == 'LS2'){	
		
		LS2_Symbol((x+360), (y-112), "PY 401");
		lowrotation((x+360), (y-112)).rotate(90);
	
	}
	if(PS1_component == 'LS3'){	
		
		LS3_Symbol((x+360), (y-112), "PY 401");
		lowrotation((x+360), (y-112)).rotate(90);
	}
	if(PS1_component == 'LS4'){	
		
		LS4_Symbol((x+360), (y-112), "PY 401");
		lowrotation((x+360), (y-112)).rotate(90);
	}
	
	if(PS1_component == 'RL'){
		
		RL_Symbol((x+360), (y-112), "PY 401");
		RLrotation((x+360), (y-112)).rotate(0);
		paper.text((x+395), (y-155), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	if(PS1_component == 'HL'){	
		
		HL_Symbol((x+360), (y-112), "PY 401");
		HLrotation((x+360), (y-112)).rotate(90);
		paper.text((x+395), (y-155), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	if(PS1_component == 'LL'){	
		
		LL_Symbol((x+360), (y-112), "PY 401");
		LLrotation((x+360), (y-112)).rotate(90);
		paper.text((x+395), (y-155), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	
//PS2 select box starts here	
	if(PS2_component == 'HS2'){		
		
		HS2_Symbol((x-290), (y-315), "PY 501");
		highrotation((x-290), (y-315)).rotate(90);
	}
	if(PS2_component == 'HS3'){		
		
		HS3_Symbol((x-290), (y-315), "PY 501");
		highrotation((x-290), (y-315)).rotate(90);
	}
	if(PS2_component == 'HS4'){		
		
		HS4_Symbol((x-290), (y-315), "PY 501");
		highrotation((x-290), (y-315)).rotate(90);
	}
	if(PS2_component == 'LS2'){		
		
		LS2_Symbol((x-290), (y-315), "PY 501");
		lowrotation((x-290), (y-315)).rotate(90);		
		
	}
	if(PS2_component == 'LS3'){		
		
		LS3_Symbol((x-290), (y-315), "PY 501");
		lowrotation((x-290), (y-315)).rotate(90);
	}
	if(PS2_component == 'LS4'){		
		
		LS4_Symbol((x-290), (y-315), "PY 501");
		lowrotation((x-290), (y-315)).rotate(90);
	}
	if(PS2_component == 'RL'){		
		
		RL_Symbol((x-290), (y-315), "PY 501");
		RLrotation((x-290), (y-315)).rotate(0);
		paper.text((x-255), (y-360), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	if(PS2_component == 'HL'){		
		
		HL_Symbol((x-290), (y-315), "PY 501");
		HLrotation((x-290), (y-315)).rotate(90);
		paper.text((x-255), (y-360), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	if(PS2_component == 'LL'){		
		
		LL_Symbol((x-290), (y-315), "PY 501");
		LLrotation((x-290), (y-315)).rotate(90);
		paper.text((x-255), (y-360), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	


//PS3 select box starts here		


if(PS3_component == 'HS2'){				 

	 HS2_Symbol((x+360), (y-5), "PY 601");
	 highrotation((x+360), (y-5)).rotate(180);

	}
if(PS3_component == 'HS3'){				 
		
	 HS3_Symbol((x+360), (y-5), "PY 601");
	 highrotation((x+360), (y-5)).rotate(180);

	}
if(PS3_component == 'HS4'){				 
		
	 HS4_Symbol((x+360), (y-5), "PY 601");
	 highrotation((x+360), (y-5)).rotate(180);

	}
if(PS3_component == 'LS2'){				 
		
	 LS2_Symbol((x+360), (y-5), "PY 601");
	 lowrotation((x+360), (y-5)).rotate(180);

	}
if(PS3_component == 'LS3'){				 
		
	LS3_Symbol((x+360), (y-5), "PY 601");
	 lowrotation((x+360), (y-5)).rotate(180);

	}
if(PS3_component == 'LS4'){				 
		
	LS4_Symbol((x+360), (y-5), "PY 601");
	 lowrotation((x+360), (y-5)).rotate(180);

	}
if(PS3_component == 'RL'){				 
		
	 RL_Symbol((x+360), (y-5), "PY 601");
	 RLrotation((x+360), (y-5)).rotate(90);
	 paper.text((x+395), (y-50), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	}); 

	}
if(PS3_component == 'HL'){				 
		
	 HL_Symbol((x+360), (y-5), "PY 601");
	 HLrotation((x+360), (y-5)).rotate(180);
	 paper.text((x+395), (y-50), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	}); 

	}
if(PS3_component == 'LL'){				 
		
	 LL_Symbol((x+360), (y-5), "PY 601");
	 LLrotation((x+360), (y-5)).rotate(180);
	 paper.text((x+395), (y-50), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	}); 

	}


//PS4 select box starts here		


if(PS4_component == 'HS2'){				 
	 
	// rect with symbol for py101
	paper.rect((x+20), (y-280), 25, 25).attr({"stroke-width" : 1});
	highrotation((x-1), (y-245)).rotate(-90);
	
	// rect with symbol for py201
	paper.rect((x+225), (y-240), 25, 25).attr({"stroke-width" : 1});
	highrotation((x+203), (y-205)).rotate(90);
	 
	if(PCS_transnum == 3){
		PEPT201_Conn.hide();
		PEPT201NotConnected();						
	}
	if(PCS_transnum == 4){
		
		PEPT201_Conn.hide();
		PEPT201NotConnected();	
		PEPT301_Conn.hide();
		PEPT301NotConnected();
	}

}

if(PS4_component == 'HS3'){				 
	// rect with symbol for py101
	paper.rect((x+20), (y-280), 25, 25).attr({"stroke-width" : 1});
	highrotation((x-1), (y-245)).rotate(-90);
	
	// rect with symbol for py201
	paper.rect((x+225), (y-240), 25, 25).attr({"stroke-width" : 1});
	highrotation((x+203), (y-205)).rotate(90);
	
	 if(PCS_transnum == 4){
			
		 PEPT301_Conn.hide();
		 PEPT301NotConnected();
		}
	 if(PCS_transnum == 2){							
			
		 PEPT201NotConnected();
	 }
}
if(PS4_component == 'HS4'){				 
	// rect with symbol for py101
	paper.rect((x+20), (y-280), 25, 25).attr({"stroke-width" : 1});
	highrotation((x-1), (y-245)).rotate(-90);
	
	// rect with symbol for py201
	paper.rect((x+225), (y-240), 25, 25).attr({"stroke-width" : 1});
	highrotation((x+203), (y-205)).rotate(90);
	
	 if(PCS_transnum == 3){
		 
		 PEPT301NotConnected();
		}
	 if(PCS_transnum == 2){							
			
		 PEPT201NotConnected();
		 PEPT301NotConnected();
	 }
}




if(PS4_component == 'LS2'){	
		
		// rect with symbol for ty101
		paper.rect((x+20), (y-280), 25, 25).attr({"stroke-width" : 1});
		lowrotation((x-1), (y-245)).rotate(90);
		
		// rect with symbol for ty201
		paper.rect((x+225), (y-240), 25, 25).attr({"stroke-width" : 1});
		lowrotation((x+203), (y-205)).rotate(90);
	 
		if(PCS_transnum == 3){
			PEPT201_Conn.hide();
			PEPT201NotConnected();						
		}
		if(PCS_transnum == 4){
			
			PEPT201_Conn.hide();
			PEPT201NotConnected();	
			PEPT301_Conn.hide();
			PEPT301NotConnected();
		}



}

if(PS4_component == 'LS3'){		
	
	// rect with symbol for ty101
	paper.rect((x+20), (y-280), 25, 25).attr({"stroke-width" : 1});
	lowrotation((x-1), (y-245)).rotate(90);
	
	// rect with symbol for ty201
	paper.rect((x+225), (y-240), 25, 25).attr({"stroke-width" : 1});
	lowrotation((x+203), (y-205)).rotate(90);
	 
	if(PCS_transnum == 4){
		
		 PEPT301_Conn.hide();
		 PEPT301NotConnected();
		}
	 if(PCS_transnum == 2){							
			
		 PEPT201NotConnected();
	 }
}
if(PS4_component == 'LS4'){				 
		
	// rect with symbol for ty101
	paper.rect((x+20), (y-280), 25, 25).attr({"stroke-width" : 1});
	lowrotation((x-1), (y-245)).rotate(90);
	
	// rect with symbol for ty201
	paper.rect((x+225), (y-240), 25, 25).attr({"stroke-width" : 1});
	lowrotation((x+203), (y-205)).rotate(90);
	 
	if(PCS_transnum == 3){
		 
		 PEPT301NotConnected();
		}
	 if(PCS_transnum == 2){							
			
		 PEPT201NotConnected();
		 PEPT301NotConnected();
	 }
}


if(PS4_component == 'RL'){				 
		
	 PY101Circle.hide();
	 PY201Circle.hide();
	 
	 RL_Symbol((x),(y-240), "PY 101");	 
	 RLrotation((x),(y-240)).rotate(0);
	 paper.text((x+35), (y-285), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
	 RL_Symbol((x+205),(y-202), "PY 201");	 
	 RLrotation((x+205),(y-202)).rotate(0);
	 paper.text((x+240), (y-245), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
		
	}

if(PS4_component == 'HL'){		

	 PY101Circle.hide();
	 PY201Circle.hide();
	 
	 RL_Symbol((x),(y-240), "PY 101");	 
	 HLrotation((x),(y-240)).rotate(-90);
	 paper.text((x+35), (y-285), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
	 RL_Symbol((x+205),(y-202), "PY 201");	 
	 HLrotation((x+205),(y-202)).rotate(90);
	 paper.text((x+240), (y-245), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});	 
	 
		
	}

if(PS4_component == 'LL'){				 
		
	 
	 PY101Circle.hide();
	 PY201Circle.hide();
	 
	 RL_Symbol((x),(y-240), "PY 101");	 
	 LLrotation((x),(y-240)).rotate(-90);
	 paper.text((x+35), (y-285), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
	 RL_Symbol((x+205),(y-202), "PY 201");	 
	 LLrotation((x+205),(y-202)).rotate(90);
	 paper.text((x+240), (y-245), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});	 
	 
		 
		
	}

	
}







function chkOutput_PCS(){
	
    if(v!= 0){
    	
    	if(PCS_PS1Condition == "above"){
    		
    		
    		if (PS1_component == "HL"
    			&& PS2_component == "LL"
    			&& PS3_component == "RL"
    			&&( (PCS_transnum == 2 && (PS4_component == "HS2" || PS4_component == "LS2"))
    			|| (PCS_transnum == 3 && (PS4_component == "HS3" || PS4_component == "LS3"))
    			|| (PCS_transnum == 4 && (PS4_component == "HS4" || PS4_component == "LS4")))
    			&& PCS_changeinRLVal <= PCS_PS3Val){
    			
        		chkOutputCnt++;
        		
        		stop_timer();
        		
        		minutes = document.getElementById("minutes").textContent;
        		seconds = document.getElementById("seconds").textContent;
//        		console.log(minutes+":"+seconds);
        		
        		var PCApp_Time = {};
        		PCApp_Time.minutes = minutes;
        		PCApp_Time.seconds = seconds;
        		
        		
        		var PCApp_ConfigData = {};
        		
        		PS1QuesText = document.getElementById("PS1ques").textContent;
        		PS2QuesText = document.getElementById("PS2ques").textContent;
        		PS3QuesText = document.getElementById("PS3ques").textContent;
        		PS4QuesText = document.getElementById("PS4ques").textContent;
        		
        		PCApp_ConfigData.PS1QuesText = PS1QuesText;
        		PCApp_ConfigData.PS1Ans = PS1_component;
        		
        		PCApp_ConfigData.PS2QuesText = PS2QuesText;
        		PCApp_ConfigData.PS2Ans = PS2_component;
        		
        		PCApp_ConfigData.PS3QuesText = PS3QuesText;
        		PCApp_ConfigData.PS3Ans = PS3_component;
        		
        		PCApp_ConfigData.PS4QuesText = PS4QuesText;
        		PCApp_ConfigData.PSAns = PS4_component;
        		
        		PCApp_ConfigData.changeInRL = PCS_changeinRLVal;
        		
        		PCApp_ConfigData.noOfWrongAttempts = chkOutputCnt;
        		
        		PCApp_ConfigData.timeforExp = PCApp_Time;
        		
//        		console.log(PCApp_ConfigData);
        		
        		
        		
        		alertify.alert("Correct Answer");
        		$("#mainDiv").html('');
        		$("#mainDiv").html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:16px; font-weight:bold; text-align:center;">Congratulations !!!<br/> You have successfully completed this experiment</div></div>');
    			
    	     
    			
    		}else{
    			
    			alertify.alert("Wrong component/value Selected, Please try again by selecting other component/value.");
    			chkOutputCnt++;
    			 if(chkOutputCnt >= 3){
    					alertify.alert("Answers for requirements :\n 1. High Limiter\n 2. Low Limiter\n 3. Rate Limiter and by selecting Rate Limit Value <= "
    										 + PCS_PS3Val
    										 + " %/sec. \n 4. High/Low selector with "
    										 + PCS_transnum
    										 + " input");	
    					
    				}
    		}
    		
    		
    	}else{
    		

    		
    		
    		if (PS1_component == "LL"
    			&& PS2_component == "LL"
    			&& PS3_component == "RL"
    			&&( (PCS_transnum == 2 && (PS4_component == "HS2" || PS4_component == "LS2"))
    			|| (PCS_transnum == 3 && (PS4_component == "HS3" || PS4_component == "LS3"))
    			|| (PCS_transnum == 4 && (PS4_component == "HS4" || PS4_component == "LS4")))
    			&& PCS_changeinRLVal <= PCS_PS3Val){
    			
        		chkOutputCnt++;
        		stop_timer();
        		
        		minutes = document.getElementById("minutes").textContent;
        		seconds = document.getElementById("seconds").textContent;
//        		console.log(minutes+":"+seconds);
        		
        		
        		
        		var PCApp_Time = {};
        		PCApp_Time.minutes = minutes;
        		PCApp_Time.seconds = seconds;
        		
        		
        		var PCApp_ConfigData = {};
        		
        		PS1QuesText = document.getElementById("PS1ques").textContent;
        		PS2QuesText = document.getElementById("PS2ques").textContent;
        		PS3QuesText = document.getElementById("PS3ques").textContent;
        		PS4QuesText = document.getElementById("PS4ques").textContent;
        		
        		PCApp_ConfigData.PS1QuesText = PS1QuesText;
        		PCApp_ConfigData.PS1Ans = PS1_component;
        		
        		PCApp_ConfigData.PS2QuesText = PS2QuesText;
        		PCApp_ConfigData.PS2Ans = PS2_component;
        		
        		PCApp_ConfigData.PS3QuesText = PS3QuesText;
        		PCApp_ConfigData.PS3Ans = PS3_component;
        		
        		PCApp_ConfigData.PS4QuesText = PS4QuesText;
        		PCApp_ConfigData.PSAns = PS4_component;
        		
        		PCApp_ConfigData.changeInRL = PCS_changeinRLVal;
        		
        		PCApp_ConfigData.noOfWrongAttempts = chkOutputCnt;
        		
        		PCApp_ConfigData.timeforExp = PCApp_Time;
        		
//        		console.log(PCApp_ConfigData);
        		
        		
    			alertify.alert("Correct Answer");
    			$("#mainDiv").html('');
    			$("#mainDiv").html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:16px; font-weight:bold; text-align:center;">Congratulations !!!<br/> You have successfully completed this experiment</div></div>');
    			
    			
    	     
    			
    		}else{
    			
    			alertify.alert("Wrong component/value Selected, Please try again by selecting other component/value.");
    			chkOutputCnt++;
    			 if(chkOutputCnt >= 3){
    					alertify.alert("Answers for requirements :\n 1. Low Limiter\n 2. Low Limiter\n 3. Rate Limiter and by selecting Rate Limit Value <= "
    										 + PCS_PS3Val
    										 + " %/sec. \n 4. High/Low selector with "
    										 + PCS_transnum
    										 + " input");	
    					
    				}
    		}
    		
    		
    	
    		
    	}
    	
    
    	
    }else{
    	
    	alertify.alert("Select input value for tank");
    }
	
	 
	
			
		
}
							
							
			