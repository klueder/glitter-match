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

let randomCardArray = []
let randomNumArray = []
let flippedCardArray = []
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

// Function for random img placement display
function randomPic () {
    for (let i=0; i < randomCardArray.length; i++) {
        document.getElementById(`pic${i}`).src = randomCardArray[i].src
    }
}

randomNumFunc()
// console.log(randomNumArray)
randomPicPush()
// console.log(randomCardArray)
randomPic()

// Function to stop clicks after two cards are flipped

function stopClick() {
    let textBox = document.getElementById('textBox')
    if (flippedCardArray.length >= 2) {
        // ASK ABOUT THIS **************************
        for (let i=0; i < randomCardArray.length; i++) {
        document.getElementById(`pic${i}`).style.pointerEvents = 'none'
        // document.getElementById(`pic${i}`).onclick = function() {
        //     textBox.innerText = "You already clicked two!"
        // }
        }
    } 
}

// Function to compare if cards match and let user know (also adds to score)
// need function for score 

// function keepScore() {
//     // let textBox = document.getElementById('textBox')
//     let scoreNumber = document.getElementById('scoreNumber')
//     // for (let i = x; i < matchedCards.length; i++) {
//     if (matchedCards.length = x) {
//         scoreNumber.innerText = 1
//     } else if (matchedCards.length = x) {
//         scoreNumber.innerText = 2
//     } else if (matchedCards.length = x) {
//         scoreNumber.innerText = 3
//     } else if (matchedCards.length = x) {
//         scoreNumber.innerText = 4
//     }
//     // }
// }

let foundAMatch = false;

// function keepScore() {
//     if ((foundAMatch = true) && (matchedCards.length = 2)) {
//         scoreNumber.innerText = 1
//     } else if ((foundAMatch = true) && (matchedCards.length = 4)) {
//         scoreNumber.innerText =2
//     }
// }
// Function for click/"flip"
function picClick(x) {
    let textBox = document.getElementById('textBox')
    stopClick()
    document.getElementById(`pic${x}`).style.opacity = '1.0';
    document.getElementById(`pic${x}`).dataset.switch = 'on'
    flippedCardArray.push(document.getElementById(`pic${x}`))
    compareCards()

    // function wrongTry() {
    //     for (let i=0; i < cards.length; i++) {
    //         if ((flippedCardArray.length >=2) && (document.getElementById(`pic${x}`).dataset.switch == 'on') && (foundAMatch == false)) {
    //             document.getElementById(`pic${x}`).style.opacity = '0.1'
    //             document.getElementById(`pic${x}`).style.pointerEvents = 'auto'
    //             document.getElementById(`pic${x}`).dataset.switch = 'off'
    //             function fixClickable() {
    //                 for (let i=0; i< cards.length; i++) {
    //                     if (document.getElementById(`pic${x}`).dataset.switch = 'off') {
    //                         document.getElementById(`pic${x}`).style.pointerEvents = 'auto'
    //                         document.getElementById(`pic${x}`).style.opacity = '0.1'
    //                     }
    //                 }
    //             }
    //             setTimeout(fixClickable, 1000)
    //         }
    //     }
    // }
    // setTimeout(wrongTry, 1000)

    function changeColor() {
        for (let i= 0; i < cards.length; i++) {
            if ((foundAMatch == true) && (matchedCards.length >= 2) && (document.getElementById(`pic${x}`).dataset.switch = 'on')) {
                document.getElementById(`pic${x}`).style.opacity = '0.5'
                document.getElementById(`pic${x}`).style.pointerEvents = 'none'
                document.getElementById(`pic${x}`).dataset.switch = 'matched'
                // console.log(document.getElementById(`pic${x}`).dataset.switch)
            } 
        } 
    }
    setTimeout(changeColor, 1000)

    function compareCards() {
        let textBox = document.getElementById('textBox')
        // let scoreNumber = document.getElementById('scoreNumber')
        if (flippedCardArray.length >= 2) {
            if (flippedCardArray[0].src == flippedCardArray[1].src) {
                console.log("it's a match!")
                textBox.innerText = "It's a match! Can you find another?"
                matchedCards.push(flippedCardArray[0])
                matchedCards.push(flippedCardArray[1])
                flippedCardArray.splice(0,2)
                console.log(matchedCards)
                foundAMatch = true
                keepScore()
                // keepScoreDouble()
            } else if (flippedCardArray[0].src !== flippedCardArray[1].src) {
                console.log("try again pal!")
                textBox.innerText = "Not a match! Try again"
                // stopClick()
                foundAMatch = false;
                // wrongTry()
            }
        } 
    }
    //need to add function(s) for if not a match************
    // function fixWrongTry() {
    //     if ((foundAMatch = false) && (document.getElementById(`pic${x}`).dataset.switch = 'on')) {
    //         document.getElementById(`pic${x}`).style.opacity = '0.1'
    //         document.getElementById(`pic${x}`).style.pointerEvents = 'auto'
    //     }
    // }
    // setTimeout(fixWrongTry(), 2000)
}

function keepScore() {
    let scoreNumber = document.getElementById('scoreNumber')
    if (matchedCards.length == 2) {
        scoreNumber.innerText = 1
    } else if (matchedCards.length == 4) {
        scoreNumber.innerText = 2
    } else if (matchedCards.length == 6) {
        scoreNumber.innerText = 3
    } else if (matchedCards.length == 8) {
        scoreNumber.innerText = 4
    } else if (matchedCards.length == 10) {
        scoreNumber.innerText = 5
    } else if (matchedCards.length == 12) {
        scoreNumber.innerText = 6
    } else if (matchedCards.length == 14) {
        scoreNumber.innerText = 7
    } else if (matchedCards.length == 16) {
        scoreNumber.innerText = 8
        textBox.innerText = 'Hooray! You WIN!!!!!!'
        textBox.style.fontSize = '5rem'
    }
}

// function keepScoreDouble() {
//     let scoreNumber = document.getElementById('scoreNumber')
//     for (var i = 1, j = 2; i <8, j < 16; i++, j += 2) {
//         if (matchedCards.length == 4) {
//             scoreNumber.innerText = 2
//         }
//     }
// }


// FOR ABOVE NOT BELOW : if matchedCards = 2, then score = 2, etc etc 

// score function possibility - if matchedCards = x, score.innertext = y
