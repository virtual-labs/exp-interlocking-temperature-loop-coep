
example.Toolbar = Class.extend({
	
	init:function(elementId, view, hlselectorType, hlselectorInput, limitValue){
		this.html = $("#"+elementId);
		this.view = view;
		
		var jsonarray;
		
	/*	// register this class as event listener for the canvas
		// CommandStack. This is required to update the state of 
		// the Undo/Redo Buttons.
		//
		view.getCommandStack().addEventListener(this);
*/
		// Register a Selection listener for the state hnadling
		// of the Delete Button
		//
        view.on("select", $.proxy(this.onSelectionChanged,this));
		
	/*	// Inject the UNDO Button and the callbacks
		//
		this.undoButton  = $("<button>Undo</button>");
		this.html.append(this.undoButton);
		this.undoButton.button().click($.proxy(function(){
		       this.view.getCommandStack().undo();
		},this)).button( "option", "disabled", true ); 

		// Inject the REDO Button and the callback
		//
		this.redoButton  = $("<button>Redo</button>");
		this.html.append(this.redoButton);
		this.redoButton.button().click($.proxy(function(){
		    this.view.getCommandStack().redo();
		},this)).button( "option", "disabled", true );
		
		this.delimiter  = $("<span class='toolbar_delimiter'>&nbsp;</span>");
		this.html.append(this.delimiter);
*/
		
		
		
		
		// Inject Check Connection Button
		this.checkButton  = $("<button>Identify Symbol</button>");
		this.html.append(this.checkButton);
		this.checkButton.button().click(function(){
			
		var svg = $("#draw2Did").html();
		var writer = new draw2d.io.json.Writer();
		writer.marshal(view,function(json){
    
			 jsonarray = JSON.stringify(json, null, 2);
			// Save jsonarray to 
//			 console.log(jsonarray);
				checkConnectionsForH2L(hlselectorType, hlselectorInput, limitValue,jsonarray);
				
            
			});
		})
		
		
			// Inject the DELETE Button
		//
		this.deleteButton  = $("<button>Delete</button>");
		this.html.append(this.deleteButton);
		this.deleteButton.button().click($.proxy(function(){
			var node = this.view.getPrimarySelection();
//			console.log(node);
			var command= new draw2d.command.CommandDelete(node);
			this.view.getCommandStack().execute(command);
			
//			if(id = "PowerSupply"){
//				
//				$("#pwrSply").draggable({ disabled: false });
//			}
			
		},this)).button( "option", "disabled", true );
		
		
		
		// Inject Connection Hint Button
		this.hintButton  = $("<button id='connimg' data-toggle='modal' data-target='#myModal'>Symbol Hint</button>");
		this.html.append(this.hintButton);                                                    
		this.hintButton.hide();
        this.hintButton.button().click(function(){
			ConnHint(hlselectorType, hlselectorInput, limitValue);
			});
			
		
		
		
		
		// Inject Next Level Button
		this.characterisation_Button  = $("<button id='charactlevel'>Next Level</button>");
		this.html.append(this.characterisation_Button);
		this.characterisation_Button.hide();
        this.characterisation_Button.button().click(function(){
//			console.log(appId);
//			console.log(Type);
//			console.log(jsonarray);
        	if(rightConn != 0 ){
        		
        	
		        // high selector connection check
		
					// high selector with 2 inputs connection check 
					if (hlselectorType == "high" && hlselectorInput == "2") {
		
						Characterisation_HS2Input(hlselectorType, hlselectorInput);
		
					}
					// high selector with 3 inputs connection check 
					if (hlselectorType == "high" && hlselectorInput == "3") {
		
						Characterisation_HS3Input(hlselectorType, hlselectorInput);
		
					}
						// high selector with 4 inputs connection check 
					if (hlselectorType == "high" && hlselectorInput == "4") {
		
						Characterisation_HS4Input(hlselectorType, hlselectorInput);
		
					}
			
			
						// low selector connection check
					
					// low selector with 2 inputs connection check 
					if (hlselectorType == "low" && hlselectorInput == "2") {
		
						Characterisation_LS2Input(hlselectorType, hlselectorInput);
		
					}	
					// low selector with 3 inputs connection check 
					if (hlselectorType == "low" && hlselectorInput == "3") {
		
						Characterisation_LS3Input(hlselectorType, hlselectorInput);
		
					}	
					// low selector with 4 inputs connection check 
					if (hlselectorType == "low" && hlselectorInput == "4") {
		
						Characterisation_LS4Input(hlselectorType, hlselectorInput);
		
					}	
					// Limiter selector connection check
					
					// rate limiter connection check 
					if (hlselectorType == "ratelimiter") {
		
						Characterisation_RLInput(hlselectorType, limitValue);
		
					}	
					// High limiter connection check 
					if (hlselectorType == "highlimit") {
		
						Characterisation_HLInput(hlselectorType, limitValue);
		
					}	
					// low limiter connection check 
					if (hlselectorType == "lowlimit") {
		
						Characterisation_LLInput(hlselectorType, limitValue);
		
					}	
					
			
        	}else{
        		                
        		alert("Wrong Identification. Please click Identify Symbol to verify.");
        	}
		
			
			
			
			});	
		
	
	},

	/**
	 * @method
	 * Called if the selection in the cnavas has been changed. You must register this
	 * class on the canvas to receive this event.
	 *
     * @param {draw2d.Canvas} emitter
     * @param {Object} event
     * @param {draw2d.Figure} event.figure
	 */
	onSelectionChanged : function(emitter, event){
		this.deleteButton.button( "option", "disabled", event.figure===null );
	},
	
	/**
	 * @method
	 * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail() 
	 * can be used to identify the type of event which has occurred.
	 * 
	 * @template
	 * 
	 * @param {draw2d.command.CommandStackEvent} event
	 **/
	/*stackChanged:function(event)
	{
		this.undoButton.button( "option", "disabled", !event.getStack().canUndo() );
		this.redoButton.button( "option", "disabled", !event.getStack().canRedo() );
	}*/
});