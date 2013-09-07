describe('The dude speaks', function () {
    it('should speak slacker wisdoms', function () {
        var dude = new Dude();
        var quote = dude.speak();
        console.log(quote); 
        expect(quote.length).toBeGreaterThan(0);
    });  
});


describe('The dude never speaks the same', function () {
    it('should never genereate the same quote twize in a row', function () {
        var dude = new Dude();
        var quote1 = dude.speak();
        var quote2 = dude.speak();
        expect(quote1).not.toEqual(quote2);
    });  
});