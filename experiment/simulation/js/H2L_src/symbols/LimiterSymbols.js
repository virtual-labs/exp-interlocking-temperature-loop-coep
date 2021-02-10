
 //Rate Limiter


function Rate_Limiter(canvas,x1,y1){
		
	var selector_ratelimiter = new LabeldSelectorFigure_Ratelimiter({width:130,height:130});
	selector_ratelimiter.setId("selector_ratelimiter");
	selector_ratelimiter.setResizeable(false);

//		var FTPort_hartTransPlus = hartTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(5,60));
//		FTPort_hartTransPlus.setName("FTPort_hartTransplus");
//		FTPort_hartTransPlus.setId("FTPort_hartTransplusId");
//		
//		
//		var FTPort_hartTransMinu = hartTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(95,60));
//		FTPort_hartTransMinu.setName("FTPort_hartTransminus");
//		FTPort_hartTransMinu.setId("FTPort_hartTransminusId");
		
    
		
		
		canvas.add( selector_ratelimiter, x1,y1); 
		return selector_ratelimiter;
		
	}
	
	
	var LabeldSelectorFigure_Ratelimiter = draw2d.SetFigure.extend({

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
			this.canvas.paper.text( 60, 7, "Rate Limiter").attr({
				'stroke' : 'black',
				'font-size' : 15,
				"font-family": "sans-serif" 
			});
		
			this.canvas.paper.circle(60, 65, 30).
	       attr({"stroke-width" : 1
	        }); 
		
		// high symbol in rect
		  this.canvas.paper.rect(82, 18, 25, 25).
	       attr({"stroke-width" : 1
	        }); 
		
		
		  this.canvas.paper.path("M 87 25 l 8 12 l 8 -12").
	       attr({"stroke-width" : 2
	        });
		  
		  this.canvas.paper.path("M 86 30 l 18 0 ").
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
		
		  this.canvas.paper.text( 60, 102, "x").attr({
			  'stroke' : 'black',
				'font-size' : 20,
				"font-family": "sans-serif" 
			});
		  

	 
      return this.canvas.paper.setFinish();
    },


});	
	

	 //High Limiter


	function High_Limit(canvas,x1,y1){
			
		var selector_highlimit = new LabeldSelectorFigure_Highlimit({width:130,height:130});
		selector_highlimit.setId("selector_highlimit");
		selector_highlimit.setResizeable(false);

//			var FTPort_hartTransPlus = hartTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(5,60));
//			FTPort_hartTransPlus.setName("FTPort_hartTransplus");
//			FTPort_hartTransPlus.setId("FTPort_hartTransplusId");
//			
//			
//			var FTPort_hartTransMinu = hartTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(95,60));
//			FTPort_hartTransMinu.setName("FTPort_hartTransminus");
//			FTPort_hartTransMinu.setId("FTPort_hartTransminusId");
			
	    
			
			
			canvas.add( selector_highlimit, x1,y1); 
			return selector_highlimit;
			
		}
		
		
		var LabeldSelectorFigure_Highlimit = draw2d.SetFigure.extend({

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
				this.canvas.paper.text( 60, 7, "High Limit").attr({
					'stroke' : 'black',
					'font-size' : 15,
					"font-family": "sans-serif" 
				});
			
				this.canvas.paper.circle(60, 65, 30).
		       attr({"stroke-width" : 1
		        }); 
			
			// high symbol in rect
			  this.canvas.paper.rect(82, 18, 25, 25).
		       attr({"stroke-width" : 1
		        }); 
			
			
			  this.canvas.paper.path("M 88 23 l 12 8 l -12 8").
		       attr({"stroke-width" : 2
		        });
			  
			  this.canvas.paper.path("M 95 23 l 0 16 ").
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
			
			  this.canvas.paper.text( 60, 102, "x").attr({
				  'stroke' : 'black',
					'font-size' : 20,
					"font-family": "sans-serif" 
				});
			  

		 
	      return this.canvas.paper.setFinish();
	    },


	});	
		
	
	
		 //Low Limiter


		function Low_Limit(canvas,x1,y1){
				
			var selector_lowlimit = new LabeldSelectorFigure_Lowlimit({width:130,height:130});
			selector_lowlimit.setId("selector_lowlimit");
			selector_lowlimit.setResizeable(false);

//				var FTPort_hartTransPlus = hartTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(5,60));
//				FTPort_hartTransPlus.setName("FTPort_hartTransplus");
//				FTPort_hartTransPlus.setId("FTPort_hartTransplusId");
//				
//				
//				var FTPort_hartTransMinu = hartTrans_FT.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(95,60));
//				FTPort_hartTransMinu.setName("FTPort_hartTransminus");
//				FTPort_hartTransMinu.setId("FTPort_hartTransminusId");
				
		    
				
				
				canvas.add( selector_lowlimit, x1,y1); 
				return selector_lowlimit;
				
			}
			
			
			var LabeldSelectorFigure_Lowlimit = draw2d.SetFigure.extend({

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
					this.canvas.paper.text( 60, 7, "Low Limit").attr({
						'stroke' : 'black',
						'font-size' : 15,
						"font-family": "sans-serif" 
					});
				
					this.canvas.paper.circle(60, 65, 30).
			       attr({"stroke-width" : 1
			        }); 
				
				// high symbol in rect
				  this.canvas.paper.rect(82, 18, 25, 25).
			       attr({"stroke-width" : 1
			        }); 
				
				
				  this.canvas.paper.path("M 100 23 l -12 8 l 12 8").
			       attr({"stroke-width" : 2
			        });
				  
				  this.canvas.paper.path("M 92 23 l 0 16 ").
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
				
				  this.canvas.paper.text( 60, 102, "x").attr({
					  'stroke' : 'black',
						'font-size' : 20,
						"font-family": "sans-serif" 
					});
				  

			 
		      return this.canvas.paper.setFinish();
		    },


		});	
			
		
		
		