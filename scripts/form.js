// Populate product list dynamically
const products = [
    { id: "fertilizer-premium", name: "Premium Organic Fertilizer" },
    { id: "drip-irrigation", name: "Drip Irrigation Kit" },
    { id: "chili-seeds", name: "Hybrid Chili Seeds" },
    { id: "eggplant-seeds", name: "High-Yield Eggplant Seeds" },
    { id: "soil-sensor", name: "Smart Soil Moisture Sensor" },
    { id: "pig-feed", name: "Protein-Enriched Pig Feed" }
];

const selectElement = document.querySelector("#productName");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

// Footer date
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;
