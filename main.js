const inputTodo = document.querySelector("#inputTodo");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todoList = document.querySelector("#todoList");
const infoTextElement = document.querySelector("small");
const completedElement = document.querySelector("#completedElement");
const completeInfo = document.querySelector("#completeInfo");

const allTheTodos = [];

let todoText = "";
let completed = 0;

addTodoBtn.addEventListener("click", addTodo);


// button
function addTodo() {

    todoText = inputTodo.value;
    infoTextElement.textContent = "";
    if (todoText.length == 0) {
        infoTextElement.textContent = "You must write something!";
        return;
    }
    else {
        completeInfo.textContent = ("Click on the list to complete task!");
    }

   

    allTheTodos.push(todoText);

    const item = document.createElement("li");
    todoList.appendChild(item);

    const itemText = document.createElement('span');
    itemText.innerText = todoText;



    itemText.addEventListener("click",
        function () {
            if (itemText.classList.contains("completed")) {
                itemText.setAttribute('class', "");
                completed--;
                completedElement.textContent = "You have " + completed + " tasks that are done"
            }


            else {
                itemText.setAttribute("class", "completed");
                completed++;
                completedElement.textContent = "You have " + completed + " tasks that are done"
            }
        }
    )




    item.appendChild(itemText);

    inputTodo.value = "";
   


}