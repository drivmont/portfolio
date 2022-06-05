const links = [
    {
        label: "Chapter 11",
        url: "chapter11/index.html"
    },
    {
        label: "Chapter 13",
        url: "chapter13/index.html"
    }]

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