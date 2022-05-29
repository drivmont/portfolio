import {clearTasks, loadTasks} from './toDos.js';


export function changeFilter(event,toDoList,taskViewer){
    console.log('changeFilter() invoked');
    document.getElementById(taskViewer).style.border = "none";
    console.log(taskViewer);
    if (event.target.id == "active" || event.target.id == "all" || event.target.id == "completed"){
        taskViewer = event.target.id;
    }
    console.log(taskViewer);
    document.getElementById(taskViewer).style.border = "solid";
    clearTasks();
    loadTasks(toDoList,taskViewer);
    return taskViewer;
}
