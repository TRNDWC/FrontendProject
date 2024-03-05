import data from "../dummyJSON/testDummy.json" assert { type: "json" };

import data2 from "../dummyJSON/userDummy.json" assert { type: "json" };
const listUser = data2;
const listTest = data;

const id = new URL(window.location.href).searchParams.get("id");
const test = listTest.find((test) => test.id == id);

const titleInput = document.querySelector("[name]");
titleInput.value = test.title;
const timeInput = document.querySelector('[name="duration"]');
timeInput.value = test.time;

//fill tableHistory with results
const tableHistory = document.querySelector("[table-history]");
test.result.forEach((result, index) => {
  const row = tableHistory.insertRow(index + 1);
  const user = listUser.find((user) => user.id == result.userId);
  user.score = result.score;
  if (result.status == "finished") {
    result.statusHTML = `
            <a class="badge bg-success" href="javascript:;" data-status="${result.status}" data-id="" button-change-status="button-change-status">Đã hoàn thành`;
  } else if (result.status == "unfinished") {
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
const test1 = listTest.find((test) => test.id == id);
const totalUser = test1.result.length;
const totalTest = test1.result.length;
let totalFinishedTest = 0;
let totalUnfinishedTest = 0;
test1.result.forEach((res) => {
  if (res.status == "finished") totalFinishedTest++;
  else totalUnfinishedTest++;
});
const finishedRate = (totalFinishedTest / totalTest) * 100;
const table1 = document.querySelector("[table-1]");
table1.innerHTML = `
    <tr>
        <p> Số lượt làm bài : <b> ${totalUser} </b> </p>
        <p> Số bài thi hoàn thành : <b> ${totalFinishedTest} </b> </p>
        <p>Số bài thi chưa hoàn thành : <b> ${totalUnfinishedTest} </b></p>
        <p>Tỷ lệ hoàn thành : <b> ${finishedRate} % </b></p>
    `;

//static score
const table2 = document.querySelector("[table-2]");
let maxScore = [];
let minScroe = [];
let ave = 0;
const size = Number.parseInt(test1.result.length);
// find max,min, average
test1.result.forEach((res) => {
  ave += Number.parseInt(res.score) / size;
  maxScore.push(Number.parseInt(res.score));
});
let highest = Math.max(...maxScore);
let lowest = Math.min(...maxScore);
let range = `${lowest} - ${highest}`;

table2.innerHTML = `
    <tr>
        <p> Điểm cao nhất : <b> ${highest} </b> </p>
        <p> Điểm thấp nhất : <b> ${lowest} </b> </p>
        <p> Điểm trung bình : <b> ${ave.toFixed(2)} </b> </p>
        <p> Khoảng điểm : <b> ${range} </b> </p>
    </tr>
    `;

// chart
var ctx = document.getElementById("myChart1").getContext("2d");
// get data from listTest to chart
let dataChart = [];

var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Đã hoàn thành", "Chưa hoàn thành"],
    datasets: [
      {
        label: "",
        data: [totalFinishedTest, totalUnfinishedTest],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {},
});

//chart 2
// get all distinct score and count
let distinctScore = [];
let countScore = [];
test1.result.forEach((res) => {
  if (distinctScore.includes(res.score) == false) {
    distinctScore.push(res.score);
    countScore.push(1);
  } else {
    let index = distinctScore.indexOf(res.score);
    countScore[index]++;
  }
});
var ctx = document.getElementById("myChart2").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: distinctScore,
    datasets: [
      {
        label: "Số lượng",
        data: countScore,
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//get sort value
//get type of sort
const sort = document.querySelector("[sort-select]");
if (sort) {
  const url = new URL(window.location.href);
  sort.addEventListener("change", (event) => {
    const value = event.target.value;
    if (value) {
      url.searchParams.set("sort", value);
    } else {
      url.searchParams.delete("sort");
    }
    window.location.href = url.href;
  });
}
//sort

const urlSort = new URL(window.location.href);
const typeSort = urlSort.searchParams.get("sort");
switch (typeSort) {
  case "title-asc":
    listUser.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    //delete all row in table
    const table = document.querySelector("[table-history]");
    const row1 = table.querySelectorAll("tr");
    row1.forEach((row, index) => {
      if (index > 0) {
        row.remove();
      }
    });
    // fill data to table
    test.result.forEach((result, index) => {
      const row = table.insertRow(index + 1);
      const user = listUser.find((user) => user.id == result.userId);
      user.score = result.score;
      if (result.status == "finished") {
        result.statusHTML = `
            <a class="badge bg-success" href="javascript:;" data-status="${result.status}" data-id="" button-change-status="button-change-status">Đã hoàn thành`;
      } else if (result.status == "unfinished") {
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
    //change text
    const sort = document.querySelector("[sort-select]");
    if(sort){
        // get value of sort
        const url = new URL(window.location.href);
        const typeSort = url.searchParams.get("sort");
        if(typeSort){
            sort.value = typeSort;
        }
    }
    break;
  case "title-desc":
    listUser.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    //delete all row in table
    const table1 = document.querySelector("[table-history]");
    const row2 = table1.querySelectorAll("tr");
    row2.forEach((row, index) => {
      if (index > 0) {
        row.remove();
      }
    });
    test.result.forEach((result, index) => {
      const row = table1.insertRow(index + 1);
      const user = listUser.find((user) => user.id == result.userId);
      user.score = result.score;
      if (result.status == "finished") {
        result.statusHTML = `
            <a class="badge bg-success" href="javascript:;" data-status="${result.status}" data-id="" button-change-status="button-change-status">Đã hoàn thành`;
      } else if (result.status == "unfinished") {
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
    //change text
    const sort1 = document.querySelector("[sort-select]");
    if(sort1){
        // get value of sort
        const url = new URL(window.location.href);
        const typeSort = url.searchParams.get("sort");
        if(typeSort){
            sort1.value = typeSort;
        }
    }
    break;
  case "score-asc":
    test.result.sort((a, b) => {
      let scoreA = Number.parseInt(a.score);
      let scoreB = Number.parseInt(b.score);
      return scoreB - scoreA;
    });
    //delete all row in table
    const table2 = document.querySelector("[table-history]");
    const row3 = table2.querySelectorAll("tr");
    row3.forEach((row, index) => {
      if (index > 0) {
        row.remove();
      }
    });
    test.result.forEach((result, index) => {
      const row = table2.insertRow(index + 1);
      const user = listUser.find((user) => user.id == result.userId);
      user.score = result.score;
      if (result.status == "finished") {
        result.statusHTML = `
            <a class="badge bg-success" href="javascript:;" data-status="${result.status}" data-id="" button-change-status="button-change-status">Đã hoàn thành`;
      } else if (result.status == "unfinished") {
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
    //change text
    const sort2 = document.querySelector("[sort-select]");
    if(sort2){
        // get value of sort
        const url = new URL(window.location.href);
        const typeSort = url.searchParams.get("sort");
        if(typeSort){
            sort2.value = typeSort;
        }
    }
    break;
  case "score-desc":
    test.result.sort((a, b) => {
      let scoreA = Number.parseInt(a.score);
      let scoreB = Number.parseInt(b.score);
      return scoreB - scoreA;
    });
    //delete all row in table
    const table3 = document.querySelector("[table-history]");
    const row4 = table3.querySelectorAll("tr");
    row4.forEach((row, index) => {
      if (index > 0) {
        row.remove();
      }
    });
    test.result.forEach((result, index) => {
      const row = table3.insertRow(index + 1);
      const user = listUser.find((user) => user.id == result.userId);
      user.score = result.score;
      if (result.status == "finished") {
        result.statusHTML = `
            <a class="badge bg-success" href="javascript:;" data-status="${result.status}" data-id="" button-change-status="button-change-status">Đã hoàn thành`;
      } else if (result.status == "unfinished") {
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
    //change text
    const sort3 = document.querySelector("[sort-select]");
    if(sort3){
        // get value of sort
        const url = new URL(window.location.href);
        const typeSort = url.searchParams.get("sort");
        if(typeSort){
            sort3.value = typeSort;
        }
    }
    break;
  case "position-desc":
    // sort by time
    test.result.sort((a, b) => {
      let timeA = Number.parseInt(a.timeFinish);
      let timeB = Number.parseInt(b.timeFinish);
      return timeB - timeA;
    });
    //delete all row in table
    const table4 = document.querySelector("[table-history]");
    const row5 = table4.querySelectorAll("tr");
    row5.forEach((row, index) => {
      if (index > 0) {
        row.remove();
      }
    });
    test.result.forEach((result, index) => {
      const row = table4.insertRow(index + 1);
      const user = listUser.find((user) => user.id == result.userId);
      user.score = result.score;
      if (result.status == "finished") {
        result.statusHTML = `
            <a class="badge bg-success" href="javascript:;" data-status="${result.status}" data-id="" button-change-status="button-change-status">Đã hoàn thành`;
      } else if (result.status == "unfinished") {
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
    //change text
    const sort4 = document.querySelector("[sort-select]");
    if(sort4){
        // get value of sort
        const url = new URL(window.location.href);
        const typeSort = url.searchParams.get("sort");
        if(typeSort){
            sort4.value = typeSort;
        }
    }
    break;
  case "position-asc":
    // sort by time
    test.result.sort((a, b) => {
      let timeA = Number.parseInt(a.timeFinish);
      let timeB = Number.parseInt(b.timeFinish);
      return timeA - timeB;
    });
    //delete all row in table
    const table5 = document.querySelector("[table-history]");
    const row6 = table5.querySelectorAll("tr");
    row6.forEach((row, index) => {
      if (index > 0) {
        row.remove();
      }
    });
    test.result.forEach((result, index) => {
      const row = table5.insertRow(index + 1);
      const user = listUser.find((user) => user.id == result.userId);
      user.score = result.score;
      if (result.status == "finished") {
        result.statusHTML = `
            <a class="badge bg-success" href="javascript:;" data-status="${result.status}" data-id="" button-change-status="button-change-status">Đã hoàn thành`;
      } else if (result.status == "unfinished") {
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
    //change text
    const sort5= document.querySelector("[sort-select]");
    if(sort5){
        // get value of sort
        const url = new URL(window.location.href);
        const typeSort = url.searchParams.get("sort");
        if(typeSort){
            sort5.value = typeSort;
        }
    }
  default:
    break;
}

//search
const search = document.querySelector("[name='keyword']");
const formSearch = document.querySelector("[btnsearch='btnsearch']");
if(formSearch){
    formSearch.addEventListener("submit",(event)=>{
        event.preventDefault();
        const keyword = event.target.elements.keyword.value;
        if(keyword){
            // get current url
            const id = new URL(window.location.href).searchParams.get("id");
            console.log(id);
            // set id of test to url and keyword to url
            // url.searchParams.set("keyword",keyword);
            // url.searchParams.set("id",id);
            // console.log(url.href);
        }
        else{
            // url.searchParams.delete("keyword");
        }
        window.location.href = url.href;
    });
}
//end search

