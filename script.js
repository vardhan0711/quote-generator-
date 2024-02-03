const quotecontainer = document.getElementById('quote-container');
const quotetext = document.getElementById('quote');
const authortext = document.getElementById('author');

const newquotebutton = document.getElementById('new-quote');
 


function newquote(){
    
    const quote= localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);

    if(!quote.author){
        authortext.textContent='Unknown';
    }else{
        authortext.textContent = quote.author; 
    }

    if(quote.text.length>120){
        quotetext.classList.add('long-quote');
    }else{
        quotetext.classList.remove('long-quote');
    }

    quotetext.textContent = quote.text;
    
}



newquotebutton.addEventListener('click',newquote);


newquote();