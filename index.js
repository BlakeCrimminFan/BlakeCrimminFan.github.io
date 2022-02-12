const blakesQuotes = [
    "I always look good with Brooke", 
    "Sugoma Nuts", 
    `Blake's closest friend Ligma quotes: 'Blake loves Rose'`, 
    "That shirt looks becoming on you, if I was on you I'd becoming too", 
    "I always loved Ellie. It's a shame I didn't stay with her, I still do the funny though!",
    "If having Sus Ecks Xfactor was a job then I would be the manager",
    "My Mcdonalds order would be the girl I like and raul on the side"
]

const andreysQuotes = [
    "I like Jungle Cock",
    "Being gay is only for Tuesdays",
    "Placeholder 2",
    "Placeholder 3"
]

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber)
}

function blakesButtonClicked() {
    let text = `"${blakesQuotes[randomNumber(blakesQuotes.length)]}" -Blake`
    document.getElementById("BlakesFavouriteLine").textContent = text
}

function andreysButtonClicked() {
    let text = `"${andreysQuotes[randomNumber(andreysQuotes.length)]}" -Andrey`
    document.getElementById("AndreysFavouriteLine").textContent = text
}