// JavaScript Documentvar paper;


function FlowControl(){	
	var w = 900;
    var h = 700;

var width = $(window).width();

  if ($(window).width() < 500) {
	    width = $(this).width();
	    paper = new Raphael(document.getElementById('canvas'), '100%', 700);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 700);
  }else
  {
      paper = new Raphael(document.getElementById('canvas'), '100%', 800);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 800);
  }
	
    //x = 310;
	//y = 160;
	
	x = 50;
	y = 260;

	
	var Ft_tank = FT_tank(x,(y-30));	
	
	var FCCircle = FC_CircleWithLine((x+325), (y-50), 25, "FIC", "100");	
	var FCCircle = FC_CircleWithLine((x+300), (y-170), 25, "FIC", "200");	
	paper.path('M'+(x+150)+' '+(y+300)+ 'l 0 -20  ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
	var FCCircle = FC_CircleWithLine((x+150), (y+330), 25, "FIC", "300");		
	 FYCircle = FC_CircleWithLabel((x+560), (y+110), 25, "FY 100");	
	FYCircle = FC_CircleWithLabel((x+205), (y-170), 25, "FY 200");	
	
    FY201Circle = FC_FTCircleWithLabel((x+325), (y+30), 25, "FY 201");	
    
    
	paper.path('M'+(x+230)+' '+(y-170)+ 'l 45 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
	
	
	
	
	// FCV 100 start
	FCV100_ControlValve((x+550), (y+243));	
	pump = pumpdesign((x+150),(y+258));
	
	//fic100toPS1comp
	fic100toPS1comp = paper.path('M'+(x+350)+' '+(y-50)+ 'l 115 0 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	PS1comptoPS3comp = paper.path('M'+(x+440)+' '+(y-50)+ 'l 120 0 l 0 70').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	paper.path('M'+(x+560)+' '+(y+18)+ 'l 0 70').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	
	
	paper.path('M'+(x+560)+' '+(y+136)+ ' l 0 98').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x+570)+' '+(y+166)+ ' l -20 20').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+570)+' '+(y+176)+ ' l -20 20').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+577)+' '+(y+257)+ 'l 50 0 0 40').attr({'stroke':'black', 'stroke-width':'2', 'arrow-end':'classic-wide-long'});

	// FCV 100 end
	
	// FCV 200 start
	FCV200_ControlValve((x+130), (y-120));	
	paper.path('M'+(x+122)+' '+(y-105)+ 'l -25 0 0 35 ').attr({'stroke':'black', 'stroke-width':'2	', 'arrow-end':'classic-wide-long'});	
	paper.path('M'+(x+180)+' '+(y-168)+ ' l -40 0 0 40 ').attr({'stroke':'black', 'stroke-width':'1'});
    paper.path('M'+(x+148)+' '+(y-158)+ ' l -15 15').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+148)+' '+(y-151)+ ' l -15 15').attr({'stroke':'black', 'stroke-width':'1'});
	Label((x+140), (y-82), "FCV 200");
	paper.path('M'+(x+158)+' '+(y-105)+ 'l 25 0  ').attr({'stroke':'black', 'stroke-width':'2	', 'arrow-start':'classic-wide-long'});
	Label((x+175), (y-135), "In");
	Label((x+175), (y-120), "Flow");
	// FCV 200 end
		
    Label((x+100), (y+75), "F 100").toFront();	
	//Label((x+95), (y-105), "Inlet");
	Label((x+600), (y+307), "User Demand");
	Label((x+560), (y+280), "FCV 100");
	
	//paper.text((x+270), (y+400), "Flow Control System").attr({
	//		stroke : 'black',
		//	'font-size' : 25,
			//"font-family": "sans-serif" 
		//});
		
		// LT 100 start
		FTCircle = FC_FTCircleWithLabel((x+210), (y+215), 21, "LT 100");	
		paper.path('M'+(x+160)+' '+(y+178)+ ' l 0 35 30 0').attr({'stroke':'black', 'stroke-width':'1'});
	    paper.path('M'+(x+210)+' '+(y+195)+ 'l 0 -330').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	    
	    lt100toPS2Comp = paper.path('M'+(x+210)+' '+(y-135)+ 'l 240 0 0 -35').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	    
	    paper.path('M'+(x+450)+' '+(y-170)+ 'l -130 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
		// LT 100 end
		
		FY1_Selecter();
		FY2_Selecter();
		
//		FY3_SELECTER();
//		FY4_SELECTER();
//		
//		FY3_SELECTERNOTCONN();
//		FY4_SelecterNotConn();
		
		
		
		
		
		paper.path('M'+(x+270)+' '+(y+90)+ 'l 180 0').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});	
		transtofy201 = paper.path('M'+(x+325)+' '+(y+90)+ 'l 0 -35').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
		paper.path('M'+(x+325)+' '+(y-25)+ 'l 0 30 ').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 // F 100 to FCV 100 join line start
	 paper.path('M'+(x+95)+' '+(y+195)+ 'l 0 65 l 35 0').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x+170)+' '+(y+257)+ 'l 90 0').attr({'stroke':'black', 'stroke-width':'1'}).toBack();	
	paper.path('M'+(x+280)+' '+(y+257)+ 'l 263 0').attr({'stroke':'black', 'stroke-width':'1'}).toBack();
	// F 100 to FCV 100 join line end
};


