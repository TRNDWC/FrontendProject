const data = [
  {
    "id": "1",
    "type": "Luyện tập",
    "name": "Html css",
    "date": "2024-02-28",
    "duration": "60",
    "time": "10:10:10"
  },
  {
    "id": "2",
    "type": "Cuối kì",
    "name": "JavaScript",
    "date": "2024-02-28",
    "duration": "60",
    "time": "10:10:10"
  },
  {
    "id": "3",
    "type": "Giữa kì",
    "name": "Lập trình web",
    "date": "2024-02-28",
    "duration": "60",
    "time": "10:10:10"
  },
  {
    "id": "4",
    "type": "Cuối kì",
    "name": "Hehe",
    "date": "2024-02-28",
    "duration": "60",
    "time": "10:10:10"
  },
  {
    "id": "5",
    "type": "Luyện tập",
    "name": "Html css",
    "date": "2024-02-28",
    "duration": "60",
    "time": "10:10:10"
  }
]

// Initialize test table
genTableBody();

function genTableBody() {
  let tableBody = document.getElementById('table-body');
  let tableContent = '';
  for (let i = 0; i < data.length; i++) {
    tableContent += `
        <tr class="">
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white ">
          ${data[i].type}
        </td>
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white ">
          ${data[i].name}
        </td>
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white ">
          ${data[i].date}
        </td>
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white ">
          ${data[i].time}
        </td>
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white ">
          ${data[i].duration}
        </td>
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white ">
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

function searchByType(type) {
  console.log(type);
  if (type === 'All') {
    genTableBody();
    return;
  }
  let tableBody = document.getElementById('table-body');
  let tableContent = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === type) {
      tableContent += `
        <tr class="">
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white ">
          ${data[i].type}
        </td>
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white ">
          ${data[i].name}
        </td>
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white ">
          ${data[i].date}
        </td>
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white ">
          ${data[i].time}
        </td>
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white ">
          ${data[i].duration}
        </td>
        <td
          class="text-dark font-medium text-base py-2 px-2 bg-white ">
          <a href="javascript:void(0)"
            class="border border-danger py-2 px-6 text-danger inline-block rounded hover:bg-danger hover:text-white">
            Bắt đầu
          </a>
        </td>
      </tr>
        `
    }
  }
  tableBody.innerHTML = tableContent;
}