setUpResult();

function setUpResult() {
    let scoreElement = document.getElementById('score');
    let correctElement = document.getElementById('correct');
    let wrongElement = document.getElementById('wrong');
    let noneElement = document.getElementById('none');
    let url = new URL(window.location.href);
    let correct = parseInt(url.searchParams.get('correct'));
    let wrong = parseInt(url.searchParams.get('wrong'));
    let none = parseInt(url.searchParams.get('none'));
    let score = correct / (correct + wrong + none) * 10;
    console.log(score);
    scoreElement.innerHTML = score.toFixed(2);
    correctElement.innerHTML = correct;
    // correctElement.style.outline = '2px solid green';
    wrongElement.innerHTML = wrong;
    // wrongElement.style.outline = '2px solid red';
    noneElement.innerHTML = none;
    // noneElement.style.outline = '2px solid yellow';
}

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
        this.userAnswer = this.correctAnswer;
        let myAnswer = this.userAnswer.split(' ')[0];
        let correctAnswer = this.correctAnswer.split(' ')[0];
        this.isCorrect = myAnswer === correctAnswer;
    }
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
    new Question(19, 'What is the capital of England?', ['Paris', 'London', 'Berlin', 'Madrid'], 'London'),
    new Question(20, 'What is the capital of Italy?', ['Paris', 'London', 'Rome', 'Madrid'], 'Rome')];



setUpDetail();

function setUpDetail() {

    questions.forEach(question => {
        question.setUserAnswer(question.correctAnswer);
    });

    let detailElement = document.getElementById('detail');
    let detailHtml = '';
    questions.forEach((question, index) => {
        detailHtml += getQuestionDetail(index, question.question, question.userAnswer, question.correctAnswer);
    });
    detailElement.innerHTML = detailHtml;
    console.log(detailHtml);
}

function getQuestionDetail(index, question, myAnswer, correctAnswer) {
    // neu wrong chuyen mau do
    if (myAnswer === correctAnswer) {
        return `<div>
        <div class="flex-wrap py-3 px-2 m-1 rounded-md font-bold border-2 content-center" style="color: #2b9348; border-color: #2b9348; outline: none;">
            <p class="text-1xl">${index + 1}. ${myAnswer}/${correctAnswer}</p>
        </div>
    </div>`;
    } else {
        return `<div>
        <div class="flex-wrap py-3 px-2 m-1 rounded-md font-bold border-2 content-center" style="color: #B82441; border-color: #B82441; outline: none;">
            <p class="text-1xl">${index + 1}. ${myAnswer}/${correctAnswer}</p>
        </div>
    </div>`;
    }
}
