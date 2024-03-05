import data from '../dummyJSON/testDummy.json' assert { type: 'json' };
import data2 from '../dummyJSON/userDummy.json' assert { type: 'json' };
const listTest = data;
const listUser = data2;

// show detail question
const url = new URL(window.location.href);
const id = url.searchParams.get("id");
const test = listTest.find(test => test.id == id);
const userId = url.searchParams.get("userId");
const user = listUser.find(user => user.id == userId);

// add user answer to question
// get user answer
const userAnswer = user.testHistory.find(test => test.id == id);
userAnswer.listAnswer.forEach((answer)=>{
    test.questions.forEach((question)=>{
        if(question.id == answer.questionId){
            question.userAnswerId = answer.answerId;
        }
    });
});
test.questions.forEach((question)=>{
    console.log(question.userAnswerId);
    question.userAnswer = question.answers.find(answer => answer.id == question.userAnswerId).title;
});

// get true answer
test.questions.forEach((question)=>{
    question.answers.forEach((answer)=>{
        if(answer.isCorrect == true){
            question.trueAnswer = answer.title;
        }
    });
});


//display data
const table = document.querySelector("[table-display]");
if(table){
    test.questions.forEach((question,index)=>{    
        const row = table.insertRow(index+1);
        row.innerHTML = `
            <td>${index+1}</td>
            <td>${question.title}</td>
            <td>${question.answers[0].title}</td>
            <td>${question.answers[1].title}</td>
            <td>${question.answers[2].title}</td>
            <td>${question.answers[3].title}</td>
            <td>${question.trueAnswer}</td>
            <td>${question.userAnswer}</td>
        `;
    });
}

// export data to excel
const exportButton = document.getElementById('btn-export');
const tableDisplay = document.querySelector("[table-display]");


exportButton.addEventListener('click', () => {
  /* Create worksheet from HTML DOM TABLE */
  const wb = XLSX.utils.table_to_book(tableDisplay, {sheet: 'sheet-1'});

  /* Export to file (start a download) */
  XLSX.writeFile(wb, 'MyTable.xlsx');
});





