

example.View = draw2d.Canvas.extend({
	
	init:function(id){
		this._super(id);
		
		this.setScrollArea($("#draw2Did"));
		
		this.currentDropConnection = null;
		
		
	},

    /**
     * @method
     * Called if the DragDrop object is moving around.<br>
     * <br>
     * Graphiti use the jQuery draggable/droppable lib. Please inspect
     * http://jqueryui.com/demos/droppable/ for further information.
     * 
     * @param {HTMLElement} droppedDomNode The dragged DOM element.
     * @param {Number} x the x coordinate of the drag
     * @param {Number} y the y coordinate of the drag
     * 
     * @template
     **/
    onDrag:function(droppedDomNode, x, y )
    {
    },
    
    /**
     * @method
     * Called if the user drop the droppedDomNode onto the canvas.<br>
     * <br>
     * Draw2D use the jQuery draggable/droppable lib. Please inspect
     * http://jqueryui.com/demos/droppable/ for further information.
     * 
     * @param {HTMLElement} droppedDomNode The dropped DOM element.
     * @param {Number} x the x coordinate of the drop
     * @param {Number} y the y coordinate of the drop
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     * @private
     **/
    onDrop : function(droppedDomNode, x, y)
    {   
	    var figure;
        var type = $(droppedDomNode).data("shape");
		
        //Comman Symbols
		if(type == "pwrSply"){
			
			powersupply = powerSupply(this,x,y);
			figure = powersupply;
	//		$("#pwrSply").draggable({ disabled: true });
		}
		
		if(type == "signal"){
			
			signl = signal(this,x,y);
			figure = signl;
		}
       
	   if(type == "configurator"){
			
			configurator = Configurator(this,x,y);
			figure = configurator;
		}
	    if(type == "fftCard"){
			
			fft_Card = fftCard(this,x,y);
			figure = fft_Card;
		}
	    
	    if(type == "analogOut"){
			
		analogOut = AnalogOut(this,x,y);
			figure = analogOut;
	
		}
	   
	   
	   // LT TRANSMITTER TYPES
	   if(type == "LT_twoWireTrsmtr"){
			
			twoWireTransmitter_lt = TwoWireTransmitter_LT(this,x,y);
			figure = twoWireTransmitter_lt;
		}
	   
	    if(type == "LT_threeWireTrsmtr"){
			
			threeWireTransmitter_lt = ThreeWireTransmitter_LT(this,x,y);
			figure = threeWireTransmitter_lt;
		}
		if(type == "LT_fourWireTrsmtr"){
			
			fourWireTransmitter_lt = FourWireTransmitter_LT(this,x,y);
			figure = fourWireTransmitter_lt;
		}		
		if(type == "LT_hartTrsmtr"){
			
			hartTransmitter_lt = HartTransmitter_LT(this,x,y);
			figure = hartTransmitter_lt;
		}
		if(type == "LT_FFTrsmtr"){
			
			fft_Transmitter_lt = FFT_Transmitter_LT(this,x,y);
			figure = fft_Transmitter_lt;
		}
		
		
	   // TT TRANSMITTER TYPES
	   if(type == "TT_twoWireTrsmtr"){
			
			twoWireTransmitter_tt = TwoWireTransmitter_TT(this,x,y);
			figure = twoWireTransmitter_tt;
		}
	   
	    if(type == "TT_threeWireTrsmtr"){
			
			threeWireTransmitter_tt = ThreeWireTransmitter_TT(this,x,y);
			figure = threeWireTransmitter_tt;
		}
		if(type == "TT_fourWireTrsmtr"){
			
			fourWireTransmitter_tt = FourWireTransmitter_TT(this,x,y);
			figure = fourWireTransmitter_tt;
		}
	    if(type == "TT_hartTrsmtr"){
			
			hartTransmitter_tt = HartTransmitter_TT(this,x,y);
			figure = hartTransmitter_tt;
		}
	   if(type == "TT_FFTrsmtr"){
			
			fft_Transmitter_tt = FFT_Transmitter_TT(this,x,y);
			figure = fft_Transmitter_tt;
		}
	   
	   
	   // PT TRANSMITTER TYPES
	   if(type == "PT_twoWireTrsmtr"){
			
			twoWireTransmitter_pt = TwoWireTransmitter_PT(this,x,y);
			figure = twoWireTransmitter_pt;
		}
	   
	    if(type == "PT_threeWireTrsmtr"){
			
			threeWireTransmitter_pt = ThreeWireTransmitter_PT(this,x,y);
			figure = threeWireTransmitter_pt;
		}
		if(type == "PT_fourWireTrsmtr"){
			
			fourWireTransmitter_pt = FourWireTransmitter_PT(this,x,y);
			figure = fourWireTransmitter_pt;
		}
	   if(type == "PT_hartTrsmtr"){
			
			hartTransmitter_pt = HartTransmitter_PT(this,x,y);
			figure = hartTransmitter_pt;
		}
	    if(type == "PT_FFTrsmtr"){
			
			fft_Transmitter_pt = FFT_Transmitter_PT(this,x,y);
			figure = fft_Transmitter_pt;
		}
	   
	    // FT TRANSMITTER TYPES
	   if(type == "FT_twoWireTrsmtr"){
			
			twoWireTransmitter_ft = TwoWireTransmitter_FT(this,x,y);
			figure = twoWireTransmitter_ft;
		}
	   
	    if(type == "FT_threeWireTrsmtr"){
			
			threeWireTransmitter_ft = ThreeWireTransmitter_FT(this,x,y);
			figure = threeWireTransmitter_ft;
		}
		if(type == "FT_fourWireTrsmtr"){
			
			fourWireTransmitter_ft = FourWireTransmitter_FT(this,x,y);
			figure = fourWireTransmitter_ft;
		}
	    if(type == "FT_hartTrsmtr"){
			
			hartTransmitter_ft = HartTransmitter_FT(this,x,y);
			figure = hartTransmitter_ft;
		}
		if(type == "FT_FFTrsmtr"){
			
			fft_Transmitter_ft = FFT_Transmitter_FT(this,x,y);
			figure = fft_Transmitter_ft;
		}
	   
	   // I2P Converter Symbols
	   
	     if(type == "LY_100"){
			
			I2P_LY100 = I2P_LY_100(this,x,y);
			figure = I2P_LY100;
		}
	     if(type == "TY_100"){
				
				I2P_TY100 = I2P_TY_100(this,x,y);
				figure = I2P_TY100;
			}
	     if(type == "PY_100"){
				
				I2P_PY100 = I2P_PY_100(this,x,y);
				figure = I2P_PY100;
			}
	     if(type == "FY_100"){
				
				I2P_FY100 = I2P_FY_100(this,x,y);
				figure = I2P_FY100;
			}
	     
  // Pneumatic Transmitter  Symbols
	     
	     if(type == "PT_LT_100"){
				
				PT_LT100 = PT_LT_100(this,x,y);
				figure = PT_LT100;
			}
	     if(type == "PT_TT_100"){
				
				PT_TT100 = PT_TT_100(this,x,y);
				figure = PT_TT100;
			}
	     if(type == "PT_PT_100"){
				
				PT_PT100 = PT_PT_100(this,x,y);
				figure = PT_PT100;
			}
	     if(type == "PT_FT_100"){
				
				PT_FT100 = PT_FT_100(this,x,y);
				figure = PT_FT100;
			}
	     
	     
	     // P/E Converter Symbols
	     if(type == "P2E_LY_100"){
				
				P2E_LY100 = P2E_LY_100(this,x,y);
				figure = P2E_LY100;
			}
	     if(type == "P2E_TY_100"){
				
				P2E_TY100 = P2E_TY_100(this,x,y);
				figure = P2E_TY100;
			}
	     if(type == "P2E_PY_100"){
				
				P2E_PY100 = P2E_PY_100(this,x,y);
				figure = P2E_PY100;
			}
	     if(type == "P2E_FY_100"){
				
				P2E_FY100 = P2E_FY_100(this,x,y);
				figure = P2E_FY100;
			}
	    
	     
	  // High Low Selector Symbols   
	     
	  // High Selector Symbols
	     
	      // High selector with 2 inputs
	    if(type == "HighSelector_2_Input"){
				
	    	 HighSelector_2Input = HighSelector_2_Input(this,x,y);
				figure = HighSelector_2Input;
			} 
	     
	    // High selector with 3 inputs
	    if(type == "HighSelector_3_Input"){
				
	    	 HighSelector_3Input = HighSelector_3_Input(this,x,y);
				figure = HighSelector_3Input;
			}
	    
	    // High selector with 4 inputs
	    if(type == "HighSelector_4_Input"){
				
	    	 HighSelector_4Input = HighSelector_4_Input(this,x,y);
				figure = HighSelector_4Input;
			}
	     
	    
	     
	 // Low Selector Symbols
	     
	      // Low selector with 2 inputs
	    if(type == "LowSelector_2_Input"){
				
	    	 LowSelector_2Input = LowSelector_2_Input(this,x,y);
				figure = LowSelector_2Input;
			} 
	     
	    // Low selector with 3 inputs
	    if(type == "LowSelector_3_Input"){
				
	    	 LowSelector_3Input = LowSelector_3_Input(this,x,y);
				figure = LowSelector_3Input;
			}
	    
	    // Low selector with 4 inputs
	    if(type == "LowSelector_4_Input"){
				
	    	 LowSelector_4Input = LowSelector_4_Input(this,x,y);
				figure = LowSelector_4Input;
			}
	    
	    
	// Limiter Symbols
	    
        //Rate Limiter	    
	    if(type == "Rate_Limiter"){
			
	    	rate_limiter = Rate_Limiter(this,x,y);
				figure = rate_limiter;
			}
	    
	    //High Limit	    
	    if(type == "High_Limit"){
			
	    	high_limit = High_Limit(this,x,y);
				figure = high_limit;
			}
	  //Low Limit	    
	    if(type == "Low_Limit"){
			
	    	low_limit = Low_Limit(this,x,y);
				figure = low_limit;
			}
	    
	    
	    
	    
	    
	    
	      
        // create a command for the undo/redo support
        var command = new draw2d.command.CommandAdd(this, figure, x, y);
        this.getCommandStack().execute(command);
    }
});

