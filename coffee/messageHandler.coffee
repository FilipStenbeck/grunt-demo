window.app = window.app or { }

class window.app.MsgHandler 

    render : (cssSelector) ->
        document.querySelector(cssSelector).textContent=this.message;
        this
        
    setMessage : (msg) ->
        @message = msg
        true 

    getMessage : -> 
        @message
