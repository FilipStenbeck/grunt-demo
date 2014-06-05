//Main script

(function() {

	window.app = window.app || {};
	
    //Setup Stuff
    var msgHandler = new window.app.MsgHandler();
    var dude = new window.app.Dude();
    var the_dude_img = document.querySelector('#the_dude');
    
    //do stuff
    the_dude_img.addEventListener('click', function() {
        msgHandler.setMessage(dude.speak()).render('#container');
    });
})();