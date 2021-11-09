const blakesQuotes = [
    "I always look good with Brooke", 
    "Sugoma Nuts", 
    `Blake's closest friend Ligma quotes: 'Blake loves Rose'`, 
    "That shirt looks becoming on you, if I was on you I'd becoming too", 
    "I always loved Ellie. It's a shame I didn't stay with her, I still wank though!"
]

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber)
}

function blakesButtonClicked() {
    let text = `"${blakesQuotes[randomNumber(blakesQuotes.length)]}" -Blake`
    document.getElementById("BlakesFavouriteLine").textContent = text
}