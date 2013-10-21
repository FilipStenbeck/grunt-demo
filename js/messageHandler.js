//Declaring a module to handle setting message and doing DOM interaction
MsgHandler = function (){
	
  var message;
 
	return {
 
    //Getters & Setters
		getMessage : function() {
			return this.message;
		},
		setMessage : function(msg) {
			this.message = msg;
		},
		
    //Handle the DOM
    render : function(cssSelector) {
			document.querySelector(cssSelector).textContent=this.message;
		}
	};
};
