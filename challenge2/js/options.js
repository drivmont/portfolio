/***********ADD SEARCH OPTIONS***********/
export {getStates};
import {view} from './view.js';

//Get info from the JSON file with all the airports info
function getStates(){
    console.log("getStates() invoked");
    fetch('./json/codes.json')
    .then(res => res.json())
    .then(data => {addStates(data);})
    .catch((error)=>{
        console.error(error);
    }) 
}

//Add to the From and To selectors
function addStates(data){
    console.log("addStates() invoked");
    //console.log(data);
    data.forEach(state => {
        addOption(state,view.fromSelect);
        addOption(state,view.toSelect);
    }
    )
}

//Add to HTML element selector
function addOption(state, id){
    console.log("addOption() invoked");
    const usCode = document.createElement("option");
    usCode.setAttribute("value", state.code);
    let textNode = document.createTextNode(state.name);
    usCode.appendChild(textNode);
    id.appendChild(usCode);   
}

