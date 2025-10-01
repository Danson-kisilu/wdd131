// place.js

// Footer dynamic year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Wind Chill Calculation
function calculateWindChill(tempC, speedKmh) {
  // Check if conditions are valid for calculation
  if (tempC <= 10 && speedKmh > 4.8) {
    let wc =
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(speedKmh, 0.16) +
      0.3965 * tempC * Math.pow(speedKmh, 0.16);
    return wc.toFixed(1); // return with 1 decimal place
  } else {
    return "N/A";
  }
}

// Use static values from your HTML
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Calculate and update wind chill
document.getElementById("windchill").textContent = calculateWindChill(temp, wind);
