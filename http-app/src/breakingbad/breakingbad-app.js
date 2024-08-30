
const fetchQuote  = async () => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');

    const data = await res.json();
    return data[0];
}



export const BreakingbadApp = ( elem ) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad APP';

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuote = document.createElement('button');
    nextQuote.innerText = 'Next Quote';

    const renderQuote =  ( data ) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        elem.replaceChildren( quoteLabel, authorLabel, nextQuote );

    }

    nextQuote.addEventListener('click', async() => {
        elem.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote( quote );
    })

    fetchQuote()
        .then( renderQuote );
}