
// Array of 16 cards with two of each image
const cards = [
    {
      "color": "hot pink",
      "src": "/glitterJPGs/hotPink.jpg",
      "alt": "hot pink glitter",
      "data-switch": "off"
    },
    {
        "color": "blue",
        "src": "/glitterJPGs/blue.jpg",
        "alt": "bright blue glitter",
        "data-switch": "off"
    },
    {
        "color": "iridescent",
        "src": "/glitterJPGs/iridescent.jpg",
        "alt": "iridescent glitter",
        "data-switch": "off"
    },
    {
        "color": "lime green",
        "src": "/glitterJPGs/lime.jpg",
        "alt": "lime green glitter",
        "data-switch": "off"
    },
    {
        "color": "purple",
        "src": "/glitterJPGs/purple.jpg",
        "alt": "purple glitter",
        "data-switch": "off"
    },
    {
        "color": "rainbow",
        "src": "/glitterJPGs/rainbow.jpg",
        "alt": "rainbow stripe glitter",
        "data-switch": "off"
    },
    {
        "color": "white",
        "src": "/glitterJPGs/white.jpg",
        "alt": "white glitter",
        "data-switch": "off"
    },
    {
        "color": "orange",
        "src": "/glitterJPGs/orange.jpg",
        "alt": "orange glitter",
        "data-switch": "off"
    },
    {
        "color": "hot pink2",
        "src": "/glitterJPGs/hotPink.jpg",
        "alt": "hot pink glitter",
        "data-switch": "off"
      },
      {
          "color": "blue2",
          "src": "/glitterJPGs/blue.jpg",
          "alt": "bright blue glitter",
          "data-switch": "off"
      },
      {
          "color": "iridescent2",
          "src": "/glitterJPGs/iridescent.jpg",
          "alt": "iridescent glitter",
          "data-switch": "off"
      },
      {
          "color": "lime green2",
          "src": "/glitterJPGs/lime.jpg",
          "alt": "lime green glitter",
          "data-switch": "off"
      },
      {
          "color": "purple2",
          "src": "/glitterJPGs/purple.jpg",
          "alt": "purple glitter",
          "data-switch": "off"
      },
      {
          "color": "rainbow2",
          "src": "/glitterJPGs/rainbow.jpg",
          "alt": "rainbow stripe glitter",
          "data-switch": "off"
      },
      {
          "color": "white2",
          "src": "/glitterJPGs/white.jpg",
          "alt": "white glitter",
          "data-switch": "off"
      },
      {
          "color": "orange2",
          "src": "/glitterJPGs/orange.jpg",
          "alt": "orange glitter",
          "data-switch": "off"
      }
]

// Array to hold cards after they are randomized
let randomCardArray = []
// Array to hold the random numbers to be used for randomization
let randomNumArray = []
// Array to hold cards after user click/"flips" them
let flippedCardArray = []
// Array to hold cards after they have been successfully matched
let matchedCards = []

// Function for random number
function randomNumFunc() {
    for (let i=0; randomNumArray.length < 16; i++) {
        let randomNum = Math.floor(Math.random() * 16)
        while (randomNumArray.includes(randomNum) !== true) {
            randomNumArray.push(randomNum)
        }
    } 
}

// Function for pushing random cards into their array using random number
function randomPicPush() {
    for (let i=0; randomCardArray.length < 16; i++) {
            if (randomCardArray.includes(cards[randomNumArray[i]]) !== true) {
                randomCardArray.push(cards[randomNumArray[i]])
            }
        }
}

// Function for random card/img placement display
function randomPic () {
    for (let i=0; i < randomCardArray.length; i++) {
        document.getElementById(`pic${i}`).src = randomCardArray[i].src
    }
}

randomNumFunc()
randomPicPush()
randomPic()

// Function to stop clicks after two cards are flipped
function stopClick() {
    let textBox = document.getElementById('textBox')
    if (flippedCardArray.length >= 2) {
        for (let i=0; i < randomCardArray.length; i++) {
        document.getElementById(`pic${i}`).style.pointerEvents = 'none'
        }
    } 
}

let foundAMatch = false;