function FT_tank(x, y){
	
	tank = paper.path('M'+(x+25)+' '+(y-18)+'l 0 220 150 0 0 -220 -150 0').attr({
	"stroke-width" : 1,
	'stroke':'black',
	}); 
	
	
	
	upperArc = paper.path('M'+(x+25)+' '+(y-18)+ 'l 0 0 q 68 -50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});	
	
    lowerArc = paper.path('M'+(x+25)+' '+(y+200)+ 'l 0 0 q 68 50 150 0  ').attr({'stroke':'black', 'stroke-width':'1'});
	
}

function FCV100_ControlValve(x, y){
	
	
	paper.path('M'+(x)+' '+(y)+ 'l 20 0').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x)+' '+(y)+ 'l 0 0 q 10 -20 20 0  ').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x+10)+' '+(y)+ 'l 0 15').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x-8)+' '+(y+3)+ 'l 0 25 l 35 -25 l 0 25 l -35 -25').attr({'stroke':'black', 'stroke-width':'1'});
	
	
	
};
function FCV200_ControlValve(x, y){
	
	
	paper.path('M'+(x)+' '+(y)+ 'l 20 0').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x)+' '+(y)+ 'l 0 0 q 10 -20 20 0  ').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x+10)+' '+(y)+ 'l 0 15').attr({'stroke':'black', 'stroke-width':'1'});	
	paper.path('M'+(x-8)+' '+(y+3)+ 'l 0 25 l 35 -25 l 0 25 l -35 -25').attr({'stroke':'black', 'stroke-width':'1'});
	
	
	
};
function pumpdesign(x, y){
	
	paper.circle(x, y, 20).attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x-10)+' '+(y-18)+ 'l 0 35 l 30 -18 l -30 -18').attr({'stroke':'black', 'stroke-width':'1'});
	
	
	
};

function FT_CircleWithLabel(x, y, r, l1){
	
	paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+12)+' '+(y-20)+ 'l 0 -20 l 30 0 l 0 28 l -20 0').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+17)+' '+(y-23)+ 'l 5 3 l 0 -10 l 18 0').attr({'stroke':'black', 'stroke-width':'1'});
	Label(x, y, l1);
};
 
 function Label(x, y, text){
	
	var c = paper.text(x, y, text).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	 
	 return c;
	 
 };
   
 function FC_CircleWithLine(x, y, r, l1, l2){
	
	
	paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x-25)+' '+(y)+ 'l 50 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	Label((x), (y-10), l1);
	Label((x), (y+10), l2);
	
	
	
};

 function FC_CircleWithLabel(x, y, r, l1){
	
	
	 var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'});	
	Label(x, y, l1);
	  return c;
	
	
};

