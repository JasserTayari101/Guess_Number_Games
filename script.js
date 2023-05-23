const guessNum = document.getElementById("guess_num");
const checkBtn = document.getElementById("guess_btn");
const score = document.getElementById("score"); 
const highestScore = document.getElementById("highest_score");
const reset = document.getElementById("again");
const heading = document.getElementById("status");
const body = document.getElementsByTagName("body")[0];
const guessFeedback = document.getElementById("guess_feedback");

let bestScore = 0;
let myNum = Math.trunc(Math.random() * 20 +1);
let guessLeft = 20;

score.textContent = guessLeft;
highestScore.textContent = bestScore;

console.log(myNum);

checkBtn.addEventListener("click",check);

reset.addEventListener("click",()=>{
    myNum = Math.trunc(Math.random() * 20 +1);
    console.log(myNum);
    guessLeft = 20;
    score.textContent = guessLeft;
    checkBtn.addEventListener("click",check);
    body.style.backgroundColor = "black";
    heading.textContent = "Guess My Number!"
})


function check(){
    if(guessNum.value == myNum)
        gameOver("win");
    guessLeft--;
    score.textContent = guessLeft;  //update the score
    if(!guessLeft)
        gameOver("loss");
        
    guessFeedback.textContent = (Math.abs(guessNum.value-myNum)>2? "Too ":"") + (guessNum.value>myNum? "high!" : "Low!");
}



function gameOver(state){
    checkBtn.removeEventListener("click",check)
    if(state === "win"){
        body.style.backgroundColor = "green";
        heading.textContent = "You Won!!!";
        if (guessLeft > bestScore)
            bestScore = guessLeft;
            highestScore.textContent = bestScore;
    }
    else{
        body.style.backgroundColor = "red";
        heading.textContent = "You Lost!!!";
    }
}