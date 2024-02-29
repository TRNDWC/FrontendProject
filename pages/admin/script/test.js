import data from '../dummyJSON/testDummy.json' assert { type: 'json' };
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
                <a class="btn btn-warning btn-sm" href="">Sửa</a>
                <button class="btn btn-danger btn-sm ml-1" data-id="" button-delete="button-delete">Xóa </button>
                <a class="btn btn-info btn-sm ml-1" href="">Xem chi tiết</a>
            </td>
        `;
    });
}

