//different units
const meter = "meters"
const liter = "liters"
const kilogram = "kilos"
const feet = "feet"
const gallon = "gallons"
const pound = "pounds"

//conversion constants
const meterToFeet = 3.281
const feetToMeter = 0.3048
const literToGallon = 0.264
const gallonToLiter = 3.785
const kiloToPounds = 2.204
const poundsToKilo = 0.453592

const inputEl = document.getElementById("input")
const buttonEl = document.getElementById("button")
const convertedLen = document.getElementById("converted-len")
const convertedVol = document.getElementById("converted-vol")
const convertedMass = document.getElementById("converted-mass")


function convertLength() {
    convertedLen.innerHTML = `
    ${inputEl.value} ${meter} 
    = ${(Number(inputEl.value) * meterToFeet).toFixed(3)
        } ${feet} | ${inputEl.value} ${feet} 
    = ${(Number(inputEl.value) * feetToMeter).toFixed(3)} ${meter} `
}

function convertVolume() {
    convertedVol.innerHTML = `
    ${inputEl.value} ${liter} 
    = ${(Number(inputEl.value) * literToGallon).toFixed(3)} ${gallon} | ${inputEl.value} ${gallon} 
    = ${(Number(inputEl.value) * gallonToLiter).toFixed(3)} ${liter} `
}

function convertMass() {
    convertedMass.innerHTML = `
    ${inputEl.value} ${kilogram} 
    = ${(Number(inputEl.value) * kiloToPounds).toFixed(3)} ${pound} | ${inputEl.value} ${pound} 
    = ${(Number(inputEl.value) * poundsToKilo).toFixed(3)} ${kilogram} `
}


buttonEl.addEventListener("click", function () {
    convertLength()
    convertVolume()
    convertMass()
})

