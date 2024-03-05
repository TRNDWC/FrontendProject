{/* <div class="card ">
                            <div class="card-body">
                                <div class="flex justify-between">
                                    <div class="ml-4">
                                        <div class="mb-3">
                                            <span>1. Ai đẹp trai nhất nhóm?</span>
                                        </div>
                                        <div class="mb-2 flex items-center">
                                            <span class="ml-4">A: Lê Tiến Đạt</span>
                                        </div>
                                        <div class="mb-2 flex items-center">
                                            <span class="ml-4">B: Trần Anh Đức</span>
                                        </div>
                                        <div class="mb-2 flex items-center">
                                            <span class="ml-4">C: Nguyễn Anh Vũ</span>
                                        </div>
                                        <div class="mb-2 flex items-center">
                                            <span class="ml-4">D: Nguyễn Đăng Minh</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="green"
                                                class="bi bi-check" viewBox="0 0 16 16">
                                                <path
                                                    d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                                            </svg>
                                        </div>


                                    </div>
                                    <div>
                                        <button class="btn btn-outline-primary">Sửa</button>
                                        <button class="btn btn-outline-danger">Xóa</button>
                                    </div>
                                </div>

                            </div>
                        </div>*/}

let questions = [
    {
        question: "Ai đẹp trai nhất nhóm?",
        answers: [
            {
                answer: "Lê Tiến Đạt",
                isCorrect: false
            },
            {
                answer: "Trần Anh Đức",
                isCorrect: false
            },
            {
                answer: "Nguyễn Anh Vũ",
                isCorrect: false
            },
            {
                answer: "Nguyễn Đăng Minh",
                isCorrect: true
            }
        ]
    }
]

resetListQuestion();


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

function resetListQuestion() {
    const listQuestion = document.getElementById("list-question");
    listQuestion.innerHTML = "";
    questions.forEach((question, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("mb-3");
        card.id = `question${index}`;
        card.setAttribute("question-index", index);
        card.innerHTML = `
            <div class="card-body">
                <div class="flex justify-between">
                <div class="ml-4">
                <div class="mb-3">
                    <span>${index + 1}. ${question.question}</span>
                </div>
                <div class="mb-2 flex items-center">
                    <span class="ml-4">A: ${question.answers[0].answer}</span>
                    ${question.answers[0].isCorrect ? `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="green"
                    class="bi bi-check" viewBox="0 0 16 16">
                    <path
                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                    </svg>` : ""}
                </div>
                <div class="mb-2 flex items-center">
                    <span class="ml-4">B:  ${question.answers[1].answer}</span>
                    ${question.answers[1].isCorrect ? `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="green"
                    class="bi bi-check" viewBox="0 0 16 16">
                    <path
                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                    </svg>` : ""}
                </div>
                <div class="mb-2 flex items-center">
                    <span class="ml-4">C:  ${question.answers[2].answer}</span>
                    ${question.answers[2].isCorrect ? `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="green"
                    class="bi bi-check" viewBox="0 0 16 16">
                    <path
                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                    </svg>` : ""}
                </div>
                <div class="mb-2 flex items-center">
                    <span class="ml-4">D:  ${question.answers[3].answer}</span>
                    ${question.answers[3].isCorrect ? `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="green"
                    class="bi bi-check" viewBox="0 0 16 16">
                    <path
                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                    </svg>` : ""}
                    
                </div>


            </div>
            <div>
                <button class="btn btn-outline-danger" onclick="deleteQuestion(event)">Xóa</button>
            </div>
                </div>

            </div>
        `;
        listQuestion.innerHTML += card.outerHTML;
    });

}

function addQuestion() {
    const question = document.getElementById("question").value;
    const answers = [];
    for (let i = 0; i < 4; i++) {
        const answer = document.getElementById(`answer${i + 1}`).value;
        const isCorrect = document.getElementById(`flexRadioDefault${i + 1}`).checked;
        answers.push({ answer, isCorrect });
    }
    questions.push({ question, answers });
    resetListQuestion();
}

function deleteQuestion(e) {
    console.log("deleteQuestion");
    const card = e.target.closest(".card");
    const index = card.getAttribute("question-index");
    questions.splice(index, 1);
    resetListQuestion();
}

function saveTest() {
    console.log("saveTest");
    const test = {
        questions
    }
    console.log(test);
    localStorage.setItem("test", JSON.stringify(test));
    alert("Lưu thành công");
}

