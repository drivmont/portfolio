export {loadMemory};

let dataJson = [
]

//If first time user then send empty Json file, if not then don't send anything

function loadMemory(){
    if (window.localStorage.getItem('saved') == null) {
        window.localStorage.setItem('saved', JSON.stringify(dataJson));
    }
}
