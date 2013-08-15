//Use the render method of our module to update the DOM
(function(){
    var msgHandler = new MsgHandler();
    var dude = new Dude();
    var the_dude_img = document.querySelector('#the_dude');
    
    the_dude_img.addEventListener("click", function(event) {
        msgHandler.setMessage(dude.speak());
        msgHandler.render('#container');
    });
})();