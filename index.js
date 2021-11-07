const blakesQuotes = [
    "I always look good with Brooke", 
    "Sugoma Nuts", 
    `Blake's closest friend Ligma quotes: 'Blake loves Rose'`, 
    "That shirt looks becoming on you, if I was on you I'd becoming too", 
    "I always loved Ellie. It's a shame I didn't stay with her, I still wank though!"
]

const raulsQuotes = [
    "Ellie and Bailey are my beep word idk I'm not that good",
    "I have cheated on alot of woman",
    "Who is ligma?",
    "Fortnite",
    "I love bailey but i dont know if she likes me"
]

function randomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber)
}

function blakesButtonClicked() {
    let text = `"${blakesQuotes[randomNumber(blakesQuotes.length)]}" -Blake`
    document.getElementById("BlakesFavouriteLine").textContent = text
}

function raulsButtonClicked() {
    let text = `"${raulsQuotes[randomNumber(raulsQuotes.length)]}" -Raul`
    document.getElementById("RaulsFavouriteLine").textContent = text
}