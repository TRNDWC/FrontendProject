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
        this.userAnswer = userAnswer;
        let myAnswer = this.userAnswer.split(' ')[0];
        let correctAnswer = this.correctAnswer.split(' ')[0];
        this.isCorrect = myAnswer === correctAnswer;
    }
}


setUpDetail();

function setUpDetail() {

    let data = localStorage.getItem('questions');
    let questions = JSON.parse(data);
    console.log(questions, typeof questions);

    let detailElement = document.getElementById('detail');
    let detailHtml = '';
    questions.forEach((question, index) => {
        detailHtml += getQuestionDetail(index, question.question, question.userAnswer, question.correctAnswer);
    });
    detailElement.innerHTML = detailHtml;
    // console.log(detailHtml);
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
