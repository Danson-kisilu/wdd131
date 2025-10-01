// Footer Year and Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Wind Chill Calculation Function (Celsius version)
function calculateWindChill(tempC, windKmh) {
  // Convert wind speed to m/s (formula requires m/s)
  let windMs = windKmh / 3.6;

  // Wind chill is only valid if temp <= 10 °C and wind > 4.8 km/h
  if (tempC <= 10 && windKmh > 4.8) {
    let chill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windMs, 0.16) + 0.3965 * tempC * Math.pow(windMs, 0.16);
    return chill.toFixed(1);
  } else {
    return "N/A";
  }
}

// Get values from DOM
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Compute and display wind chill
document.getElementById("windchill").textContent = calculateWindChill(temp, wind) + (calculateWindChill(temp, wind) !== "N/A" ? " °C" : "");
