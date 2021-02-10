//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//SINGLEACTINGCYLINDER.Characterisation_LS4Input = function(hlselectorType, hlselectorInput) {
	
	Characterisation_LS4Input = function(hlselectorType, hlselectorInput){
	 
	var LS4Input_arr = [];
	
	$("#mainDiv").html('');

	var LS4Input_characterisation = '';
	LS4Input_characterisation += '<div id="canvas1" class="col-md-6 col-sm-12"></div>'

		+ '<div class="col-md-6 col-sm-12" id="LS4Input_characterisationDiv">'
		+ '<div id = "TestDiv" >'
		
		+'<h2>'+hlselectorInput+' Input of Low Selector</h2>'
			if(hlselectorInput != -1){
				
				
				for (var i = 1; i <= hlselectorInput ; i++ ) {
					if(i == 1){
						
						LS4Input_characterisation += '<div class="slidecontainer" id="LS4Input_Slider_'+i+'">'
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
						
						LS4Input_characterisation += '<div class="slidecontainer" id="LS4Input_Slider_'+i+'" >'
						if(i == 2){
							LS4Input_characterisation +='<div class="header">Input value for b (Input  '
						}else if(i == 3){
							
							LS4Input_characterisation +='<div class="header">Input value for c (Input  '
						}else if(i == 4){
							
							LS4Input_characterisation +='<div class="header">Input value for d (Input  '
						}
						LS4Input_characterisation += 1
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
			
			
			
		
		LS4Input_characterisation +=  '</div>' + '</div>'
			+ '<div class="buttonDiv">'
			
			+ '<button id="nxttype" hidden >Next</button>'
			+ '</div>'
			

	$(mainDiv).html(LS4Input_characterisation);
		
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
		
for (var i = 1; i <= hlselectorInput ; i++ ) {
			
			if(hlselectorInput == 4 )
			{
			$('#LS4Input_Slider_'+i+'').css({'width':'48%','margin':'5px 1%','float':'left'});
			$('#nxttype').css('margin','10px 2%');
			}
			
			
		}
//	value for slider 1
	var slider_1 = document.getElementById("Input_1");
	var output_1 = document.getElementById("demo_1");
	output_1.innerHTML = slider_1.value;

	slider_1.oninput = function() {
		output_1.innerHTML = this.value;
		checkOutput();
		$('#nxttype').prop('hidden', false);
	}
   
//	value for slider 2	
	var slider_2 = document.getElementById("Input_2");
	var output_2 = document.getElementById("demo_2");
	output_2.innerHTML = slider_2.value;

	slider_2.oninput = function() {
		output_2.innerHTML = this.value;
		checkOutput();
		$('#nxttype').prop('hidden', false);
	}
	
//	value for slider 3	
	var slider_3 = document.getElementById("Input_3");
	var output_3 = document.getElementById("demo_3");
	output_3.innerHTML = slider_3.value;

	slider_3.oninput = function() {
		output_3.innerHTML = this.value;
		checkOutput();
		$('#nxttype').prop('hidden', false);
	}
	
//	value for slider 4	
	var slider_4 = document.getElementById("Input_4");
	var output_4 = document.getElementById("demo_4");
	output_4.innerHTML = slider_4.value;

	slider_4.oninput = function() {
		output_4.innerHTML = this.value;
		checkOutput();
		$('#nxttype').prop('hidden', false);
	}
	
	
	function checkOutput(){
		
		inputValA = slider_1.value;
		inputValB = slider_2.value;
		inputValC = slider_3.value;
		inputValD = slider_4.value;
		
		paper.clear();
		LS4inputDiagram();
		
		InputLabel(160, 150, inputValA, 'blue');
		InputLabel(300, 340, inputValB, 'blue');
		InputLabel(300, 85, inputValC, 'blue');
		InputLabel(160, 270, inputValD, 'blue');
		
		min = Math.min(inputValA, inputValB, inputValC, inputValD);
		InputLabel(440, 210, min, 'red');
	}
	
	


	

	

	
	// next type click
	$('#nxttype').on(
			'click', function() {
				
				
				
				LSInput_optionFlag++;
				
				LS4Input_CharacterisationData.hlselectorType = hlselectorType;
				LS4Input_CharacterisationData.hlselectorInput = hlselectorInput;
				LS4Input_CharacterisationData.inputValA = inputValA;
				LS4Input_CharacterisationData.inputValB = inputValB;
				LS4Input_CharacterisationData.inputValC = inputValC;
				LS4Input_CharacterisationData.output = min;
//				console.log(LS4Input_CharacterisationData);
				ExpTrackData.ls4inputCharactData = LS4Input_CharacterisationData;
//				console.log(ExpTrackData);
				
				
				if(LSInput_optionFlag != 0 && HSInput_optionFlag != 0 && RLInput_optionFlag != 0 && HLInput_optionFlag != 0 && LLInput_optionFlag != 0){
					
//					alert("to the next level");
					SelectAppToConfigure();
					
				}else{
					
					H2L_Configure();	
				}
				
			
				
			});

	
	
	
	
// called draw function of low selector with 4 input
	
	LS4inputDiagram();
	
	
	
}

});
















