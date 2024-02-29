const data = [
    {
        "id": "1",
        "type": "Luyện tập",
        "name": "Html css",
        "date": "2024-02-28",
        "time": "10:10:10"
    },
    {
        "id": "2",
        "type": "Cuối kì",
        "name": "Html css",
        "date": "2024-02-28",
        "time": "10:10:10"
    },
    {
        "id": "3",
        "type": "Giữa kì",
        "name": "Html css",
        "date": "2024-02-28",
        "time": "10:10:10"
    },
    {
        "id": "4",
        "type": "Cuối kì",
        "name": "Html css",
        "date": "2024-02-28",
        "time": "10:10:10"
    },
    {
        "id": "5",
        "type": "Luyện tập",
        "name": "Html css",
        "date": "2024-02-28",
        "time": "10:10:10"
    }
]
genTableBody()
function genTableBody() {
    let tableBody = document.getElementById('table-body');
    let tableContent = '';
    for (let i = 0; i < data.length; i++) {
        tableContent += `
        <tr>
        <td
          class="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
          ${data[i].type}
        </td>
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white border-b border-l border-[#E8E8E8]">
          ${data[i].name}
        </td>
        <td
          class="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
          ${data[i].date}
        </td>
        <td
          class="text-center text-dark font-medium text-base py-2 px-2 bg-white border-b border-l border-[#E8E8E8]">
          ${data[i].time}
        </td>
        <td
          class="text-center text-dark font-medium text-base py-2 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
          <a href="javascript:void(0)"
            class="border border-danger py-2 px-6 text-danger inline-block rounded hover:bg-danger hover:text-white">
            Bắt đầu
          </a>
        </td>
      </tr>
        `
    }
    tableBody.innerHTML = tableContent;
}