//Main script

(function() {
    //Setup Stuff
    
    var msgHandler = new MsgHandler();
    var dude = new Dude();
    var the_dude_img = document.querySelector('#the_dude');
    
    //do stuff
    the_dude_img.addEventListener("click", function(event) {
        msgHandler.setMessage(dude.speak());
        msgHandler.render('#container');
    });
})();