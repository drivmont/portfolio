import {loadData, addElement} from './load.js';
import { getStates } from './options.js';
import { activateButtons } from './button.js';
import { searchFlights } from './search.js';
import {view} from './view.js';
import {loadMemory} from './memory.js';



/***********LOAD PAGE***********/
loadMemory(); //Load localStorage
loadData(); //Load info for saved flights
getStates(); //Load info for the search options
activateButtons(); //Activate remove and add dynamic buttons
view.searchFlights.addEventListener('click', (event) => searchFlights(event), false); //Event for the Search Flights button






