/**   JavaScript
 * Coding Challenge QUiz
 * Take user input events
 * Keep user Scores
 */
    // Object Questions Array
const questions = [
    {   
    title : "Coding Quiz Challenge",
    intro : "Try to answer the following code-related question within the time limit. Keep in mind incorrect answers will peanalize your score/time!",
    start : "Start Quiz",
    answerType : ["Right!", "Wrong!"]
    },
    {
    questionText : "Commonly used data types DO Not include:",
    choices : ["1. strings", "2. booleans", "3. alerts", "4. number"],
    correctAnswer : "3. alerts",
    },
    {
    questionText : "The condition in an if/else statment is enclosed with _______.",
    choices : ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    correctAnswer : "3. parenthesis",
    },
    {
    questionText : "Arrays in JavaScript can be used to store _______.",
    choices : ["1. numbers and strings", "2. other arrays", "3. objects", "4. all of the above"],
    correctAnswer : "4. all of the above",
    },
    {
    questionText : "String values must be enclosed with _______ when being assigned to variables.",
    choices : ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctAnswer : "3. quotes",
    },
    {
    questionText : "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices : ["1. JavaScript", "2. teminal/bash", "3. for loops", "4. console.log"],
    correctAnswer : "4. console.log",
    },
    {
    questionText : "A very useful tool used during development for navigating directories and making Git requests:",
    choices : ["1. teminal/bash", "2. Your friends", "3. JavaScript", "4. console.log"],
    correctAnswer : "1. teminal/bash",
    },
    {
    questionText : "All done!",
    finalScore : ["Your final score is", " "],
    Initials : "Enter initials: "
    },
    {
    questionText : "High Scores",
    Scores : [" "," - ", " "],
    options : ["GoBack","Clear high scores"]
    },
];
//////// end of Object Questions Array ////////
///////////////// Create a dynamic timer /////////////////
const dynamicTimer = function(){
    if (counter <= 0){
    time.textContent = 'Time up!';
    questionIndex = 6;
    update()
    clearInterval(timer);
    counter = null;
    }else if(counter > 0){
    counter --;
    time.textContent = `Time: ${counter}`
    };
};
////////////////////// Score Answers Store Answers/////////////////////// 
function scoreAndStore (string, num){
    if(questionIndex <= 6){
    userScore += 10;
    }else if(questionIndex === 7){
    localStorage.setItem(string, num);
    };
};
////////////////////// Populate Scores/////////////////////// 
function populateScores (){
    h1.textContent = questions[8].questionText;
    for(let i = 0; i < localStorage.length; i++){
    let highScores = document.createElement('li');
    highScores.setAttribute('style', 'background-color: rgb(148, 180, 213);', 'border-radius: 25px;', 'padding: 5px;');
    highScores.id = 'highScores';
    highScores.textContent = `${i+1}. ${localStorage.key(i)} : ${localStorage.getItem(localStorage.key(i))}`;
    document.getElementById('ul').insertAdjacentElement('beforebegin', highScores);   
    };
    if(localStorage.length === 0){
    // code that clears the list of scores without refreshing the page
    let removeLi = document.querySelectorAll('#highScores');
    removeLi.forEach(function(removeLi){
    removeLi.remove();
    });
    };
};
////////////////////// Score Answers /////////////////////// 
function checkScores(){
    li.setAttribute('style', 'display: none;');
    startButton.setAttribute('style', 'display: none;');
    viewScores();
};
function init(){
    // Setting Initial state elements content
    li.style.display = 'grid';
    startButton.style.display = 'block';
    h1.textContent = questions[0].title;
    li.textContent = questions[0].intro;
    startButton.textContent = questions[0].start;
    line.setAttribute('style','border: 1px solid lightslategray;', 'max-width: 50vw;', 'animation: fadeIn ease-in-out 1s;', 'opacity: 1;');
    counter = 45;
    questionIndex = 0;
    clearInterval(timer);
    // event listener for ViewHigScores
    viewHighScores.addEventListener('click', checkScores);
// start button event listener
    startButton.addEventListener('click', function(event){
    if(event.target.textContent == 'Start Quiz'){
    // append the timer to the top.
    timer = setInterval(dynamicTimer, 1000);
    // hide the <hr>
    line.setAttribute('style', 'display: none;');
    // increment the question Index
    questionIndex += 1;
    // set h1 to the first question
    h1.textContent = questions[questionIndex].questionText;
    // clear the <h1> <li> element
    li.textContent = "";
    // remove the start button
    startButton.style.display = 'none';  
    // loop to create new buttons
    for(let i=0; i<numButtons; i++){
    // create element 'button'
    let btn = document.createElement('button');
    // set button text content
    btn.textContent = questions[questionIndex].choices[i];
    // append to parent element
    parentElement.appendChild(btn);
    // pass the event object to the
    btn.addEventListener('click', checkAnswers);
    };
    };
});
};
////////////////////// Check Answers ///////////////////////  
function checkAnswers(event){
    if (event.target.textContent !== questions[questionIndex].correctAnswer){
    // penalize the users time for wrong answers
    counter -= 4;
    // add a class to the line, so it can fade in (see styles.css for styling)
    line.classList.add('fade-in');    
    // display the line: fade it in (0.5sec)
    line.setAttribute('style','border: 1px solid lightslategray;', 'max-width: 50vw;', 'animation: fadeIn ease-in-out 1s;', 'opacity: 1;');
    // set the content of the answer(Right/Wrong)
    answer.textContent = `${questions[0].answerType[1]} (-4 sec)`;
    // make the wrong answer Red
    answer.setAttribute('style', 'color: red');
    // add a class to the span, so it can fade in (see styles.css for styling)
    answer.classList.add('fade-in');
    // append the answer below the line
    answerTypes.appendChild(answer);
    // set timeout so we move to the next set of question
    staticTimer = setTimeout(update, 750);
    }else if(event.target.textContent === questions[questionIndex].correctAnswer){                       
    // display the line: fade it in
    line.classList.add('fade-in'); 
    // set syles for the line
    line.setAttribute('style','border: 1px solid lightslategray;', 'max-width: 50vw;', 'animation: fadeIn ease-in-out 1s;', 'opacity: 1;');
    // set the content of the new element
    answer.textContent = questions[0].answerType[0];
    // make the right answer green
    answer.setAttribute('style', 'color: green');
    // add a class to the span, so it can fade in (see styles.css for styling)
    answer.classList.add('fade-in');
    // append the answer below the line
    answerTypes.appendChild(answer);
    // set attributes of points
    points.setAttribute('style', 'color: green', 'position: absolute', 'left: 50px');
    // message to user for correct answer               
    points.textContent = '  +10 points!';
    // add to user score
    scoreAndStore(); 
    // add a class to the points, so it can fade in (see styles.css for styling)
    points.classList.add('fade-in');
    // loop through the buttons grab the button nodes to search for correct answer
    for (let i=0; i<numButtons; i++){ 
    // find the button with the right answer
    if(button[i].textContent == questions[questionIndex].correctAnswer){
    // insert the points after the button
    button[i].insertAdjacentElement('afterend',points);
    };
};
    // set timeout so we move to the next set of questions
    staticTimer = setTimeout(update, 750);
    };                
};
///////////////// update the view /////////////////
function update () {
    clearTimeout(staticTimer);
    if (questionIndex < 6){
    // increment the question Index
    questionIndex += 1;
    // set h1 to the next question
    h1.textContent = questions[questionIndex].questionText;
    // clear Right/Wrong answer text
    answer.textContent = " ";
    // hide the line at the bottom
    line.setAttribute('style', 'display: none;');
    // clear points
    points.remove();
    // reset buttons
    for (let i=0; i<numButtons; i++){
    // grab the buttons you made and iterate through their node list and update them
    button[i].textContent = questions[questionIndex].choices[i];
};
    }else if(questionIndex === 6){
    console.log('Where you want to be');
    clearInterval(timer);
    // increment the question Index
    questionIndex += 1;
    // set h1 to the next question
    h1.textContent = questions[questionIndex].questionText;
    // remove the points
    points.remove();
    // remove answer
    answer.remove();
    // add 'your final score" to <li> // pull score from local storage
    li.textContent = `Your final Score is ${userScore}.`;
    processForm();
    
    }
    else if (questionIndex > 6) {
    document.getElementById('clickSubmit').remove();
    document.getElementById('initials').remove();
    document.getElementById('thisLabel').remove();
    document.getElementById('myForm').remove();
    document.getElementById('formContainer').remove();
    li.style.display = 'none';
    viewScores();
    }
};
function viewScores(){
    populateScores();
    console.log(questionIndex);
    // make an <li> to hold buttons
    let lastLi = document.createElement('li');
    line.insertAdjacentElement('beforebegin', lastLi);
    // make the back button
    let backBtn = document.createElement('button');
    backBtn.innerText = 'Go Back'
    lastLi.appendChild(backBtn);
    // make the clear scores button 
    let clearScores = document.createElement('button');
    clearScores.textContent = 'Clear Scores';
    // append the buttons and set id's
    backBtn.insertAdjacentElement('afterend', clearScores);
    backBtn.id = 'button1';
    clearScores.id = 'button2';   
// event listener for back button click
    backBtn.addEventListener('click', function(){
// decided to use location.reload() because of timer conflicts, but wanted to keep this code for later
        // reset to initial state
    // clearScores.remove();
    // backBtn.remove();
    // lastLi.remove();
    // clearInterval(timer)
    // clearTimeout(staticTimer)
    // if(localStorage.length != 0){
    // // code that clears the list of scores without refreshing the page
    // let removeScores = document.querySelectorAll('#highScores');
    // removeScores.forEach(function(removeScores){
    // removeScores.remove();
    // });
    // };
    location.reload()
    })
// event listner for the clearscores button
    clearScores.addEventListener('click', function(){
    localStorage.clear();
    staticTimer = setTimeout(populateScores, 750);
    });
};
function processForm(){
    // create container for the form and append the container after the previous <li>
    let formLi = document.createElement('li');
    formLi.id = 'formContainer';
    li.insertAdjacentElement('afterend', formLi);
    // make the form and append to its container
    let form = document.createElement('form');
    form.id = 'myForm';
    formLi.appendChild(form);
    // make the label and append it
    let label = document.createElement('label');
    label.htmlFor = 'userInitials';
    label.id = 'thisLabel';
    label.innerText = 'Enter Initials: ';
    form.appendChild(label);
    // make the input and append it
    let input = document.createElement('input');
    input.type = 'text';
    input.id = 'initials';
    label.insertAdjacentElement('afterend', input);
    // make the button and append it
    let submitbtn = document.createElement('button');
    submitbtn.id = 'clickSubmit';
    submitbtn.innerText = 'Submit';
    input.insertAdjacentElement('afterend',submitbtn);
// event handler for submit
    submitbtn.addEventListener('click', function(event){
    event.preventDefault();
    if(questionIndex === 7){
    let usersInitials = form.elements.initials.value;
    scoreAndStore(usersInitials, userScore);
    //scoreAndStore(usersInitials, userScore)
    update();
        };
    });
};
////////////// set variables from DOM //////////////
    // grabs the h1 that holds the question
let h1 = document.getElementById("question");     
    //let button = document.getElementById('button');                 
let li = document.getElementById('text');
    // grabs the start button
let startButton = document.getElementById('button')
    // <hr> element for adding a line at the bottom
let line = document.getElementById('hr');
    // set a variable for the timer
let time = document.getElementById('timer');
    // get the <li> below the line
let answerTypes = document.getElementById('belowLine');
    // create an element to display the answer type:
let answer = document.createElement('span');
    // create an element to display points
let points = document.createElement('span');
     // grab the button nodes
let button = document.getElementsByTagName('button')
    // View High Score
let viewHighScores = document.getElementById('ViewScores');
///////////////// Intial state /////////////////
    // Stating value for Questions Array of Objects
let questionIndex = 0;
    // set the users starting score
let userScore = 0;
let timer = null;
let staticTimer = null;
    // Countdown starting time
let counter = 45;
    // set variables for the for-loops
let numButtons = 4;
let parentElement = li; 
////////////////////// Start ///////////////////////
document.addEventListener('DOMContentLoaded', init)
