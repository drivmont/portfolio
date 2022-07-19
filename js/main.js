const links = [
    {
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "week5/index.html"
    },
    {
        label: "Week 6 - TODO",
        url: "week6/index.html"
    },
    {
        label: "Week 7",
        url: "week7/index.html"
    },
    {
        label: "Week 8",
        url: "week8/index.html"
    },
    {
        label: "Week 9",
        url: "week9/index.html"
    },
    {
        label: "Week 10",
        url: "week10/index.html"
    },
    {
        label: "Week 14 - Challenge 2",
        url: "challenge2/index.html"
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