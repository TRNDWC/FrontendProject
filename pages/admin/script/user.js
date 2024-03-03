// fetch('../dummyJSON/userDummy.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

import data from '../dummyJSON/userDummy.json' assert { type: 'json' };
//convert data to list of object
const listUser = data;
//using loop to fill data to table
const table = document.querySelector("[table-display]");
if(table){
    listUser.forEach((user,index)=>{
        if(user.deleted === false){
            const row = table.insertRow(index+1);
            row.innerHTML = `
                <td> 
                    <input type="checkbox" name="id" value="" data-id="${user.id}">
                </td>
                <td>
                    <div data-id="${user.id}"> ${index+1} </div>
                </td>
                <td>
                    <img src="${user.avatar}" alt="" style="width: 50px; height: 50px; border-radius: 50%;">
                </td>
                <td>${user.name}</td>
                <td> 
                    <a class="badge bg-success" href="javascript:;" data-status="${user.status}" data-id="" button-change-status="button-change-status">Đang hoạt động
                    </a>
                </td>
                <td> 
                    <a class="btn btn-warning btn-sm" href="" data-id="${user.id}">Sửa</a>
                    <a class="btn btn-danger btn-sm ml-1" button-delete="button-delete" data-id="${user.id}">Xóa </a>
                    <a class="btn btn-info btn-sm ml-1" href="" data-id="${user.id}" button-detail="button-detail">Xem chi tiết</a>
                </td>
            `;
        }
    });
}
//delete button
const buttonDelete = document.querySelectorAll("[button-delete]");
if(buttonDelete.length >0){
    buttonDelete.forEach(button =>{
        //delete one item on correct button
        button.addEventListener("click",()=>{
            const id = button.getAttribute("data-id");
            const row = table.querySelector(`[data-id="${id}"]`).parentNode.parentNode;
            row.remove();
            //update field deleted in listUser
            for(let i=0;i<listUser.length;i++){
                if(listUser[i].id == id){
                    listUser[i].deleted = true;
                    break;
                }
            }
        });
    });
}



//search
const search = document.querySelector("[name='keyword']");
const formSearch = document.querySelector("[btnsearch='btnsearch']");
if(formSearch){
    let url = new URL(window.location.href);
    formSearch.addEventListener("submit",(event)=>{
        event.preventDefault();
        const keyword = event.target.elements.keyword.value;
        if(keyword){
            url.searchParams.set("keyword",keyword);
        }
        else{
            url.searchParams.delete("keyword");
        }
        window.location.href = url.href;
    });
}
//end search

// display search result
const urlSearch = new URL(window.location.href);
const keyword = urlSearch.searchParams.get("keyword");
if(keyword){
    search.value = keyword;
    listUser.forEach((user,index)=>{
        if(user.name.toLowerCase().includes(keyword.toLowerCase())){
            // delete all row in table
            const row1 = table.querySelectorAll("tr");
            row1.forEach((row,index)=>{
                if(index>0){
                    row.remove();
                }
            });
            // fill data to table
            const row = table.insertRow(1);
            row.innerHTML = `
                <td> 
                    <input type="checkbox" name="id" value="" data-id="${user.id}">
                </td>
                <td>
                    <div data-id="${user.id}"> ${index+1} </div>
                </td>
                <td>
                    <img src="${user.avatar}" alt="" style="width: 50px; height: 50px; border-radius: 50%;">
                </td>
                <td>${user.name}</td>
                <td> 
                    <a class="badge bg-success" href="javascript:;" data-status="${user.status}" data-id="" button-change-status="button-change-status">Đang hoạt động
                    </a>
                </td>
                <td> 
                    <a class="btn btn-warning btn-sm" href="" data-id="${user.id}">Sửa</a>
                    <a class="btn btn-danger btn-sm ml-1" button-delete="button-delete" data-id="${user.id}">Xóa </a>
                    <a class="btn btn-info btn-sm ml-1" href="" data-id="${user.id}" button-detail="button-detail">Xem chi tiết</a>
                </td>
            `;
        }
    });
}

//detail button
const buttonDetail = document.querySelectorAll("[button-detail]");
if(buttonDetail.length >0){
    buttonDetail.forEach(button =>{
        //delete one item on correct button
        button.addEventListener("click",()=>{
            const id = button.getAttribute("data-id");
            button.setAttribute("href",`../../../pages/admin/detailStudent/student1.html?`);
            //add id to url
            const url = new URL(button.getAttribute("href"),window.location.href);
            url.searchParams.set("id",id);
            button.setAttribute("href",url);
        });
    });
}