//Create the Dudeness, module that generate dude quotes
var Dude = function () {
    var quoteId, quotes, getNextQuote;
    
    quoteId = -1;
    quotes = [
        'That rug really tied the room together.',
        'Yeah, well, you know, thats just, like, your opinion, man.',
         'Nobody calls me Lebowski. You got the wrong guy. Im the Dude, man.',
        'Its like what Lenin said... you look for the person who will benefit, and, uh, uh...',
        'Yeah, well. The Dude abides.',
        'Obviously you are not a golfer.',
        'Im the Dude. So thats what you call me. You know, that or, uh, His Dudeness, or uh, Duder, or El Duderino if youre not into the whole brevity thing.',
        'I do mind, the Dude minds. This will not stand, ya know, this aggression will not stand, man.',
        'Oh, the usual. I bowl. Drive around. The occasional acid flashback.'
    ];
   
    getNextQuote = function () {
        quoteId = quoteId + 1;
        if (quoteId === quotes.length) {
            quoteId = 0;
        }
        return quoteId;
    };
    
    return {
        speak :  function() {
            return quotes[getNextQuote()];    
        }
    };
};
