describe('The dude speaks', function () {
    it('should speak slacker wisdoms', function () {
        var dude = new Dude();
        var quote = dude.speak();
        console.log(quote); 
        expect(quote.length).toBeGreaterThan(0);
    });  
});