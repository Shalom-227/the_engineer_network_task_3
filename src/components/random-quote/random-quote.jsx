import React, {useState, useEffect} from 'react'
import "./random-quote.css"
import arrow_right from "../assets/arrow-right.svg"

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
     const [loading, setLoading] = useState(true);

     useEffect(() => {
             const loadQuotes = async () => {};
             
             loadQuotes(); 
     }, []);

     
     return (
        <div className="container">
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">{quote.author}</div>
                    <div className="icons">
                        <img src={arrow_right} alt="" />
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default RandomQuote