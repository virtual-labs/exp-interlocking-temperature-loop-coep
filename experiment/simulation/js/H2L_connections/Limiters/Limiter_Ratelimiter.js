

Identify_RateLimiter = function(hlselectorType, limitValue, jsonarray){
/* var reader = new draw2d.io.json.Reader();
 reader.unmarshal(canvas1, json); */
 

 // app  = new example.Application(hlselectorType, hlselectorInput, jsonarray);


 RateLimiter_RightSelector = 0;
 
 RateLimiter_WrongSelector = 0;
 
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
		 
		 
		 if(temp[i].id == "selector_ratelimiter"){
			
			 RateLimiter_RightSelector = 1;
			
	 
		} else{
			
			RateLimiter_WrongSelector = 1;
			CheckWrongConnectionH2L_RateLimiter();
			break;
			
		}
		 
		 
	 }
		
 }

		CheckRightConnectionH2L_RateLimiter();
		 
	 }else{
		 
		 alertify.alert("Please select right symbol to identify");
		 
	 }
	
 

 
}

CheckRightConnectionH2L_RateLimiter = function(){
	
	if(RateLimiter_RightSelector == 1 &&   RateLimiter_WrongSelector == 0){
		
		alertify.alert("Identification is successful. <br/> Please click next level");
		app.toolbar.characterisation_Button.show();
//		app.toolbar.characterisation_Button.hide();
	    rightConn = 1;
		
	}else{
		
		if(RateLimiter_WrongSelector == 0){

		
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

CheckWrongConnectionH2L_RateLimiter = function(){
	
	
	                    if(ConnFlagCnt == 3){
							 app.toolbar.hintButton.show();
							 
							 alertify.alert("Wrong identification");
							 rightConn = 0;
							 
													
						}else{
			
							if(RateLimiter_WrongSelector == 1){
		
							alertify.alert("Wrong identification");
							ConnFlagCnt++;
							rightConn = 0;
		
							}
						}
	
	
	
	
	
	
	
}
	
	
	
	
