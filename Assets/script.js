let startButton = document.getElementById('start');
let scoresButton = document.getElementById('display-scores');
let timeRemaining = 60;
let score = 0;
let questionNumber = 0;

let questions = [{
        question = "Which country do cities of Perth, Adelade & Brisbane belong to? ",
        answers: [
            { text:"Australia", answer: true },
            { text:"Russia", answer: false },
            { text:"Italy", answer: false },
            { text:"Uruguay", answer: false }
        ]},
        {
        question = "What is \"cynophobia\"?",
        answers: [
            { text:"Fear of snakes", answer: false },
            { text:"Fear of dogs", answer: true },
            { text:"Fear of injections", answer: false },
            { text:"Fear of sleeping", answer: false }
        ]},
        {
        question = "Who was the first woman pilot to fly solo across the Atlantic?",
        answers: [
            { text:"Amelia Earhart", answer: true },
            { text:"Bessie Coleman", answer: false },
            { text:"Jacqueline Cochran", answer: false },
            { text:"Tammie Jo Schults", answer: false }
            
        ]},
        {
        question = "What is the name of the biggest technology company in South Korea?",
        answers: [
            { text:"POSCO", answer: false },
            { text:"KIA", answer: false },
            { text:"Hyundai", answer: false },
            { text:"Samsung", answer: true }
        ]},
        {
        question = "Worship of Krishna is observed by which Religious Faith?",
        answers: [
            { text:"Paganism", answer: false },
            { text:"Islam", answer: false },
            { text:"Hindu", answer: true },
            { text:"Buddhism", answer: false }
            ]
}];



// startButton = document.getElementById('start').addEventListener('click', function() {
//     console.log('start clicked');
// });

// scoresButton.addEventListener('click', test);

// let test = console.log('button has been clicked');
//stop page from refreshing on button clicks
let form = document.getElementById('main-form');
function handleForm(event) {
    event.preventDefault();
};
form.addEventListener('submit', handleForm);



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

let createButtons = document.createElement("button");
//let text = document.createTextNode(questions[questionNumber])
createButtons.appendChild()