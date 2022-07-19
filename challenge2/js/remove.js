export {removeFlight};
import {view} from './view.js';
import { activateButtons } from './button.js';
import {loadData} from './load.js';
/***********REMOVE SAVED FLIGHTS***********/

//When remove flight is clicked, remove the flight from the JSON file and then reload content for saved flights.

function removeFlight(event,element) {
    console.log("removeFlight() invoked");
    event.preventDefault();
    let id = element.id;
    let saved = JSON.parse(window.localStorage.getItem('saved'));
    //delete saved[id];
    saved.splice(id, 1);
    window.localStorage.setItem('saved', JSON.stringify(saved));
    view.savedFlights.innerHTML = "";
    loadData();
    activateButtons();
}