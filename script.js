console.log("test!")

// var x = document.images[0].src

// var pic1 = document.getElementById('pic1').src
// var pic2 = document.getElementById('pic2').src
// var pic3 = document.getElementById('pic3').src
// var pic4 = document.getElementById('pic4').src
// var pic5 = document.getElementById('pic5').src
// var pic6 = document.getElementById('pic6').src
// var pic7 = document.getElementById('pic7').src
// var pic8 = document.getElementById('pic8').src
console.log(pic2)

let originalCardArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8]

let imageURLS = ["/glitterJPGs/blue.jpg", "/glitterJPGs/hotPink.jpg", "/glitterJPGs/iridescent.jpg", "/glitterJPGs/lime.jpg","/glitterJPGs/purple.jpg", "/glitterJPGs/rainbow.jpg","/glitterJPGs/silver.jpg","/glitterJPGs/white.jpg"]

let randomCardArray = []
let secondRandomCardArray = []

// Need function for random img placement

//need to add if statement for not repeating colors in first set 

function randomPic() {
    for (let i = 0; randomCardArray.length < 8; i++) {
        let randomNum = Math.floor(Math.random() * 8)
        if (randomCardArray.includes(imageURLS[randomNum]) !== true) {
        randomCardArray.push(imageURLS[randomNum])
        } else {
            console.log("error")
        }
        console.log(randomCardArray)
        // console.log(pic1)
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





// var pic1 = randomCardArray[0];
// var pic2 = randomCardArray[1];




// IGNORE THIS
// var x = document.images;
// var txt = "";
// var i;
// for (i = 0; i < x.length; i++) {
//     txt = txt + x[i].src + "<br>"
// }
// console.log(txt)







// Need function for click/"flip"


// Messy work below

// let cards = document.getElementsByClassName('glitter')
// let cardsHolder = document.getElementsByClassName('glitterHolder')

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

pic1.onclick = function() {
    console.log("progress")
}

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

// function picClick() {
//     for (let i = 0; i < cardArray.length; i++) {
//         console.log("did it work")
//         originalCardArray[i].style.opacity = '1.0'
//     }
// }

