

function toggleInputType() {
    console.log("toggleInputType");
    const selectElement = document.getElementById("select-question-type");
    const selectedValue = selectElement.value;
    for (let i = 0; i < 4; i++) {
        const inputElement = document.getElementById(`flexRadioDefault${i + 1}`);
        if (selectedValue === "single-answer") {
            inputElement.type = "radio";
        }
        else {
            inputElement.type = "checkbox";
        }
    }

}