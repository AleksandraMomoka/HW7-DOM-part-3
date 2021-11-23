let input = document.getElementById('input-pole-tasks');
let list = document.getElementById('to-do-list');
let btn = document.getElementById('btn-add-tasks');
let task;
let deletBtn;

function createElement(value) {
    console.log(value);
    task = document.createElement('li');
    task.className = 'to-do-tasks';
    task.innerHTML = input.value;
    list.append(task);
    input.value = '';
}

btn.addEventListener('click', () => {
    createElement(input.value);
    deletBtn = document.createElement('button');
    deletBtn.className = 'deletBtn';
    deletBtn.textContent = 'x';
    task.append(deletBtn);
});

list.addEventListener('click', (event) => {
    if (event.target.className === 'deletBtn') {
        let deletTask = event.target.parentNode;
        deletTask.remove();
    }
    else {
        event.target.classList.toggle('tasks-done');
    } 
});