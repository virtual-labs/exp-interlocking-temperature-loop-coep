// JavaScript Documentvar paper;


function LevelControl(){	

//	paper = new Raphael(document.getElementById('canvas'), '100%', 700);
    //x = 310;
	//y = 160;
	
	x = 40;
	y = 220;

	
	
	
	var LC_tank = LC_Tank(x,y);
	var height = Height((x+5), (y+20));
	
	initiallevel = tanklevelHeight((x+2), (y+110), 0, 'blue');
	
   // 100
    
	//tank to lcv100
	
	var LIC100Circle = LC_CircleWithLine((x+420), (y+195), 25, "LIC", "100");
	LY101Circle = 	LC_CircleWithLabel((x+420), (y+120), 25,"LY 101");
	var LT100Circle = LC_CircleWithLabel((x+302), (y+40), 22,"LT 100");	
	var LE100Circle = LC_CircleWithLabel((x+225), (y+40), 22,"LE 100");	
	
	paper.path('M'+(x+95)+' '+(y+225)+ 'l 0 170 305 0 ').attr({'stroke':'black', 'stroke-width':'2'});
	
	LC_ControlValve100((x+410), (y+385));
    var LCV100_Label = Label((x+420), (y+420), "LCV 100");
	
	// lcv100 to userdemand
	paper.path('M'+(x+440)+' '+(y+395)+ 'l  30 0 ').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	
	var Liquid_outlet = Label((x+510), (y+395), "User Demand");
    
	//ly100 to lcv100
	paper.path('M'+(x+420)+' '+(y+310)+ 'l 0 65').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x+430)+' '+(y+315)+ 'l -20 20').attr({'stroke':'black', 'stroke-width':'2'});	
	paper.path('M'+(x+430)+' '+(y+325)+ 'l -20 20').attr({'stroke':'black', 'stroke-width':'2'});
	
	var LY100Circle = 	LC_CircleWithLabel((x+420), (y+285), 25,"LY 100");
	
	//	lic100 to ly100
	lic100toly100 = paper.path('M'+(x+420)+' '+(y+220)+ 'l 0 40').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});		

	//	ly101 to lic100
	paper.path('M'+(x+420)+' '+(y+145)+ 'l 0 28').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
	
		 	

	 //le100 to lt100
	paper.path('M'+(x+247)+' '+(y+40)+ 'l 30 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
	
	//lt100 to ly101 and ly201
	paper.path('M'+(x+325)+' '+(y+40)+ 'l 38 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
	
	//tank to le100
	paper.path('M'+(x+173)+' '+(y+40)+ 'l 28 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	
	
	//from ly101	
	ly101totrans = paper.path('M'+(x+395)+' '+(y+120)+ 'l -30 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	

	
	
	
	
	
	
	
	// 200
	var LIC200Circle = 	LC_CircleWithLine((x+525), (y+40), 25,"LIC", "200");
	var LY200Circle = 	LC_CircleWithLabel((x+360), (y-80), 25,"LY 200");
	 LY201Circle = 	LC_CircleWithLabel((x+420), (y-20), 25,"LY 201");
	
	LC_ControlValve200((x+202), (y-125));
    var LCV200_Label = Label((x+210), (y-135), "LCV 200");
    
    //LCV200 to tank
	paper.path('M'+(x+95)+' '+(y-42)+'l 0 -75 100 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-start':'classic-wide-long'});	
	
	//lcv200 to inletsource
	paper.path('M'+(x+230)+' '+(y-115)+'l 100 0').attr({'stroke':'black', 'stroke-width':'1'});

	var inletSource = Label((x+380), (y-115), "Inlet Source");
	
	//lcv200 to ly200
	paper.path('M'+(x+212)+' '+(y-95)+ 'l 0 15 125 0').attr({'stroke':'black', 'stroke-width':'1'});
	
	//ly200 to lic200
	paper.path('M'+(x+385)+' '+(y-85)+ 'l 140 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	lic200toPS2comp = paper.path('M'+(x+525)+' '+(y-85)+ 'l 0 100').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	//ly201 to lic200
	paper.path('M'+(x+445)+' '+(y-20)+ 'l 30 0 0 60 25 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	//lt100 to lic200
//	paper.path('M'+(x+445)+' '+(y+40)+ 'l 60 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	//from ly201	
	ly201totrans = paper.path('M'+(x+395)+' '+(y-20)+ 'l -30 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	
	//ly201 to ly101	
	paper.path('M'+(x+365)+' '+(y-20)+ 'l 0 210 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	
	
	
	var LELT101_connected = LELT101_Connected();
	
//	var LELT201_connected = LELT201_Connected();	
	
//	var LELT301_connected = LELT301_Connected();	
	
	
//	var LELT201_notconnected = LELT201_NotConnected();	
//	
//	var LELT301_notconnected = LELT301_NotConnected();
	
    
	
	
	
	

	
	
	
	paper.text((x+200), (y+430), "Level Control System").attr({
			stroke : 'black',
			'font-size' : 25,
			"font-family": "sans-serif" 
		});
	

		
};


function LC_Tank(x,y){
	
	tank = paper.path('M'+(x+25)+' '+(y-18)+'l 0 220 150 0 0 -220 -150 0').attr({
	"stroke-width" : 1,
	'stroke':'black',
	}); 
	
	waterlevel = paper.path('M'+(x+25)+' '+(y+20)+'l 150 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	upperArc = paper.path('M'+(x+25)+' '+(y-18)+ 'l 0 0 q 68 -50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});	
	
    lowerArc = paper.path('M'+(x+25)+' '+(y+200)+ 'l 0 0 q 68 50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});
	
};

function LC_ControlValve200(x1, y1){
	
	
//	loweroutlet = paper.path('M'+(x)+' '+(y)+ 'l 20 0 M'+(x)+' '+(y)+ 'l 0 0 q 10 -20 20 0  M'+(x+10)+' '+(y)+ 'l 0 10 M'+(x-8)+' '+(y+3)+ 'l 0 15 l 35 -15 l 0 15 l -35 -15').attr({'stroke':'black', 'stroke-width':'1'});
	
	loweroutlet1 = paper.path('M'+(x1)+' '+(y1+20)+ 'l 20 0 M'+(x1)+' '+(y1+20)+ 'l 0 0 q 10 20 20 0  M'+(x1+10)+' '+(y1+10)+ 'l 0 10 M'+(x1-8)+' '+(y1+3)+ 'l 0 15 l 35 -15 l 0 15 l -35 -15').attr({'stroke':'black', 'stroke-width':'1'});
};
 
function LC_ControlValve100(x, y){
	
	
	loweroutlet = paper.path('M'+(x)+' '+(y)+ 'l 20 0 M'+(x)+' '+(y)+ 'l 0 0 q 10 -20 20 0  M'+(x+10)+' '+(y)+ 'l 0 10 M'+(x-8)+' '+(y+3)+ 'l 0 15 l 35 -15 l 0 15 l -35 -15').attr({'stroke':'black', 'stroke-width':'1'});
	
//	loweroutlet1 = paper.path('M'+(x1)+' '+(y1+20)+ 'l 20 0 M'+(x1)+' '+(y1+20)+ 'l 0 0 q 10 20 20 0  M'+(x1+10)+' '+(y1+10)+ 'l 0 10 M'+(x1-8)+' '+(y1+3)+ 'l 0 15 l 35 -15 l 0 15 l -35 -15').attr({'stroke':'black', 'stroke-width':'1'});
};

 
 function Label(x, y, text){
	
	paper.text(x, y, text).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		}).toBack();
	 
	 
	 
 };
 
 
 function LC_CircleWithLine(x, y, r, l1, l2){
	
	
	paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x-25)+' '+(y)+ 'l 50 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	Label((x), (y-10), l1);
	Label((x), (y+10), l2);
	
	
	
};
 
  function LC_CircleWithLabel(x, y, r, l1){
	
	paper.setStart();
	 paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});	
	Label(x, y, l1);
	 circle = paper.setFinish();
		return circle;
  
	
};
 
 

 function LC_CircleWithLabel1(x, y, r, l1){
	
	
	 paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});	
	Label(x, y, l1);
	
  
	
};

   
 function Height(x, y){
	 
	 
	 line1 = paper.path('M'+(x)+' '+(y)+'l 10 0');
	 line2 = paper.path('M'+(x+5)+' '+(y)+'l 0 80').attr({'stroke':'black', 'stroke-width':'2', 'arrow-start':'classic-wide-long'});
	 HT_Label = Label((x-35), (y+90), "H = ");
	 line3 = paper.path('M'+(x+5)+' '+(y + 100)+'l 0 105').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	 line4 = paper.path('M'+(x)+' '+(y+205)+'l 80 0');
	 
 };
   

 
 
 function LELT101_Connected(){
	 
	 
	 	//tank to le101
		paper.path('M'+(x+173)+' '+(y+90)+ 'l 28 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
		
		var LE101Circle = LC_CircleWithLabel1((x+225), (y+90), 22,"LE 101");	
		//le101 to lt101
		paper.path('M'+(x+250)+' '+(y+90)+ 'l 28 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
		var LT101Circle = LC_CircleWithLabel1((x+302), (y+90), 22,"LT 101");
		//lt101 to ly101 and ly201
		paper.path('M'+(x+325)+' '+(y+90)+ 'l 38 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
	 
	 
 }
 
 function LELT201_Connected(){
	 
	 paper.setStart();
	//tank to le201
		paper.path('M'+(x+173)+' '+(y+140)+ 'l 28 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
		
		var LE201Circle = LC_CircleWithLabel1((x+225), (y+140), 22,"LE 201");	
		//le201 to lt201
		paper.path('M'+(x+250)+' '+(y+140)+ 'l 28 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
		var LT201Circle = LC_CircleWithLabel1((x+302), (y+140), 22,"LT 201");
		//lt201 to ly101 and ly201
		paper.path('M'+(x+325)+' '+(y+140)+ 'l 38 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
		
		 LELT201_Conn = paper.setFinish();
		return LELT201_Conn;
	 
}
 
 function LELT301_Connected(){
	 
	 paper.setStart();
	
	//tank to le301
		paper.path('M'+(x+173)+' '+(y+190)+ 'l 28 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
		
		var LE201Circle = LC_CircleWithLabel1((x+225), (y+190), 22,"LE 301");	
		//le301 to lt301
		paper.path('M'+(x+250)+' '+(y+190)+ 'l 28 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
		var LT201Circle = LC_CircleWithLabel1((x+302), (y+190), 22,"LT 301");
		//lt301 to ly101 and ly201
		paper.path('M'+(x+325)+' '+(y+190)+ 'l 38 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
		
		 LELT301_Conn = paper.setFinish();
		return LELT301_Conn;	
		 
		 
}
 
 
 function LELT201_NotConnected(){
	 
	 paper.setStart();
		
		//tank to le201
			paper.path('M'+(x+173)+' '+(y+140)+ 'l 28 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
			
			var LE201Circle = LC_CircleWithLabel1((x+225), (y+140), 22,"LE 201");	
			//le201 to lt201
			paper.path('M'+(x+250)+' '+(y+140)+ 'l 28 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
			var LT201Circle = LC_CircleWithLabel1((x+302), (y+140), 22,"LT 201");
			//lt201 to ly101 and ly201
			paper.path('M'+(x+325)+' '+(y+140)+ 'l 20 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
			var c = paper.setFinish();
			return c;	
		 
		 
	}
	 
function LELT301_NotConnected(){
		 
		 paper.setStart();
			
		//tank to le301
			paper.path('M'+(x+173)+' '+(y+190)+ 'l 28 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
			
			var LE201Circle = LC_CircleWithLabel1((x+225), (y+190), 22,"LE 301");	
			//le301 to lt301
			paper.path('M'+(x+250)+' '+(y+190)+ 'l 28 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
			var LT201Circle = LC_CircleWithLabel1((x+302), (y+190), 22,"LT 301");
			//lt301 to ly101 and ly201
			paper.path('M'+(x+325)+' '+(y+190)+ 'l 20 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
				
			var c = paper.setFinish();
			return c; 
			 
	}
 
 
  
  