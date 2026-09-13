// Selecting elements
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const btn = document.getElementById("new-quote-btn");

function fetchQuote() {
    quoteElement.innerText = "Fetching quote...";
    authorElement.innerText = "";

    // Fetching data using .then()
    fetch("https://dummyjson.com/quotes/random")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            quoteElement.innerText = `"${data.quote}"`;
            authorElement.innerText = `- ${data.author}`;
        })
        .catch(function(err) {
            quoteElement.innerText = "Never give up on a dream just because of the time it will take to accomplish it.";
            authorElement.innerText = "- Earl Nightingale";
        });
}

// Automatically fetch on page load so deployed link is never empty
fetchQuote();

// Fetch on button click
btn.addEventListener("click", fetchQuote);