class Question {
    constructor(id, question, answers, correctAnswer, userAnswer = null, isCorrect = false) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.userAnswer = userAnswer;
        this.isCorrect = isCorrect;
    }
    setUserAnswer(userAnswer) {
        this.userAnswer = userAnswer;
        let myAnswer = this.userAnswer.split(' ')[0];
        let correctAnswer = this.correctAnswer.split(' ')[0];
        this.isCorrect = myAnswer === correctAnswer;
    }
}

function setUpAnswers() {
    questions.forEach((question, index) => {
        let userAnswer = document.querySelector(`input[name="question${index + 1}"]:checked`);
        if (userAnswer) {
            question.setUserAnswer(userAnswer.value);
        }
    });
    console.log('questions', questions);
}

var questions = [
    new Question(1, 'What is the capital of France?', ['Paris', 'London', 'Berlin', 'Madrid'], 'Paris'),
    new Question(2, 'What is the capital of Germany?', ['Paris', 'London', 'Berlin', 'Madrid'], 'Berlin'),
    new Question(3, 'What is the capital of Spain?', ['Paris', 'London', 'Berlin', 'Madrid'], 'Madrid'),
    new Question(4, 'What is the capital of England?', ['Paris', 'London', 'Berlin', 'Madrid'], 'London'),
    new Question(5, 'What is the capital of Italy?', ['Paris', 'London', 'Rome', 'Madrid'], 'Rome'),
    new Question(6, 'What is the capital of France?', ['Paris', 'London', 'Berlin', 'Madrid'], 'Paris'),
    new Question(7, 'What is the capital of Germany?', ['Paris', 'London', 'Berlin', 'Madrid'], 'Berlin'),
    new Question(8, 'What is the capital of Spain?', ['Paris', 'London', 'Berlin', 'Madrid'], 'Madrid'),
    new Question(9, 'What is the capital of England?', ['Paris', 'London', 'Berlin', 'Madrid'], 'London'),
    new Question(10, 'What is the capital of Italy?', ['Paris', 'London', 'Rome', 'Madrid'], 'Rome'),
    new Question(11, 'What is the capital of France?', ['Paris', 'London', 'Berlin', 'Madrid'], 'Paris'),
    new Question(12, 'What is the capital of Germany?', ['Paris', 'London', 'Berlin', 'Madrid'], 'Berlin'),
    new Question(13, 'What is the capital of Spain?', ['Paris', 'London', 'Berlin', 'Madrid'], 'Madrid'),
    new Question(14, 'What is the capital of England?', ['Paris', 'London', 'Berlin', 'Madrid'], 'London'),
    new Question(15, 'What is the capital of Italy?', ['Paris', 'London', 'Rome', 'Madrid'], 'Rome'),
    new Question(16, 'What is the capital of France?', ['Paris', 'London', 'Berlin', 'Madrid'], 'Paris'),
    new Question(17, 'What is the capital of Germany?', ['Paris', 'London', 'Berlin', 'Madrid'], 'Berlin'),
    new Question(18, 'What is the capital of Spain?', ['Paris', 'London', 'Berlin', 'Madrid'], 'Madrid'),
    new Question(19, 'What is the capital of England?', ['Paris', 'London', 'Berlin', 'Madrid'], 'London')];

let currentQuestion = 0;
timeCountDown();
setUpQuestions();
setUpMenu();

function setUpMenu(){
    let menuArea = document.getElementById('menu-area');
    questions.forEach((question, index) => {
        menuArea.innerHTML += getMenuItemHtml(index);
    });
}

function setUpQuestions() {

    console.log('questions', questions);
    questions.forEach((question, index) => {
        console.log('question'+index, question.isCorrect, question.userAnswer, question.correctAnswer);
    });

    let testArea = document.getElementById('test-area');
    let start = currentQuestion / 5;
    start = Math.floor(start) * 5;
    let data = ""
    for (let i = start; i < start+5; i++) {
        if (i >= questions.length) {
            break;
        }
        data+= getquestionHtml(questions[i], i);
    }
    testArea.innerHTML = data;
}

