const links = [
    {
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    }

]

function loadAssignments() {
    var ol = document.getElementById('assignmentsList');
    for (let i = 0; i < links.length; i++){
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href=links[i].url;
        a.innerText=links[i].label;
        li.appendChild(a);
        ol.appendChild(li);    
    }
}