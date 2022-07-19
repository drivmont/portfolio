import {changeFilter} from './utilities.js';
import {addTask, changeTask} from './ls.js';
import {clearTasks, loadTasks} from './toDos.js';
import {loadMemory} from './memory.js';

let taskViewer = "active";

const view = {
    addTask: document.getElementById('addTask'),
    newTask: document.getElementById('newTask'),
    tasks: document.getElementById('tasks'),
    filters: document.getElementById('filters')
}

loadMemory();
let toDoList = JSON.parse(window.localStorage.getItem('tasks'));
loadTasks(toDoList,taskViewer);
view.addTask.addEventListener('click', () => addTask(view.newTask.value,toDoList,taskViewer), false);
view.tasks.addEventListener('click',(event) => changeTask(event,toDoList,taskViewer), false);
view.filters.addEventListener('click',(event) => taskViewer = changeFilter(event,toDoList,taskViewer), false);