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