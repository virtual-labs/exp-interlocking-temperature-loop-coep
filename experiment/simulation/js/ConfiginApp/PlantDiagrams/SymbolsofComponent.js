
function highrotation(x, y){
	
	var c = paper.path("M"+(x+28)+" "+(y-30)+"l 12 8 l -12 8").attr({'stroke':'#ff9900',"stroke-width" : 2});
	return c;
}

function lowrotation(x, y){
	
	var c =  paper.path("M"+(x+40)+" "+(y-30)+"l -12 8  12 8").attr({'stroke':'#ff9900',"stroke-width" : 2});
	return c;
}


function RLrotation(x, y){
	
	paper.setStart();
	
	paper.path("M"+(x+27)+" "+(y-30)+"l 8 12 l 8 -12").attr({'stroke':'#ff9900' , "stroke-width" : 2});		  
	paper.path("M"+(x+26)+" "+(y-25)+"l 18 0 "). attr({'stroke':'#ff9900' , "stroke-width" : 2 });	
	
  var c = paper.setFinish();
		return c;
}




function HLrotation(x, y){
	
	paper.setStart();
	
	 paper.path("M"+(x+28)+" "+(y-30)+"l 12 8 l -12 8").attr({'stroke':'#ff9900', "stroke-width" : 2});
	 paper.path("M"+(x+35)+" "+(y-30)+"l 0 16 ").attr({'stroke':'#ff9900' , "stroke-width" : 2});
  var c = paper.setFinish();
		return c;
}

function LLrotation(x, y){
	
	paper.setStart();
	
	 paper.path("M"+(x+40)+" "+(y-30)+"l -12 8  12 8").attr({'stroke':'#ff9900' , "stroke-width" : 2});
	  paper.path("M"+(x+35)+" "+(y-30)+"l 0 16 ").attr({'stroke':'#ff9900' , "stroke-width" : 2 });
  var c = paper.setFinish();
		return c;
}





