

//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//SINGLEACTINGCYLINDER.FlowControlSys = function() {
	
	FlowControlSys = function(){

	
//	 FCS_transnum = 4;
//	 FCS_PS1Val = 80;
//	 FCS_PS2Val = 20;
//	 FCS_PS3Val = 4;
	
	

	if(temp != 0 ){
		clearInterval(temp);
	}

	
	
	FCS_transnum = randomtrans(FCS_tansnumArr);
//	console.log(FCS_transnum);
	
	shuffle(FCS_PS1Arr);
	FCS_PS1Condition = FCS_PS1Arr[0];
	
	if(FCS_PS1Condition == "above"){
		
		FCS_PS1Val = getRndInteger(70, 90);
	}
	
	if(FCS_PS1Condition == "below"){
		
		FCS_PS1Val = getRndInteger(10, 30);
	}
	

	
//	FCS_PS2Val = getRndInteger(10, 30);
//	console.log(FCS_PS2Val);
	
	FCS_PS3Val = randomtrans(FCS_changinRLArr);
//	console.log(FCS_PS3Val);
	
	shuffle(FCS_PS4Arr);
	FCS_PS2Val = FCS_PS4Arr[0];
	FCS_PS4Condition1 = FCS_PS4Arr[1];
	
	
//	console.log("tansmitter no.= "+FCS_transnum+"  , FCS_PS1Val = "+FCS_PS1Val+", FCS_PS2Val = "+FCS_PS2Val+", FCS_PS3Val = "+FCS_PS3Val);
	
	
	chkOutputCnt = 0;
	v = 0;
		$("#mainDiv").html('');
		$("body").css("overflow"," hidden");
		var config_FCS = '';
		
		config_FCS += '<div id="Reqtimer" class="col-md-12 col-sm-12"><i><label id="minutes">00</label><span>:</span><label id="seconds">00</label></i></div><div id="canvas" class="col-md-7 col-sm-12"></div>'

				+ '<div class="col-md-5 col-sm-12" id="config_FCS">'
				+ '<div id = "PrblemStatementDiv" >'
				
				+'<h4>Requirements</h4>'				
				+'<p id= "PS1ques">1. The user demand will not be satisfied if it is '+FCS_PS1Condition+' '+FCS_PS1Val+'% hence the FCV 100 will not open '+FCS_PS1Condition+' '+FCS_PS1Val+'% </p>'
				+'<div class="col-md-12"><input type="radio" id="PS1_selector" name="PS1_radiotype" value="selector"> <label for="PS1_selector">Selector</label>'
				+'<input type="radio" id="PS1_limiter" name="PS1_radiotype" value="limiter"> <label for="PS1_limiter">Limiter</label></div>'
				+'<div id="PS1_combobox" class="col-md-12"></div>'				
				+'<p id= "PS2ques">2. Out signal FIC 100 & out signal FIC 200, '+FCS_PS2Val+' will be selected out of these two</p>'
				+'<div class="col-md-12"><input type="radio" id="PS2_selector" name="PS2_radiotype" value="selector"> <label for="PS2_selector">Selector</label>'
				+'<input type="radio" id="PS2_limiter" name="PS2_radiotype" value="limiter"> <label for="PS2_limiter">Limiter</label></div>'
				+'<div id="PS2_combobox" class="col-md-12"></div>'				
				+'<p id= "PS3ques">3. If the user demand exceeds with a rate more than '+FCS_PS3Val+' %/Sec then it will not be satisfied.</p>'
				+'<div class="col-md-12"><input type="radio" id="PS3_selector" name="PS3_radiotype" value="selector"> <label for="PS3_selector">Selector</label>'
				+'<input type="radio" id="PS3_limiter" name="PS3_radiotype" value="limiter"> <label for="PS3_limiter">Limiter</label></div>'
				+'<div id="PS3_combobox" class="col-md-12"></div>'		
				+'<p id= "PS4ques">4. For accurate measurement of the flow (FT 100), '+FCS_transnum+' transmitters are connected. For safety out of '+FCS_transnum+',  '+FCS_PS4Condition1+' readings will be selected for FCV 100</p>'
				+'<label>For FCV 100</label><br/>'
				+'<div class="col-md-12"><input type="radio" id="PS4_selector" name="PS4_radiotype" value="selector"> <label for="PS4_selector">Selector</label>'
				+'<input type="radio" id="PS4_limiter" name="PS4_radiotype" value="limiter"> <label for="PS4_limiter">Limiter</label></div>'
				+'<div id="PS4_combobox" class="col-md-12"></div>'
//				+'<label>For LIC 100</label>'
//				+'<input type="radio" id="PS4_selectorforLIC100" name="PS4_radiotypeforLCV100" value="selector"> <label for="PS4_selectorforLIC100">Selector</label>'
//				+'<input type="radio" id="PS4_limiterforLIC100" name="PS4_radiotypeforLCV100" value="limiter"> <label for="PS4_limiterforLIC100">Limiter</label><br>'
//				+'<div id="PS4_comboboxforLIC100"></div>'				
				+'</div>'
				+'<button id="configbtn_FCS">Configure Plant</button><br/>'
				+'<button id="updateconfigbtn_FCS" hidden>Select Other Component</button><br/>'			
				+'<div id="changeinRLdiv"></div>'
				
				
				
				
			
			$("#mainDiv").html(config_FCS);
		
		stop_timer();
		set_timer();
		
		//paper = new Raphael(document.getElementById('canvas'), '100%', 700);
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
	$("#configbtn_FCS").on("click", function(){
		
		
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
					 
					 alertify.alertify.alertify.alert("Please select all the fields");
				 }else{
// draw components 
					drawFolwComponents();	
					
// hide div with its child  and button	 and show select another comp button
					
					var nodes = document.getElementById("PrblemStatementDiv").getElementsByTagName('*');
					for(var i = 0; i < nodes.length; i++){
					     nodes[i].disabled = true;
					}
					
					$("#configbtn_FCS").hide();
					$("#updateconfigbtn_FCS").show();
					
					
			
	
		
			// append ChangeinRL div
			 $("#changeinRLdiv").html('');
				var changeinRLdiv = '';
				changeinRLdiv +='<div>'
					+'<label>Select Rate Limiter Value&nbsp;(in %/sec)&nbsp;:</label>'
					+'<select name="App" id="changeinRL" >'
					+'<option value="-1">Select</option>'
					for(var i = 0; i < FCS_changinRLArr.length; i++){
						
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
						FCS_changeinRLVal  = this.value;
						slidermaxVal = 100;
						
						if(FCS_changeinRLVal == 3 ||  FCS_changeinRLVal == 9){
							
							slidermaxVal = 99;
							
						}
						if(FCS_changeinRLVal == 6 ||  FCS_changeinRLVal == 8){
							
							slidermaxVal = 96;
							
						}
						if(FCS_changeinRLVal == 7){
							
							slidermaxVal = 98;
							
						}
						$("#sliderDiv").html('');
						var sliderDiv = '';
							sliderDiv += '<div class="slidecontainer" id="FCS_Slider">'
									+ '<div class="header">Input value for Tank (Input  '
									+ 0
									+ '-'
									+ 100
									+ '  %)</div>'
									+ '<input step="'
									+ FCS_changeinRLVal
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
									+ '<button id="chkoutput_FCS" onclick="chkOutput_FCS()">Check Output</button><br/>'
						
						
						
						$("#sliderDiv").html(sliderDiv);
						
//value for FCS slider 	
						var FCSslider = document.getElementById("Input");
						var FCSoutput = document.getElementById("demo");
						FCSoutput.innerHTML = FCSslider.value;

						FCSslider.oninput = function() {
							
							 v = this.value;
							
							if(FCS_changeinRLVal == 3 ||  FCS_changeinRLVal == 9){
								
								highdiff = 100 - parseInt(v);
								if(highdiff == 1){
									v = parseInt(v) + 1;
								}
								lowdiff = 100 - parseInt(v);
								if(lowdiff == 99){
									v = parseInt(v) - 1;
								}
										
									
							}
							if(FCS_changeinRLVal == 6 ||  FCS_changeinRLVal == 8){
								
								highdiff = 100 - parseInt(v);
								if(highdiff == 4){
									v = parseInt(v) + 4;
								}
								lowdiff = 100 - parseInt(v);
								if(lowdiff == 96){
									v = parseInt(v) - 4;
								}
										
									
							}
							if(FCS_changeinRLVal == 7){
								
								highdiff = 100 - parseInt(v);
								if(highdiff == 2){
									v = parseInt(v) + 2;
								}
								lowdiff = 100 - parseInt(v);
								if(lowdiff == 98){
									v = parseInt(v) - 2;
								}
										
									
							}
							FCSoutput.innerHTML = v;
							var tankflow = v;
							FCS_checkPlacedComponents(tankflow);
							
							
							
						
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
	$("#updateconfigbtn_FCS").on("click", function(){
		
	
		 $("#changeinRLdiv").html('');
		 $("#sliderDiv").html('');
	
		
		 

		 var nodes = document.getElementById("PrblemStatementDiv").getElementsByTagName('*');
			for(var i = 0; i < nodes.length; i++){
			     nodes[i].disabled = false;
			}
		 $("#updateconfigbtn_FCS").hide();
		 $("#configbtn_FCS").show();
		
		
	});
	
	
	
		
	redrawFlowControl();
			
}	







		
	});




function redrawFlowControl(){
	
	 paper.clear();
	 FlowControl();

	
	 if(FCS_transnum == 3){
		 

		 FY3_Selecter();
		  
	  }else if(FCS_transnum == 4){
		  

		  
		    FY3_Selecter();
			FY4_Selecter();

		  
	  }
	
}	



function drawFolwComponents(){
	
	
	redrawFlowControl();

	//from fy201 o/p
	paper.path('M'+(x+325)+' '+(y-15)+ 'l -80 0 0 -100').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	//fy201to PS2Comp
	fy201toPS2Comp = paper.path('M'+(x+245)+' '+(y-115)+ 'l 225 0 0 -35').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
//PS1 select box starts here						 
	 if(PS1_component == 'HS2'){				 
		
		HS2_Symbol((x+440), (y-50), "FY 301");
		highrotation((x+440), (y-50)).rotate(0);
		
	}
	if(PS1_component == 'HS3'){	
		
		HS3_Symbol((x+440), (y-50), "FY 301");
		highrotation((x+440), (y-50)).rotate(0);
			
	}
	if(PS1_component == 'HS4'){	
		
		HS4_Symbol((x+440), (y-50), "FY 301");
		highrotation((x+440), (y-50)).rotate(0);
	}
	if(PS1_component == 'LS2'){	
		
		LS2_Symbol((x+440), (y-50), "FY 301");
		lowrotation((x+440), (y-50)).rotate(0);
	
	}
	if(PS1_component == 'LS3'){	
		
		LS3_Symbol((x+440), (y-50), "FY 301");
		lowrotation((x+440), (y-50)).rotate(0);
	}
	if(PS1_component == 'LS4'){	
		
		LS4_Symbol((x+440), (y-50), "FY 301");
		lowrotation((x+440), (y-50)).rotate(0);
	}
	
	if(PS1_component == 'RL'){
		
		RL_Symbol((x+440), (y-50), "FY 301");
		RLrotation((x+440), (y-50)).rotate(0);
		paper.text((x+475), (y-93), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	if(PS1_component == 'HL'){	
		
		HL_Symbol((x+440), (y-50), "FY 301");
		HLrotation((x+440), (y-50)).rotate(0);
		paper.text((x+475), (y-93), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	if(PS1_component == 'LL'){	
		
		LL_Symbol((x+440), (y-50), "FY 301");
		LLrotation((x+440), (y-50)).rotate(0);
		paper.text((x+475), (y-93), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	
//PS2 select box starts here	
	if(PS2_component == 'HS2'){		
		
		HS2_Symbol((x+470), (y-170), "FY 401");
		highrotation((x+470), (y-170)).rotate(180);
	}
	if(PS2_component == 'HS3'){		
		
		HS3_Symbol((x+470), (y-170), "FY 401");
		highrotation((x+470), (y-170)).rotate(180);
	}
	if(PS2_component == 'HS4'){		
		
		HS4_Symbol((x+470), (y-170), "FY 401");
		highrotation((x+470), (y-170)).rotate(180);
	}
	if(PS2_component == 'LS2'){		
		
		LS2_Symbol((x+470), (y-170), "FY 401");
		lowrotation((x+470), (y-170)).rotate(180);		
		
	}
	if(PS2_component == 'LS3'){		
		
		LS3_Symbol((x+470), (y-170), "FY 401");
		lowrotation((x+470), (y-170)).rotate(180);	
	}
	if(PS2_component == 'LS4'){		
		
		LS4_Symbol((x+470), (y-170), "FY 401");
		lowrotation((x+470), (y-170)).rotate(180);	
	}
	if(PS2_component == 'RL'){		
		
		RL_Symbol((x+470), (y-170), "FY 401");
		RLrotation((x+470), (y-170)).rotate(0);
		paper.text((x+505), (y-215), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	if(PS2_component == 'HL'){		
		
		HL_Symbol((x+470), (y-170), "FY 401");
		HLrotation((x+470), (y-170)).rotate(180);
		paper.text((x+505), (y-215), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	if(PS2_component == 'LL'){		
		
		LL_Symbol((x+470), (y-170), "FY 401");
		LLrotation((x+470), (y-170)).rotate(180);
		paper.text((x+505), (y-215), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	}
	
	


//PS3 select box starts here		


if(PS3_component == 'HS2'){				 

	 HS2_Symbol((x+561), (y+18), "FY 501");
	 highrotation((x+561), (y+18)).rotate(90);

	}
if(PS3_component == 'HS3'){				 
		
	HS3_Symbol((x+561), (y+18), "FY 501");
	 highrotation((x+561), (y+18)).rotate(90);

	}
if(PS3_component == 'HS4'){				 
		
	HS4_Symbol((x+561), (y+18), "FY 501");
	 highrotation((x+561), (y+18)).rotate(90);

	}
if(PS3_component == 'LS2'){				 
		
	 LS2_Symbol((x+561), (y+18), "FY 501");
	 lowrotation((x+561), (y+18)).rotate(90);

	}
if(PS3_component == 'LS3'){				 
		
	LS3_Symbol((x+561), (y+18), "FY 501");
	 lowrotation((x+561), (y+18)).rotate(90);

	}
if(PS3_component == 'LS4'){				 
		
	LS4_Symbol((x+561), (y+18), "FY 501");
	 lowrotation((x+561), (y+18)).rotate(90);

	}
if(PS3_component == 'RL'){				 
		
	 RL_Symbol((x+561), (y+18), "FY 501");
	 RLrotation((x+561), (y+18)).rotate(0);
	 paper.text((x+596), (y-25), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	}); 

	}
if(PS3_component == 'HL'){				 
		
	 HL_Symbol((x+561), (y+18), "FY 501");
	 HLrotation((x+561), (y+18)).rotate(90);
	 paper.text((x+596), (y-25), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	}); 

	}
if(PS3_component == 'LL'){				 
		
	 LL_Symbol((x+561), (y+18), "FY 501");
	 LLrotation((x+561), (y+18)).rotate(90);
	 paper.text((x+596), (y-25), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	}); 

	}


//PS4 select box starts here		


if(PS4_component == 'HS2'){				 
	 
	// rect with symbol for fy201
	paper.rect((x+350), (y-5), 25, 25).attr({"stroke-width" : 1});
	highrotation((x+328), (y+30)).rotate(-90);
	
	
	 
	if(FCS_transnum == 3){
		FEFT201_Conn.hide();
		FY3_SelecterNotConn();
					
	}
	if(FCS_transnum == 4){
		
		FEFT201_Conn.hide();
		FY3_SelecterNotConn();		
		FEFT301_Conn.hide();
		FY4_SelecterNotConn();
	}

}

if(PS4_component == 'HS3'){		
	
	// rect with symbol for fy201
	paper.rect((x+350), (y-5), 25, 25).attr({"stroke-width" : 1});
	highrotation((x+328), (y+30)).rotate(-90);
	
	
	 if(FCS_transnum == 4){
			
		 FEFT301_Conn.hide();
			FY4_SelecterNotConn();
		}
	 if(FCS_transnum == 2){							
			
		 FY3_SelecterNotConn();
	 }
}
if(PS4_component == 'HS4'){			
	
	// rect with symbol for fy201
	paper.rect((x+350), (y-5), 25, 25).attr({"stroke-width" : 1});
	highrotation((x+328), (y+30)).rotate(-90);
	
	
	 if(FCS_transnum == 3){
		 
		 FY4_SelecterNotConn();
		}
	 if(FCS_transnum == 2){							
			
		 FY3_SelecterNotConn();
		 FY4_SelecterNotConn();
	 }
}




if(PS4_component == 'LS2'){	
		
	// rect with symbol for fy201
	paper.rect((x+350), (y-5), 25, 25).attr({"stroke-width" : 1});
	lowrotation((x+328), (y+30)).rotate(-90);
	 
		if(FCS_transnum == 3){
			FEFT201_Conn.hide();
			FY3_SelecterNotConn();
						
		}
		if(FCS_transnum == 4){
			
			FEFT201_Conn.hide();
			FY3_SelecterNotConn();		
			FEFT301_Conn.hide();
			FY4_SelecterNotConn();
		}




}

if(PS4_component == 'LS3'){		
	
	// rect with symbol for fy201
	paper.rect((x+350), (y-5), 25, 25).attr({"stroke-width" : 1});
	lowrotation((x+328), (y+30)).rotate(-90);
	 
	 if(FCS_transnum == 4){
			
		 FEFT301_Conn.hide();
			FY4_SelecterNotConn();
		}
	 if(FCS_transnum == 2){							
			
		 FY3_SelecterNotConn();
	 }
}
if(PS4_component == 'LS4'){				 
		
	// rect with symbol for fy201
	paper.rect((x+350), (y-5), 25, 25).attr({"stroke-width" : 1});
	lowrotation((x+328), (y+30)).rotate(-90);
	 
	if(FCS_transnum == 3){
		 
		 FY4_SelecterNotConn();
		}
	 if(FCS_transnum == 2){							
			
		 FY3_SelecterNotConn();
		 FY4_SelecterNotConn();
	 }
}


if(PS4_component == 'RL'){				 
		
	  FY201Circle.hide();
	
	 
	 RL_Symbol((x+325),(y+30), "FY 201");	 
	 RLrotation((x+325),(y+30)).rotate(0);
	 paper.text((x+360), (y-15), "RL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
	
	 
		
	}

if(PS4_component == 'HL'){		

	 FY201Circle.hide();
	 
	 HL_Symbol((x+325),(y+30), "FY 201");	 
	 HLrotation((x+325),(y+30)).rotate(-90);
	 paper.text((x+360), (y-15), "HL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
	
	 
		
	}

if(PS4_component == 'LL'){				 
		
	 
    FY201Circle.hide();
	 
	 LL_Symbol((x+325),(y+30), "FY 201");	 
	 LLrotation((x+325),(y+30)).rotate(-90);
	 paper.text((x+360), (y-15), "LL").attr({stroke : 'black','font-size' : 12,"font-family": "sans-serif" 	});
	 
		 
		
	}

	
}
		


function chkOutput_FCS(){
	
    if(v!= 0){
    	
    	if(
    			((FCS_PS1Condition == "above" && PS1_component == "HL") || (FCS_PS1Condition == "below" && PS1_component == "LL"))
    			&&((FCS_PS2Val == "highest" && PS2_component == "HS2") || (FCS_PS2Val == "lowest" && PS2_component == "LS2"))
    			&& PS3_component == "RL"
    			&& ((FCS_PS4Condition1 == "highest" && ((FCS_transnum == 2 && PS4_component == "HS2") || (FCS_transnum == 3 && PS4_component == "HS3") || (FCS_transnum == 4 && PS4_component == "HS4")))
    			|| (FCS_PS4Condition1 == "lowest" && ((FCS_transnum == 2 && PS4_component == "LS2") || (FCS_transnum == 3 && PS4_component == "LS3") || (FCS_transnum == 4 && PS4_component == "LS4"))))
    			&& FCS_changeinRLVal <= FCS_PS3Val
    	){
    		
    		chkOutputCnt++;
    		stop_timer();
    		
    		minutes = document.getElementById("minutes").textContent;
    		seconds = document.getElementById("seconds").textContent;
//    		console.log(minutes+":"+seconds);
    		
    		
    		var FCApp_Time = {};
    		FCApp_Time.minutes = minutes;
    		FCApp_Time.seconds = seconds;
    		
    		
    		var FCApp_ConfigData = {};
    		
    		PS1QuesText = document.getElementById("PS1ques").textContent;
    		PS2QuesText = document.getElementById("PS2ques").textContent;
    		PS3QuesText = document.getElementById("PS3ques").textContent;
    		PS4QuesText = document.getElementById("PS4ques").textContent;
    		
    		FCApp_ConfigData.PS1QuesText = PS1QuesText;
    		FCApp_ConfigData.PS1Ans = PS1_component;
    		
    		FCApp_ConfigData.PS2QuesText = PS2QuesText;
    		FCApp_ConfigData.PS2Ans = PS2_component;
    		
    		FCApp_ConfigData.PS3QuesText = PS3QuesText;
    		FCApp_ConfigData.PS3Ans = PS3_component;
    		
    		FCApp_ConfigData.PS4QuesText = PS4QuesText;
    		FCApp_ConfigData.PSAns = PS4_component;
    		
    		FCApp_ConfigData.changeInRL = FCS_changeinRLVal;
    		
    		FCApp_ConfigData.noOfWrongAttempts = chkOutputCnt;
    		
    		FCApp_ConfigData.timeforExp = FCApp_Time;
    		
//    		console.log(FCApp_ConfigData);
    		
    		alertify.alert("Correct Answer");
    		$("#mainDiv").html('');
    		$("#mainDiv").html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:16px; font-weight:bold; text-align:center;">Congratulations !!!<br/> You have successfully completed this experiment</div></div>');
			
    	}else{
    		
    		alertify.alert("Wrong component/value Selected, Please try again by selecting other component/value.");
			chkOutputCnt++;
			
			 if(chkOutputCnt >= 3){
				 
				 if(FCS_PS1Condition == "above"){
					 
					 Ans1 = "High Limit"
				 }else{
					 
					 Ans1 = "Low Limit"
				 }
				 
				 if(FCS_PS2Val == "highest"){
					 
					 Ans2 = "High Selector with 2 input"
				 }else{
					 
					 Ans2 = "Low Selector with 2 input"
				 }
				 
				 if(FCS_PS4Condition1 == "highest"){
					 
					 Ans4 = "High Selector with "+FCS_transnum+" input"
				 }else{
					 
					 Ans4 = "Low Selector with "+FCS_transnum+" input"
				 }
				 
				 
					alertify.alert("Answers for requirements :\n 1. "+
							Ans1+"\n 2. "+
							Ans2+"\n 3. Rate Limiter and by selecting Rate Limit Value <="
										 + FCS_PS3Val
										 + " %/sec. \n 4. "+Ans4);	
			 }	

    	}
    	
    
    	
    }else{
    	
    	alertify.alert("Select input value for tank");
    }
	
	 
	
			
		
}


							
			