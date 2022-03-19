let startButton = document.getElementById('start');
let scoresButton = document.getElementById('display-scores');
let section1 = document.getElementById('section-1');
let questionsSection = document.getElementById('cycled-questions');
let answer1 = document.getElementById('button1');
let answer2 = document.getElementById('button2');
let answer3 = document.getElementById('button3');
let answer4 = document.getElementById('button4');
let buttons = document.getElementsByClassName('buttons');
let answersElement = document.getElementById('answers');
let section2 = document.getElementById("scoreLog");


let currentScore = 0;
let timeRemaining = 60;
let questionNumber = 0;
let countdownTimerDisplay = document.getElementById('time-remaining');
// let questions = [{
//         title : "What identifier is used for an Array? ",
//         answers: [
//             { text:"[]", answer: true },
//             { text:"()", answer: false },
//             { text:"{}", answer: false },
//             { text:"//", answer: false }
//         ]},
//         {
//             title : "What is \"cynophobia\"?",
//         answers: [
//             { text:"Fear of snakes", answer: false },
//             { text:"Fear of dogs", answer: true },
//             { text:"Fear of injections", answer: false },
//             { text:"Fear of sleeping", answer: false }
//         ]},
//         {
//             title : "Who was the first woman pilot to fly solo across the Atlantic?",
//         answers: [
//             { text:"Amelia Earhart", answer: true },
//             { text:"Bessie Coleman", answer: false },
//             { text:"Jacqueline Cochran", answer: false },
//             { text:"Tammie Jo Schults", answer: false }
            
//         ]},
//         {
//             title : "What is the name of the biggest technology company in South Korea?",
//         answers: [
//             { text:"POSCO", answer: false },
//             { text:"KIA", answer: false },
//             { text:"Hyundai", answer: false },
//             { text:"Samsung", answer: true }
//         ]},
//         {
//             title : "Worship of Krishna is observed by which Religious Faith?",
//         answers: [
//             { text:"Paganism", answer: false },
//             { text:"Islam", answer: false },
//             { text:"Hindu", answer: true },
//             { text:"Buddhism", answer: false }
//             ]
// }];

let questions = [
    {
        title:"What identifier is used for an Array?",
        answers: ["[]", "()", "{}", "//"],
        answer: "[]"
    },
    {
        title:"Commonly used data types DO NOT include",
        answers: ["strings", "booleans", "alerts", "numbers"],
        answer:"alerts"
    },
    {
        title:"What statement can NOT be used to declare a variable in javascript?",
        answers: ["let", "var", "int", "const"],
        answer:"int"
    },
    {
        title:"What kind of file extension does a Javascript file have?",
        answers: [".Java", ".java", ".xml", ".js"],
        answer:".js"
    },
    {
        title:"What identifier is used for a javascript function?",
        answers: ["{}", "!", "[]", "()"],
        answer:"()"
    }
]


let form = document.getElementById('main-form');
function submitForm(event) {
    event.preventDefault();
};
form.addEventListener('submit', submitForm);

var timer

function endGame() {
    clearInterval(timer);
    console.log('game has ended')
    countdownTimerDisplay.textContent = 'You have ' + timeRemaining + ' seconds remaining.';
    //window.localStorage.setItem('playerScore', timeRemaining);
    saveScore();
    //hide questions
    hideElement2();
    //show report
}

function saveScore(timeRemaining, questionNumber) {
    window.localStorage.setItem(questionNumber, timeRemaining);

}

function checkAnswer(evt) {

    

    const value = evt.currentTarget.dataset.value

    for(let i = 0; i < questions.length; i++ ) {
        if( questions[questionNumber].answer === value) {
            questionNumber++;
            currentScore++;
            console.log("correct", questionNumber, questions.length);

            if (questionNumber === questions.length ){ 
                return endGame()

            }   

            cycleText();
            return;

        }
    }
    
    timeRemaining -= 5;

};

//function to run when you click the start button
document.getElementById('start').addEventListener('click', function() {
    hideElement();
    addButtons();
    cycleText();

    timer = setInterval(function() {
        timeRemaining--;
        countdownTimerDisplay.textContent = 'You have ' + timeRemaining + ' seconds remaining.';
        if(timeRemaining <= 0) {
            endGame();
        }
    },1000);



    answer1.addEventListener('click', checkAnswer);
    answer2.addEventListener('click', checkAnswer);
    answer3.addEventListener('click', checkAnswer);
    answer4.addEventListener('click', checkAnswer);


});



 //function to run when you click the display scores button
 document.getElementById('display-scores').addEventListener('click', function() {
    console.log('scores clicked');
    hideElement();
    //displayScores();
 });


//     //create function to display buttons

let hideElement = function(){
    startButton.classList.add('hidden');
    scoresButton.classList.add('hidden');
};

let hideElement2 = function(){
    section1.classList.add('hidden');
    section2.classList.remove("hidden")
};


let addButtons = function(){
    section1.classList.remove('hidden');;
};

let cycleText = function() {
    questionsSection.textContent = questions[questionNumber].title;
    answer1.textContent = questions[questionNumber].answers[0];
    answer1.dataset.value = questions[questionNumber].answers[0];
    answer2.textContent = questions[questionNumber].answers[1];
    answer2.dataset.value = questions[questionNumber].answers[1];
    answer3.textContent = questions[questionNumber].answers[2];
    answer3.dataset.value = questions[questionNumber].answers[2];
    answer4.textContent = questions[questionNumber].answers[3];
    answer4.dataset.value = questions[questionNumber].answers[3];

};









// let cycleText = function(){
//     for (let i = 0; i < questions.length; i++) {
//         questionNumber = questions[i];
//         console.log(questionNumber);
//         //questions.title.forEach();
//         questionNumber.answers.forEach(function(answers, i) {
//             let answerButton = document.createElement('button');
//             answerButton.setAttribute('class', 'buttons answer');
//             answerButton.setAttribute('value', answers);
//             answerButton.textContent = answers;
// //            answerButton.onClick = checkAnswer();
//             answersElement.appendChild(answerButton);
//         })
//     }
// };


//create for loop that counts backwards from 60, begins when start button is selected

//create function that appends buttons with questions[] array at current position when the variable with the correct attribute is selected
//let startQuestions =

//add class 'buttons' to all newly created buttons

//create function that ends game when time remaining <= 0 or when questions are finished

//save time remaining to a scores variable in local storage

//create function to display scores from local storage when scoresButton is clicked