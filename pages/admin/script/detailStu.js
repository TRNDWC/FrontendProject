// get id in url
const url = new URL(window.location.href);
const id = url.searchParams.get("id");

//get data from json
import data from '../dummyJSON/userDummy.json' assert { type: 'json' };
const student = data.find(student => student.id == id);
//display data
const name = document.querySelector("[name]");
name.setAttribute("value",student.name);
const email = document.querySelector("[email]");
email.setAttribute("value",student.email);
const password = document.querySelector("[password]");
password.setAttribute("value",student.password);
//display in table
const table = document.querySelector("[table-display]");
if(table){
    student.testHistory.forEach((course,index)=>{
        const row = table.insertRow(index+1);
        // convert time to date and time
        const date = new Date(course.time);
        course.time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
        //status
        if(course.status == "active"){
            course.status = `
                <a class="badge bg-success" href="javascript:;" data-status="${course.status}" data-id="" button-change-status="button-change-status">Đang hoạt động`;
        }
        else{
            course.status = `
                <a class="badge bg-danger" href="javascript:;" data-status="${course.status}" data-id="" button-change-status="button-change-status">Đã kết thúc`;
        }
        row.innerHTML = `
            <td>${index+1}</td>
            <td>${course.title}</td>
            <td>${course.time}</td>
            <td>${course.score}</td>
            <td>${course.status}</td>
        `;
    });
}
