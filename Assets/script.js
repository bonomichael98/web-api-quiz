let startButton = document.getElementById('start');
let scoresButton = document.getElementById('display-scores');
let timeRemaining = 60;
let score = 0;
let questionNumber = 0;
let countdownTimerDisplay = document.getElementById('time-remaining');
let questions = [{
        question : "Which country do cities of Perth, Adelade & Brisbane belong to? ",
        answers: [
            { text:"Australia", answer: true },
            { text:"Russia", answer: false },
            { text:"Italy", answer: false },
            { text:"Uruguay", answer: false }
        ]},
        {
        question : "What is \"cynophobia\"?",
        answers: [
            { text:"Fear of snakes", answer: false },
            { text:"Fear of dogs", answer: true },
            { text:"Fear of injections", answer: false },
            { text:"Fear of sleeping", answer: false }
        ]},
        {
        question : "Who was the first woman pilot to fly solo across the Atlantic?",
        answers: [
            { text:"Amelia Earhart", answer: true },
            { text:"Bessie Coleman", answer: false },
            { text:"Jacqueline Cochran", answer: false },
            { text:"Tammie Jo Schults", answer: false }
            
        ]},
        {
        question : "What is the name of the biggest technology company in South Korea?",
        answers: [
            { text:"POSCO", answer: false },
            { text:"KIA", answer: false },
            { text:"Hyundai", answer: false },
            { text:"Samsung", answer: true }
        ]},
        {
        question : "Worship of Krishna is observed by which Religious Faith?",
        answers: [
            { text:"Paganism", answer: false },
            { text:"Islam", answer: false },
            { text:"Hindu", answer: true },
            { text:"Buddhism", answer: false }
            ]
}];

// let timer = function runTimer(timeRemaining){
//     setTimeout(function() {
//         console.log('hello');
//         timeRemaining++;
//         if (timeRemaining <= 0) {
//             runTimer();
//             console.log('hello')
//         } else {
//             endQuiz();
//         }
//     }, 1000)
//}
//


//  let timer = function runTimer() {
//  for (let i = 60; i <= 0; i--) {
//      console.log('hello')
//   }
//  for (let i = 60; i <= 0; --i) {
//      console.log('hello');
//   }

// let endQuiz = function() {
//     for(let i = 60; i <= 0; i-0) {
//         console.log('1');
//     }
// }

// let timer = setInterval(function() {
    // timeRemaining--;
    // countdownTimerDisplay.textContent = 'You have ' + timeRemaining + ' seconds remaining.';
    // if(timeRemaining <= 0) {
        // console.log('end the timer');
        // countdownTimerDisplay.textContent = 'You have 0 seconds remaining.';
    // }else if(questionNumer = 4 ) {
        // window.localStorage.setItem('playerScore', timeRemaining);
        //clearInterval(timer);
    // }
// },1000)


// startButton = document.getElementById('start').addEventListener('click', function() {
//     console.log('start clicked');
// });

// scoresButton.addEventListener('click', test);

// let test = console.log('button has been clicked');
//stop page from refreshing on button clicks
let form = document.getElementById('main-form');
function submitForm(event) {
    event.preventDefault();
};
form.addEventListener('submit', submitForm);



//function to run when you click the start button
document.getElementById('start').addEventListener('click', function() {
    console.log('start clicked');
    hideElement();

 });

 //function to run when you click the display scores button
 document.getElementById('display-scores').addEventListener('click', function() {
    console.log('scores clicked');
    hideElement();
 });

// let start = startGame() {
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
    },1000)
//     //create function to display buttons

// };

let hideElement = function hide() {
    // let element1 = document.getElementById("start");
    // let element2 = document.getElementById("displayScores");
    // startButton.classList.add("hide");
    // startButton.classList.remove("buttons");

    // scoresButton.classList.add("hide");
    // scoresButton.classList.remove("buttons");
    startButton.remove();
    scoresButton.remove();
}

let createButton = document.createElement("button");
//let text = document.createTextNode();
//let text = document.createTextNode(questions[questionNumber])


// for (let i = timeRemaining; i <= 0; i--) {
//     //create option element
//     let createButtons = document.createElement("button");
//     statusOptionEl.textContent = statusChoices[i];
//     statusOptionEl.setAttribute("value", statusChoices[i]);

//     //append to select
//     statusSelectEl.appendChild(statusOptionEl);
// }

//create for loop that counts backwards from 60, begins when start button is selected

//create function that appends buttons with questions[] array at current position when the variable with the correct attribute is selected

//add class 'buttons' to all newly created buttons

//create function that ends game when time remaining <= 0 or when questions are finished

//save time remaining to a scores variable in local storage

//create function to display scores from local storage when scoresButton is clicked