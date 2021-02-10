
 // Low selector with 2 inputs


function LowSelector_2_Input(canvas,x1,y1){
		
	var lowselector_2input = new LabeldLowSelectorFigure_2Input({width:130,height:130});
	lowselector_2input.setId("lowselector_2input");
	lowselector_2input.setResizeable(false);

//		var FTPort_hartTransPlus = hartTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(5,60));
//		FTPort_hartTransPlus.setName("FTPort_hartTransplus");
//		FTPort_hartTransPlus.setId("FTPort_hartTransplusId");
//		
//		
//		var FTPort_hartTransMinu = hartTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(95,60));
//		FTPort_hartTransMinu.setName("FTPort_hartTransminus");
//		FTPort_hartTransMinu.setId("FTPort_hartTransminusId");
		
    
		
		
		canvas.add( lowselector_2input, x1,y1); 
		return lowselector_2input;
		
	}
	
	
	var LabeldLowSelectorFigure_2Input = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

  createSet : function()
    {
        this.canvas.paper.setStart();
    
      
     /*  this.canvas.paper.text(0, 6, 'header').attr({"text-anchor":"start"}); */
      /* this.canvas.paper.image('https://png.icons8.com/metro/1600/online.png',x,16,40, 40); */
      
      
     // var x =  ((this.width-20)/2);
      
      /* this.canvas.paper.path("M 15 0 l -15 30 l 30 0 l -15 -30").
       attr({"stroke-width" : 1
        }); */
		
	        this.canvas.paper.rect(0, 0, 130, 130).attr({
	        	"stroke-width" : 0
	        }); 
			this.canvas.paper.text( 60, 7, "Low Selector").attr({
				'stroke' : 'black',
				'font-size' : 15,
				"font-family": "sans-serif" 
			});
		
			this.canvas.paper.circle(60, 65, 30).
	       attr({"stroke-width" : 1
	        }); 
		
		// low symbol in rect
		  this.canvas.paper.rect(82, 18, 25, 25).
	       attr({"stroke-width" : 1
	        }); 
		
		
		  this.canvas.paper.path("M 100 23 l -12 8 l 12 8").
	       attr({"stroke-width" : 2
	        });
		  
		  
		  // out
		  this.canvas.paper.path("M 90 65 l 40 0").
	       attr({"stroke-width" : 2,
	    	   	 "stroke-dasharray" : "-",
	    	   	 "arrow-end": "open-narrow-short"
	        });
		  this.canvas.paper.text( 105, 80, "Out").attr({
			  'stroke' : 'black',
				'font-size' : 15,
				"font-family": "sans-serif" 
			});

		
		  // a input
		  this.canvas.paper.path("M 0 65 l 30 0").attr({ 
			      "stroke-width" : 2,
	    	   	 "stroke-dasharray" : "-",
	    	   	 "arrow-end": "open-narrow-short"
	        });
		  this.canvas.paper.text( 10, 75, "a").attr({
			  'stroke' : 'black',
				'font-size' : 20,
				"font-family": "sans-serif" 
			});
		
		  
		  // b input
		  this.canvas.paper.path("M 60 130 l 0 -38").
	       attr({"stroke-width" : 2,
	    	   	 "stroke-dasharray" : "-",
	    	   	 "arrow-end": "open-narrow-short"
	        });
		  this.canvas.paper.text( 70, 120, "b").attr({
			     'stroke' : 'black',
				'font-size' : 20,
				"font-family": "sans-serif" 
			});

	 
      return this.canvas.paper.setFinish();
    },


});	
	
	
	
	
	

	 // Low selector with 3 inputs


	function LowSelector_3_Input(canvas,x1,y1){
			
		var lowselector_3input = new LabeldLowSelectorFigure_3Input({width:130,height:130});
		lowselector_3input.setId("lowselector_3input");
		lowselector_3input.setResizeable(false);

			
			
			canvas.add( lowselector_3input, x1,y1); 
			return lowselector_3input;
			
		}
		
		
		var LabeldLowSelectorFigure_3Input = draw2d.SetFigure.extend({

		init : function(attr)
	    {
	        this._super(attr);
	        
	        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
	        this.setKeepAspectRatio(false);
			//this.installEditPolicy(new SelectionMenuPolicy());
	    },

	  createSet : function()
	    {
	        this.canvas.paper.setStart();
	    
	      
	     /*  this.canvas.paper.text(0, 6, 'header').attr({"text-anchor":"start"}); */
	      /* this.canvas.paper.image('https://png.icons8.com/metro/1600/online.png',x,16,40, 40); */
	      
	      
	     // var x =  ((this.width-20)/2);
	      
	      /* this.canvas.paper.path("M 15 0 l -15 30 l 30 0 l -15 -30").
	       attr({"stroke-width" : 1
	        }); */
			
		        this.canvas.paper.rect(0, 0, 130, 130).attr({
		        	"stroke-width" : 0
		        }); 
				this.canvas.paper.text( 60, -10, "Low Selector").attr({
					'stroke' : 'black',
					'font-size' : 15,
					"font-family": "sans-serif" 
				});
			
				this.canvas.paper.circle(60, 65, 30).
		       attr({"stroke-width" : 1
		        }); 
			
			// low symbol in rect
			  this.canvas.paper.rect(82, 18, 25, 25).
		       attr({"stroke-width" : 1
		        }); 
			
			
			  this.canvas.paper.path("M 100 23 l -12 8 l 12 8").
		       attr({"stroke-width" : 2
		        });
			  
			  // out
			  this.canvas.paper.path("M 90 65 l 40 0").
		       attr({"stroke-width" : 2,
		    	   	 "stroke-dasharray" : "-",
		    	   	 "arrow-end": "open-narrow-short"
		        });
			  this.canvas.paper.text( 105, 80, "Out").attr({
				  'stroke' : 'black',
					'font-size' : 15,
					"font-family": "sans-serif" 
				});

			
			  // a input
			  this.canvas.paper.path("M 0 65 l 30 0").attr({ 
				      "stroke-width" : 2,
		    	   	 "stroke-dasharray" : "-",
		    	   	 "arrow-end": "open-narrow-short"
		        });
			  this.canvas.paper.text( 10, 75, "a").attr({
				  'stroke' : 'black',
					'font-size' : 20,
					"font-family": "sans-serif" 
				});
			
			  
			  // b input
			  this.canvas.paper.path("M 60 130 l 0 -38").
		       attr({"stroke-width" : 2,
		    	   	 "stroke-dasharray" : "-",
		    	   	 "arrow-end": "open-narrow-short"
		        });
			  this.canvas.paper.text( 70, 120, "b").attr({
				     'stroke' : 'black',
					'font-size' : 20,
					"font-family": "sans-serif" 
				});

			  
			  // c input
			  this.canvas.paper.path("M 60 0 l 0 38").
		       attr({"stroke-width" : 2,
		    	   	 "stroke-dasharray" : "-",
		    	   	 "arrow-end": "open-narrow-short"
		        });
			  this.canvas.paper.text( 50, 10, "c").attr({
				     'stroke' : 'black',
					'font-size' : 20,
					"font-family": "sans-serif" 
				});
			  
		 
	      return this.canvas.paper.setFinish();
	    },


	});	
	
	
		
		

		 // Low selector with 4 inputs


		function LowSelector_4_Input(canvas,x1,y1){
				
			var lowselector_4input = new LabeldLowSelectorFigure_4Input({width:130,height:130});
			lowselector_4input.setId("lowselector_4input");
			lowselector_4input.setResizeable(false);

				
				
				canvas.add( lowselector_4input, x1,y1); 
				return lowselector_4input;
				
			}
			
			
			var LabeldLowSelectorFigure_4Input = draw2d.SetFigure.extend({

			init : function(attr)
		    {
		        this._super(attr);
		        
		        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
		        this.setKeepAspectRatio(false);
				//this.installEditPolicy(new SelectionMenuPolicy());
		    },

		  createSet : function()
		    {
		        this.canvas.paper.setStart();
		    
		      
		     /*  this.canvas.paper.text(0, 6, 'header').attr({"text-anchor":"start"}); */
		      /* this.canvas.paper.image('https://png.icons8.com/metro/1600/online.png',x,16,40, 40); */
		      
		      
		     // var x =  ((this.width-20)/2);
		      
		      /* this.canvas.paper.path("M 15 0 l -15 30 l 30 0 l -15 -30").
		       attr({"stroke-width" : 1
		        }); */
				
			        this.canvas.paper.rect(0, 0, 130, 130).attr({
			        	"stroke-width" : 0
			        }); 
					this.canvas.paper.text( 60, -10, "Low Selector").attr({
						'stroke' : 'black',
						'font-size' : 15,
						"font-family": "sans-serif" 
					});
				
					this.canvas.paper.circle(60, 65, 30).
			       attr({"stroke-width" : 1
			        }); 
				
				// low symbol in rect
				  this.canvas.paper.rect(82, 18, 25, 25).
			       attr({"stroke-width" : 1
			        }); 
				
				
				  this.canvas.paper.path("M 100 23 l -12 8 l 12 8").
			       attr({"stroke-width" : 2
			        });
				  
				  
				  // out
				  this.canvas.paper.path("M 90 65 l 40 0").
			       attr({"stroke-width" : 2,
			    	   	 "stroke-dasharray" : "-",
			    	   	 "arrow-end": "open-narrow-short"
			        });
				  this.canvas.paper.text( 105, 80, "Out").attr({
					  'stroke' : 'black',
						'font-size' : 15,
						"font-family": "sans-serif" 
					});

				
				  // a input
				  this.canvas.paper.path("M 0 35 l 33 18").attr({ 
					      "stroke-width" : 2,
			    	   	 "stroke-dasharray" : "-",
			    	   	 "arrow-end": "open-narrow-short"
			        });
				  this.canvas.paper.text( 10, 53, "a").attr({
					  'stroke' : 'black',
						'font-size' : 20,
						"font-family": "sans-serif" 
					});
				  
				  
				  
				  // d input
				  this.canvas.paper.path("M 0 110 l 38 -28").attr({ 
					      "stroke-width" : 2,
			    	   	 "stroke-dasharray" : "-",
			    	   	 "arrow-end": "open-narrow-short"
			        });
				  this.canvas.paper.text( 18, 110, "d").attr({
					  'stroke' : 'black',
						'font-size' : 20,
						"font-family": "sans-serif" 
					});
				  
				  
				
				  
				  // b input
				  this.canvas.paper.path("M 60 130 l 0 -38").
			       attr({"stroke-width" : 2,
			    	   	 "stroke-dasharray" : "-",
			    	   	 "arrow-end": "open-narrow-short"
			        });
				  this.canvas.paper.text( 70, 120, "b").attr({
					     'stroke' : 'black',
						'font-size' : 20,
						"font-family": "sans-serif" 
					});

				  
				  // c input
				  this.canvas.paper.path("M 60 0 l 0 38").
			       attr({"stroke-width" : 2,
			    	   	 "stroke-dasharray" : "-",
			    	   	 "arrow-end": "open-narrow-short"
			        });
				  this.canvas.paper.text( 50, 10, "c").attr({
					     'stroke' : 'black',
						'font-size' : 20,
						"font-family": "sans-serif" 
					});
				  
			 
		      return this.canvas.paper.setFinish();
		    },


		});	
		
		
		
		
	
	
	