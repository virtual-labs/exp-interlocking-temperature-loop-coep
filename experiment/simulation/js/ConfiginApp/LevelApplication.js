

//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//SINGLEACTINGCYLINDER.LevelControlSys = function() {
	
	LevelControlSys = function(){

	
//	 transnum = 4;
//	 PS1Val = 80;
//	 PS2Val = 20;
//	 PS3Val = 4;
	
	if(temp != 0 ){
		clearInterval(temp);
	}
	
	
	transnum = randomtrans(tansnumArr);
//	console.log(transnum);
	
	shuffle(PS1Arr);
	PS1Condition = PS1Arr[0];
	
	if(PS1Condition == "above"){
		
		PS1Val = getRndInteger(70, 90);
	}
	if(PS1Condition == "below"){
		
		PS1Val = getRndInteger(10, 30);
	}
	
	
//	console.log(PS1Val);
	
	PS2Val = getRndInteger(5, 50);
//	console.log(PS2Val);
	
	PS3Val = randomtrans(changinRLArr);
//	console.log(PS3Val);
	
	shuffle(PS4Arr);
	PS4Condition1 = PS4Arr[0];
	PS4Condition2 = PS4Arr[1];
	
//	console.log("tansmitter no.= "+transnum+"  , PS1Val = "+PS1Val+", PS2Val = "+PS2Val+", PS3Val = "+PS3Val);
	
	
	chkOutputCnt = 0;
	v = 0;
		$("#mainDiv").html('');
		$("body").css("overflow"," hidden");
		var config_LCS = '';
		config_LCS += '<div id="Reqtimer" class="col-md-12 col-sm-12"><i><label id="minutes">00</label><span>:</span><label id="seconds">00</label></i></div><div id="canvas" class="col-md-7 col-sm-12"></div>'

				+ '<div class="col-md-5 col-sm-12" id="config_LCS">'
				+ '<div id = "PrblemStatementDiv" >'
				
				+'<h4>Requirements</h4>'
				+'<p id= "PS1ques">1. The outlet control valve LCV 100 should not open '+PS1Condition+'  '+PS1Val+'%</p>'
				+'<div class="col-md-12"><input type="radio" id="PS1_selector" name="PS1_radiotype" value="selector"> <label for="PS1_selector">Selector</label>'
				+'<input type="radio" id="PS1_limiter" name="PS1_radiotype" value="limiter"> <label for="PS1_limiter">Limiter</label></div>'
				+'<div id="PS1_combobox" class="col-md-12"></div>'
				+'<p id= "PS2ques">2. The inlet valve LCV 200 should not close fully. It should remain open '+PS2Val+'% even if LY 200 send a signal to close</p>'
				+'<div class="col-md-12"><input type="radio" id="PS2_selector" name="PS2_radiotype" value="selector"> <label for="PS2_selector">Selector</label>'
				+'<input type="radio" id="PS2_limiter" name="PS2_radiotype" value="limiter"> <label for="PS2_limiter">Limiter</label></div>'
				+'<div id="PS2_combobox" class="col-md-12"></div>'
				+'<p id= "PS3ques">3. Whenever there is a change in demand the control LCV 100 should not open more than '+PS3Val+' %/sec</p>'
				+'<div class="col-md-12"><input type="radio" id="PS3_selector" name="PS3_radiotype" value="selector"> <label for="PS3_selector">Selector</label>'
				+'<input type="radio" id="PS3_limiter" name="PS3_radiotype" value="limiter"> <label for="PS3_limiter">Limiter</label></div>'
				+'<div id="PS3_combobox" class="col-md-12"></div>'
				+'<p id= "PS4ques">4. For accurate measurement of the level in tank '+transnum+'  tansmitter are connected. For safety out of '+transnum+' tansmitter radings '+PS4Condition1+' reading should be selected for LIC 200 and '+PS4Condition2+' for LIC 100. </p>'
				+'<label>For LIC 100 & For LIC 200</label><br/>'
				+'<div class="col-md-12"><input type="radio" id="PS4_selector" name="PS4_radiotype" value="selector"> <label for="PS4_selector">Selector</label>'
				+'<input type="radio" id="PS4_limiter" name="PS4_radiotype" value="limiter"> <label for="PS4_limiter">Limiter</label></div>'
				+'<div id="PS4_combobox" class="col-md-12"></div>'
//				+'<label>For LIC 100</label>'
//				+'<input type="radio" id="PS4_selectorforLIC100" name="PS4_radiotypeforLCV100" value="selector"> <label for="PS4_selectorforLIC100">Selector</label>'
//				+'<input type="radio" id="PS4_limiterforLIC100" name="PS4_radiotypeforLCV100" value="limiter"> <label for="PS4_limiterforLIC100">Limiter</label><br>'
//				+'<div id="PS4_comboboxforLIC100"></div>'				
				+'</div>'
				+'<button id="configbtn_LCS">Configure Plant</button><br/>'
				+'<button id="updateconfigbtn_LCS" hidden>Select Other Component</button><br/>'
				+'<div id="changeinRLdiv"></div>'
				
				
				
				
			
			$("#mainDiv").html(config_LCS);
		
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
	
	
	// onchange ps4 LIC 100 & LIC 200
	
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
	$("#configbtn_LCS").on("click", function(){
		
		
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
					drawComponents();	
					
// hide div with its child  and button	 and show select another comp button
					
					var nodes = document.getElementById("PrblemStatementDiv").getElementsByTagName('*');
					for(var i = 0; i < nodes.length; i++){
					     nodes[i].disabled = true;
					}
					
					$("#configbtn_LCS").hide();
					$("#updateconfigbtn_LCS").show();
					
					
					
// show rate Limiter Value						
				 $("#changeinRLdiv").html('');
					var changeinRLdiv = '';
					changeinRLdiv +='<div>'
						+'<label>Select rate Limiter Value&nbsp;(in %/sec)&nbsp;:</label>'
						+'<select name="App" id="changeinRL" >'
						+'<option value="-1">Select</option>'
						for(var i = 0; i < changinRLArr.length; i++){
							
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
									changeinRLVal  = this.value;
									slidermaxVal = 100;
									
									if(changeinRLVal == 3 ||  changeinRLVal == 9){
										
										slidermaxVal = 99;
										
									}
									if(changeinRLVal == 6 ||  changeinRLVal == 8){
										
										slidermaxVal = 96;
										
									}
									if(changeinRLVal == 7){
										
										slidermaxVal = 98;
										
									}
									$("#sliderDiv").html('');
									var sliderDiv = '';
										sliderDiv += '<div class="slidecontainer" id="LCS_Slider">'
												+ '<div class="header">Input value for Tank (Input  '
												+ 0
												+ '-'
												+ 100
												+ '  %)</div>'
												+ '<input step="'
												+ changeinRLVal
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
												+ '<button id="chkoutput_LCS" onclick="chkOutput()">Check Output</button><br/>'
									
									
									
									$("#sliderDiv").html(sliderDiv);
									
//									value for LCS slider 	
									var LCSslider = document.getElementById("Input");
									var LCSoutput = document.getElementById("demo");
									LCSoutput.innerHTML = LCSslider.value;

									LCSslider.oninput = function() {
										
										 v = this.value;
										
										if(changeinRLVal == 3 ||  changeinRLVal == 9){
											highdiff = 100 - parseInt(v);
											if(highdiff == 1){
												v = parseInt(v) + 1;
											}
											lowdiff = 100 - parseInt(v);
											if(lowdiff == 99){
												v = parseInt(v) - 1;
											}
													
												
										}
										if(changeinRLVal == 6 ||  changeinRLVal == 8){
											highdiff = 100 - parseInt(v);
											if(highdiff == 4){
												v = parseInt(v) + 4;
											}
											lowdiff = 100 - parseInt(v);
											if(lowdiff == 96){
												v = parseInt(v) - 4;
											}
													
												
										}
										if(changeinRLVal == 7){
											highdiff = 100 - parseInt(v);
											if(highdiff == 2){
												v = parseInt(v) + 2;
											}
											lowdiff = 100 - parseInt(v);
											if(lowdiff == 98){
												v = parseInt(v) - 2;
											}
													
												
										}
										LCSoutput.innerHTML = v;
										var tanklevel = v;
										LCS_checkPlacedComponents(tanklevel);
										
										
										
									
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
	$("#updateconfigbtn_LCS").on("click", function(){
		
	
		 $("#changeinRLdiv").html('');
		 $("#sliderDiv").html('');
		 var nodes = document.getElementById("PrblemStatementDiv").getElementsByTagName('*');
			for(var i = 0; i < nodes.length; i++){
			     nodes[i].disabled = false;
			}
		 $("#updateconfigbtn_LCS").hide();
		 $("#configbtn_LCS").show();
		
		
	});
	
	
	
		
	redrawLevelControl();
			
}	


		
	});


function redrawLevelControl(){
	
	 paper.clear();
	 LevelControl();
	
	 if(transnum == 3){
		 
		  LELT201_Connected();
		  
	  }else if(transnum == 4){
		  
		  LELT201_Connected();
		  LELT301_Connected();
	  }
	
}	




function drawComponents(){
	
	
	
	 redrawLevelControl();	
	 lic100toly100.hide();
	
	 
	 
	//lic100 to selected component
	lic100toPS1comp = paper.path('M'+(x+445)+' '+(y+195)+ 'l 58 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	PS1comptoPS3Comp = paper.path('M'+(x+525)+' '+(y+220)+ 'l 0 70 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	paper.path('M'+(x+525)+' '+(y+290)+ 'l -80 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
//	paper.text((x+525), (y+195), "LY 301").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"}).toFront();
//	paper.text((x+525), (y-80), "LY 401").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"}).toFront();
//	paper.text((x+525), (y+285), "LY 501").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"}).toFront();
	
//PS1 select box starts here						 
	 if(PS1_component == 'HS2'){				 
		
		HS2_Symbol((x+525), (y+195), "LY 301");
		highrotation((x+525), (y+195)).rotate(90);
		
	}
	if(PS1_component == 'HS3'){	
		
		HS3_Symbol((x+525), (y+195), "LY 301");
		highrotation((x+525), (y+195)).rotate(90);
			
	}
	if(PS1_component == 'HS4'){	
		
		HS4_Symbol((x+525), (y+195), "LY 301");
		highrotation((x+525), (y+195)).rotate(90);
	}
	if(PS1_component == 'LS2'){	
		
		LS2_Symbol((x+525), (y+195), "LY 301");
		lowrotation((x+525), (y+195)).rotate(90);
	}
	if(PS1_component == 'LS3'){	
		
		LS3_Symbol((x+525), (y+195), "LY 301");
		lowrotation((x+525), (y+195)).rotate(90);
	}
	if(PS1_component == 'LS4'){	
		
		LS4_Symbol((x+525), (y+195), "LY 301");
		lowrotation((x+525), (y+195)).rotate(90);
	}
	
	if(PS1_component == 'RL'){
		
		RL_Symbol((x+525), (y+195), "LY 301");
		RLrotation((x+525), (y+195)).rotate(0);
		paper.text((x+560), (y+150), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	if(PS1_component == 'HL'){	
		
		HL_Symbol((x+525), (y+195), "LY 301");
		HLrotation((x+525), (y+195)).rotate(90);
		paper.text((x+560), (y+150), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	if(PS1_component == 'LL'){	
		
		LL_Symbol((x+525), (y+195), "LY 301");
		LLrotation((x+525), (y+195)).rotate(90);
		paper.text((x+560), (y+150), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	
//PS2 select box starts here	
	if(PS2_component == 'HS2'){				 
	
		HS2_Symbol((x+525), (y-80), "LY 401");
		highrotation((x+525), (y-80)).rotate(90);
	}
	if(PS2_component == 'HS3'){		
		
		HS3_Symbol((x+525), (y-80), "LY 401");
		highrotation((x+525), (y-80)).rotate(90);
	}
	if(PS2_component == 'HS4'){		
		
		HS4_Symbol((x+525), (y-80), "LY 401");
		highrotation((x+525), (y-80)).rotate(90);
	}
	if(PS2_component == 'LS2'){		
		
		LS2_Symbol((x+525), (y-80), "LY 401");
		lowrotation((x+525), (y-80)).rotate(90);
		
	}
	if(PS2_component == 'LS3'){		
		
		LS3_Symbol((x+525), (y-80), "LY 401");
		lowrotation((x+525), (y-80)).rotate(90);
	}
	if(PS2_component == 'LS4'){		
		
		LS4_Symbol((x+525), (y-80), "LY 401");
		lowrotation((x+525), (y-80)).rotate(90);
	}
	if(PS2_component == 'RL'){		
		
		RL_Symbol((x+525), (y-80), "LY 401");
		RLrotation((x+525), (y-80)).rotate(0);
		paper.text((x+560), (y-125), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	if(PS2_component == 'HL'){		
		
		HL_Symbol((x+525), (y-80), "LY 401");
		HLrotation((x+525), (y-80)).rotate(90);
		paper.text((x+560), (y-125), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	if(PS2_component == 'LL'){		
		
		LL_Symbol((x+525), (y-80), "LY 401");
		LLrotation((x+525), (y-80)).rotate(90);
		paper.text((x+560), (y-125), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	


//PS3 select box starts here		


if(PS3_component == 'HS2'){				 
		
	 HS2_Symbol((x+525), (y+285), "LY 501");
	 highrotation((x+525), (y+285)).rotate(180);

	}
if(PS3_component == 'HS3'){				 
		
	 HS3_Symbol((x+525), (y+285), "LY 501");
	 highrotation((x+525), (y+285)).rotate(180);

	}
if(PS3_component == 'HS4'){				 
		
	 HS4_Symbol((x+525), (y+285), "LY 501");
	 highrotation((x+525), (y+285)).rotate(180);

	}
if(PS3_component == 'LS2'){				 
		
	 LS2_Symbol((x+525), (y+285), "LY 501");
	 lowrotation((x+525), (y+285)).rotate(180);

	}
if(PS3_component == 'LS3'){				 
		
	 LS3_Symbol((x+525), (y+285), "LY 501");
	 lowrotation((x+525), (y+285)).rotate(180);

	}
if(PS3_component == 'LS4'){				 
		
	 LS4_Symbol((x+525), (y+285), "LY 501");
	 lowrotation((x+525), (y+285)).rotate(180);

	}
if(PS3_component == 'RL'){				 
		
	 RL_Symbol((x+525), (y+285), "LY 501");
	 RLrotation((x+525), (y+285)).rotate(90);
	 paper.text((x+560), (y+240), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	}); 

	}
if(PS3_component == 'HL'){				 
		
	 HL_Symbol((x+525), (y+285), "LY 501");
	 HLrotation((x+525), (y+285)).rotate(180);
	 paper.text((x+560), (y+240), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	}); 

	}
if(PS3_component == 'LL'){				 
		
	 LL_Symbol((x+525), (y+285), "LY 501");
	 LLrotation((x+525), (y+285)).rotate(180);
	 paper.text((x+560), (y+240), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	}); 

	}


//PS4 select box starts here		


if(PS4_component == 'HS2'){				 
	 
	// rect with symbol for ly201
	paper.rect((x+442), (y-55), 25, 25).attr({"stroke-width" : 1});
	highrotation((x+420), (y-20)).rotate(0);
	// rect with symbol for ly101
	paper.rect((x+442), (y+85), 25, 25).attr({"stroke-width" : 1});
	highrotation((x+420), (y+120)).rotate(90);
	 
	if(transnum == 3){
		LELT201_Conn.hide();
		LELT201_NotConnected();						
	}
	if(transnum == 4){
		
		LELT201_Conn.hide();
		LELT201_NotConnected();	
		LELT301_Conn.hide();
		LELT301_NotConnected();
	}

}

if(PS4_component == 'HS3'){				 
	// rect with symbol for ly201
	 paper.rect((x+442), (y-55), 25, 25).attr({"stroke-width" : 1});
	 highrotation((x+420), (y-20)).rotate(0);
	// rect with symbol for ly101
		paper.rect((x+442), (y+85), 25, 25).attr({"stroke-width" : 1});
		highrotation((x+420), (y+120)).rotate(90);
	 if(transnum == 4){
			
			LELT301_Conn.hide();
			LELT301_NotConnected();
		}
	 if(transnum == 2){							
			
			LELT201_NotConnected();
	 }
}
if(PS4_component == 'HS4'){				 
	// rect with symbol for ly201
	 paper.rect((x+442), (y-55), 25, 25).attr({"stroke-width" : 1});
	 highrotation((x+420), (y-20)).rotate(0);
	// rect with symbol for ly101
		paper.rect((x+442), (y+85), 25, 25).attr({"stroke-width" : 1});
		highrotation((x+420), (y+120)).rotate(90);
	 if(transnum == 3){
		 
			LELT301_NotConnected();
		}
	 if(transnum == 2){							
			
			LELT201_NotConnected();
			LELT301_NotConnected();
	 }
}




if(PS4_component == 'LS2'){				 
		
	// rect with symbol for ly201
	 paper.rect((x+442), (y-55), 25, 25).attr({"stroke-width" : 1});
	 lowrotation((x+420), (y-20)).rotate(0);
	// rect with symbol for ly101
		paper.rect((x+442), (y+85), 25, 25).attr({"stroke-width" : 1});
		lowrotation((x+420), (y+120)).rotate(90);
	 
	if(transnum == 3){
		LELT201_Conn.hide();
		LELT201_NotConnected();						
	}
	if(transnum == 4){
		
		LELT201_Conn.hide();
		LELT201_NotConnected();	
		LELT301_Conn.hide();
		LELT301_NotConnected();
	}

}

if(PS4_component == 'LS3'){				 
	// rect with symbol for ly201
	 paper.rect((x+442), (y-55), 25, 25).attr({"stroke-width" : 1});
	 lowrotation((x+420), (y-20)).rotate(0);
	// rect with symbol for ly101
		paper.rect((x+442), (y+85), 25, 25).attr({"stroke-width" : 1});
		lowrotation((x+420), (y+120)).rotate(90);
	 
	 if(transnum == 4){
			
			LELT301_Conn.hide();
			LELT301_NotConnected();
		}
	 if(transnum == 2){							
			
			LELT201_NotConnected();
	 }
}
if(PS4_component == 'LS4'){				 
		
	// rect with symbol for ly201
	 paper.rect((x+442), (y-55), 25, 25).attr({"stroke-width" : 1});
	 lowrotation((x+420), (y-20)).rotate(0);
	// rect with symbol for ly101
		paper.rect((x+442), (y+85), 25, 25).attr({"stroke-width" : 1});
		lowrotation((x+420), (y+120)).rotate(90);
	 
	 if(transnum == 3){
		 
			LELT301_NotConnected();
		}
	 if(transnum == 2){							
			
			LELT201_NotConnected();
			LELT301_NotConnected();
	 }
}


if(PS4_component == 'RL'){				 
		
	 LY201Circle.hide();
	 LY101Circle.hide();
	 
	 RL_Symbol((x+420), (y-20), "LY 201");	 
	 RLrotation((x+420), (y-20)).rotate(0);
	 paper.text((x+455), (y-65), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
	 RL_Symbol((x+420), (y+120), "LY 101");	 
	 RLrotation((x+420), (y+120)).rotate(0);
	 paper.text((x+455), (y+75), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
		 
		
	}

if(PS4_component == 'HL'){				 
		
	 LY201Circle.hide();
	 LY101Circle.hide();
	 
	 HL_Symbol((x+420), (y-20), "LY 201");	 
	 HLrotation((x+420), (y-20)).rotate(0);
	 paper.text((x+455), (y-65), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
	 HL_Symbol((x+420), (y+120), "LY 101");	
	 HLrotation((x+420), (y+120)).rotate(90);
	 paper.text((x+455), (y+75), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
		 
		
	}

if(PS4_component == 'LL'){				 
		
	 LY201Circle.hide();
	 LY101Circle.hide();
	 
	 LL_Symbol((x+420), (y-20), "LY 201");	
	 LLrotation((x+420), (y-20)).rotate(0);
	 paper.text((x+455), (y-65), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
	 LL_Symbol((x+420), (y+120), "LY 101");	
	 LLrotation((x+420), (y+120)).rotate(90);
	 paper.text((x+455), (y+75), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
		 
		
	}

	
}

	




function chkOutput(){
	
    if(v!= 0){
    	
    	if(PS1Condition == "above"){
    		
    		
    		if (PS1_component == "HL"
    			&& PS2_component == "LL"
    			&& PS3_component == "RL"
    			&&( (transnum == 2 && (PS4_component == "HS2" || PS4_component == "LS2"))
    			|| (transnum == 3 && (PS4_component == "HS3" || PS4_component == "LS3"))
    			|| (transnum == 4 && (PS4_component == "HS4" || PS4_component == "LS4")))
    			&& changeinRLVal <= PS3Val){
    			
        		chkOutputCnt++;
        		
        		stop_timer();
        		
        		minutes = document.getElementById("minutes").textContent;
        		seconds = document.getElementById("seconds").textContent;        		
//        		console.log(minutes+":"+seconds);
        		
        		var LCApp_Time = {};
        		LCApp_Time.minutes = minutes;
        		LCApp_Time.seconds = seconds;
        		
        		
        		var LCApp_ConfigData = {};
        		
        		PS1QuesText = document.getElementById("PS1ques").textContent;
        		PS2QuesText = document.getElementById("PS2ques").textContent;
        		PS3QuesText = document.getElementById("PS3ques").textContent;
        		PS4QuesText = document.getElementById("PS4ques").textContent;
        		
        		LCApp_ConfigData.PS1QuesText = PS1QuesText;
        		LCApp_ConfigData.PS1Ans = PS1_component;
        		
        		LCApp_ConfigData.PS2QuesText = PS2QuesText;
        		LCApp_ConfigData.PS2Ans = PS2_component;
        		
        		LCApp_ConfigData.PS3QuesText = PS3QuesText;
        		LCApp_ConfigData.PS3Ans = PS3_component;
        		
        		LCApp_ConfigData.PS4QuesText = PS4QuesText;
        		LCApp_ConfigData.PSAns = PS4_component;
        		
        		LCApp_ConfigData.changeInRL = changeinRLVal;
        		
        		LCApp_ConfigData.noOfWrongAttempts = chkOutputCnt;
        		
        		LCApp_ConfigData.timeforExp = LCApp_Time;
        		
        		console.log(LCApp_ConfigData);
        		
        		
        		alertify.alert("Correct Answer");
        		$("#mainDiv").html('');
        		$("#mainDiv").html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:16px; font-weight:bold; text-align:center;">Congratulations !!!<br/> You have successfully completed this experiment</div></div>');
    			
    			
    	     
    			
    		}else{
    			
    			alertify.alert("Wrong component/value Selected, Please try again by selecting other component/value.");
    			chkOutputCnt++;
    			 if(chkOutputCnt >= 3){
    					alertify.alert("Answers for requirements:\n 1. High Limiter\n 2. Low Limiter\n 3. Rate Limiter and by selecting Rate Limit Value <="
    										 + PS3Val
    										 + " %/sec. \n 4. High/Low selector with "
    										 + transnum
    										 + " input");	
    					
    				}
    		}
    		
    		
    	}else{
    		

    		
    		
    		if (PS1_component == "LL"
    			&& PS2_component == "LL"
    			&& PS3_component == "RL"
    			&&( (transnum == 2 && (PS4_component == "HS2" || PS4_component == "LS2"))
    			|| (transnum == 3 && (PS4_component == "HS3" || PS4_component == "LS3"))
    			|| (transnum == 4 && (PS4_component == "HS4" || PS4_component == "LS4")))
    			&& changeinRLVal <= PS3Val){
    			
        		chkOutputCnt++;
        		
        		stop_timer();
        		
        		minutes = document.getElementById("minutes").textContent;
        		seconds = document.getElementById("seconds").textContent;
//        		console.log(minutes+":"+seconds);
        		
        		var LCApp_Time = {};
        		LCApp_Time.minutes = minutes;
        		LCApp_Time.seconds = seconds;
        		
        		
        		var LCApp_ConfigData = {};
        		
        		PS1QuesText = document.getElementById("PS1ques").textContent;
        		PS2QuesText = document.getElementById("PS2ques").textContent;
        		PS3QuesText = document.getElementById("PS3ques").textContent;
        		PS4QuesText = document.getElementById("PS4ques").textContent;
        		
        		LCApp_ConfigData.PS1QuesText = PS1QuesText;
        		LCApp_ConfigData.PS1Ans = PS1_component;
        		
        		LCApp_ConfigData.PS2QuesText = PS2QuesText;
        		LCApp_ConfigData.PS2Ans = PS2_component;
        		
        		LCApp_ConfigData.PS3QuesText = PS3QuesText;
        		LCApp_ConfigData.PS3Ans = PS3_component;
        		
        		LCApp_ConfigData.PS4QuesText = PS4QuesText;
        		LCApp_ConfigData.PSAns = PS4_component;
        		
        		LCApp_ConfigData.changeInRL = changeinRLVal;
        		
        		LCApp_ConfigData.noOfWrongAttempts = chkOutputCnt;
        		
        		LCApp_ConfigData.timeforExp = LCApp_Time;
        		
        		console.log(LCApp_ConfigData);
        		
        		
        		
        		
    			alertify.alert("Correct Answer");
    			$("#mainDiv").html('');
        		$("#mainDiv").html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:16px; font-weight:bold; text-align:center;">Congratulations !!!<br/> You have successfully completed this experiment</div></div>');
    			
    			
    	     
    			
    		}else{
    			
    			alertify.alert("Wrong component/value Selected, Please try again by selecting other component/value.");
    			chkOutputCnt++;
    			 if(chkOutputCnt >= 3){
    					alertify.alert("Answers for requirements:\n 1. Low Limiter\n 2. Low Limiter\n 3. Rate Limiter and by selecting Rate Limit Value <="
    										 + PS3Val
    										 + " %/sec. \n 4. High/Low selector with "
    										 + transnum
    										 + " input");	
    					
    				}
    		}
    		
    		
    	
    		
    	}
    	
    
    	
    }else{
    	
    	alertify.alert("Select input value for tank");
    }
	
	 
	
			
		
}





							
			