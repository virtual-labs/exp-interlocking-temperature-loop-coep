

H2L_Configure = function(){
	
	

		
		$("#mainDiv").html('');
		
		var configure = '';
		configure +='<div id = "configDiv" class="container-fluid">'
		    +'<div class="row">'
		    +'<div class="col-xl-offset-3 col-xl-6 col-md-offset-3 col-md-6  col-sm-12">'
		    +'<h4 align="center">High Low Selector Configuration</h4>'
				+'<div class="row topmargin">'
				+'<div class="col-sm-4 col-md-4 col-xl-4">'
				+'<label>Select Type:</label>'
				+'</div>'
				+'<div class="col-sm-8 col-md-8 col-xl-8">'
				+'<select class="form-control" name="App" id="hlSelectorType" >'
				+'<option value="-1">Select</option>'
				if(HSInput_optionFlag != 0){
					
					configure +='<option value="high" hidden>High Selector</option>'
				}else{
					
					configure +='<option value="high">High Selector</option>'
				}
				if(LSInput_optionFlag != 0){
			
					configure +='<option value="low" hidden>Low Selector</option>'
				}else{
					
					configure +='<option value="low">Low Selector</option>'
				}
				if(RLInput_optionFlag != 0){
					
					configure +='<option value="ratelimiter" hidden>Rate Limiter</option>'
				}else{
					
					configure +='<option value="ratelimiter">Rate Limiter</option>'
				}			
				if(HLInput_optionFlag != 0){
					
					configure +='<option value="highlimit" hidden>High Limit</option>'
				}else{
					
					configure +='<option value="highlimit">High Limit</option>'
				}
				if(LLInput_optionFlag != 0){
					
					configure +='<option value="lowlimit" hidden>Low Limit</option>'
				}else{
					
					configure +='<option value="lowlimit">Low Limit</option>'
				}
			configure +='</select>'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin" id="div_hlSelectorInput" hidden>'
				+'<div class="col-sm-4 col-md-4 col-xl-4" >'
				+'<label>Select Number of Input:</label>'
				+'</div>'
				+'<div class="col-sm-8 col-md-8 col-xl-8">'
				+'<select class="form-control" name="App" id="hlSelectorInput"  >'
				+'<option value= -1 >Select</option>'
				+'<option value="2">2</option>'	
				+'<option value="3">3</option>'	
				+'<option value="4">4</option>'	
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				+'<div class="row topmargin" id="div_limitValue" hidden>'
				+'<div class="col-sm-4 col-md-4 col-xl-4">'
				+'<label>Set Limit Value (in %):</label>'
				+'</div>'
				+'<div class="col-sm-8 col-md-8 col-xl-8">'
				+'<select class="form-control" name="App" id="limitValue"  >'
				+'<option value="-1" >Select</option>'
				for(var i = 1 ; i<=99; i++)
					{
					
					
					configure +='<option value="'+i+'">'+i+'</option>'	
					
					}
				configure +='</select>'
				//+'<input class="form-control" type="number" min="1" max="99" name="App" id="limitValue"  /> %'
				+'</div><br/>'
//				+'<div style="color:red;font-weight:bold;font-size:15px;"><i>(Set limit value between 1 to 99 )</i></div>'	
//				+'<div id="limitValueError" style="display:none"></div>'
				+'</div>'
				
				
			
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-4 col-md-4 col-xl-4">'
				+'<label>Power Supply :</label>'
				+'</div>'
				+'<div class="col-sm-8 col-md-8 col-xl-8">'
				+'24 VDC'
				+'</div><br/>'
				
				+'<div class="row topmargin">'
				+'<div class="col-sm-4 col-md-4 col-xl-4">'
				+'<label>Output :</label>'
				+'</div>'
				+'<div class="col-sm-8 col-md-8 col-xl-8">'
				+'<select class="form-control" name="App" id="output" >'
				+'<option value="-1">Select</option>'
				if(HSInput_optionFlag != 0){
					
					configure +='<option value="0" hidden>Highest amongst all</option>'
				}else{
					
					configure +='<option value="0" >Highest amongst all</option>'
				}
				if(LSInput_optionFlag != 0){
					
					configure +='<option value="1" hidden>Lowest amongst all</option>'
				}else{
					
					configure +='<option value="1" >Lowest amongst all</option>'
				}
				if(RLInput_optionFlag != 0){
					 configure +='<option value="2" hidden>Varying signal</option>'	
				}else{
					 configure +='<option value="2" >Varying signal</option>'	
				}
				if(HLInput_optionFlag != 0){
					 configure +=+'<option value="3" hidden>Threshold value set is high</option>'
				}else{
					 configure +='<option value="3">Threshold value set is high</option>'	
				}
				if(LLInput_optionFlag != 0){
					configure +='<option value="4" hidden>Threshold value set is low</option>'
				}else{
					configure +='<option value="4" >Threshold value set is low</option>'
				}
				
			configure +='</select>'
				+'</div><br/>'
				+'</div>'
				
				
				+'<div class="row topmargin">'
				+'<div class="buttonDiv col-sm-8  col-sm-offset-4 col-md-8 col-md-offset-4 col-xl-8 col-xl-offset-4">'
				+'<button id="H2L_checkConfig">Check Operation</button>&nbsp;&nbsp;&nbsp;'
				+'<button id="H2L_wiringDiagram" hidden >Next Level</button>'
				+'</div>'
				+'</div>'
				+'</div>'
				
				+'</div>' // col close
				+'</div>' // row close 
				+'</div>'; // container close
				
			
			$("#mainDiv").html(configure);
		
			
				$('select#hlSelectorType').on(
			'change',
			function() {

				if (this.value == "high" || this.value == "low") {
					
					$("#limitValue").val("-1");
					$('#div_limitValue').hide();
					$('#div_hlSelectorInput').show();

				} else if (this.value == "ratelimiter"
						|| this.value == "highlimit"
						|| this.value == "lowlimit") {

					$( "#hlSelectorInput" ).val("-1");
					$('#div_hlSelectorInput').hide();
					$('#div_limitValue').show();

				}
				/*else if(this.value == "-1"){
					
					$( "#hlSelectorInput" ).val("-1");
					$('#div_hlSelectorInput').hide();
					$("#limitValue").val("-1");
					$('#div_limitValue').hide();
				}*/

			});
		 
		 
		 
		 
		 $('#H2L_checkConfig').on(
				'click', function() {
					
					 chkConfigCnt = 0;
					 var H2LInput_configData = {};
					 
					 var hlselectorType = $( "#hlSelectorType option:selected" ).val();
					 var hlselectorInput = parseInt($( "#hlSelectorInput option:selected" ).val());
					 var limitValue = parseInt($("#limitValue option:selected").val());
					 var output = $( "#output option:selected" ).val();
					 var outputtxt = $( "#output option:selected" ).text();
					 
//					 console.log(hlselectorInput, limitValue);
					 
					 if(hlselectorType != "-1"){
						 
						 if(hlselectorType == "high" || hlselectorType == "low"){
							 
				             if(hlselectorInput != "-1"  && output != "-1"){				
																	
									if(hlselectorType =="high" && output == "0"){
				
										
										chkConfigCnt++;
										
									}else if(hlselectorType =="low" && output == "1"){
										
										chkConfigCnt++;
										
									}else{
										
										alertify.alert("Please select the correct output as per selected high low selector type");
									}
				            
								
									
								}else{
									
									alertify.alert("Please select all the fields");
									
								}
						 

//								H2LInput_configData.HLselectorType = hlselectorType;
//								H2LInput_configData.HLselectorInput = hlselectorInput;								
////								H2LInput_configData.LimitValue = limitValue;
//								H2LInput_configData.output = output;
//								ExpTrackData.h2linputConfigData = H2LInput_configData;
//								console.log(ExpTrackData);
								
				             
				             
						 
						 }else{
							 
							 
							  if(limitValue != "-1"   && output != "-1"){				
									
									if(hlselectorType =="ratelimiter" && output == "2"){
				
										chkConfigCnt++;
										
									}else if(hlselectorType =="highlimit" && output == "3"){
										
										chkConfigCnt++;
										
									}else if(hlselectorType =="lowlimit" && output == "4"){
										
										chkConfigCnt++;
										
									}else{
										
										alertify.alert("Please select the correct output as per selected high low selector type");
									}
				            
								
									
								}else{
									
									alertify.alert("Please select all the fields");
									
								}
							 
							
//								H2LInput_configData.HLselectorType = hlselectorType;
////								H2LInput_configData.HLselectorInput = hlselectorInput;								
//								H2LInput_configData.LimitValue = limitValue;
//								H2LInput_configData.output = output;
//								ExpTrackData.h2linputConfigData = H2LInput_configData;
//								console.log(ExpTrackData);
							  
							  
						 }	 
						 
					 }else{
						 
						 alertify.alert("Please select high low selector type");
					 }
					 
					
						
					if(chkConfigCnt == "1"){
						
						
						
						 alertify.alert("Configuration is successful.<br> Please click next level to identify right symbol for high low selector from symbol liabrary");
		            	 $("#hlSelectorType, #hlselectorInput, #output, #limitValue").prop("disabled", true);
		            	 $('#H2L_wiringDiagram').show();
		            	 
		            		H2LInput_configData.HLselectorType = hlselectorType;
							H2LInput_configData.HLselectorInput = hlselectorInput;								
							H2LInput_configData.LimitValue = limitValue;
							H2LInput_configData.output = outputtxt;
							
							ExpTrackData.h2linputConfigData = H2LInput_configData;
//							console.log(ExpTrackData);
						
						
					}	
						
					
					
		 });
		 
		 
	
			$('#H2L_wiringDiagram').on(
				'click', function() {
					
					 var hlselectorType = $( "#hlSelectorType option:selected" ).val();
					 var hlselectorInput = parseInt($( "#hlSelectorInput option:selected" ).val());
					 var limitValue = parseInt($("#limitValue option:selected").val());

					 

					connectionLevel(hlselectorType, hlselectorInput, limitValue);
						
							
				});
}

 
		   
			
							
							
			