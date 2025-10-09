const inputTodo = document.querySelector("#inputTodo");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todoList = document.querySelector("#todoList");
const infoTextElement = document.querySelector("small");
const completedElement = document.querySelector("#completedElement");


const allTheTodos = [];

let todoText = "";
let completed = 0;
completedElement.textContent = "0 completed";

addTodoBtn.addEventListener("click", addTodo);


// button
function addTodo() {

    todoText = inputTodo.value;
    infoTextElement.textContent = "";
    if (todoText.length == 0) {
        infoTextElement.textContent = "Input must not be empty";
        
        infoTextElement.style.animation = "none";
        infoTextElement.offsetHeight;
        infoTextElement.style.animation = null;
        
        return;
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
                completedElement.textContent = completed + " completed"
            }


            else {
                itemText.setAttribute("class", "completed");
                completed++;
                completedElement.textContent =  completed + " completed"
            }
        })




    item.appendChild(itemText);



    //trashcan 
    const trashcan = document.createElement('span');
    trashcan.innerHTML = "🗑️";
    trashcan.classList.add("trashcan");
    
    trashcan.addEventListener("click", function(){
        item.remove();
    })
    
    
    
    item.appendChild(trashcan);



    inputTodo.value = "";



}


/* const completeInfo = document.querySelector("#completeInfo");  
else {
        completeInfo.textContent = ("Click on the list to complete task!");
    } */