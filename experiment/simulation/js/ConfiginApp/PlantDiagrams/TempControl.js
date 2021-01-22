// JavaScript Documentvar paper;


function TempControl(){	
//	paper = new Raphael(document.getElementById('canvas'), '100%', 700);
	
    //x = 310;
	//y = 160;
	
	x = 190;
	y = 350;

	
	 var TL_tank = TL_Tank (x, y);
	 
//	 TCS_LblHT = TCS_Height((x+110),y, "0", "blue");
	 TCS_ht = TCS_setht(0);
	 TCS_waterlevel = TCS_drawWaterLevel(TCS_ht, "white");
	 
	 
	 //transmitter
	 lbl1 = OutputLabel((x+50), (y-75), "0", 'white');
	 lbl2 = OutputLabel((x+50), (y-125), "0", 'white');
	 lbl3 = OutputLabel((x+50), (y-175), "0", 'white');
	 lbl4 = OutputLabel((x+50), (y-225), "0", 'white');
	 //O/p of Transmitter
	 lbl5 = OutputLabel((x+60), (y-275), "0", 'white'); 
	 lbl6 = OutputLabel((x-75), (y-215), "0", 'white');	 
	
	 //PS1
	 lbl7 = OutputLabel((x+430), (y+65), "0", 'white');	 
	 lbl8 = OutputLabel((x+470), (y+5), "X = 0 %", 'white');
	 //PS2
	 lbl9 = OutputLabel((x+320), (y-215), "0", 'white');
	 lbl10 = OutputLabel((x+375), (y-270), "X = 0 %", 'white');
	
	 lbl11 = OutputLabel((x+620), (y-30), "0 %", 'white');
	 lbl12 = OutputLabel((x+630), (y+90), "0 %", 'white');
	 
	 lbl13 = OutputLabel((x+350), (y+120), "0", 'white');
	 lbl14 = OutputLabel((x+370), (y+5), "X = 0 %", 'white');
	 lbl15 = OutputLabel((x+395), (y+200), "0", 'white');
	 
	 lbl16 = OutputLabel((x+470), (y-20), "a = 0 %", 'white');
	 lbl17 = OutputLabel((x+375), (y-295), "a = 0 %", 'white');
	 lbl18 = OutputLabel((x+370), (y-20), "a = 0 %", 'white');
	 
   paper.path('M'+(x+135)+' '+(y+50)+'l -235 0 ').attr({'stroke':'black', 'stroke-width':'1'}); 

	 //paper.path('M'+(x+48)+' '+(y-225)+'l 0 40').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	// paper.path('M'+(x+48)+' '+(y-135)+'l 0 30').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 paper.path('M'+(x+185)+' '+(y-217)+'l 0 300').attr({'stroke':'black', 'stroke-width':'1'}).toFront();
	  paper.path('M'+(x+30)+' '+(y-217)+'l 0 150').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 // inner line with M and NIC 100 stsrt
	 
	  NIC100Circle = TC_CircleWithLabelNIC100((x+228), (y-205), 25, "NIC", "100");
	  
	  var M = Label((x+228), (y-145), "M");
	  
	 paper.rect((x+208), (y-165), 40, 35).attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x+228)+' '+(y-182)+'l 0 20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 paper.path('M'+(x+228)+' '+(y-130)+'l 0 290').attr({'stroke':'black', 'stroke-width':'1'}).toFront();
	 
	 paper.path('M'+(x+210)+' '+(y+152)+ 'l 0 15 l 35 -15 l 0 15 l -35 -15').attr({'stroke':'black', 'stroke-width':'1'}).toFront();
	 // inner line with M and NIC 100 end
	 

	 
	 
	 // TCV 100 & TY 100 & TY 101 start
	 

	 TY101Circle = TC_CircleWithLabelTY101((x-70), (y-140), 25, "TY 101");
	
	 TC_CircleWithLine((x-120), (y-200), 22, "TIC", "100"); 	
	 
	 paper.path('M'+(x-135)+' '+(y+50)+'l -50 0 ').attr({'stroke':'black', 'stroke-width':'2', 'arrow-start':'classic-wide-long'});	 
	 TC_ControlValve((x -127), (y+40));
	 
	 var SteamIn = Label((x-165), (y+35), "Steam In");
	 
	 var TCV100 = Label((x-120), (y+75), "TCV 100");	
	 
	TY100_CircleWithLabel((x-120), (y-105), 22, "TY 100");
	
	TY201Circle = TC_CircleWithLabelTY201((x-10), (y-260), 25, "TY 201");
	
	paper.path('M'+(x-120)+' '+(y-130)+'l 0 -70 l 50 0 0 70 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'}).toBack();	 
	  
	 paper.path('M'+(x-120)+' '+(y+30)+'l 0 -110 ').attr({'stroke':'black', 'stroke-width':'1'});
	 
	 paper.path('M'+(x-110)+' '+(y-30)+'l -20 20 ').attr({'stroke':'black', 'stroke-width':'1'});
	 
	  paper.path('M'+(x-110)+' '+(y-40)+'l -20 20 ').attr({'stroke':'black', 'stroke-width':'1'});

       // TY 101 line connected
	 paper.path('M'+(x-45)+' '+(y-140)+'l 40 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 
	 transtoPS4Comp = paper.path('M'+(x-10)+' '+(y-140)+'l 40 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	  
//	   // TY 101 line not connected
//	  paper.path('M'+(x-50)+' '+(y-140)+'l 60 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	  
	   // TY 201 line
	   paper.path('M'+(x-10)+' '+(y-140)+'l  0 -120  240 0 0 30 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'}).toBack();
	  
	 // TCV 100 & TY 100 & TY 101 end
	 
	 
	 
	// Condensate Outlet start
	 var CondensateOutlet = Label((x+315), (y+300), "Condensate Outlet");
	paper.path('M'+(x+315)+' '+(y+180)+ ' l 20 0 0 110 ').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});
	//Condensate Outlet end
	
	paper.text((x+50), (y+300), "Temperature  Control System").attr({
			stroke : 'black',
			'font-size' : 20,
			"font-family": "sans-serif" 
		});
	
	 