function HS2_Symbol(x, y, txt){
	
	paper.setStart();
	
		  paper.circle(x, y, 25).attr({'stroke':'#ff9900',"stroke-width" : 1.5,"fill" : "#ff9900"}); 
		
		// high symbol in rect
		  paper.rect((x+22), (y-35), 25, 25).attr({'stroke':'black',"stroke-width" : 1.5}); 
//		  high(x,y,0);
		  
	    // a input
		  paper.path("M"+(x-22)+" "+(y-55)+"l 15 35").attr({ 'stroke':'black',"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
		  paper.text( (x-12), (y-52), "a").attr({'stroke':'black','font-size' : 15,"font-family": "sans-serif"});
		  
		// b input
		  paper.path("M"+(x-45)+" "+(y-40)+"l 25 25").attr({'stroke':'black',"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});
		  paper.text( (x-35), (y-45), "b").attr({'stroke':'black','font-size' : 15,"font-family": "sans-serif" });
		 
		  paper.text( (x), (y), txt).attr({'stroke' : 'black','font-size' : 12,"font-family": "sans-serif"});
	
	var c = paper.setFinish();
	return c;
	
}

function HS3_Symbol(x, y, txt){
	
	paper.setStart();
	
		  paper.circle(x, y, 25).attr({'stroke':'#ff9900', "stroke-width" : 1,"fill" : "#ff9900"}); 
		
		// high symbol in rect
		  paper.rect((x+22), (y-35), 25, 25).attr({"stroke-width" : 1}); 
//		  paper.path("M"+(x+28)+" "+(y-30)+"l 12 8 l -12 8").attr({"stroke-width" : 2});
		  

		  
		// a input
		  paper.path("M"+(x-22)+" "+(y-55)+"l 15 35").attr({ "stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
		  paper.text( (x-12), (y-52), "a").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"});
		  
		  
		// b input
		  paper.path("M"+(x-45)+" "+(y-40)+"l 25 25").attr({"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});
		  paper.text( (x-35), (y-45), "b").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif" });
		  
		// c input
		  paper.path("M"+(x+40)+" "+(y+45)+"l -25 -25").attr({"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});
		  paper.text( (x+30), (y+50), "c").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif" });
		 
		  paper.text( (x), (y), txt).attr({'stroke' : 'black','font-size' : 12,"font-family": "sans-serif"});
	
	var c = paper.setFinish();
	return c;
	
}

function HS4_Symbol(x, y,txt){
	
	paper.setStart();
	
		  paper.circle(x, y, 25).attr({'stroke':'#ff9900',"stroke-width" : 1,"fill" : "#ff9900"}); 
		
		// high symbol in rect
		  paper.rect((x+22), (y-35), 25, 25).attr({"stroke-width" : 1}); 
//		  paper.path("M"+(x+28)+" "+(y-30)+"l 12 8 l -12 8").attr({"stroke-width" : 2});
		  
//	    // a input
//		  paper.path("M"+(x)+" "+(y-52)+"l 0 30").attr({ "stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
//		  paper.text( (x+10), (y-52), "a").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"});
		  
		// a input
		  paper.path("M"+(x-22)+" "+(y-55)+"l 15 35").attr({ "stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
		  paper.text( (x-12), (y-52), "a").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"});
		  
		  
		// b input
		  paper.path("M"+(x-45)+" "+(y-40)+"l 25 25").attr({"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});
		  paper.text( (x-35), (y-45), "b").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif" });
		  
		// c input
		  paper.path("M"+(x+40)+" "+(y+45)+"l -25 -25").attr({"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});
		  paper.text( (x+30), (y+50), "c").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif" });
		 
		// d input
		  paper.path("M"+(x+63)+" "+(y+20)+"l -40 -15").attr({"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});
		  paper.text( (x+55), (y+30), "d").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif" });
	
		  paper.text( (x), (y), txt).attr({'stroke' : 'black','font-size' : 12,"font-family": "sans-serif"});
		  
	var c = paper.setFinish();
	return c;
	
}



function LS2_Symbol(x, y, txt){
	
	paper.setStart();
	
		  paper.circle(x, y, 25).attr({'stroke':'#ff9900',"stroke-width" : 1,"fill" : "#ff9900"}); 
		
		// high symbol in rect
		  paper.rect((x+22), (y-35), 25, 25).attr({"stroke-width" : 1}); 
		 
		  
//	    // a input
//		  paper.path("M"+(x)+" "+(y-52)+"l 0 30").attr({ "stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
//		  paper.text( (x+10), (y-52), "a").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"});
		  
		// a input
		  paper.path("M"+(x-22)+" "+(y-55)+"l 15 35").attr({ "stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
		  paper.text( (x-12), (y-52), "a").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"});
		  
		  
		// b input
		  paper.path("M"+(x-45)+" "+(y-40)+"l 25 25").attr({"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});
		  paper.text( (x-35), (y-45), "b").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif" });
		 
		  paper.text( (x), (y), txt).attr({'stroke' : 'black','font-size' : 12,"font-family": "sans-serif"});
	
	var c = paper.setFinish();
	return c;
	
}

function LS3_Symbol(x, y, txt){
	
	paper.setStart();
	
		  paper.circle(x, y, 25).attr({'stroke':'#ff9900',"stroke-width" : 1,"fill" : "#ff9900"}); 
		
		// high symbol in rect
		  paper.rect((x+22), (y-35), 25, 25).attr({"stroke-width" : 1}); 
//		  paper.path("M"+(x+40)+" "+(y-30)+"l -12 8  12 8").attr({"stroke-width" : 2});
		  
//	    // a input
//		  paper.path("M"+(x)+" "+(y-52)+"l 0 30").attr({ "stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
//		  paper.text( (x+10), (y-52), "a").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"});
		  
		// a input
		  paper.path("M"+(x-22)+" "+(y-55)+"l 15 35").attr({ "stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
		  paper.text( (x-12), (y-52), "a").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"});
		  
		  
		// b input
		  paper.path("M"+(x-45)+" "+(y-40)+"l 25 25").attr({"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});
		  paper.text( (x-35), (y-45), "b").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif" });
		  
		// c input
		  paper.path("M"+(x+40)+" "+(y+45)+"l -25 -25").attr({"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});
		  paper.text( (x+30), (y+50), "c").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif" });
		 
		  paper.text( (x), (y), txt).attr({'stroke' : 'black','font-size' : 12,"font-family": "sans-serif"});
	
	var c = paper.setFinish();
	return c;
	
}

function LS4_Symbol(x, y, txt){
	
	paper.setStart();
	
		  paper.circle(x, y, 25).attr({'stroke':'#ff9900',"stroke-width" : 1,"fill" : "#ff9900"}); 
		
		// high symbol in rect
		  paper.rect((x+22), (y-35), 25, 25).attr({"stroke-width" : 1}); 
//		  paper.path("M"+(x+40)+" "+(y-30)+"l -12 8  12 8").attr({"stroke-width" : 2});
		  
//	    // a input
//		  paper.path("M"+(x)+" "+(y-52)+"l 0 30").attr({ "stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
//		  paper.text( (x+10), (y-52), "a").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"});
		  
		// a input
		  paper.path("M"+(x-22)+" "+(y-55)+"l 15 35").attr({ "stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
		  paper.text( (x-12), (y-52), "a").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"});
		  
		  
		// b input
		  paper.path("M"+(x-45)+" "+(y-40)+"l 25 25").attr({"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});
		  paper.text( (x-35), (y-45), "b").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif" });
		  
		// c input
		  paper.path("M"+(x+40)+" "+(y+45)+"l -25 -25").attr({"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});
		  paper.text( (x+30), (y+50), "c").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif" });
		 
		// d input
		  paper.path("M"+(x+63)+" "+(y+20)+"l -40 -15").attr({"stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});
		  paper.text( (x+55), (y+30), "d").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif" });
	
		  paper.text( (x), (y), txt).attr({'stroke' : 'black','font-size' : 12,"font-family": "sans-serif"});
		  
	var c = paper.setFinish();
	return c;
	
}




function RL_Symbol(x, y, txt){
	
	paper.setStart();
	
		  paper.circle(x, y, 25).attr({'stroke':'#ff9900',"stroke-width" : 1,"fill" : "#ff9900"}); 
		
		// high symbol in rect
		  paper.rect((x+22), (y-35), 25, 25).attr({"stroke-width" : 1}); 
//		  paper.path("M"+(x+27)+" "+(y-30)+"l 8 12 l 8 -12").attr({"stroke-width" : 2});		  
//		  paper.path("M"+(x+26)+" "+(y-25)+"l 18 0 "). attr({"stroke-width" : 2 });		
		  
		// a input
		  paper.path("M"+(x-22)+" "+(y-55)+"l 15 35").attr({ "stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
		  paper.text( (x-12), (y-52), "a").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"});
		  
		  paper.text( (x), (y), txt).attr({'stroke' : 'black','font-size' : 12,"font-family": "sans-serif"});
		  
	var c = paper.setFinish();
	return c;
	
}



function HL_Symbol(x, y,txt){
	
	paper.setStart();
	
		  paper.circle(x, y, 25).attr({'stroke':'#ff9900',"stroke-width" : 1,"fill" : "#ff9900"}); 
		
		// high symbol in rect
		  paper.rect((x+22), (y-35), 25, 25).attr({"stroke-width" : 1}); 
//		  paper.path("M"+(x+28)+" "+(y-30)+"l 12 8 l -12 8").attr({"stroke-width" : 2});
//		  paper.path("M"+(x+35)+" "+(y-30)+"l 0 16 ").attr({"stroke-width" : 2});
		  
		// a input
		  paper.path("M"+(x-22)+" "+(y-55)+"l 15 35").attr({ "stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
		  paper.text( (x-12), (y-52), "a").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"});
		  
		  paper.text( (x), (y), txt).attr({'stroke' : 'black','font-size' : 12,"font-family": "sans-serif"});
		  
	var c = paper.setFinish();
	return c;
	
}


function LL_Symbol(x, y,txt){
	
	paper.setStart();
	
		  paper.circle(x, y, 25).attr({'stroke':'#ff9900',"stroke-width" : 1,"fill" : "#ff9900"}); 
		
		// high symbol in rect
		  paper.rect((x+22), (y-35), 25, 25).attr({"stroke-width" : 1}); 
//		  paper.path("M"+(x+40)+" "+(y-30)+"l -12 8  12 8").attr({"stroke-width" : 2});
//		  paper.path("M"+(x+35)+" "+(y-30)+"l 0 16 ").attr({"stroke-width" : 2 });
		 
		// a input
		  paper.path("M"+(x-22)+" "+(y-55)+"l 15 35").attr({ "stroke-width" : 2,"stroke-dasharray" : "-","arrow-end": "open-narrow-short"});		  
		  paper.text( (x-12), (y-52), "a").attr({'stroke' : 'black','font-size' : 15,"font-family": "sans-serif"});
		  paper.text( (x), (y), txt).attr({'stroke' : 'black','font-size' : 12,"font-family": "sans-serif"});
		  
	var c = paper.setFinish();
	return c;
	
}



 function OutputLabel(x, y, text, clr){
	
	var lbl = paper.text(x, y, text).attr({
			stroke : clr,
			'font-size' : 15,
			"font-family": "sans-serif" 
		}).toBack(); 
	return lbl;
	 
 };
 
 function tanklevelHeight(x, y, text, clr){
		
		var c = paper.text(x, y, text+" %").attr({
				stroke : clr,
				'font-size' : 15,
				"font-family": "sans-serif" 
			}).toBack(); 
		return c;
		 
	 };
	 
	 
	 
	 
function drawWaterLevel(tanklevel){
	
	var ht;
	
	if(tanklevel == 0){
		ht = 0;
	}
	if(tanklevel > 0 && tanklevel <=5){
		ht = 15;
	}
	if(tanklevel > 5 && tanklevel <=10){
		ht = 20;
	}
	if(tanklevel > 10 && tanklevel <=15){
		ht = 25;
	}
	if(tanklevel > 15 && tanklevel <=20){
		ht = 30;
	}
	if(tanklevel > 20 && tanklevel <=25){
		ht = 35;
	}
	if(tanklevel > 25 && tanklevel <=30){
		ht = 50;
	}
	if(tanklevel > 30 && tanklevel <=35){
		ht = 60;
	}
	if(tanklevel > 35 && tanklevel <=40){
		ht = 70;
	}
	if(tanklevel > 40 && tanklevel <=45){
		ht = 80;
	}
	if(tanklevel > 45 && tanklevel <=50){
		ht = 90;
	}
	if(tanklevel > 50 && tanklevel <=55){
		ht = 100;
	}
	if(tanklevel > 55 && tanklevel <=60){
		ht = 110;
	}
	if(tanklevel > 60 && tanklevel <=65){
		ht = 120;
	}
	if(tanklevel > 65 && tanklevel <=70){
		ht = 130;
	}
	if(tanklevel > 70 && tanklevel <=75){
		ht = 140;
	}
	if(tanklevel > 75 && tanklevel <=80){
		ht = 150;
	}
	if(tanklevel > 80 && tanklevel <=85){
		ht = 160;
	}
	if(tanklevel > 85 && tanklevel <=90){
		ht = 170;
	}
	if(tanklevel > 90 && tanklevel <=95){
		ht = 180;
	}
	if(tanklevel > 95 && tanklevel <=100){
		ht = 185;
	}
	
	 var a = paper.path('M'+(x+100)+' '+(y+201)).attr({'stroke':'#7fbfff','stroke-width': '148', opacity : 1});
	 a.animate( {path:"M"+ (x+100) +" "+ (y+201) +" l 0" + -ht, 'stroke-width': '148', 'stroke':'#7fbfff',
			opacity : 1}, 1);
	 return a;
	
}

