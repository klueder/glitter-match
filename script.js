console.log("test!")

// var x = document.images[0].src

// let cards = document.getElementsByClassName('glitter')
// let cardsHolder = document.getElementsByClassName('glitterHolder')

const pic1 = document.getElementById('pic1')
var pic2 = document.getElementById('pic2')
var pic3 = document.getElementById('pic3')
var pic4 = document.getElementById('pic4')
var pic5 = document.getElementById('pic5')
var pic6 = document.getElementById('pic6')
var pic7 = document.getElementById('pic7')
var pic8 = document.getElementById('pic8')
// console.log(pic2)

let originalCardArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8]

let imageURLS = ["/glitterJPGs/blue.jpg", "/glitterJPGs/hotPink.jpg", "/glitterJPGs/iridescent.jpg", "/glitterJPGs/lime.jpg","/glitterJPGs/purple.jpg", "/glitterJPGs/rainbow.jpg","/glitterJPGs/silver.jpg","/glitterJPGs/white.jpg"]

let randomCardArray = []
let secondRandomCardArray = []

// Function for random img placement

function randomPic() {
    for (let i = 0; randomCardArray.length < 8; i++) {
        let randomNum = Math.floor(Math.random() * 8)
        // if statement to ensure image only appears once per array
        if (randomCardArray.includes(imageURLS[randomNum]) !== true) {
        randomCardArray.push(imageURLS[randomNum])
        } else {
            console.log("error")
        }
        console.log(randomCardArray)
        document.getElementById('pic1').src = randomCardArray[0];
        document.getElementById('pic2').src = randomCardArray[1];
        document.getElementById('pic3').src = randomCardArray[2];
        document.getElementById('pic4').src = randomCardArray[3];
        document.getElementById('pic5').src = randomCardArray[4];
        document.getElementById('pic6').src = randomCardArray[5];
        document.getElementById('pic7').src = randomCardArray[6];
        document.getElementById('pic8').src = randomCardArray[7];
    } for (let j=0; secondRandomCardArray.length < 8; j++) {
        let secondRandomNum = Math.floor(Math.random() * 8)
        // if statement to ensure no duplicates in second array 
        if (secondRandomCardArray.includes(imageURLS[secondRandomNum]) !== true) {
        secondRandomCardArray.push(imageURLS[secondRandomNum])
        } else {
            console.log("error")
        }
        document.getElementById('pic9').src = secondRandomCardArray[0];
        document.getElementById('pic10').src = secondRandomCardArray[1];
        document.getElementById('pic11').src = secondRandomCardArray[2];
        document.getElementById('pic12').src = secondRandomCardArray[3];
        document.getElementById('pic13').src = secondRandomCardArray[4];
        document.getElementById('pic14').src = secondRandomCardArray[5];
        document.getElementById('pic15').src = secondRandomCardArray[6];
        document.getElementById('pic16').src = secondRandomCardArray[7];
    }
}

randomPic()

// Need function for click/"flip"

function picClick(x) {
        document.getElementById(`pic${x}`).style.opacity = '1.0'
}

// need function for score 

// function keepScore() {
//     if ((document.getElementById('pic1').src == document.getElementById('pic2').src)
//         && (document.getElementById('pic1').style.opacity = '1.0')
//         && (document.getElementById('pic2').style.opacity = '1.0')) {
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic3').src) 
//         && (document.getElementById('pic1').style.opacity = '1.0')
//         && (document.getElementById('pic3').style.opacity = '1.0')) {
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic4').src) 
//         && (document.getElementById('pic1').style.opacity = '1.0')
//         && (document.getElementById('pic4').style.opacity = '1.0')){
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic5').src) 
//         && (document.getElementById('pic1').style.opacity = '1.0')
//         && (document.getElementById('pic5').style.opacity = '1.0')) {
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if (document.getElementById('pic1').src == document.getElementById('pic6').src) {
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if (document.getElementById('pic1').src == document.getElementById('pic7').src) {
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if (document.getElementById('pic1').src == document.getElementById('pic8').src) {
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic9').src) 
//         && (document.getElementById('pic1').style.opacity = '1.0')
//         && (document.getElementById('pic9').style.opacity = '1.0')) {
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic10').src) 
//         && (document.getElementById('pic1').style.opacity = '1.0')
//         && (document.getElementById('pic10').style.opacity = '1.0')) {
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic11').src) 
//         && (document.getElementById('pic1').style.opacity = '1.0')
//         && (document.getElementById('pic11').style.opacity = '1.0')){
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic12').src) 
//         && (document.getElementById('pic1').style.opacity = '1.0')
//         && (document.getElementById('pic12').style.opacity = '1.0')){
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic13').src) 
//         && (document.getElementById('pic1').style.opacity = '1.0')
//         && (document.getElementById('pic13').style.opacity = '1.0')) {
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic14').src) 
//         && (document.getElementById('pic1').style.opacity = '1.0')
//         && (document.getElementById('pic14').style.opacity = '1.0')) {
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic15').src) 
//         && (document.getElementById('pic1').style.opacity = '1.0')
//         && (document.getElementById('pic15').style.opacity = '1.0')) {
//         document.getElementById('scoreNumber').innerHTML += 1
//     } else if ((document.getElementById('pic1').src == document.getElementById('pic16').src) 
//         && (document.getElementById('pic1').style.opacity = '1.0')
//         && (document.getElementById('pic16').style.opacity = '1.0')){
//         document.getElementById('scoreNumber').innerHTML += 1
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