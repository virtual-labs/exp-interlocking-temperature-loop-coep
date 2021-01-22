// JavaScript Documentvar paper;


function PressureControl(){	

//	paper = new Raphael(document.getElementById('canvas'), '100%', 700);
	
    //x = 310;
	//y = 160;
	
	x = 355;
	y = 400;
   
	PCS_initiallabel = tanklevelHeight((x+2), (y+150), 0, 'blue');
	
	 PL_tank = PL_Tank ((x-180), y);
    var PTCircle = PC_PTCircleWithLabel((x-100),(y-140), 22, "PT 100");	
	var PYCircle = PC_CircleWithLabel((x-290),(y-60), 22, "PY 100");
	PY101Circle = PC_CircleWithLabel((x),(y-240), 22, "PY 101");
	var PE100 = PC_CircleWithLabel((x-100),(y-70), 22, "PE 100");
	var PIC100_Circle = PC_CircleWithLine((x),(y-315), 22, "PIC", "100"); 
	
	PC_CircleWithLabel((x+205),(y-20), 22, "PY 301");
	PC_CircleWithLine((x+205),(y-112), 22, "PIC", "301"); 
	
	PY201Circle = PC_CircleWithLabel((x+205),(y-202), 22, "PY 201"); 

//	PC_CircleWithLabel((x-290),(y-315), 22, "PY 201");
		
	 // Gas In arrow line
	 paper.path('M'+(x-350)+' '+(y+65)+ 'l 43 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	 //PCV100 to NRV100
	 paper.path('M'+(x-274)+' '+(y+65)+ 'l 35 0').attr({'stroke':'black', 'stroke-width':'1'});
	 //NRV100 to tank
	 paper.path('M'+(x-205)+' '+(y+65)+ 'l 50 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	 //tank to PCV200
	 paper.path('M'+(x+125)+' '+(y+95)+ 'l 63 0').attr({'stroke':'black', 'stroke-width':'1'});
	 //Gas out
	 paper.path('M'+(x+220)+' '+(y+95)+ 'l 40 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	 //PCV100 to PY100
	 paper.path('M'+(x-290)+' '+(y-35)+ 'l 0 75').attr({'stroke':'black', 'stroke-width':'1'});	 
	 paper.path('M'+(x-280)+' '+(y-10)+ 'l -25 25').attr({'stroke':'black', 'stroke-width':'1'});	 
	 paper.path('M'+(x-280)+' '+(y-20)+ 'l -25 25').attr({'stroke':'black', 'stroke-width':'1'});
	 //PY100 to  PIC 100
	 paper.path('M'+(x-290)+' '+(y-85)+ 'l 0 -230').attr({'stroke':'black', 'stroke-width':'2',  'stroke-dasharray' : '--'}).toBack();
	 pic100toPS2Comp = paper.path('M'+(x-290)+' '+(y-315)+ 'l 270 0').attr({'stroke':'black', 'stroke-width':'2',  'stroke-dasharray' : '--'}).toBack();
//	 // PY201 to PIC 100
//	 paper.path('M'+(x-270)+' '+(y-315)+ 'l 250 0').attr({'stroke':'black', 'stroke-width':'2',  'stroke-dasharray' : '--'});
	 //PT100	 
	 paper.path('M'+(x-100)+' '+(y-165)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //PE100 to PT100
	 paper.path('M'+(x-100)+' '+(y-95)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //tank to PE100
	 paper.path('M'+(x-100)+' '+(y-18)+ 'l 0 -27').attr({'stroke':'black', 'stroke-width':'2'});
	 // from PCV 200 to UD
	 paper.path('M'+(x+205)+' '+(y)+ 'l 0 70').attr({'stroke':'black', 'stroke-width':'1'});	 
	 paper.path('M'+(x+215)+' '+(y+15)+ 'l -20 20').attr({'stroke':'black', 'stroke-width':'1'});	 
	 paper.path('M'+(x+215)+' '+(y+25)+ 'l -20 20').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 //PY301 to PIC 301
	 py301topic301 = paper.path('M'+(x+205)+' '+(y-40)+ 'l 0 -50').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 //PY101 to PIC 100
	 paper.path('M'+(x)+' '+(y-262)+ 'l 0 -30').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 //all trans connected
	 paper.path('M'+(x-100)+' '+(y-185)+ 'l 180 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //from transmitters to PY101
	 transtopy101 = paper.path('M'+(x)+' '+(y-185)+ 'l 0 -30').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 // to PIC301
	 paper.path('M'+(x)+' '+(y-205)+ 'l 190 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 paper.path('M'+(x+205)+' '+(y-182)+ 'l 0 50').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 PC_ControlValve((x-300),(y+50));	 
	 NRV_Valve((x-230),(y+50));  
	 var MVValve = PC_ControlValve((x+195),(y+80));
	 
	 
	 var CV100 = Label((x-290), (y+90), "PCV 100");	 
	 var NRV100 = Label((x-220), (y+90), "NRV 100");
	 var MV100 = Label((x+205), (y+120), "PCV 200");	 
	 var outlet = Label((x+250), (y+80), "Gas Out");
	 var inlet = Label((x-335), (y+55), "Gas In");
//	 var T100 = Label((x), (y+60), "P 100");
	
	paper.text((x+100), (y+200), "Pressure Control System").attr({
			stroke : 'black',
			'font-size' : 25,
			"font-family": "sans-serif" 
		});
	
	PEPT101Connected();
	
//	PEPT201Connected();
//	PEPT301Connected();
//	PEPT201NotConnected();
//	PEPT301NotConnected();
	 
};	


	function PL_Tank (x, y){
		

	 
	 var rect = paper.rect((x+25), (y-18), 280, 150, 50).attr({'stroke':'black',"stroke-width" : 1, "fill":"#beda4d",  opacity : 0.5}); 
	 
	 return rect;
		
	};


	function PC_ControlValve(x, y){
	
	
	paper.path('M'+(x)+' '+(y)+ 'l 20 0').attr({'stroke':'black', 'stroke-width':'1'});
	
	 paper.path('M'+(x)+' '+(y)+ 'l 0 0 q 10 -20 20 0  ').attr({'stroke':'black', 'stroke-width':'1'});
	
	paper.path('M'+(x+10)+' '+(y)+ 'l 0 15').attr({'stroke':'black', 'stroke-width':'1'});
	
	 paper.path('M'+(x-8)+' '+(y+3)+ 'l 0 25 l 35 -25 l 0 25 l -35 -25').attr({'stroke':'black', 'stroke-width':'1'});
	
	
	
};
 
	function NRV_Valve(x, y){
	
	
	
	 paper.path('M'+(x-8)+' '+(y+28)+ 'l 0 -25 l 35 25 l 0 -25').attr({'stroke':'black', 'stroke-width':'1'});
	
	 paper.circle((x-8), (y), 3).attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x-8)+' '+(y-8)+ 'l 35 0').attr({'stroke':'black', 'stroke-width':'1', 'arrow-end':'classic-wide-long'});
	
	
};
 

 
 function Label(x, y, text){
	
	paper.text(x, y, text).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		}).toBack();
	 
	 
	 
 };
   
   function PC_CircleWithLine(x, y, r, l1, l2){
	
	
	paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x-25)+' '+(y)+ 'l 50 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	Label((x), (y-10), l1);
	Label((x), (y+10), l2);
	
	
	
};

 function PC_CircleWithLabel(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'}).toFront();
	Label(x, y, l1);
	 return c;
	
	
};
  
  
  function PC_PTCircleWithLabel(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'}).toFront();
	Label(x, y, l1);
    return c;
	
	
}; 
  
 function PEPT101Connected() {
	 
	 
	 PC_CircleWithLabel((x-40),(y-70), 22, "PE 101");
	 PC_PTCircleWithLabel((x-40),(y-140), 22, "PT 101");	
	 //PT100	 
	 paper.path('M'+(x-40)+' '+(y-165)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //PE100 to PT100
	 paper.path('M'+(x-40)+' '+(y-95)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //tank to PE100
	 paper.path('M'+(x-40)+' '+(y-18)+ 'l 0 -27').attr({'stroke':'black', 'stroke-width':'2'});
	
} 
 
 function PEPT201Connected() {
	 
	 paper.setStart();
	 PC_CircleWithLabel((x+20),(y-70), 22, "PE 201");
	 PC_PTCircleWithLabel((x+20),(y-140), 22, "PT 201");	
	 //PT100	 
	 paper.path('M'+(x+20)+' '+(y-165)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //PE100 to PT100
	 paper.path('M'+(x+20)+' '+(y-95)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //tank to PE100
	 paper.path('M'+(x+20)+' '+(y-18)+ 'l 0 -27').attr({'stroke':'black', 'stroke-width':'2'});
	 PEPT201_Conn = paper.setFinish();
		return PEPT201_Conn;
}
 
 function PEPT301Connected() {
	 
	 paper.setStart();
	 PC_CircleWithLabel((x+80),(y-70), 22, "PE 301");
	 PC_PTCircleWithLabel((x+80),(y-140), 22, "PT 301");	
	 //PT100	 
	 paper.path('M'+(x+80)+' '+(y-165)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //PE100 to PT100
	 paper.path('M'+(x+80)+' '+(y-95)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //tank to PE100
	 paper.path('M'+(x+80)+' '+(y-18)+ 'l 0 -27').attr({'stroke':'black', 'stroke-width':'2'});
	 PEPT301_Conn = paper.setFinish();
		return PEPT301_Conn;
}
 
 
function PEPT201NotConnected() {
	 
	paper.setStart();
	 PC_CircleWithLabel((x+20),(y-70), 22, "PE 201");
	 PC_PTCircleWithLabel((x+20),(y-140), 22, "PT 201");	
	 //PT100	 
	 paper.path('M'+(x+20)+' '+(y-165)+ 'l 0 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //PE100 to PT100
	 paper.path('M'+(x+20)+' '+(y-95)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //tank to PE100
	 paper.path('M'+(x+20)+' '+(y-18)+ 'l 0 -27').attr({'stroke':'black', 'stroke-width':'2'});
	 var c  = paper.setFinish();
		return c;
}
 
 function PEPT301NotConnected() {
	 
	 paper.setStart();
	 PC_CircleWithLabel((x+80),(y-70), 22, "PE 301");
	 PC_PTCircleWithLabel((x+80),(y-140), 22, "PT 301");	
	 //PT100	 
	 paper.path('M'+(x+80)+' '+(y-165)+ 'l 0 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //PE100 to PT100
	 paper.path('M'+(x+80)+' '+(y-95)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 //tank to PE100
	 paper.path('M'+(x+80)+' '+(y-18)+ 'l 0 -27').attr({'stroke':'black', 'stroke-width':'2'});
	 var c  = paper.setFinish();
		return c;
}
  
 
 
 
 
 
 
 function PCS_drawWaterLevel(tanklevel){
		
		var ht;
		
		if(tanklevel == 0){
			ht = 0;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#beda4d",  opacity : 0.50});
		}
		if(tanklevel > 0 && tanklevel <=5){
			ht = 10;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#b4ce4a",  opacity : 0.50});
		}
		if(tanklevel > 5 && tanklevel <=10){
			ht = 15;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#d2da4d",  opacity : 0.50});
		}
		if(tanklevel > 10 && tanklevel <=15){
			ht = 20;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#dad84d",  opacity : 0.50});
		}
		if(tanklevel > 15 && tanklevel <=20){
			ht = 25;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#dad24d",  opacity : 0.50});
		}
		if(tanklevel > 20 && tanklevel <=25){
			ht = 30;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#decf4f",  opacity : 0.50});
		}
		if(tanklevel > 25 && tanklevel <=30){
			ht = 35;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#dec54f",  opacity : 0.50});
		}
		if(tanklevel > 30 && tanklevel <=35){
			ht = 40;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#debe4f",  opacity : 0.50});
		}
		if(tanklevel > 35 && tanklevel <=40){
			ht = 45;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#deb14f",  opacity : 0.50});
		}
		if(tanklevel > 40 && tanklevel <=45){
			ht = 50;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#deaa4f",  opacity : 0.50});
		}
		if(tanklevel > 45 && tanklevel <=50){
			ht = 55;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#dea04f",  opacity : 0.50});			
		}
		if(tanklevel > 50 && tanklevel <=55){
			ht = 65;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#de9c4f",  opacity : 0.50});
		}
		if(tanklevel > 55 && tanklevel <=60){
			ht = 75;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#de8c4f",  opacity : 0.50});
//			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"90-#ccffb3:10-#aaff80:20-#ffd1b3:40-#ffd6cc:60-#ffad99:100",opacity : 0.3});
		}
		if(tanklevel > 60 && tanklevel <=65){
			ht = 85;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#de884f",  opacity : 0.50});
		}
		if(tanklevel > 65 && tanklevel <=70){
			ht = 95;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#de7e4f",  opacity : 0.50});
		}
		if(tanklevel > 70 && tanklevel <=75){
			ht = 105;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#de7b4f",  opacity : 0.50});
		}
		if(tanklevel > 75 && tanklevel <=80){
			ht = 115;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#de774f",  opacity : 0.50});
		}
		if(tanklevel > 80 && tanklevel <=85){
			ht = 125;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#de774f",  opacity : 0.50});
		}
		if(tanklevel > 85 && tanklevel <=90){
			ht = 135;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#de774f",  opacity : 0.50});
		}
		if(tanklevel > 90 && tanklevel <=95){
			ht = 145;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#de774f",  opacity : 0.50});
		}
		if(tanklevel > 95 && tanklevel <=100){
			ht = 150;
			PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#de774f",  opacity : 0.70});
		}
		
		
		
		
//		 var a = paper.path('M'+(x-10)+' '+(y+132)).attr({'stroke':'#7fbfff','stroke-width': '218', opacity : 1});
//		 a.animate( {path:"M"+ (x-10) +" "+ (y+132) +" l 0" + -ht, 'stroke-width': '218', 'stroke':'#7fbfff',
//				opacity : 1}, 0);
//		 return a;
		
	}
  