
// button status
const buttonStatus = document.querySelectorAll('[button-change-status]');
if(buttonStatus.length >0){
    let url = new URL(window.location.href);
    buttonStatus.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            const status = btn.getAttribute("data-status");
            if(status == "active"){
                //change to inactive
                btn.setAttribute("data-status","inactive");
                btn.setAttribute("value","inactive");
                btn.textContent = "Ngưng hoạt động";
                btn.setAttribute("class","badge bg-danger")
            }
            else{
                //change to active
                btn.setAttribute("data-status","active");
                btn.setAttribute("value","active");
                btn.textContent = "Hoạt động";
                btn.setAttribute("class","badge bg-success")
            }
        })
    })
}



//multi check-box fill
const checkBoxMulti = document.querySelector("[checkbox-multi]");
if(checkBoxMulti){
    const checkAll = checkBoxMulti.querySelector("input[name='checkall']");
    const inputIds = checkBoxMulti.querySelectorAll("input[name='id']");
    //them su kien checkAll
    checkAll.addEventListener("click",()=>{
        if(checkAll.checked){
            inputIds.forEach((input)=>{
                input.checked = true;
            });
        }else{
            inputIds.forEach((input)=>{
                input.checked = false;
            });
        }
    });

    //them su kien inputIds neu full thi check all
    inputIds.forEach((input)=>{
        input.addEventListener("click",()=>{
            const countChecked = checkBoxMulti.querySelectorAll('input[name="id"]:checked').length;
            if(countChecked === inputIds.length){
                checkAll.checked = true;
            }else{
                checkAll.checked = false;
            }
        });
    });
};
//multi end check-box fill

//delete item
const buttonDelete = document.querySelectorAll("[button-delete]");
if(buttonDelete.length >0){
    buttonDelete.forEach(button =>{
        //delete one item on correct button
        button.addEventListener("click",()=>{      
        });
    });
};




//sort
const sort = document.querySelector("[sort]");
if(sort){
    
} 
