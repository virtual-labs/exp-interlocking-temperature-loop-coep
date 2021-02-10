//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//SINGLEACTINGCYLINDER.Characterisation_LLInput = function(hlselectorType, limitValue) {
	
	Characterisation_LLInput = function(hlselectorType, limitValue){
	 
	var LLInput_arr = [];
	
	$("#mainDiv").html('');

	var LLInput_characterisation = '';
	LLInput_characterisation +='<div id="canvas1" class="col-md-6 col-sm-12"></div>'

			+ '<div class="col-md-6 col-sm-12" id="LLInput_characterisationDiv">'
			+ '<div id = "TestDiv" >'
			
			+'<h2>Rate Limiter</h2>'
						
			LLInput_characterisation += '<div class="slidecontainer" id="LLInput_Slider_1">'
			+ '<div class="header">Input value for a (Input  '
			+ 1
			+ '-'
			+ 99
			+ '  %)</div>'
		    +'<input step="1" type="range" min='
			+ 1
			+ ' max='
			+ 99
			+ ' value='
			+ 1
			+ ' id="Input_1">'
			+ '<p>Value: <span id="demo_1"></span></p>'
			+ '</div>'
		
		LLInput_characterisation +=  '</div>' + '</div>'
			+ '<div class="buttonDiv">'
			
			+ '<button id="nxttype" hidden >Next</button>'
			+ '</div>'
			

	$(mainDiv).html(LLInput_characterisation);
	
		var w = 900;
    var h = 500;

var width = $(window).width();

  if ($(window).width() < 500) {
	    width = $(this).width();
	    paper = new Raphael(document.getElementById('canvas1'), '100%', 500);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 500);
  }else
  {
      paper = new Raphael(document.getElementById('canvas1'), '100%', 600);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 600);
  }
	
	$('#LLInput_Slider_1').css({'width':'70%','margin':'5px 15%'});
	$('#nxttype').css('margin','10px 9%');
//	value for slider 1
	var slider_1 = document.getElementById("Input_1");
	var output_1 = document.getElementById("demo_1");
	output_1.innerHTML = slider_1.value;

	slider_1.oninput = function() {
		output_1.innerHTML = this.value;
		checkOutput();
		$('#nxttype').prop('hidden', false);

		
		
	}
   

	
	function checkOutput(){
		
		inputValA = slider_1.value;
		
		paper.clear();
		LLinputDiagram(limitValue);
		
		InputLabel(160, 210, inputValA, 'blue');
//		InputLabel(300, 310, limitValue, 'blue');
		if(inputValA <= limitValue){
			outputval = limitValue;
			InputLabel(440, 210, outputval, 'red');
			
		}else{
			outputval = inputValA;
			InputLabel(440, 210, outputval, 'red');
		}
	
		
	}
	
	


	

	

	
	// next type click
	$('#nxttype').on(
			'click', function() {
				
				
				
				LLInput_optionFlag++;
				
				LLInput_CharacterisationData.hlselectorType = hlselectorType;
				LLInput_CharacterisationData.limitValue = limitValue;
				LLInput_CharacterisationData.inputValA = inputValA;				
				LLInput_CharacterisationData.output = outputval;
//				console.log(LLInput_CharacterisationData);
				ExpTrackData.llinputCharactData = LLInput_CharacterisationData;
//				console.log(ExpTrackData);
				
				
				if(LSInput_optionFlag != 0 && HSInput_optionFlag != 0 && RLInput_optionFlag != 0  && HLInput_optionFlag != 0 && LLInput_optionFlag != 0){
					
//					alert("to the next level");
					SelectAppToConfigure();
					
				}else{
					
					H2L_Configure();	
				}
				
			
				
			});

	
	
	
	
// called draw function of rate limiter
	
	LLinputDiagram(limitValue);
	
	
	
}

});
















