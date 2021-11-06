const quotes = [
    "I always look good with Brooke", 
    "Sugoma Nuts", 
    `Blake's closest friend Ligma quotes: 'Blake loves Rose'`, 
    "That shirt looks becoming on you, if I was on you I'd becoming too", 
    "I always loved Ellie. It's a shame I didn't stay with he, I still wank though!"]

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber)
}

function buttonClicked() {
    let text = `"${quotes[randomNumber(quotes.length)]}" -Blake`
    document.getElementById("BlakesFavouriteLine").textContent = text
}