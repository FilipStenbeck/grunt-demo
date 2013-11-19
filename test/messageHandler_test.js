describe('Message Handler', function () {
    var handler;
    var msg;
    
    beforeEach(function() {
        handler = new window.app.MsgHandler();
        msg = 'Test message'
    });

    it('should be able to set its messages', function () {
        handler.setMessage(msg);
        expect(handler.getMessage()).toEqual(msg);
    });
    
    it('should be able to update the DOM', function () {
        handler.setMessage(msg);
        handler.render('body');
        expect(document.querySelector('body').textContent).toEqual(msg);
    });    
});