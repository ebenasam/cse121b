const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");



const getNewQuote = async () =>
{
    //API For Quotes
    var url = "https://run.mocky.io/v3/1d8c7b64-a4ef-4280-8dfa-2bbe01769e3d";

    //Fetch the data from API
    const response = await fetch(url);
    console.log(typeof response);

    //Convert response to json and store it in a quotes array
    const allQuotes = await response.json();

    //Generates a ramdom number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote = allQuotes[indx].text;

    //Store the author of the respective quote
    const auth = allQuotes[indx].author;

    if(auth == null)
    {
        author = "Anonymous";
    }

    //Function to dynamically display the quote and the author
    text.innerHTML = quote;
    author.innerHTML = "By: "+auth;

    //Tweet the quote
    tweetButton.href = "https://twitter.com/intent/tweet?text="+quote+" By "+auth;
}

getNewQuote();