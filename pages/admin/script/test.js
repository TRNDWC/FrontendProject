import data from '../dummyJSON/testDummy.json' assert { type: 'json' };
const listTest = data;
const table = document.querySelector("[table-display]");
if(table){
    data.forEach((test,index)=>{
        const row = table.insertRow(index+1);
        row.innerHTML = `
            <td> 
                <input type="checkbox" name="id" value="">
            </td>
            <td>${index+1}</td>
            <td>
                <div><b>${test.title}</b></div>    
            </td>
            <td>
                <div>${test.time}</div>
            </td>
            <td>
                <a class="badge bg-success" href="javascript:;" data-status="${test.status}" data-id="" button-change-status="button-change-status">Đang hoạt động
                </a>
            </td>
            <td> 
                <a class="btn btn-warning btn-sm" href="" data-id="${test.id}">Sửa</a>
                <button class="btn btn-danger btn-sm ml-1" data-id="${test.id}" button-delete="button-delete">Xóa </button>
                <a class="btn btn-info btn-sm ml-1" href="" button-detail="button-detail" data-id="${test.id}">Xem chi tiết</a>
            </td>
        `;
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
            for(let i=0;i<listTest.length;i++){
                if(listTest[i].id == id){
                    listTest[i].deleted = true;
                    break;
                }
            }
        });
    });
}

//detail button
const buttonDetail = document.querySelectorAll("[button-detail]");
if(buttonDetail.length >0){
    buttonDetail.forEach(button =>{
        //delete one item on correct button
        button.addEventListener("click",()=>{
            const id = button.getAttribute("data-id");
            button.setAttribute("href",`../../../pages/admin/detailTest/testDetail1.html?`);
            //add id to url
            const url = new URL(button.getAttribute("href"),window.location.href);
            url.searchParams.set("id",id);
            button.setAttribute("href",url);
        });
    });
}

