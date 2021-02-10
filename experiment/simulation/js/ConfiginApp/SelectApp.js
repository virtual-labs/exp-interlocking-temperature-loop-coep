

//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//SINGLEACTINGCYLINDER.SelectAppToConfigure = function() {
	
	SelectAppToConfigure = function(){

		
		$("#mainDiv").html('');
		
		var configure = '';
		configure +='<div id = "configDiv" class="container-fluid">'
		    +'<div class="row">'
		    +'<div class="col-xl-offset-3 col-xl-6 col-md-offset-3 col-md-6  col-sm-12">'
		    +'<h4 align="center">Select any application to configure Selector or Limiter </h4>'
				+'<div class="row topmargin">'
				+'<div class="col-sm-4 col-md-4 col-xl-4">'
				+'<label>Select Application:</label>'
				+'</div>'
				+'<div class="col-sm-8 col-md-8 col-xl-8">'
				+'<select class="form-control" name="App" id="App"  >'
				+'<option value= -1 >Select</option>'
				//+'<option value="1">Level Control System</option>'	
				+'<option value="2">Temperature Control System</option>'	
				//+'<option value="3">Pressure Control System</option>'	
				//+'<option value="4">Flow Control System</option>'
				+'</select>'
				+'</div><br/>'
				+'</div>'
				
				+'</div>' // col close
				+'</div>' // row close 
				+'</div>'; // container close
				
			
			$("#mainDiv").html(configure);
			
			
			
			$('#App').change(
					function() {
						
					
						if(this.value != -1){
							
							if(this.value == 1){
								
								LevelControlSys();
								
							}
							if(this.value == 2){
								
								TemperatureControlSys();
								
							}
							if(this.value == 3){
								
								PressureControlSys();
							}
							if(this.value == 4){
								
								FlowControlSys();
							}
							
						}else{
							
							alertify.alert("Please select any application")
						}
						
						
						
						
						
					});
		
			
}	
		   
		
	});
							
							
			