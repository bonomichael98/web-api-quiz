let startButton = document.getElementById('start');
let scoresButton = document.getElementById('display-scores');
let section1 = document.getElementById('section-1');
let questionsSection = document.getElementById('cycled-questions');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');
let answersElement = document.getElementById('answers');


let timeRemaining = 60;
let score = 0;
let questionNumber = [];
let countdownTimerDisplay = document.getElementById('time-remaining');
let questions = [{
        title : "Which country do cities of Perth, Adelade & Brisbane belong to? ",
        answers: [
            { text:"Australia", answer: true },
            { text:"Russia", answer: false },
            { text:"Italy", answer: false },
            { text:"Uruguay", answer: false }
        ]},
        {
            title : "What is \"cynophobia\"?",
        answers: [
            { text:"Fear of snakes", answer: false },
            { text:"Fear of dogs", answer: true },
            { text:"Fear of injections", answer: false },
            { text:"Fear of sleeping", answer: false }
        ]},
        {
            title : "Who was the first woman pilot to fly solo across the Atlantic?",
        answers: [
            { text:"Amelia Earhart", answer: true },
            { text:"Bessie Coleman", answer: false },
            { text:"Jacqueline Cochran", answer: false },
            { text:"Tammie Jo Schults", answer: false }
            
        ]},
        {
            title : "What is the name of the biggest technology company in South Korea?",
        answers: [
            { text:"POSCO", answer: false },
            { text:"KIA", answer: false },
            { text:"Hyundai", answer: false },
            { text:"Samsung", answer: true }
        ]},
        {
            title : "Worship of Krishna is observed by which Religious Faith?",
        answers: [
            { text:"Paganism", answer: false },
            { text:"Islam", answer: false },
            { text:"Hindu", answer: true },
            { text:"Buddhism", answer: false }
            ]
}];

let form = document.getElementById('main-form');
function submitForm(event) {
    event.preventDefault();
};
form.addEventListener('submit', submitForm);



//function to run when you click the start button
document.getElementById('start').addEventListener('click', function() {
    hideElement();
    addButtons();
    cycleText();


    let timer = setInterval(function() {
        timeRemaining--;
        countdownTimerDisplay.textContent = 'You have ' + timeRemaining + ' seconds remaining.';
        if(timeRemaining <= 0) {
            console.log('end the timer');
            countdownTimerDisplay.textContent = 'You have 0 seconds remaining.';
        }else if(questionNumer = 4 ) {
            window.localStorage.setItem('playerScore', timeRemaining);
            //clearInterval(timer);
        }
    },1000);


});

 //function to run when you click the display scores button
 document.getElementById('display-scores').addEventListener('click', function() {
    console.log('scores clicked');
    hideElement();
    //displayScores();
 });


//     //create function to display buttons
let checkAnswer = function() {
    if(questions.answers === true) {

    }
}

let hideElement = function(){
    startButton.classList.add('hidden');
    scoresButton.classList.add('hidden');
};

let addButtons = function(){
    section1.classList.remove('hidden');
};

let cycleText = function(){
    for (let i = 0; i < questions.length; i++) {
        questionNumber = questions[i];
        console.log(questionNumber);
        //questions.title.forEach();
        questionNumber.answers.forEach(function(answers, i) {
            let answerButton = document.createElement('button');
            answerButton.setAttribute('class', 'buttons answer');
            answerButton.setAttribute('value', answers);
            answerButton.textContent = answers;
//            answerButton.onClick = checkAnswer();
            answersElement.appendChild(answerButton);
        })
    }
};


//create for loop that counts backwards from 60, begins when start button is selected

//create function that appends buttons with questions[] array at current position when the variable with the correct attribute is selected
//let startQuestions =

//add class 'buttons' to all newly created buttons

//create function that ends game when time remaining <= 0 or when questions are finished

//save time remaining to a scores variable in local storage

//create function to display scores from local storage when scoresButton is clicked