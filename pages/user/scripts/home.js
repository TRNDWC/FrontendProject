// const data = [
//   {
//     "id": "1",
//     "type": "Luyện tập",
//     "name": "Html css",
//     "date": "2024-02-28",
//     "duration": "60",
//     "time": "10:10:10",
//     "questions": questions
//   },
//   {
//     "id": "2",
//     "type": "Cuối kì",
//     "name": "JavaScript",
//     "date": "2024-01-01",
//     "duration": "60",
//     "time": "10:10:10",
//     "questions": questions
//   },
//   {
//     "id": "3",
//     "type": "Giữa kì",
//     "name": "Lập trình web",
//     "date": "2024-03-13",
//     "duration": "60",
//     "time": "10:10:10",
//     "questions": questions
//   },
//   {
//     "id": "4",
//     "type": "Cuối kì",
//     "name": "Hehe",
//     "date": "2024-02-14",
//     "duration": "60",
//     "time": "10:10:10",
//     "questions": questions
//   },
//   {
//     "id": "5",
//     "type": "Luyện tập",
//     "name": "Html css",
//     "date": "2024-01-12",
//     "duration": "60",
//     "time": "10:10:10",
//     "questions": questions
//   }
// ]

class Test {
  constructor(id, type, name, date, duration, time, questions) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.date = date;
    this.duration = duration;
    this.time = time;
    this.questions = questions;
  }
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

