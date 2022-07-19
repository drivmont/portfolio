/***********ADD SAVED FLIGHTS***********/
export {loadData, addElement};

import {view} from './view.js';

//Restart form with the saved flights and add them one by one
function loadData() {
    console.log("loadData() invoked");
    view.savedFlights.innerHTML = "";
    let data = JSON.parse(window.localStorage.getItem('saved'));
//    console.log(data);
    addData(data);
    let currentDate = new Date().toJSON().slice(0, 10);
    view.date.value = currentDate;
    
}
//Go flight by flight and add it to the HTML form
function addData(data){
    console.log("addData() invoked");
    
    let c = 0;
    data.forEach(flight => {
        
        if (flight === "" || flight === null){
            console.log("Null object found")
        }
        else{
            addElement(flight, c);
        }
        c += 1;
    }
    )
}
//Create HTML elements to show the flights
function addElement(flight, c) {
    console.log("addElement() invoked");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "flight");

    const h3 = document.createElement("h3");
    let textNode = document.createTextNode("Flight");
    h3.appendChild(textNode);

    const sect = document.createElement("section");
    sect.setAttribute("id", "flightText");

    const from = document.createElement("p");
    textNode = document.createTextNode("From: " + flight.from);
    from.appendChild(textNode);

    const to = document.createElement("p");
    textNode = document.createTextNode("To: " + flight.to);
    to.appendChild(textNode);

    const price = document.createElement("p");
    textNode = document.createTextNode("Price: "+ flight.price + "$");
    price.appendChild(textNode);

    const flightTime = document.createElement("p");
    textNode = document.createTextNode("Flight time: " + flight.hours + " hours and " + flight.minutes + " minutes");
    flightTime.appendChild(textNode);

    const departureTime = document.createElement("p");
    textNode = document.createTextNode("Departure time: " + flight.departure);
    departureTime.appendChild(textNode);

    const arrivalTime = document.createElement("p");
    textNode = document.createTextNode("Arrival time: " + flight.arrival);
    arrivalTime.appendChild(textNode);

    const date = document.createElement("p");
    textNode = document.createTextNode("Departure date: " + flight.date);
    date.appendChild(textNode);

    const image = document.createElement("img");
    var todayDate = new Date();
    if (flight.date < todayDate) {
        image.setAttribute("src", "./img/plane_red.png");
    }
    else {
        image.setAttribute("src", "./img/plane.png");
    }
    image.setAttribute("altcreate", "plane icon");

    const removeFlight = document.createElement("input");
    removeFlight.setAttribute("type", "button");
    removeFlight.setAttribute("class", "removeFlight");
    removeFlight.setAttribute("id", c);
    removeFlight.setAttribute("name", "removeFlight");
    removeFlight.setAttribute("value", "Remove flight");

    
    newDiv.appendChild(h3);
    
    sect.appendChild(from);
    sect.appendChild(to);
    sect.appendChild(price);
    sect.appendChild(flightTime);
    sect.appendChild(departureTime);
    sect.appendChild(arrivalTime);
    sect.appendChild(date);
    newDiv.appendChild(sect);
    newDiv.appendChild(image);
    newDiv.appendChild(removeFlight);
    view.savedFlights.appendChild(newDiv);
}