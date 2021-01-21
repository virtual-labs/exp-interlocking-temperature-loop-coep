// JavaScript Document
function HS4inputDiagram(){	
//	paper = new Raphael(document.getElementById('canvas'), '100%', 700);
	

	
	x = 50;
	y = 200;

	
//	InputLabel((x+110), (y+10), 34);
	
//	InputLabel(300, 340, 34);
	
	paper.text((x+250), (y-180), "4 Input High Selector").attr({
		'stroke' : 'black',
		'font-size' : 30,
		"font-family": "sans-serif" 
	});
	
		paper.circle((x+250), (y+10), 50).
     attr({"stroke-width" : 1
      }); 
	
	// high symbol in rect
	  paper.rect((x+280), (y-60), 30, 30).
     attr({"stroke-width" : 1
      }); 
	
	
	  paper.path("M "+(x+290)+","+ (y-53)+" l 12 8 l -12 8").
     attr({"stroke-width" : 2
      });
	  
	  
	  // out
	  paper.path("M "+(x+300)+","+ (y+10)+" l 60 0").
     attr({"stroke-width" : 2,
  	   	 "stroke-dasharray" : "-",
  	   	 "arrow-end": "open-narrow-short"
      });
	  paper.text((x+320), (y+25), "Out").attr({
		  'stroke' : 'black',
			'font-size' : 15,
			"font-family": "sans-serif" 
		});

	
	  // a input
	  
	 paper.path("M "+(x+150)+","+ (y-45)+"l 60 25").attr({ 
		      "stroke-width" : 2,
  	   	 "stroke-dasharray" : "-",
  	   	 "arrow-end": "open-narrow-short"
      });
	  paper.text((x+160), (y-55), "a").attr({
		  'stroke' : 'black',
			'font-size' : 20,
			"font-family": "sans-serif" 
		});
	  
	  // b input
	  paper.path("M "+(x+250)+","+ (y+120)+" l 0 -60").
     attr({"stroke-width" : 2,
  	   	 "stroke-dasharray" : "-",
  	   	 "arrow-end": "open-narrow-short"
      });
	  paper.text((x+265), (y+115), "b").attr({
		     'stroke' : 'black',
			'font-size' : 20,
			"font-family": "sans-serif" 
		});
	
	// c input
	 paper.path("M "+(x+250)+","+ (y-100)+" l 0 60").
     attr({"stroke-width" : 2,
  	   	 "stroke-dasharray" : "-",
  	   	 "arrow-end": "open-narrow-short"
      });
	  paper.text((x+265), (y-90), "c").attr({
		     'stroke' : 'black',
			'font-size' : 20,
			"font-family": "sans-serif" 
		});
		
		// d input
		paper.path("M "+(x+150)+","+ (y+60)+"l 60 -25").attr({ 
		      "stroke-width" : 2,
  	   	 "stroke-dasharray" : "-",
  	   	 "arrow-end": "open-narrow-short"
      });
	  paper.text((x+160), (y+70), "d").attr({
		  'stroke' : 'black',
			'font-size' : 20,
			"font-family": "sans-serif" 
		});
	 
}

function InputLabel(x, y, text, clr){
	
	paper.text(x, y, text+"%").attr({
			stroke : clr,
			'font-size' : 25,
			"font-family": "sans-serif" 
		});
	 
	 
	 
 };
// JavaScript Document