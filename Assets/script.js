let startButton = document.getElementById('start');
let scoresButton = document.getElementById('display-scores');
let timeRemaining = 60;
let score = 0;
let questionNumber = 0;

let question1 = {
    q = "Which country do cities of Perth, Adelade & Brisbane belong to?",
    a1 = "Australia",
    a2 = "Russia",
    a3 = "Italy",
    a4 = "Uruguay"
}
let question2 = {
    q = "What is \"cynophobia\"?",
    a1 = "Fear of snakes",
    a2 = "Fear of dogs",
    a3 = "Fear of injections",
    a4 = "Fear of sleeping"
}

let question3 = {
    q = "What is the name of the biggest technology company in South Korea?",
    a1 = "POSCO",
    a2 = "KIA",
    a3 = "Hyundai",
    a4 = "Samsung"
}

let question4 = {
    q = "Who was the first woman pilot to fly solo across the Atlantic?",
    a1 = "Amelia Earhart",
    a2 = "Fear of dogs",
    a3 = "Fear of injections",
    a4 = "Fear of sleeping"
}

let question5 = {
    q = "Worship of Krishna is observed by which Religious Faith?",
    a1 = "Paganism",
    a2 = "Islam",
    a3 = "Hinduism",
    a4 = "Buddhism"
}

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