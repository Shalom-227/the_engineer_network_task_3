import React, {useState, useEffect} from 'react'
import arrow_right from "../assets/arrow-right.svg"
import "./random-quote.css"
import "./media-queries.css"

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
        {
            text: "Faith loves the journey. Gratitude loves the moment. Inner peace loves the pause",
            author: "Maxime Lagacé",
        },
        {
            text: "Believe deep down in your heart that you’re destined to do great things.",
            author: "Joe Paterno",
        },
        {
            text: "One small positive thought can change your whole day",
            author: "Zig Ziglar",
        },
        {
           text: "Arise, awake and stop not till the goal is reached.",
           author: "Swami Vivekananda",
        },
        {
            text: "It doesn’t matter how slow you go, as long as you don’t stop",
            author: "Confucius"

        },
        {
            text: "Change your thoughts and you change your world.",
            author: "Norman Vincent Peale",
        },
        {
            text: "You cannot have a positive life and a negative mind.",
            author: "Joyce Meyer",
        },
        {
            text: "The best is yet to be.",
            author: "Robert Browning",
        },
        {
            text: "There are far, far better things ahead than anything we leave behind.",
            author: "C.S.Lewis",
        },
        {
           text: "Clear your mind of “cant”.",
           author: "Samuel Johnson",
        },
        {
            text: "It’s not a no, it’s a not yet. It’s not failure, it’s feedback. It’s not pain, it’s fuel for power.",
            author: "Maxime Lagacé",
        },
        {
           text: "The road to success is always under construction.",
           author: "Lily Tomlin", 
        },
        {
            text: "By crawling a child learns to stand.",
            author: "African Proverb",
        },
        {
            text: "Little by little the bird builds its nest.",
            author: "Nigerian Proverb"
        },
     ];

     const [quotes, setQuotes] = useState(localQuotes);
     const [quote, setQuote] = useState(localQuotes[0]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
             const loadQuotes = async () => {};
             
             loadQuotes(); 
     }, []);

     const random = () => {
        if (quotes.length === 0) return; 
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    };



     
     return (
        <div className="quote-container">
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">{quote.author}</div>
                    <div className="icons">
                        <img src={arrow_right} onClick={random} alt="" />
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default RandomQuote