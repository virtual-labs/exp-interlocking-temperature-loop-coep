//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//SINGLEACTINGCYLINDER.Characterisation_HS3Input = function(hlselectorType, hlselectorInput) {
	
	Characterisation_HS3Input = function(hlselectorType, hlselectorInput){
	 
	var HS3Input_arr = [];
	
	$("#mainDiv").html('');

	var HS3Input_characterisation = '';
	HS3Input_characterisation += '<div id="canvas1" class="col-md-6 col-sm-12"></div>'

		+ '<div class="col-md-6 col-sm-12" id="HS3Input_characterisationDiv">'
		+ '<div id = "TestDiv" >'
		
		+'<h2>'+hlselectorInput+' Input of High Selector</h2>'
			if(hlselectorInput != -1){
				
				
				for (var i = 1; i <= hlselectorInput ; i++ ) {
					if(i == 1){
						
						HS3Input_characterisation += '<div class="slidecontainer" id="HS3Input_Slider_'+i+'">'
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
						+ ' id="Input_'+i+'">'
						+ '<p>Value: <span id="demo_'+i+'"></span></p>'
						+ '</div>'
					}else{
						
						HS3Input_characterisation += '<div class="slidecontainer" id="HS3Input_Slider_'+i+'" >'
						if(i == 2){
							HS3Input_characterisation +='<div class="header">Input value for b (Input  '
						}else if(i == 3){
							
							HS3Input_characterisation +='<div class="header">Input value for c (Input  '
						}else if(i == 4){
							
							HS3Input_characterisation +='<div class="header">Input value for d (Input  '
						}
						HS3Input_characterisation += 1
						+ '-'
						+ 99
						+ '  %)</div>'
						+'<input step="1" type="range" min='
						+ 1
						+ ' max='
						+ 99
						+ ' value='
						+ 1
						+ ' id="Input_'+i+'">'
						+ '<p>Value: <span id="demo_'+i+'"></span></p>'										
						+'</div>'
					}
					
				}
				
				
			}else{
				
				alertify.alert("Something went wrong. Please try again");

			}
			
			
			
		
		HS3Input_characterisation +=  '</div>' + '</div>'
			+ '<div class="buttonDiv">'
			
			+ '<button id="nxttype" hidden >Next</button>'
			+ '</div>'
			

	$(mainDiv).html(HS3Input_characterisation);
		
		paper = new Raphael(document.getElementById('canvas1'), '100%', 500);
		
		
for (var i = 1; i <= hlselectorInput ; i++ ) {
			
			if(hlselectorInput == 3)
			{
			$('#HS3Input_Slider_'+i+'').css({'width':'70%','margin':'5px 15%'});
			$('#nxttype').css('margin','10px 9%');
			}
			
		}
//	value for slider 1
	var slider_1 = document.getElementById("Input_1");
	var output_1 = document.getElementById("demo_1");
	output_1.innerHTML = slider_1.value;

	slider_1.oninput = function() {
		output_1.innerHTML = this.value;
		checkMaxOutput();
		$('#nxttype').prop('hidden', false);
	}
   
//	value for slider 2	
	var slider_2 = document.getElementById("Input_2");
	var output_2 = document.getElementById("demo_2");
	output_2.innerHTML = slider_2.value;

	slider_2.oninput = function() {
		output_2.innerHTML = this.value;
		checkMaxOutput();
		$('#nxttype').prop('hidden', false);
	}
	
//	value for slider 3	
	var slider_3 = document.getElementById("Input_3");
	var output_3 = document.getElementById("demo_3");
	output_3.innerHTML = slider_3.value;

	slider_3.oninput = function() {
		output_3.innerHTML = this.value;
		checkMaxOutput();
		$('#nxttype').prop('hidden', false);
	}
	
	
	function checkMaxOutput(){
		
		inputValA = slider_1.value;
		inputValB = slider_2.value;
		inputValC = slider_3.value;
		
		paper.clear();
		HS3inputDiagram();
		
		InputLabel(160, 210, inputValA, 'blue');
		InputLabel(300, 340, inputValB, 'blue');
		InputLabel(300, 85, inputValC, 'blue');
		
		max = Math.max(inputValA, inputValB, inputValC);
		InputLabel(440, 210, max, 'red');
	}
	
	


	

	

	
	// next type click
	$('#nxttype').on(
			'click', function() {
				
				
				
				HSInput_optionFlag++;
				
				HS3Input_CharacterisationData.hlselectorType = hlselectorType;
				HS3Input_CharacterisationData.hlselectorInput = hlselectorInput;
				HS3Input_CharacterisationData.inputValA = inputValA;
				HS3Input_CharacterisationData.inputValB = inputValB;
				HS3Input_CharacterisationData.inputValC = inputValC;
				HS3Input_CharacterisationData.output = max;
//				console.log(HS3Input_CharacterisationData);
				ExpTrackData.hs3inputCharactData = HS3Input_CharacterisationData;
//				console.log(ExpTrackData);
				
				
				if(LSInput_optionFlag != 0 && HSInput_optionFlag != 0 && RLInput_optionFlag != 0 && HLInput_optionFlag != 0 && LLInput_optionFlag != 0){
					
//					alert("to the next level");
					SelectAppToConfigure();
					
				}else{
					
					H2L_Configure();	
				}
				
			
				
			});

	
	
	
	
// called draw function of high selector with 3 input
	
	HS3inputDiagram();
	
	
	
}

});
















