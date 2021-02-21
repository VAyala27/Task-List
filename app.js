// Define ui variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
    // add task event
    form.addEventListener('submit', addTask);

    // remove task event
    taskList.addEventListener('click', removeTask);

    // clear task
    clearBtn.addEventListener('click', clearTasks);

    // filter tasks events
    filter.addEventListener('keyup', filterTask);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    // create li element
    const li = document.createElement('li');
    li.className = 'collection-item';

    // create text node
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');

    // Add class
    link.className = 'delete-item secondary-content';

    // Add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // clear input
    taskInput.value = '';

    e.preventDefault();
}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// clear task
function clearTasks() {
    taskList.innerHTML = '';
}

// filter task
function filterTask(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach((task) => {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}