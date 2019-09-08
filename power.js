document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

function flightHandlerFunction() {
const flight = document.querySelector("#flight");
flight.classList.remove("disabled");
flight.classList.add("enabled");
}


document.querySelector("#activate-mindreading").addEventListener("click", mindHandlerFunction)

function mindHandlerFunction() {
const mind = document.querySelector("#mindreading");
mind.classList.remove("disabled");
mind.classList.add("enabled");
}

document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

function xrayHandlerFunction() {
const xray = document.querySelector("#xray");
xray.classList.remove("disabled");
xray.classList.add("enabled");
}

document.querySelector("#activate-all").addEventListener("click", enableAllHandlerFunction)

function enableAllHandlerFunction() {
const flight = document.querySelector("#flight");
const mind = document.querySelector("#mindreading");
const xray = document.querySelector("#xray");
flight.classList.remove("disabled");
flight.classList.add("enabled");
mind.classList.remove("disabled");
mind.classList.add("enabled");
xray.classList.remove("disabled");
xray.classList.add("enabled");

}

document.querySelector("#deactivate-all").addEventListener("click", disableAllHandlerFunction)

function disableAllHandlerFunction() {
    const flight = document.querySelector("#flight");
    const mind = document.querySelector("#mindreading");
    const xray = document.querySelector("#xray");
    flight.classList.remove("enabled");
    flight.classList.add("disabled");
    mind.classList.remove("enabled");
    mind.classList.add("disabled");
    xray.classList.remove("enabled");
    xray.classList.add("disabled");
}
