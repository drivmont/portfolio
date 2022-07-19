export {saveFlights};
import { activateRemove } from './button.js';
import {loadData, addElement} from './load.js';
/***********SAVE FLIGHTS***********/
//Save flight info into the JSON file on localstorage (saved)

function saveNewFlight(flight){
    console.log("saveNewFlight() invoked");
    let saved = JSON.parse(window.localStorage.getItem('saved'));
    saved.push(flight);
    window.localStorage.setItem('saved', JSON.stringify(saved));
    addElement(flight);
}

//Save new flight based on the position in the results JSON file

function getFlightById(id){
    console.log("getFlightById() invoked");
    let results = JSON.parse(window.localStorage.getItem('results'));
    
    saveNewFlight(results[id]);
}


//Get info if flight has already been saved or if new flight. If new then add it and after adding it then reload content on saved flights, also activate the remove function on the button
function saveFlights(event,element) {
    console.log("saveFlights() invoked");
    event.preventDefault();
    let id = element.id;
    console.log(element.id);
    let message = document.querySelector("p[class^='flightSaved'][id='"+ id+"']");
    let alert = document.querySelector("p[class^='alreadySaved'][id='"+ id +"']");
    console.log(window.getComputedStyle(message).display);
    if (window.getComputedStyle(message).display == "none") {
        message.style.display = "block";
        getFlightById(id);
    }
    else {
        alert.style.display = "block";
        
    }
    loadData();
    activateRemove();
    
}
