
export function loadTasks(toDoList,taskViewer){
    console.log('loadTasks() invoked');
    if (taskViewer == "active"){
        loadActive(toDoList);
    }
    if (taskViewer == "completed"){
        loadCompleted(toDoList);
    }
    if (taskViewer == "all"){
        loadActive(toDoList);
        loadCompleted(toDoList);
        document.getElementById('numberOfTasks').innerText = toDoList.length;
    }
    
}


export function loadActive(toDoList){
    console.log('loadActive() invoked');
    var ul = document.getElementById('tasksList');
    let c = 0;
    for(let i = 0; i < toDoList.length; i++){
        if (toDoList[i].completed == false) {
            var li = document.createElement('li');
            var label = document.createElement('label');
            var input = document.createElement('input');
            var span = document.createElement('span');
            var button = document.createElement('button');
            span.textContent = toDoList[i].content;
            
            input.type = "checkbox";
            input.id = toDoList[i].id;
            label.appendChild(input);
            label.appendChild(span);
            button.textContent = "X";
            button.id = toDoList[i].id;
            li.appendChild(label);
            li.appendChild(button);
            ul.appendChild(li);
            c += 1;
        }
    }
   document.getElementById('numberOfTasks').innerText = c;
}

export function loadCompleted(toDoList){
    console.log('loadCompleted() invoked');
    var ul = document.getElementById('tasksList');
    let c = 0;
    for(let i = 0; i < toDoList.length; i++){
        if (toDoList[i].completed == true) {
            var li = document.createElement('li');
            var label = document.createElement('label');
            var input = document.createElement('input');
            var span = document.createElement('span');
            var button = document.createElement('button');
            span.textContent = toDoList[i].content;
            span.style.textDecoration = "line-through";
            input.type = "checkbox";
            input.id = toDoList[i].id;
            label.appendChild(input);
            label.appendChild(span);
            button.textContent = "X";
            button.id = toDoList[i].id;
            li.appendChild(label);
            li.appendChild(button);
            ul.appendChild(li);
            c += 1;
        }
    }
   document.getElementById('numberOfTasks').innerText = c;
}

export function clearTasks(){
    console.log('clearTasks() invoked');
    document.getElementById('tasksList').innerHTML = "";
}