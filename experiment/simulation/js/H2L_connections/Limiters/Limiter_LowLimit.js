

Identify_LowLimit = function(hlselectorType, limitValue, jsonarray){
/* var reader = new draw2d.io.json.Reader();
 reader.unmarshal(canvas1, json); */
 

 // app  = new example.Application(hlselectorType, hlselectorInput, jsonarray);


 LowLimit_RightSelector = 0;
 
 LowLimit_WrongSelector = 0;
 
 var temp = JSON.parse(jsonarray);
 
// console.log(temp);
 
 var temp1 = 0;
	 

	 
$.each(temp , function (key, value) {
  if(value.type == "draw2d.SetFigure"){
	  
	temp1 = 1; 
   
 }
 
});
	 
	 

	 if(temp1 != 0){
		 
		   for(i= 0; i < temp.length; i++){
		 
		if(temp[i].type == "draw2d.SetFigure"){
		 
		 
		 if(temp[i].id == "selector_lowlimit"){
			
			 LowLimit_RightSelector = 1;
			
	 
		} else{
			
			LowLimit_WrongSelector = 1;
			CheckWrongConnectionH2L_LowLimit();
			break;
			
		}
		 
		 
	 }
		
 }

		CheckRightConnectionH2L_LowLimit();
		 
	 }else{
		 
		 alertify.alert("Please select right symbol to identify");
		 
	 }
	
 

 
}

CheckRightConnectionH2L_LowLimit = function(){
	
	if(LowLimit_RightSelector == 1 &&   LowLimit_WrongSelector == 0){
		
		alertify.alert("Identification is successful. <br/> Please click next level");
		app.toolbar.characterisation_Button.show();
//		app.toolbar.characterisation_Button.hide();
	    rightConn = 1;
		
	}else{
		
		if(LowLimit_WrongSelector == 0){

		
					if(ConnFlagCnt == 3){
							app.toolbar.hintButton.show();							
							alertify.alert("Wrong identification");	
							rightConn = 0;		
						}else{
							
							alertify.alert("Wrong identification");
							ConnFlagCnt++
							rightConn = 0;
						}
		
			
			
		}
		
		
	}
	
}

CheckWrongConnectionH2L_LowLimit = function(){
	
	
	                    if(ConnFlagCnt == 3){
							 app.toolbar.hintButton.show();
							 
							 alertify.alert("Wrong identification");
							 rightConn = 0;
							 
													
						}else{
			
							if(LowLimit_WrongSelector == 1){
		
							alertify.alert("Wrong identification");
							ConnFlagCnt++;
							rightConn = 0;
		
							}
						}
	
	
	
	
	
	
	
}
	
	
	
	
