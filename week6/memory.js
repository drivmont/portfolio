export {loadMemory};

let toDoList = [

];

//If first time user then send empty Json file, if not then don't send anything

function loadMemory(){
    if (window.localStorage.getItem('tasks') == null) {
        window.localStorage.setItem('tasks', JSON.stringify(toDoList));
    }
}