// Function for click/"flip"
function picClick(x) {
    let textBox = document.getElementById('textBox')
    stopClick()
    document.getElementById(`pic${x}`).style.opacity = '1.0';
    document.getElementById(`pic${x}`).dataset.switch = 'on'
    flippedCardArray.push(document.getElementById(`pic${x}`))
    randomCardArray.pop(document.getElementById(`pic${x}`))
    compareCards()

    // Function to change appearance/clickability of matched cards
    function changeColor() {
        for (let i= 0; i < cards.length; i++) {
            if ((foundAMatch == true) && (matchedCards.length >= 2) && (document.getElementById(`pic${x}`).dataset.switch = 'on')) {
                document.getElementById(`pic${x}`).style.opacity = '1.0'
                document.getElementById(`pic${x}`).style.pointerEvents = 'none'
                document.getElementById(`pic${x}`).dataset.switch = 'matched'
                document.getElementById(`pic${x}`).style.visibility = 'hidden'
                document.getElementById(`holder${x}`).style.backgroundColor = 'black'
            } 
        } 
    }
    setTimeout(changeColor, 1000)

    // Function to compare if cards match and let user know
    function compareCards() {
        let button = document.getElementById('tryAgain')
        let textBox = document.getElementById('textBox')
        if (flippedCardArray.length >= 2) {
            if (flippedCardArray[0].src == flippedCardArray[1].src) {
                console.log("it's a match!")
                textBox.innerText = "It's a match! Can you find another?"
                matchedCards.push(flippedCardArray[0])
                matchedCards.push(flippedCardArray[1])
                flippedCardArray.splice(0,2)
                matchedCards[0].dataset.switch = 'matched'
                matchedCards[1].dataset.switch = 'matched'
                foundAMatch = true
                keepScore()
            } else if (flippedCardArray[0].src !== flippedCardArray[1].src) {
                console.log("try again pal!")
                button.style.visibility = 'visible'
                textBox.innerText = "Not a match!"
                randomCardArray.push(flippedCardArray[0])
                randomCardArray.push(flippedCardArray[1])
                flippedCardArray[0].dataset.switch = 'off'
                flippedCardArray[1].dataset.switch = 'off'
                flippedCardArray.splice(0,2)
                foundAMatch = false;

            }
        } 
    }
}

// Function to keep score and let user know when they win the game
function keepScore() {
    let scoreNumber = document.getElementById('scoreNumber')
    let textBox = document.getElementById('textBox')
    if (matchedCards.length == 2) {
        scoreNumber.innerText = 1
    } else if (matchedCards.length == 4) {
        scoreNumber.innerText = 2
    } else if (matchedCards.length == 6) {
        scoreNumber.innerText = 3
    } else if (matchedCards.length == 8) {
        scoreNumber.innerText = 4
        textBox.innerText = "Halfway there! Can you keep matching?"
    } else if (matchedCards.length == 10) {
        scoreNumber.innerText = 5
    } else if (matchedCards.length == 12) {
        scoreNumber.innerText = 6
    } else if (matchedCards.length == 14) {
        scoreNumber.innerText = 7
    } else if (matchedCards.length == 16) {
        scoreNumber.innerText = 8
        textBox.innerText = 'Hooray! You WIN!!!!!!'
        textBox.style.fontSize = '4rem'
    }
}

// Function for tryAgain button to be used after two cards are flipped that do not match
function tryAgainButton() {
    let textBox = document.getElementById('textBox')
    let button = document.getElementById('tryAgain')
    button.style.visibility = 'hidden'
    textBox.innerText = 'Good choice! Keep looking!'
    for (let i=0; i<cards.length; i++) {
        if (document.getElementById(`pic${i}`).dataset.switch = 'off') {
            document.getElementById(`pic${i}`).style.opacity = '0.0'
            document.getElementById(`pic${i}`).style.pointerEvents = 'auto'
        // } else if (document.getElementById(`pic${i}`).dataset.switch = 'matched') {
        //     document.getElementById(`pic${i}`).style.opacity = '1.0'
        //     document.getElementById(`pic${i}`).style.pointerEvents = 'none'
        }
    }
}
