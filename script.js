// Array of 16 cards with two of each image

const cards = [
    {
      "color": "hot pink",
      "src": "/glitterJPGs/hotPink.jpg",
      "alt": "hot pink glitter"
    },
    {
        "color": "blue",
        "src": "/glitterJPGs/blue.jpg",
        "alt": "bright blue glitter"
    },
    {
        "color": "iridescent",
        "src": "/glitterJPGs/iridescent.jpg",
        "alt": "iridescent glitter"
    },
    {
        "color": "lime green",
        "src": "/glitterJPGs/lime.jpg",
        "alt": "lime green glitter"
    },
    {
        "color": "purple",
        "src": "/glitterJPGs/purple.jpg",
        "alt": "purple glitter"
    },
    {
        "color": "rainbow",
        "src": "/glitterJPGs/rainbow.jpg",
        "alt": "rainbow stripe glitter"
    },
    {
        "color": "white",
        "src": "/glitterJPGs/white.jpg",
        "alt": "white glitter"
    },
    {
        "color": "orange",
        "src": "/glitterJPGs/orange.jpg",
        "alt": "orange glitter"
    },
    {
        "color": "hot pink2",
        "src": "/glitterJPGs/hotPink.jpg",
        "alt": "hot pink glitter"
      },
      {
          "color": "blue2",
          "src": "/glitterJPGs/blue.jpg",
          "alt": "bright blue glitter"
      },
      {
          "color": "iridescent2",
          "src": "/glitterJPGs/iridescent.jpg",
          "alt": "iridescent glitter"
      },
      {
          "color": "lime green2",
          "src": "/glitterJPGs/lime.jpg",
          "alt": "lime green glitter"
      },
      {
          "color": "purple2",
          "src": "/glitterJPGs/purple.jpg",
          "alt": "purple glitter"
      },
      {
          "color": "rainbow2",
          "src": "/glitterJPGs/rainbow.jpg",
          "alt": "rainbow stripe glitter"
      },
      {
          "color": "white2",
          "src": "/glitterJPGs/white.jpg",
          "alt": "white glitter"
      },
      {
          "color": "orange2",
          "src": "/glitterJPGs/orange.jpg",
          "alt": "orange glitter"
      }
]

let randomCardArray = []
let randomNumArray = []
let flippedCardArray = []

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

// Function for random img placement display
function randomPic () {
    for (let i=0; i < randomCardArray.length; i++) {
        document.getElementById(`pic${i}`).src = randomCardArray[i].src
    }
}

randomNumFunc()
console.log(randomNumArray)
randomPicPush()
console.log(randomCardArray)
randomPic()

// Function to stop clicks after two cards are flipped

function stopClick() {
    let textBox = document.getElementById('textBox')
    if (flippedCardArray.length >= 2) {
        // ASK ABOUT THIS **************************
        document.getElementsByClassName('glitter').style.pointerEvents = 'none'
        textBox.innerText = "You already clicked two!"
    } 
}

// Function to compare if cards match and let user know

function compareCards() {
    let textBox = document.getElementById('textBox')
    if (flippedCardArray.length >= 2) {
        if (flippedCardArray[0].src !== flippedCardArray[1].src) {
            console.log("try again pal!")
            textBox.innerText = "Not a match! Try again"
            stopClick()
        } else if (flippedCardArray[0].src == flippedCardArray[1].src) {
            console.log("it's a match!")
            textBox.innerText = "It's a match!"
        }
    }
}

// need function for score 


// function keepScore() {
//     for (var i=0, j=0; i<randomCardArrayA.length, j<randomCardArrayB.length; i++, j++) {
//         if ((document.getElementById(`picA${i}`).src) == (document.getElementById(`picB${j}`).src)) {
//             document.getElementById('scoreNumber').innerText += 1
//         } else {
//             console.log("didn't match!")
//         }
//     }
// }

// Function for click/"flip"

function picClick(x) {
    stopClick()
    document.getElementById(`pic${x}`).style.opacity = '1.0';
    document.getElementById(`pic${x}`).dataset.switch = 'on'
    console.log(document.getElementById(`pic${x}`).dataset.switch)
    flippedCardArray.push(document.getElementById(`pic${x}`))
    compareCards()
    // keepScore()
}

console.log("break")
