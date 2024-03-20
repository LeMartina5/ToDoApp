
const newInput = document.getElementById('new-input');
const addBtn = document.getElementById('add-btn');
const clearAll = document.getElementById('clear-all-btn');
const listContent = document.getElementById('list-body');

addBtn.addEventListener('click', processInput);

newInput.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        addBtn.click();
    }
})

function processInput() {
    if (newInput.value === "") {
        alert("Please write a new task");
    } else {
        const newTaskItem = document.createElement('li');
        newTaskItem.className = 'list-item';
        const taskContent = document.createElement('span');
        taskContent.innerText = newInput.value;
        taskContent.className = 'task-content';
        const checkBtn = document.createElement('button');
        checkBtn.innerHTML = '&#10003';
        checkBtn.classList.add('check-btn');
        const cancelBtn = document.createElement('button');
        cancelBtn.innerHTML = '&#10005;';
        cancelBtn.classList.add('delete-btn');
        newTaskItem.appendChild(taskContent);
        newTaskItem.appendChild(checkBtn);
        newTaskItem.appendChild(cancelBtn);
        listContent.append(newTaskItem);
    }
    newInput.value = "";
}

listContent.addEventListener('click', function (e) {
    const clickedElement = e.target;
    if (clickedElement.className === 'check-btn') {
        clickedElement.previousSibling.classList.toggle('done');
    } else {
        if (clickedElement.className === 'delete-btn') {
            clickedElement.parentElement.remove();
        }
    }
    false;
})


clearAll.addEventListener('click', () => {
    const allTasks = listContent.querySelectorAll('.list-item');
    for (task of allTasks) {
        task.remove();
    }
})