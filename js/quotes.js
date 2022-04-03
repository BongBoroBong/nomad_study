const quotes = [
    {
        queote: "aa",
        author: "aa"
    },
    {
        queote: "bb",
        author: "bb"
    },
    {
        queote: "cc",
        author: "cc"
    },
    {
        queote: "dd",
        author: "dd"
    },
    {
        queote: "ee",
        author: "ee"
    },
    {
        queote: "ff",
        author: "ff"
    },
    {
        queote: "gg",
        author: "gg"
    },
    {
        queote: "hh",
        author: "hh"
    },
    {
        queote: "ii",
        author: "ii"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.queote;
author.innerText = todayQuote.author;