function FC_FTCircleWithLabel(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1'}).toFront();
	Label(x, y, l1);
    return c;
	
	
};
  
  function FY1_Selecter()
{
	FE100_CircleWithLabel ((x+270), (y+190), 21,"FE 100");
	FT100_CircleWithLabel ((x+270), (y+130), 21,"FT 100");
	
	 paper.path('M'+(x+270)+' '+(y+210)+ 'l 0 50').attr({'stroke':'black', 'stroke-width':'1'});
	 paper.path('M'+(x+260)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	 paper.path('M'+(x+280)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	
	 paper.path('M'+(x+270)+' '+(y+170)+ 'l 0 -15').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 paper.path('M'+(x+270)+' '+(y+110)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	
	}
function FY2_Selecter()
{
	 FE101_CircleWithLabel((x+330),(y+190), 21, "FE 101");
	 FT101_CircleWithLabel((x+330),(y+130), 21, "FT 101");
	 paper.path('M'+(x+330)+' '+(y+210)+ 'l 0 50').attr({'stroke':'black', 'stroke-width':'1'});
	 paper.path('M'+(x+340)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	 paper.path('M'+(x+320)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	
	 paper.path('M'+(x+330)+' '+(y+170)+ 'l 0 -15').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 paper.path('M'+(x+330)+' '+(y+110)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 paper.rect(x+322,y+250,16,10).attr({'fill':'#fff','stroke':'#fff'}).toBack();
	
	}
function FY3_Selecter()
{
	 paper.setStart();
	
	
		FE201_CircleWithLabel ((x+390), (y+190), 21,"FE 201");
		FT201_CircleWithLabel ((x+390), (y+130), 21,"FT 201");
		paper.path('M'+(x+390)+' '+(y+210)+ 'l 0 50').attr({'stroke':'black', 'stroke-width':'1'});
	 paper.path('M'+(x+400)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+380)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	 paper.path('M'+(x+390)+' '+(y+170)+ 'l 0 -15').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 paper.path('M'+(x+390)+' '+(y+110)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	           paper.rect(x+382,y+250,16,10).attr({'fill':'#fff','stroke':'#fff'}).toFront();
	           
	           FEFT201_Conn = paper.setFinish();
	       	return FEFT201_Conn;
		
	
	}
	
	function FY4_Selecter()
{
		 paper.setStart();
		 
		FE301_CircleWithLabel ((x+450), (y+190), 21,"FE 301");
		FT301_CircleWithLabel ((x+450), (y+130), 21,"FT 301");
		paper.path('M'+(x+450)+' '+(y+210)+ 'l 0 50').attr({'stroke':'black', 'stroke-width':'1'});
	 paper.path('M'+(x+440)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+460)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	 paper.path('M'+(x+450)+' '+(y+170)+ 'l 0 -15').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 paper.path('M'+(x+450)+' '+(y+110)+ 'l 0 -20').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	           paper.rect(x+442,y+250,16,10).attr({'fill':'#fff','stroke':'#fff'}).toFront();
	           
	           FEFT301_Conn = paper.setFinish();
		       	return FEFT301_Conn;
		
	
	}
	function FY3_SelecterNotConn()
{
		 paper.setStart();
		 
		FE201_CircleWithLabel ((x+390), (y+190), 21,"FE 201");
		FT201_CircleWithLabel ((x+390), (y+130), 21,"FT 201");
		paper.path('M'+(x+390)+' '+(y+210)+ 'l 0 50').attr({'stroke':'black', 'stroke-width':'1'});
	 paper.path('M'+(x+400)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+380)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	 paper.path('M'+(x+390)+' '+(y+170)+ 'l 0 -15').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 paper.path('M'+(x+390)+' '+(y+110)+ 'l 0 -10').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	           paper.rect(x+382,y+250,16,10).attr({'fill':'#fff','stroke':'#fff'}).toFront();
	           
	           var c = paper.setFinish();
		       	return c;
		
	
	}
	
	function FY4_SelecterNotConn()
{
		paper.setStart();
		
		FE301_CircleWithLabel ((x+450), (y+190), 21,"FE 301");
		FT301_CircleWithLabel ((x+450), (y+130), 21,"FT 301");
		paper.path('M'+(x+450)+' '+(y+210)+ 'l 0 50').attr({'stroke':'black', 'stroke-width':'1'});
	 paper.path('M'+(x+440)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	paper.path('M'+(x+460)+' '+(y+247)+ 'l 0 25').attr({'stroke':'black', 'stroke-width':'1'});
	 paper.path('M'+(x+450)+' '+(y+170)+ 'l 0 -15').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	 
	 paper.path('M'+(x+450)+' '+(y+110)+ 'l 0 -10').attr({'stroke':'black', 'stroke-width':'1', 'stroke-dasharray' : '--'});
	           paper.rect(x+442,y+250,16,10).attr({'fill':'#fff','stroke':'#fff'}).toFront();
	
	           
	           var c = paper.setFinish();
		       	return c;
		
	
	}
	function FT100_CircleWithLabel(x, y, r, l1){
	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();
	
    return c;
	
	
};

function FE100_CircleWithLabel(x, y, r, l1){
	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();
    return c;
	
	
};
function FT101_CircleWithLabel(x, y, r, l1){
	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();
	
    return c;
	
	
};

function FE101_CircleWithLabel(x, y, r, l1){
	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();
	
    return c;
	
	
};
function FT201_CircleWithLabel(x, y, r, l1){
	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();
	
    return c;
	
	
};

function FE201_CircleWithLabel(x, y, r, l1){
	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();
	
    return c;
	
	
};
function FT301_CircleWithLabel(x, y, r, l1){
	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();
	
    return c;
	
	
};

function FE301_CircleWithLabel(x, y, r, l1){
	
	Label(x, y, l1);
	var c = paper.circle(x, y, r).attr({'stroke':'black', 'stroke-width':'1','fill':'white'}).toBack();
	
    return c;
	
	
};






function drawFlowWaterLevel(tanklevel){
	
	var ht;
	
	if(tanklevel == 0){
		ht = 0;
	}
	if(tanklevel > 0 && tanklevel <=5){
		ht = 20;
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
		ht = 60;
	}
	if(tanklevel > 25 && tanklevel <=30){
		ht = 70;
	}
	if(tanklevel > 30 && tanklevel <=35){
		ht = 80;
	}
	if(tanklevel > 35 && tanklevel <=40){
		ht = 90;
	}
	if(tanklevel > 40 && tanklevel <=45){
		ht = 100;
	}
	if(tanklevel > 45 && tanklevel <=50){
		ht = 110;
	}
	if(tanklevel > 50 && tanklevel <=55){
		ht = 120;
	}
	if(tanklevel > 55 && tanklevel <=60){
		ht = 130;
	}
	if(tanklevel > 60 && tanklevel <=65){
		ht = 140;
	}
	if(tanklevel > 65 && tanklevel <=70){
		ht = 150;
	}
	if(tanklevel > 70 && tanklevel <=75){
		ht = 160;
	}
	if(tanklevel > 75 && tanklevel <=80){
		ht = 170;
	}
	if(tanklevel > 80 && tanklevel <=85){
		ht = 180;
	}
	if(tanklevel > 85 && tanklevel <=90){
		ht = 190;
	}
	if(tanklevel > 90 && tanklevel <=95){
		ht = 205;
	}
	if(tanklevel > 95 && tanklevel <=100){
		ht = 216;
	}
	
	 var a = paper.path('M'+(x+100)+' '+(y+170)).attr({'stroke':'#7fbfff','stroke-width': '148', opacity : 1}).toBack();
	 a.animate( {path:"M"+ (x+100) +" "+ (y+170) +" l 0" + -ht, 'stroke-width': '148', 'stroke':'#7fbfff',
			opacity : 1}, 0);
	 return a;
	
}