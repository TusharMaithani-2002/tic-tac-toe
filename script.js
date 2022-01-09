console.log("hello");
// background music
let music = new Audio("music.mp3");

let turn = "X";
let gameOver = false;
// function to chng turn

const changeTurn = () =>{
    return turn === "X" ? "0" : "X";
}

// funtion  to check win

const checkWin = () =>{
   let boxtexts = document.getElementsByClassName("box-text");
   let wins = [
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6]              
   ]
   wins.forEach(ele =>{
       if(boxtexts[ele[0]].innerText !== "" && boxtexts[ele[0]].innerText === boxtexts[ele[1]].innerText && boxtexts[ele[1]].innerText === boxtexts[ele[2]].innerText) {
        document.getElementsByClassName("info")[0].innerHTML = boxtexts[ele[0]].innerText+" Won!";
           gameOver = true;
           if(gameOver == true)
           music.play();
           boxtexts[ele[0]].style = "color : green; font-weight:bolder;";
           boxtexts[ele[1]].style = "color : green; font-weight:bolder;";
           boxtexts[ele[2]].style = "color : green; font-weight:bolder;";
           document.querySelector(".image").style.width = "200px";
       }
       
   })
}

// Game logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".box-text");
    element.addEventListener("click",()=>{
        if(boxtext.innerHTML === "" && !gameOver) {
            boxtext.innerHTML = turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver){
             document.getElementsByClassName("info")[0].innerHTML = "Turn for "+turn;
            }
        }
    })
})

const btn = document.getElementById("reset").addEventListener("click",()=>{
    // location.reload()
    let boxtexts = document.getElementsByClassName("box-text") 
    Array.from(boxtexts).forEach(ele=>{
        ele.innerText = "";
        ele.style = "color : black, font-weight:lighter";
    })
    document.querySelector(".image").style.width = "0px";
    document.getElementsByClassName("info")[0].innerHTML = "Turn for "+turn;
    music.pause();
    gameOver=false;
})
