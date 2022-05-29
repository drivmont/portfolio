import {clearTasks, loadTasks} from './toDos.js';


export function addTask(newTask,toDoList,taskViewer){
    console.log('addTask() invoked');
    
    console.log(newTask);
    
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    let newObject = {
        "id" : timestamp,
        "content" : newTask,
        "completed" : false
    }
    console.log(timestamp);
    console.log(toDoList);
    toDoList.push(newObject);
    clearTasks();
    loadTasks(toDoList,taskViewer);
}

export function changeTask(event,toDoList,taskViewer){
    console.log('changeTask() invoked');
    console.log(event.target.type);
    const index = toDoList.findIndex(object => {return object.id == event.target.id;})
    if (event.target.type == "submit") {
        toDoList.splice(index, 1);
    }
    else{
        toDoList[index].completed = true;
    }
    clearTasks();
    loadTasks(toDoList,taskViewer);
}

