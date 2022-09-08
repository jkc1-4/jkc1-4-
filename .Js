const wordEl = document.querySelector(".word");
const txtEl = document.querySelector(".text");
const scoreEl = document.querySelector(".Score");
const timeEl = document.querySelector(".Time");
const endGameEl = document.querySelector(".end-game-container");
const containerEl = document.querySelector(".container");
const settingsFormEl = document.querySelector(".settingsForm");
const difficultSelect = document.querySelector(".difficulty");


//random numbers
const words =['sad', 'happy' ,'angry'];

//initiaslize word
let randomWord;

//init score
let score =0;

//init time
let time=10;
//inti difficult
let difficultLevel ='easy';


//generate random words

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDom(){
    randomWord = getRandomWord();
    wordEl.innerHTML =randomWord;
}

addWordToDom();

//update score
function updateScore(){
    score++;
    scoreEl.innerHTML = score;
}
updateScore();

if(difficultLevel === 'easy'){
    time = time+5;
}else if (difficultLevel === 'medium'){
    time+=3 ;
}else if (difficultLevel == 'hard'){
    time += 2;
}
//upadate time
function updateTime(){
    time--;
    timeEl.innerHTML = time + " s";
    if(time==0){
        clearInterval(timeInterval);
        //game over
        gameOver();
    }
}

updateTime();

//start counting down

const timeInterval =setInterval(updateTime ,1000);

//typing function

txtEl.addEventListener('input', function(e){
    console.log(e.target.value);
    const insertedText = e.target.value;

    if(insertedText === randomWord){
        //change the word
        addWordToDom();
        //update score
        updateScore();
        //clear the input
        e.target.value = "";

        //add 5s to the time
        
        updateTime();


    }

});

//gameover
function gameOver(){

    //hide the form
    settingsFormEl.style.display ="none";
    containerEl.style.display = "none";

    endGameEl.innerHTML =`
    <p class="over">Game Over</p>
    <p>Your Score: <span class="score">${score}</span></p>
    <button onclick = 'location.reload()' class="play-again-btn ">Play Again</button>
    `;
}



//difficult level funtion
difficultSelect.addEventListener('change' , function(e){
    console.log(e.target.value);
    difficultLevel = e.target.value;

    console.log(difficultLevel);
});
