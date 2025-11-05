import React from 'react'
import "./random-quote.css"

const RandomQuote = () => {
     const localQuotes = [
        { text: "If you tell the truth, you don't have to remember anything.",
            author: "Mark Twain",
        },
         {text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
            author: "Bill Keane",
        },
        {text: "It is never too late to be what you might have been.",
            author: "George Eliot",
        },
        {text: "For every minute you are angry you lose sixty seconds of happiness.",
            author: "Ralph Waldo Emerson",
        },
     ];

     const [quotes, setQuotes] = useState(localQuotes);
     const [quote, setQuote] = useState(localQuotes[0]);
     
     return ()
        
}

export default RandomQuote