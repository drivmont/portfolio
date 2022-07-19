
export {view};

//View variables for all elements we are manipulating

const view = {
    from: document.querySelector('#fromSelect'),
    to: document.querySelector('#toSelect'),
    date: document.querySelector('#dateInput'),
    numberOfResults: document.querySelector('#numberOfResults'),
    searchFlights: document.querySelector('#submitQuery'),
    savedFlights: document.querySelector('#savedFlights'),
    fromSelect: document.querySelector('#fromSelect'),
    toSelect: document.querySelector('#toSelect'),
    searchError: document.getElementById('searchError'),
    flightError: document.getElementById('flightError'),
    saveFlight: document.querySelectorAll("input[class^='saveFlight']"),
    options: document.querySelector('#options')
}