function setUpAnswers() {
  questions.forEach((question, index) => {
      let userAnswer = document.querySelector(`input[name="question${index + 1}"]:checked`);
      if (userAnswer) {
          question.setUserAnswer(userAnswer.value);
      }
  });
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


  
const data = [
  new Test(1, 'Luyện tập', 'Html css', '2024-02-28', '60', '10:10:10', questions),
  new Test(2, 'Cuối kì', 'JavaScript', '2024-01-01', '60', '10:10:10', questions),
  new Test(3, 'Giữa kì', 'Lập trình web', '2024-03-13', '60', '10:10:10', questions),
  new Test(4, 'Cuối kì', 'Hehe', '2024-02-14', '60', '10:10:10', questions),
  new Test(5, 'Luyện tập', 'Html css', '2024-01-12', '60', '10:10:10', questions),
  new Test(6, 'Cuối kì', 'JavaScript', '2024-01-01', '60', '10:10:10', questions)];

var type = null;
var start_date = null;
var end_date = null;
var title = null;
// Initialize test table
genTableBody();

function onFilter() {
  console.log('Filter');
  start_date = document.getElementById('input_from').value;
  if (start_date === '') {
    start_date = null;
  }
  end_date = document.getElementById('input_to').value;
  if (end_date === '') {
    end_date = null;
  }
  title = document.getElementById('title').value;
  if (title === '') {
    title = null;
  }
  genTableBody(type, start_date, end_date, title);
}

function genTableBody(type = null, start_date = null,end_date=null, title = null) {
  let tableBody = document.getElementById('table-body');
  let tableContent = '';
  let dataFilter = [];
  let start=new Date(start_date);
  let end=new Date(end_date);
  console.log(type, start_date, end_date, title, new Date(start_date), new Date(end_date) );
  for (let i = 0; i < data.length; i++) {
    console.log("TYPE",new Date(data[i].date) < start);
    if (type !== null && data[i].type.toLocaleLowerCase() !== type.toLocaleLowerCase() && type !== 'Tất cả') {
      console.log("TYPE",type, data[i].type);
      continue;
    }
    if (start_date !== null && new Date(data[i].date) < start) {
      console.log("start",start_date, new Date(data[i].date));
      continue;
    }
    if (end_date !== null && new Date(data[i].date) > end) {
      continue;
    }
    if (title !== null && data[i].name.toLowerCase().indexOf(title.toLowerCase()) === -1) {
      continue;
    }
    dataFilter.push(data[i]);
    // console.log("add",data[i]);
  }
  for (let i = 0; i < dataFilter.length; i++) {
    tableContent += `
    <tr class="">
    <td
      class="text-dark font-medium text-base py-2 px-2 bg-white ">
      ${dataFilter[i].type}
    </td>
    <td
      class="text-dark font-medium text-base py-2 px-2 bg-white ">
      ${dataFilter[i].name}
    </td>
    <td
      class="text-dark font-medium text-base py-2 px-2 bg-white ">
      ${dataFilter[i].date}
    </td>
    <td
      class="text-dark font-medium text-base py-2 px-2 bg-white ">
      ${dataFilter[i].time}
    </td>
    <td
      class="text-dark font-medium text-base py-2 px-2 bg-white ">
      ${dataFilter[i].duration}
    </td>
    <td
      class="text-dark font-medium text-base py-2 px-2 bg-white ">
      <a onclick="changeToText('${dataFilter[i].name}')"
        class="border border-danger py-2 px-6 text-danger inline-block rounded hover:bg-danger hover:text-white">
        Bắt đầu
      </a>
    </td>
  </tr>
    `
  }
  tableBody.innerHTML = tableContent;
}

function onTypeChange(titles) {
  type = titles;
  let type_title = document.getElementById('type');
  type_title.innerHTML = titles;
  console.log(titles);
}

function changeToText(id) {
  let test = data.find((item) => item.name === id);
  let js = JSON.stringify(test);
  localStorage.setItem('test', js);
  console.log('changeToText', test);
  window.location.href = '../test_form/test.html';
}

// // Search by type
// function searchByType(type = null) {
//   console.log(type);
//   if (type === 'All') {
//     genTableBody();
//     return;
//   }
//   let tableBody = document.getElementById('table-body');
//   let tableContent = '';
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].type === type) {
//       tableContent += `
//         <tr class="">
//         <td
//           class="text-dark font-medium text-base py-2 px-2 bg-white ">
//           ${data[i].type}
//         </td>
//         <td
//           class="text-dark font-medium text-base py-2 px-2 bg-white ">
//           ${data[i].name}
//         </td>
//         <td
//           class="text-dark font-medium text-base py-2 px-2 bg-white ">
//           ${data[i].date}
//         </td>
//         <td
//           class="text-dark font-medium text-base py-2 px-2 bg-white ">
//           ${data[i].time}
//         </td>
//         <td
//           class="text-dark font-medium text-base py-2 px-2 bg-white ">
//           ${data[i].duration}
//         </td>
//         <td
//           class="text-dark font-medium text-base py-2 px-2 bg-white ">
//           <a href="javascript:void(0)"
//             class="border border-danger py-2 px-6 text-danger inline-block rounded hover:bg-danger hover:text-white">
//             Bắt đầu
//           </a>
//         </td>
//       </tr>
//         `
//     }
//   }
//   tableBody.innerHTML = tableContent;
// }

// // Search by date
// function searchByDate() {
//   let start = document.getElementById('input_from').value;
//   let end = document.getElementById('input_to').value;
//   // Empty start and end
//   if (start === '' && end === '') {
//     genTableBody();
//     return;
//   }

//   // Empty start
//   if (start === '') {
//     console.log('Empty start');
//     let end_date = new Date(end);
//     let tableBody = document.getElementById('table-body');
//     let tableContent = '';
//     for (let i = 0; i < data.length; i++) {
//       let date = new Date(data[i].date);
//       if (date <= end_date) {
//         tableContent += `
//           <tr class="">
//           <td
//             class="text-dark font-medium text-base py-2 px-2 bg-white ">
//             ${data[i].type}
//           </td>
//           <td
//             class="text-dark font-medium text-base py-2 px-2 bg-white ">
//             ${data[i].name}
//           </td>
//           <td
//             class="text-dark font-medium text-base py-2 px-2 bg-white ">
//             ${data[i].date}
//           </td>
//           <td
//             class="text-dark font-medium text-base py-2 px-2 bg-white ">
//             ${data[i].time}
//           </td>
//           <td
//             class="text-dark font-medium text-base py-2 px-2 bg-white ">
//             ${data[i].duration}
//           </td>
//           <td
//             class="text-dark font-medium text-base py-2 px-2 bg-white ">
//             <a href="javascript:void(0)"
//               class="border border-danger py-2 px-6 text-danger inline-block rounded hover:bg-danger hover:text-white">
//               Bắt đầu
//             </a>
//           </td>
//         </tr>
//           `
//       }
//     }
//     tableBody.innerHTML = tableContent;
//     return;
//   }
//   // Empty end
//   if (end === '') {
//     console.log('Empty end');
//     let start_date = new Date(start);
//     let tableBody = document.getElementById('table-body');
//     let tableContent = '';
//     for (let i = 0; i < data.length; i++) {
//       let date = new Date(data[i].date);
//       if (date >= start_date) {
//         tableContent += `
//           <tr class="">
//           <td
//             class="text-dark font-medium text-base py-2 px-2 bg-white ">
//             ${data[i].type}
//           </td>
//           <td
//             class="text-dark font-medium text-base py-2 px-2 bg-white ">
//             ${data[i].name}
//           </td>
//           <td
//             class="text-dark font-medium text-base py-2 px-2 bg-white ">
//             ${data[i].date}
//           </td>
//           <td
//             class="text-dark font-medium text-base py-2 px-2 bg-white ">
//             ${data[i].time}
//           </td>
//           <td
//             class="text-dark font-medium text-base py-2 px-2 bg-white ">
//             ${data[i].duration}
//           </td>
//           <td
//             class="text-dark font-medium text-base py-2 px-2 bg-white ">
//             <a href="javascript:void(0)"
//               class="border border-danger py-2 px-6 text-danger inline-block rounded hover:bg-danger hover:text-white">
//               Bắt đầu
//             </a>
//           </td>
//         </tr>
//           `
//       }
//     }
//     tableBody.innerHTML = tableContent;
//     return;
//   }
//   let start_date = new Date(start);
//   let end_date = new Date(end);
//   let tableBody = document.getElementById('table-body');
//   let tableContent = '';
//   for (let i = 0; i < data.length; i++) {
//     let date = new Date(data[i].date);
//     if (date >= start_date && date <= end_date) {
//       tableContent += `
//         <tr class="">
//         <td
//           class="text-dark font-medium text-base py-2 px-2 bg-white ">
//           ${data[i].type}
//         </td>
//         <td
//           class="text-dark font-medium text-base py-2 px-2 bg-white ">
//           ${data[i].name}
//         </td>
//         <td
//           class="text-dark font-medium text-base py-2 px-2 bg-white ">
//           ${data[i].date}
//         </td>
//         <td
//           class="text-dark font-medium text-base py-2 px-2 bg-white ">
//           ${data[i].time}
//         </td>
//         <td
//           class="text-dark font-medium text-base py-2 px-2 bg-white ">
//           ${data[i].duration}
//         </td>
//         <td
//           class="text-dark font-medium text-base py-2 px-2 bg-white ">
//           <a href="javascript:void(0)"
//             class="border border-danger py-2 px-6 text-danger inline-block rounded hover:bg-danger hover:text-white">
//             Bắt đầu
//           </a>
//         </td>
//       </tr>
//         `
//     }
//   }
//   tableBody.innerHTML = tableContent;
// }

// function searchByName() {
//   let key = document.getElementById('search').value;
//   genTableBody(key);
// }

