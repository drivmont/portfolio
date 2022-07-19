export {activateButtons,activateRemove};
import {saveFlights} from './save.js';
import {removeFlight} from './remove.js';

//After creating "Save flight" and "Remove flight" buttons we give them a listener
function activateButtons(){
    document.querySelectorAll("input[class^='saveFlight']").forEach(function(element) {
        element.addEventListener('click', (event) => saveFlights(event,element), false);
    });

    document.querySelectorAll("input[class^='removeFlight']").forEach(function(element) {
        element.addEventListener('click', (event) => removeFlight(event,element), false);
    });
}

//Activate the remove flight function on the buttons
function activateRemove(){
    document.querySelectorAll("input[class^='removeFlight']").forEach(function(element) {
        element.addEventListener('click', (event) => removeFlight(event,element), false);
    });
}