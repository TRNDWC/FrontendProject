import data from '../dummyJSON/testDummy.json' assert { type: 'json' };
import data2 from '../dummyJSON/userDummy.json' assert { type: 'json' };
const listUser = data2;
const listTest = data;

const id = new URL(window.location.href).searchParams.get("id");
const test = listTest.find(test => test.id == id);

const titleInput = document.querySelector('[name]');
titleInput.value = test.title;
const timeInput = document.querySelector('[name="duration"]');
timeInput.value = test.time;

//fill tableHistory with results
const tableHistory = document.querySelector('[table-history]');
test.result.forEach((result,index) => {
    const row = tableHistory.insertRow(index+1);
    const user = listUser.find(user => user.id == result.userId);
    user.score = result.score;
    if(result.status == "finished"){
        result.statusHTML = `
            <a class="badge bg-success" href="javascript:;" data-status="${result.status}" data-id="" button-change-status="button-change-status">Đã hoàn thành`;
    }
    else{
        result.statusHTML = `
            <a class="badge bg-danger" href="javascript:;" data-status="${result.status}" data-id="" button-change-status="button-change-status">Chưa hoàn thành`;
    }
    row.innerHTML = `
        <td>${result.id}</td>
        <td>${user.name}</td>
        <td>${user.score}</td>
        <td>${result.statusHTML}</td>
        <td>${result.timeFinish}</td>
    `;
});

//statistic of test
const test1 = listTest.find(test => test.id == id);
const totalUser = test1.result.length;
const totalTest = test1.result.length;
let totalFinishedTest = 0;
let totalUnfinishedTest = 0;
test1.result.forEach(res => {
    if(res.status == "finished") totalFinishedTest++;
    else totalUnfinishedTest++;
});
const finishedRate = totalFinishedTest/totalTest*100;
const table1 = document.querySelector('[table-1]');
table1.innerHTML = `
    <tr>
        <p> Số lượt làm bài : <b> ${totalUser} </b> </p>
        <p> Số bài thi hoàn thành : <b> ${totalFinishedTest} </b> </p>
        <p>Số bài thi chưa hoàn thành : <b> ${totalUnfinishedTest} </b></p>
        <p>Tỷ lệ hoàn thành : <b> ${finishedRate} % </b></p>
    `;

//static score
const table2 = document.querySelector('[table-2]');
let maxScore =[];
let minScroe =[];
let ave =0;
const size = Number.parseInt(test1.result.length);
// find max,min, average
test1.result.forEach(res =>{
    ave += (Number.parseInt(res.score))/size;
    maxScore.push(Number.parseInt(res.score));
})
let highest = Math.max(...maxScore);
let lowest = Math.min(...maxScore);
let range =`${lowest} - ${highest}`;


table2.innerHTML = `
    <tr>
        <p> Điểm cao nhất : <b> ${highest} </b> </p>
        <p> Điểm thấp nhất : <b> ${lowest} </b> </p>
        <p> Điểm trung bình : <b> ${ave.toFixed(2)} </b> </p>
        <p> Khoảng điểm : <b> ${range} </b> </p>
    </tr>
    `;


