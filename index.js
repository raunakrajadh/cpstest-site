let button = document.getElementById('button')
let scoreHTML = document.getElementById('score')
let timeHTML = document.getElementById('time')
let cpsHTML = document.getElementById('cps')

let scoreBoard = 1;
let timeBoard = 1;
let displayTimeBoard = 2;
let i = 1;

function setTime(){

    timeHTML.innerText = "Time: " + 1
    setInterval(() => {
        timeHTML.innerText = "Time: " + displayTimeBoard
        
        if(displayTimeBoard < 5){
            displayTimeBoard++
        }

        if(timeBoard < 6){
            timeBoard++ 
        }
        else{
            let cps = scoreBoard / displayTimeBoard
            cpsHTML.innerText = "CPS: " + cps
        }

    }, 1000);
}

button.addEventListener('click', () => {

    for(i; i < 2; i++){
        setTime()
    }

    scoreHTML.innerText = "Score: " + scoreBoard
    
    if(timeBoard <= 5){
        scoreBoard++
    }
});