function getquestionHtml(question, index) {
    let checked1 = question.userAnswer?.split(' ')[0] === question.answers[0] ? 'checked' : '';
    let checked2 = question.userAnswer?.split(' ')[0] === question.answers[1] ? 'checked' : '';
    let checked3 = question.userAnswer?.split(' ')[0] === question.answers[2] ? 'checked' : '';
    let checked4 = question.userAnswer?.split(' ')[0] === question.answers[3] ? 'checked' : '';

    return `<div class="flex flex-wrap border-2 rounded-xl px-2 py-2 my-5">
    <!-- question form with radio button -->
    <div class="test-form p-2" onchange="onAnswerClick(${index})">
        <div class="question">
            <p id="question">${index + 1}. ${question.question}</p>
        </div>
        <div class="options" style="accent-color: #B82441;">
            <div class="option">
                <input type="radio" name="question${index + 1}" id="option${index*5}" value="${question.answers[0]}" ${checked1}>
                <label for="option${index*5}">${question.answers[0]}</label>
            </div>
            <div class="option">
                <input type="radio" name="question${index + 1}" id="option${index*5+1}" value="${question.answers[1]}" ${checked2}>
                <label for="option${index*5+1}">${question.answers[1]}</label>
            </div>
            <div class="option">
                <input type="radio" name="question${index + 1}" id="option${index*5+2}" value="${question.answers[2]}" ${checked3}>
                <label for="option${index*5+2}">${question.answers[2]}</label>
            </div>
            <div class="option">
                <input type="radio" name="question${index + 1}" id="option${index*5+3}" value="${question.answers[3]}" ${checked4}>
                <label for="option${index*5+3}">${question.answers[3]}</label>
            </div>
        </div>
    </div>
</div>
`;
}

function getMenuItemHtml(index) {
    return `<div class="menu-item">
    <button id="button${index}" class="w-10 py-3 m-1/2 rounded-md font-bold border-2 content-center" style="color: #B82441; border-color: #B82441; outline: none;
    " onclick="buttonClick(${index})">${index+1}</button>
</div>`;
}

function buttonClick(index) {
    console.log('buttonClick');
    currentQuestion = index;
    console.log('currentQuestion', currentQuestion);
    setUpQuestions();
    for (let i = 0; i < questions.length; i++) {
        let button = document.getElementById(`button${i}`);
        if (i === index) {
            button.style.backgroundColor = '#B82441';
            button.style.color = 'white';
            button.style.borderColor = '#B82441';
        } else {
            button.style.backgroundColor = 'white';
            button.style.color = '#B82441';
            button.style.borderColor = '#B82441';
        }
    }
}


function timeCountDown() {
    var time = 120;
    let timeItem = document.getElementById('time');
    timeItem.innerHTML = getTimeFormat(time);
    var interval = setInterval(function () {
        time--;
        timeItem.innerHTML = getTimeFormat(time);
        if (time === 0) {
            clearInterval(interval);
            alert('Time is up!');
        }
    }
        , 1000);
}

function getTimeFormat(time) {
    //   return time mm:ss
    if (time < 10) {
        return '00:0' + time;
    } else if (time < 60) {
        return '00:' + time;
    } else {
        var minutes = Math.floor(time / 60);
        var seconds = time - minutes * 60;
        if (minutes < 10) {
            minutes = '0' + minutes;
        } if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return minutes + ':' + seconds;
    }
}

function onAnswerClick(index) {
    let userAnswer = document.querySelector(`input[name="question${index + 1}"]:checked`);
    questions[index].setUserAnswer(userAnswer.value);
}

function onPrevClick() {
    let score = 0;
    questions.forEach((question, index) => {
        if (question.isCorrect) {
            score++;
        }
    });
}