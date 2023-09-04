const input = document.getElementById("number");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
var selectElement = document.getElementById("temperature");

btn.addEventListener("click", getResult);

function getResult() {
  const getValue = input.value;

  if (selectElement.value === "fahrenheit") {
    // Convert Celsius to Fahrenheit
    var ans = (9 / 5) * getValue + 32;
    result.innerText = ans + " °F";
  } else if (selectElement.value === "kelvin") {
    // Convert Celsius to Kelvin
    var ans = parseFloat(getValue) + 273.15;
    result.innerText = ans + " K";
  } else {
    // Handle invalid selection
    result.innerText = "Please select a valid conversion.";
  }
}
