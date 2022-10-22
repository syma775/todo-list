// select elements and assign them to variable

let form = document.querySelector('form');
let newTask = document.querySelector('#new-task');
let todoUI = document.querySelector('#items');
let completeUI = document.querySelector('.complete-list ul');


//function- create task

let createTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

//add task

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUI.appendChild(listItem);
    newTask.value = "";

    //bind incomplete task

    bindIncompleteTask(listItem, completeTask);
}

let completeTask = function(){
    let listItem = this.parentNode;
    let deletebtn = document.createElement('button');
    deletebtn.innerText = 'Delete';
    deletebtn.className = 'delete';

    listItem.appendChild(deletebtn);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    completeUI.appendChild(listItem);
    bindCompleteTask(listItem,deleteTask);
}

let bindIncompleteTask = function(taskItem,checkboxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

let bindCompleteTask = function(taskItem , deleteButtonClick){
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

for(let i=0; i<todoUI.children.length; i++){
    bindIncompleteTask(todoUI.children[i],completeTask);
}

for(let i=0; i<completeUI.children.length; i++){
    bindCompleteTask(completeUI.children[i],deleteTask);
}

//addeventlistener

form.addEventListener('submit',addTask);