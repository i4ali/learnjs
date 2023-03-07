const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');


form.addEventListener('submit', addTask);

function addTask(e){
    const li = document.createElement('li');
    li.className = 'collection-item';
    taskList.appendChild(li);
    e.preventDefault();
}
