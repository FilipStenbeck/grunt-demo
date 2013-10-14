describe('The dude speaks ', function () {
    var dude;
    
    beforeEach(function() {
        dude = new Dude();
    });

    it('should speak slacker wisdoms', function () {
        var quote = dude.speak();
        console.log(quote);
        expect(quote.length).toBeGreaterThan(0);
    });

    it('should never genereate the same quote twize in a row', function () {   
        expect(dude.speak()).not.toEqual(dude.speak());
    });
    
    /*
    it('will fail', function () {   
        expect(true).toEqual(false);
    });
    */
});