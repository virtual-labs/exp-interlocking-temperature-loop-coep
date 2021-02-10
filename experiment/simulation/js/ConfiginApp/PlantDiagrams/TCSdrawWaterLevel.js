


function TCS_Height(x, y, text, clr){
	 
	 paper.setStart();
	 line1 = paper.path('M'+(x)+' '+(y+20)+'l 10 0');
	 line2 = paper.path('M'+(x+5)+' '+(y+20)+'l 0 60').attr({'stroke':'black', 'stroke-width':'2', 'arrow-start':'classic-wide-long'});
	 HT_Label = Label((x-35), (y+90), "H = ");
	 line3 = paper.path('M'+(x+5)+' '+(y + 100)+'l 0 105').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	 line4 = paper.path('M'+(x)+' '+(y+205)+'l 10 0');
	 
	 paper.text(x, (y+90), text+" %").attr({
			stroke : clr,
			'font-size' : 15,
			"font-family": "sans-serif" 
		}).toBack(); 
	
	 TCS_LblHT1 = paper.setFinish();
		return TCS_LblHT1; 
};


function TCS_setht(tanklevel){
	
  var ht;
	
	if(tanklevel == 0){
		ht = 0;
	}
	if(tanklevel > 0 && tanklevel <=5){
		ht = 25;
	}
	if(tanklevel > 5 && tanklevel <=10){
		ht = 30;
	}
	if(tanklevel > 10 && tanklevel <=15){
		ht = 40;
	}
	if(tanklevel > 15 && tanklevel <=20){
		ht = 50;
	}
	if(tanklevel > 20 && tanklevel <=25){
		ht = 55;
	}
	if(tanklevel > 25 && tanklevel <=30){
		ht = 60;
	}
	if(tanklevel > 30 && tanklevel <=35){
		ht = 70;
	}
	if(tanklevel > 35 && tanklevel <=40){
		ht = 80;
	}
	if(tanklevel > 40 && tanklevel <=45){
		ht = 90;
	}
	if(tanklevel > 45 && tanklevel <=50){
		ht = 100;
	}
	if(tanklevel > 50 && tanklevel <=55){
		ht = 110;
	}
	if(tanklevel > 55 && tanklevel <=60){
		ht = 120;
	}
	if(tanklevel > 60 && tanklevel <=65){
		ht = 130;
	}
	if(tanklevel > 65 && tanklevel <=70){
		ht = 140;
	}
	if(tanklevel > 70 && tanklevel <=75){
		ht = 150;
	}
	if(tanklevel > 75 && tanklevel <=80){
		ht = 160;
	}
	if(tanklevel > 80 && tanklevel <=85){
		ht = 170;
	}
	if(tanklevel > 85 && tanklevel <=90){
		ht = 180;
	}
	if(tanklevel > 90 && tanklevel <=95){
		ht = 190;
	}
	if(tanklevel > 95 && tanklevel <=100){
		ht = 200;
	}
	
	return ht;
	
}



function TCS_drawWaterLevel(ht, clr){
	
	
//	paper.setStart();
	
	  TCS_waterlevel1 = paper.path('M'+(x+225)+' '+(y+200)+'l 0'+ (-ht)).attr({'stroke':clr,'stroke-width': '148', opacity : 1});
//	 TCS_waterlevel1.animate( {path:"M"+ (x+225) +" "+ (y+200) +" l 0" + -ht, 'stroke-width': '148', 'stroke':'#7fbfff',
//			opacity : 1}, 0).toBack();
	 
//	 TCS_waterlevel2 = paper.setFinish();
		return TCS_waterlevel1; 
	 
}





function increaseWaterLvl(){
	
//	console.log("in increase interval");
	
	
	TCS_ht = TCS_ht + 5;
	
	TCS_waterlevel.hide();
	
	if(TCS_ht <= 220){
		
		TCS_waterlevel = TCS_drawWaterLevel(TCS_ht, "#7fbfff");
		temp = ref;
	}else{
		TCS_waterlevel.hide();
		TCS_ht = 220;
		TCS_waterlevel = TCS_drawWaterLevel(TCS_ht, "#7fbfff");
		
		clearInterval(ref);
		
		alertify.alert("Tank is Overflow");
		
	}
	
	
}

function decreaseWaterLvl(){
	
//	console.log("in decrease interval");
	
	
	TCS_ht = TCS_ht - 4;
	
	TCS_waterlevel.hide();
	
	if(TCS_ht >= 1){
		
		TCS_waterlevel = TCS_drawWaterLevel(TCS_ht, "#7fbfff");
		temp = ref;
	}else{
		TCS_waterlevel.hide();
		TCS_ht = 1;
		TCS_waterlevel = TCS_drawWaterLevel(TCS_ht, "#7fbfff");
		
		clearInterval(ref);
		
		alertify.alert("Tank is Empty");
		
		
		
	}
	
	
}



