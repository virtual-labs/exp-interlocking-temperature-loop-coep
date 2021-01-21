
function RLinputDiagram(limitValue){	
//	paper = new Raphael(document.getElementById('canvas'), '100%', 700);
	

	
	x = 50;
	y = 200;

	InputLabel(300, 310, limitValue, 'blue');
	
//	InputLabel((x+110), (y+10), 34);
	
//	InputLabel(300, 340, 34);
	
	paper.text((x+250), (y-150), "Rate limiter Selector").attr({
		'stroke' : 'black',
		'font-size' : 30,
		"font-family": "sans-serif" 
	});
	
		paper.circle((x+250), (y+10), 50).
     attr({"stroke-width" : 1
      }); 
	
	// high symbol in rect
	  paper.rect((x+280), (y-60), 35, 30).
     attr({"stroke-width" : 1
      }); 
	
	
	  paper.path("M "+(x+285)+","+ (y-53)+" l 12 15 12 -15 ").
     attr({"stroke-width" : 2
      });
	  
	   paper.path("M "+(x+285)+","+ (y-46)+" l 25 0").
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
	  paper.path("M "+(x+140)+","+ (y+10)+"l 60 0").attr({ 
		      "stroke-width" : 2,
  	   	 "stroke-dasharray" : "-",
  	   	 "arrow-end": "open-narrow-short"
      });
	  paper.text((x+150), (y+25), "a").attr({
		  'stroke' : 'black',
			'font-size' : 20,
			"font-family": "sans-serif" 
		});
	
	  
	  // X input
	 
	  paper.text((x+250), (y+75), "X").attr({
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
// JavaScript Document// JavaScript Document// JavaScript Document