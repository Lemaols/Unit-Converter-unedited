/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let value = inputEl.value
    lengthEl.innerText = `${value} meters = ${value * 3.281.toFixed(3)} feet | ${value} feet = ${(value/3.281).toFixed(3)} meters` 
    volumeEl.innerText = `${value} liters = ${value * 0.264.toFixed(3)} gallons | ${value} gallons = ${value/0.264.toFixed(3)} liters`
    massEl.innerText = `${value} kilograms = ${value * 2.204.toFixed(3)} pounds | ${value} pounds = ${value/2.204.toFixed(3)} kilograms
})

