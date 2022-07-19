export {searchFlights};
import { loadSearchResults } from './results.js';
import { activateButtons } from './button.js';
import {view} from './view.js';

/***********SEARCH FLIGHTS***********/
//Save the responses one by one to the results localstorage item
function saveResponse(response){
    /**console.log(response);**/
    
    console.log("saveResponse() invoked");
    if (response.getAirFlightDepartures.results != undefined){
        let itinerary = response.getAirFlightDepartures.results.result.itinerary_data;
        let resultArray = [];
        let c = 0;
        let max = view.numberOfResults.value;
        for (const i in itinerary) {

            let time = itinerary[i].slice_data.slice_0.info.duration;
            let flightInfo = {
                "from" : itinerary[i].slice_data.slice_0.departure.airport.city,
                "to" : itinerary[i].slice_data.slice_0.arrival.airport.city,
                "price" : itinerary[i].price_details.baseline_total_fare.toString(),
                "hours" : time.substring(3 , 5),
                "minutes" : time.substring(6, 8),
                "arrival" : itinerary[i].slice_data.slice_0.arrival.datetime.time_24h,
                "departure" : itinerary[i].slice_data.slice_0.departure.datetime.time_24h,
                "date" : itinerary[i].slice_data.slice_0.departure.datetime.date
            };
            //console.log(flightInfo);
            c += 1;
            if (c <= max){
                resultArray.push(flightInfo);
            }
            else {
                break;
            }
        }

        //console.log(resultArray);
        window.localStorage.setItem('results', JSON.stringify(resultArray));
        loadSearchResults();
    }
    else {
        view.flightError.style.display = "block";
    }

}

//Send request to API server
function getFlightInfo(from,to,date){
    console.log("getFlightInfo() invoked");
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c481dfa1fdmshff96aa9c4324181p13c386jsn8e942b48916a',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
    };
    
    fetch('https://priceline-com-provider.p.rapidapi.com/v2/flight/departures?adults=1&departure_date='+ date + '&sid=iSiX639&destination_airport_code='+ to + '&origin_airport_code='+ from, options)
        .then(response => {
            if (response.ok){
                return response.json()
            }
            throw Error(response.statusText)}
        )
        .then(response => 
            saveResponse(response)
        )
        .catch(err => 
            console.error(err),
            
            );
}

//Activate search based on the values on the from, to and date info from the user
function searchFlights(event){
    console.log("searchFlights() invoked");
    window.localStorage.removeItem('results');
    view.flightError.style.display = "none";
    event.preventDefault();
    view.options.innerHTML = "";
    if (view.from.value == view.to.value){
        view.searchError.style.display = "block";
    }
    else {
        view.searchError.style.display = "none";
        /**console.log(view.from.value);
        console.log(view.to.value);
        console.log(view.date.value);**/
        getFlightInfo(view.from.value,view.to.value,view.date.value);
        
        activateButtons();
    }
}