//	 M170,90C170,70,210,110,210,90C210,70,170,110,170,90Z
// TCV200 and User Demand control vale and line start

Label((x+365), (y+275), "TCV 200");	
 paper.path('M'+(x+255)+' '+(y+235)+ 'l 0 15 l 300 0').attr({'stroke':'black', 'stroke-width':'2'});
TCV200_ControlValve((x+359), (y+240));
paper.path('M'+(x+555)+' '+(y+242)+ 'l 0 15 ').attr({'stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+567)+' '+(y+242)+ 'l 0 15 ').attr({'stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+567)+' '+(y+250)+ 'l 25 0').attr({'stroke':'black', 'stroke-width':'2'});

paper.path('M'+(x+370)+' '+(y+230)+ 'l 0 -50').attr({'stroke':'black', 'stroke-width':'1'});
paper.path('M'+(x+362)+' '+(y+220)+ 'l 15 -15').attr({'stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+362)+' '+(y+210)+ 'l 15 -15').attr({'stroke':'black', 'stroke-width':'2'});

TY100_CircleWithLabel((x+370 ), (y+158), 22, "FY 203");

FY203toPS1Comp = paper.path('M'+(x+370)+' '+(y+136)+ 'l 0 -60').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
PS1ComptoPS3Comp = paper.path('M'+(x+370)+' '+(y+76)+ 'l 75 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
PS1Comptofic201 = paper.path('M'+(x+450)+' '+(y+76)+ 'l 90 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});

TC_CircleWithLine((x+562), (y+76), 22, "FIC", "201");

paper.path('M'+(x+585)+' '+(y+76)+ 'l 30 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-start':'classic-wide-long'});

Label((x+630), (y+46), "User ");
Label((x+630), (y+66), "Demand");

paper.path('M'+(x+562)+' '+(y+98)+ 'l 0 50').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});

TY100_CircleWithLabel((x+562), (y+170), 22, "FT 201");

paper.path('M'+(x+562)+' '+(y+192)+ 'l 0 50').attr({'stroke':'black', 'stroke-width':'1'});

// TCV200 and User Demand control vale and line end

// TCV300 arrow line controlvalve start

var TCV300 = Label((x+330), (y-30), "TCV 300");	

 Label((x+550), (y-30), "Cold Water Flow");	
 

 
paper.path('M'+(x+255)+' '+(y-35)+ 'l 0 -15 l 215 0').attr({'stroke':'black', 'stroke-width':'2', 'arrow-start':'classic-wide-long'});
TCV300_ControlValve((x+315), (y-60));
paper.path('M'+(x+470)+' '+(y-58)+ 'l 0 15 ').attr({'stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+480)+' '+(y-58)+ 'l 0 15 ').attr({'stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+480)+' '+(y-50)+ 'l 50 0 ').attr({'stroke':'black', 'stroke-width':'2'});

paper.path('M'+(x+535)+' '+(y-50)+ 'l 50 0 ').attr({'stroke':'black', 'stroke-width':'2', 'arrow-start':'classic-wide-long'});

paper.path('M'+(x+325)+' '+(y-70)+ 'l 0 -50 ').attr({'stroke':'black', 'stroke-width':'1'});
paper.path('M'+(x+318)+' '+(y-90)+ 'l 15 -15 ').attr({'stroke':'black', 'stroke-width':'2'});
paper.path('M'+(x+318)+' '+(y-80)+ 'l 15 -15 ').attr({'stroke':'black', 'stroke-width':'2'});

TY100_CircleWithLabel((x+325), (y-142), 22, "FY 302");

FY302toPS2Comp = paper.path('M'+(x+325)+' '+(y-164)+ 'l 0 -40 l 40 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
PS2ComptoFIC301 = paper.path('M'+(x+365)+' '+(y-204)+ 'l 80 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});

TC_CircleWithLine((x+475), (y-204), 22, "FIC", "301");
paper.path('M'+(x+475)+' '+(y-182)+ 'l 0 40').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
TY100_CircleWithLabel((x+475), (y-120), 22, "FT 301");
paper.path('M'+(x+475)+' '+(y-98)+ 'l 0 40').attr({'stroke':'black', 'stroke-width':'1'});
 // TCV300  line controlvalve end
 
TY100_TE100_TO_TY101();
TY101_TE101_TO_TY101();

/*TY201_TE201_TO_TY101();
TY301_TE301_TO_TY101();*/

//NotConTY201_TE201_TO_TY101();
//NotConTY301_TE301_TO_TY101();

};	


	function TL_Tank (x, y){
		
		tank = paper.path('M'+(x+150)+' '+(y-18)+'l 0 220 150 0 0 -220 -150 0').attr({
	"stroke-width" : 1,
	'stroke':'black',
	}); 
	
	
	outertankCover1 = paper.path('M'+(x+150)+' '+(y+20)+'l -15 0 0 195').attr({'stroke':'black', 'stroke-width':'1'});
	
	outertankCover1 = paper.path('M'+(x+300)+' '+(y+20)+'l 15 0 0 198').attr({'stroke':'black', 'stroke-width':'1'});
	
	upperArc = paper.path('M'+(x+150)+' '+(y-18)+ 'l 0 0 q 68 -50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});	
	
    lowerArc = paper.path('M'+(x+150)+' '+(y+200)+ 'l 0 0 q 68 50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});
	
	outertankCoverArc  = paper.path('M'+(x+135)+' '+(y+215)+ 'l 0 0 q 68 50 180 3  ').attr({'stroke':'black', 'stroke-width':'1'});

	
	};


	function TC_ControlValve(x, y){
	
	// TVC 100
	loweroutlet = paper.path('M'+(x)+' '+(y)+ 'l 20 0').attr({'stroke':'black', 'stroke-width':'1'});
	
	Arc = paper.path('M'+(x)+' '+(y)+ 'l 0 0 q 10 -20 20 0  ').attr({'stroke':'black', 'stroke-width':'1'});
	
	joiningline = paper.path('M'+(x+10)+' '+(y)+ 'l 0 10').attr({'stroke':'black', 'stroke-width':'1'});
	
	valve = paper.path('M'+(x-8)+' '+(y+3)+ 'l 0 15 l 35 -15 l 0 15 l -35 -15').attr({'stroke':'black', 'stroke-width':'1'});
	
	
	
};
 
 function Label(x, y, text){
	
	paper.text(x, y, text).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		}).toBack();
	 
	 
	 
 };
 
 
  function TC_CircleWithLine(x, y, r, l1, l2){
	
	Label((x), (y-10), l1);
	Label((x), (y+10), l2);
	paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();
	paper.path('M'+(x-25)+' '+(y)+ 'l 50 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	
	
	
	
};

 function TC_CircleWithLabel(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();	
	Label(x, y, l1);
	 return c;
	
	
};
function TY100_CircleWithLabel(x, y, r, l1){
	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();	
	
	 return c;
	
	
};
   

function TC_TTCircleWithLabel(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'}).toFront();	
	Label(x, y, l1);
    return c;
	
	
};
 

function TCV200_ControlValve(x, y){
	
	
	TCV200outlet = paper.path('M'+(x)+' '+(y)+ 'l 20 0 M'+(x)+' '+(y)+ 'l 0 0 q 10 -20 20 0  M'+(x+10)+' '+(y)+ 'l 0 10 M'+(x-8)+' '+(y+3)+ 'l 0 15 l 35 -15 l 0 15 l -35 -15').attr({'stroke':'black', 'stroke-width':'2', 'fill':'white'});

};
  
  function TCV300_ControlValve(x, y){
	
	
	TCV300outlet = paper.path('M'+(x)+' '+(y)+ 'l 20 0 M'+(x)+' '+(y)+ 'l 0 0 q 10 -20 20 0  M'+(x+10)+' '+(y)+ 'l 0 10 M'+(x-8)+' '+(y+3)+ 'l 0 15 l 35 -15 l 0 15 l -35 -15').attr({'stroke':'black', 'stroke-width':'2', 'fill':'white'});

};
 function TC_CircleWithLabelTY201(x, y, r, l1, l2){
	
	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();	
	
	 return c;
	
};
  
    function TC_CircleWithLabelNIC100(x, y, r, l1, l2){
	
	
	paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x-25)+' '+(y)+ 'l 50 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	Label((x), (y-10), l1);
	Label((x), (y+10), l2);
	
	
	
};
  function TC_CircleWithLabelTY101(x, y, r, l1, l2){
	
		
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();	
	
	 return c;
	
	
	
	
};
function TY100_TE100_TO_TY101()
{ 
TT101_CircleWithLabel((x+90), (y-65), 22, "TT 100");
TE101_CircleWithLabel((x+150), (y-65), 22, "TE 100");
//paper.path('M'+(x-10)+' '+(y-145)+'l 40  0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
// paper.path('M'+(x+110)+' '+(y-145)+'l 25 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
paper.path('M'+(x+30)+' '+(y-65)+'l 110 0').attr({'stroke':'black', 'stroke-width':'1','stroke-dasharray' : '--'}).toBack();
paper.path('M'+(x+170)+' '+(y-65)+'l 15 0').attr({'stroke':'black', 'stroke-width':'1'});
}
function TY101_TE101_TO_TY101()
{ 
TT101_CircleWithLabel((x+90), (y-115), 22, "TT 101");
TE101_CircleWithLabel((x+150), (y-115), 22, "TE 101");
//paper.path('M'+(x-10)+' '+(y-145)+'l 40  0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
// paper.path('M'+(x+110)+' '+(y-145)+'l 25 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
paper.path('M'+(x+170)+' '+(y-115)+'l 15 0').attr({'stroke':'black', 'stroke-width':'1'});
paper.path('M'+(x+30)+' '+(y-115)+'l 110 0').attr({'stroke':'black', 'stroke-width':'1','stroke-dasharray' : '--'}).toBack();
}

function TY201_TE201_TO_TY101()
{ 
		 paper.setStart();
		
	TT201_CircleWithLabel((x+90), (y-165), 22,"TT 201");
	TE201_CircleWithLabel((x+150), (y-165), 22,"TE 201");
	//paper.path('M'+(x-133)+' '+(y+150)+'l 35 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	// paper.path('M'+(x-60)+' '+(y+150)+'l 10 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	paper.path('M'+(x+30)+' '+(y-165)+'l 100 0').attr({'stroke':'black', 'stroke-width':'1','stroke-dasharray' : '--'}).toBack();
	paper.path('M'+(x+170)+' '+(y-165)+'l 15 0').attr({'stroke':'black', 'stroke-width':'1'});
	
	 TETT201_Conn = paper.setFinish();
	 return TETT201_Conn;

}


function TY301_TE301_TO_TY101()
{ 
	
			 paper.setStart();
		TT201_CircleWithLabel((x+90), (y-215), 22,"TT 301");
		TE201_CircleWithLabel((x+150), (y-215), 22,"TE 301");
		//paper.path('M'+(x-133)+' '+(y+150)+'l 35 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
		// paper.path('M'+(x-60)+' '+(y+150)+'l 10 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
		paper.path('M'+(x+30)+' '+(y-215)+'l 110 0').attr({'stroke':'black', 'stroke-width':'1','stroke-dasharray' : '--'}).toBack();
		paper.path('M'+(x+170)+' '+(y-215)+'l 15 0').attr({'stroke':'black', 'stroke-width':'1'});
		
		TETT301_Conn = paper.setFinish();
		return TETT301_Conn;
}


function NotConTY201_TE201_TO_TY101()
{ 
	
			 paper.setStart();
		TT201_CircleWithLabel((x+90), (y-165), 22,"TT 201");
		TE201_CircleWithLabel((x+150), (y-165), 22,"TE 201");
		//paper.path('M'+(x-133)+' '+(y+150)+'l 35 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
		// paper.path('M'+(x-60)+' '+(y+150)+'l 10 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
		paper.path('M'+(x+50)+' '+(y-165)+'l 80 0').attr({'stroke':'black', 'stroke-width':'1','stroke-dasharray' : '--'}).toBack();
		paper.path('M'+(x+170)+' '+(y-165)+'l 15 0').attr({'stroke':'black', 'stroke-width':'1'});
		var c = paper.setFinish();
		return c;

}


function NotConTY301_TE301_TO_TY101()
{ 
			paper.setStart();
		TT201_CircleWithLabel((x+90), (y-215), 22,"TT 301");
		TE201_CircleWithLabel((x+150), (y-215), 22,"TE 301");
		//paper.path('M'+(x-133)+' '+(y+150)+'l 35 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
		// paper.path('M'+(x-60)+' '+(y+150)+'l 10 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
		paper.path('M'+(x+50)+' '+(y-215)+'l 80 0').attr({'stroke':'black', 'stroke-width':'1','stroke-dasharray' : '--'}).toBack();
		paper.path('M'+(x+170)+' '+(y-215)+'l 15 0').attr({'stroke':'black', 'stroke-width':'1'});
		var c = paper.setFinish();
		return c;
}


function TT101_CircleWithLabel(x, y, r, l1){
 	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();	
	
	 return c;
	
	
	
}
function TE101_CircleWithLabel(x, y, r, l1){
	
   	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();	
	
	 return c;
	
	
	
}
function TT201_CircleWithLabel(x, y, r, l1){
	
		
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();	
	
	 return c;
  
	
}
function TE201_CircleWithLabel(x, y, r, l1){
	
	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();	
	
	 return c;
	
}
function TT301_CircleWithLabel(x, y, r, l1){
	
		
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();	
	
	 return c;
	
  
	
}
function TE301_CircleWithLabel(x, y, r, l1){
	
		
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();	
	
	 return c;
	
}



