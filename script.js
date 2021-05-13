// use console.dir if you're stuck

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

// Need func to stop flips after two 

function stopClick() {
    if (flippedCardArray.length >= 2) {
        // ASK ABOUT THIS **************************
        document.getElementsByClassName('glitter').style.pointerEvents = 'none'
    } 
}

//             WORKING HERE *****************

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

// instead of stop click, make it compare the cards!!!!! then move on

// NEED TO FIX SCORE FUNCTION
// need function for score 

// add if statements here
// then add keepScore function to run after if the if statements are true

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

// function picClickB(x) {
//     stopClick()
//     document.getElementById(`picB${x}`).style.opacity = '1.0';
//     document.getElementById(`picB${x}`).dataset.switch = 'on'
//     console.log(document.getElementById(`picB${x}`).dataset.switch)
//     flippedCardArray.push(document.getElementById(`picB${x}`))
//     compareCards()
//     // keepScore()
// }

// keepScore()
// need function for no more than two cards flipped at once (unless already matched)

console.log("break")

// Messy work below

// function picClickBrokenProbably() {
//     for (let i = 0; i < cardArray.length; i++) {
//         console.log("did it work")
//         originalCardArray[i].style.opacity = '1.0'
//     }
// }

// cardsHolder.onclick = function () {
//     console.log("click test - holder")
//     cardsHolder.style.opacity = "0.0";
//     cardsHolder.style.backgroundColor = null;
//     cards.style.opacity = "1.0";
// }

// let header = document.querySelector('h1')
// let holder1 = document.querySelector('#holder1')

// header.onclick = function() {
//     console.log("why")
// }

// pic1.onclick = function() {
//     console.log("progress")
// }

// pic1.onclick = picClick();

// pic1.addEventListener('click', picClick())

// holder1.onclick = function() {
//     console.log("or this progress")
//     pic1.style.opacity = '1.0'
// }

// cards.onclick = function () {
//     console.log("other click test - card only")
//     cardsHolder.style.opacity = "0.0";
//     cards.style.opacity = "1.0"
// }

// if function?? 


//       picClick functions before drying up   
// NEED TO DRY THIS CODE UP
// function picClick1() {
//     document.getElementById('pic1').style.opacity = '1.0'
//     // document.getElementById('holder1').style.backgroundColor = ''
// }
// function picClick2() {
//     document.getElementById('pic2').style.opacity = '1.0'
//     // document.getElementById('holder2').style.backgroundColor = ''
// }
// function picClick3() {
//     document.getElementById('pic3').style.opacity = '1.0'
// }
// function picClick4() {
//     document.getElementById('pic4').style.opacity = '1.0'
// }
// function picClick5() {
//     document.getElementById('pic5').style.opacity = '1.0'
// }
// function picClick6() {
//     document.getElementById('pic6').style.opacity = '1.0'
// }
// function picClick7() {
//     document.getElementById('pic7').style.opacity = '1.0'
// }
// function picClick8() {
//     document.getElementById('pic8').style.opacity = '1.0'
// }
// function picClick9() {
//     document.getElementById('pic9').style.opacity = '1.0'
// }
// function picClick10() {
//     document.getElementById('pic10').style.opacity = '1.0'
// }
// function picClick11() {
//     document.getElementById('pic11').style.opacity = '1.0'
// }
// function picClick12() {
//     document.getElementById('pic12').style.opacity = '1.0'
// }
// function picClick13() {
//     document.getElementById('pic13').style.opacity = '1.0'
// }
// function picClick14() {
//     document.getElementById('pic14').style.opacity = '1.0'
// }
// function picClick15() {
//     document.getElementById('pic15').style.opacity = '1.0'
// }
// function picClick16() {
//     document.getElementById('pic16').style.opacity = '1.0'
// }