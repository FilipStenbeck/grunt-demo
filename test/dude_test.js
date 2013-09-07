describe('The dude speaks ', function () {
    var dude;
    
    beforeEach(function() {
        dude = new Dude();
    });

    it('should speak slacker wisdoms', function () {
        expect(dude.speak().length).toBeGreaterThan(0);
    });

    it('should never genereate the same quote twize in a row', function () {   
        expect(dude.speak()).not.toEqual(dude.speak());
    });    
});