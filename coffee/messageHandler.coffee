window.MsgHandler = -> 
    render : (cssSelector) ->
        document.querySelector(cssSelector).textContent=this.message;
        true
    setMessage : (msg) ->
        @message = msg
        true 
    getMessage : -> 
        @message