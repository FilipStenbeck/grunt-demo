//Declaring a module to handle setting message and doing DOM interaction
var MsgHandler = function (){
	var message;
	return {
		getMessage : function() {
			return this.message;
		},
		setMessage : function(msg) {
			this.message = msg;
		},
		render : function(cssSelector) {
			//if no selector is past in, do nothing
			if (cssSelector === undefined || cssSelector === '') {
				return;
			}
			document.querySelector(cssSelector).innerHTML=this.message;
		}
	};
};
