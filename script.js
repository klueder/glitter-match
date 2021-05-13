// use console.dir if you're stuck

// MAKE THE "CARDS" INTO OBJECTS with src and alt attached

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
        "color": "silver",
        "src": "/glitterJPGs/silver.jpg",
        "alt": "silver glitter"
    }
]


// console.dir(cards[0])
// console.log(cards[0].src)

let randomCardArrayA = []
let randomCardArrayB = []
let flippedCardArray = []
let imageURLS = [cards[0].src, cards[1].src, cards[2].src, cards[3].src, cards[4].src, cards[5].src, cards[6].src, cards[7].src]

// Function for random img placement

function randomPicA() {
    for (let i = 0; randomCardArrayA.length < 8; i++) {
        let randomNumA = Math.floor(Math.random() * 8)
        // if statement to ensure image only appears once per array
        while (randomCardArrayA.includes(imageURLS[randomNumA]) !== true) {
        randomCardArrayA.push(imageURLS[randomNumA])
        } 
    for (let k = 0; k < randomCardArrayA.length; k++) {
        document.getElementById(`picA${k}`).src = randomCardArrayA[k];
    }
    } 
}
function randomPicB() {
    for (let j=0; randomCardArrayB.length < 8; j++) {
        let randomNumB = Math.floor(Math.random() * 8)
        // if statement to ensure no duplicates in second array 
        while (randomCardArrayB.includes(imageURLS[randomNumB]) !== true) {
        randomCardArrayB.push(imageURLS[randomNumB])
        }
    for (let l = 0; l < randomCardArrayB.length; l++) {
        document.getElementById(`picB${l}`).src = randomCardArrayB[l];
    }
    }
}

randomPicA()
randomPicB()

// Function for click/"flip"

function picClickA(x) {
        document.getElementById(`picA${x}`).style.opacity = '1.0';
        document.getElementById(`picA${x}`).dataset.switch = 'on'
        console.log(document.getElementById(`picA${x}`).dataset.switch)
        flippedCardArray.push(document.getElementById(`picA${x}`))
        console.log(flippedCardArray)
}
function picClickB(x) {
    document.getElementById(`picB${x}`).style.opacity = '1.0';
    document.getElementById(`picB${x}`).dataset.switch = 'on'
    console.log(document.getElementById(`picB${x}`).dataset.switch)
    flippedCardArray.push(document.getElementById(`picB${x}`))
    console.log(flippedCardArray)
}

// Need func to stop flips after two 

// function stopClick() {
//         if (flippedCardArray.length >= 2) {

//         }
    
// }

// NEED TO FIX SCORE FUNCTION
// need function for score 

// while loop?? (ex: while pic1 opacity = 1.0 && pic2 opacity = 1.0 && src == src etc etc )

// if flippedCardArray >= 2 No more clicks 

        // add if statements here
        // then add keepScore function to run after if the if statements are true

// function keepScore() {
//     if ((document.getElementById('pic1').src == document.getElementById('pic9').src) 
//         && (document.getElementById('pic1').dataset.switch = 'on')
//         && (document.getElementById('pic9').dataset.switch = 'on')) {
//         document.getElementById('scoreNumber').innerText += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic10').src) 
//         && (document.getElementById('pic1').dataset.switch = 'on')
//         && (document.getElementById('pic10').dataset.switch = 'on')) {
//         document.getElementById('scoreNumber').innerText += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic11').src) 
//         && (document.getElementById('pic1').dataset.switch = 'on')
//         && (document.getElementById('pic11').dataset.switch = 'on')){
//         document.getElementById('scoreNumber').innerText += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic12').src) 
//         && (document.getElementById('pic1').dataset.switch = 'on')
//         && (document.getElementById('pic12').dataset.switch = 'on')){
//         document.getElementById('scoreNumber').innerText += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic13').src) 
//         && (document.getElementById('pic1').dataset.switch = 'on')
//         && (document.getElementById('pic13').dataset.switch = 'on')) {
//         document.getElementById('scoreNumber').innerText += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic14').src) 
//         && (document.getElementById('pic1').dataset.switch = 'on')
//         && (document.getElementById('pic14').dataset.switch = 'on')) {
//         document.getElementById('scoreNumber').innerText += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic15').src) 
//         && (document.getElementById('pic1').dataset.switch = 'on')
//         && (document.getElementById('pic15').dataset.switch = 'on')) {
//         document.getElementById('scoreNumber').innerText += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic16').src) 
//         && (document.getElementById('pic1').dataset.switch = 'on')
//         && (document.getElementById('pic16').dataset.switch = 'on')){
//         document.getElementById('scoreNumber').innerText += 1
//     } else {
//         console.log("error")
//     }
// }

// keepScore()
// need function for no more than two cards flipped at once (unless already matched)

console.log('break')

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