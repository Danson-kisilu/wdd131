// Get query params
const params = new URLSearchParams(window.location.search);
const productName = params.get("productName");
const rating = params.get("rating");
const installationDate = params.get("installationDate");
const features = params.getAll("features").join(", ");
const writtenReview = params.get("writtenReview");
const userName = params.get("userName") || "Anonymous";

// Display review summary
const reviewSummary = `
  <h3>Review Summary</h3>
  <p><strong>Product:</strong> ${productName}</p>
  <p><strong>Rating:</strong> ${rating} / 5</p>
  <p><strong>Date:</strong> ${installationDate}</p>
  <p><strong>Features:</strong> ${features || "None selected"}</p>
  <p><strong>Reviewer:</strong> ${userName}</p>
  <p><strong>Comments:</strong> ${writtenReview || "No additional feedback"}</p>
`;
document.querySelector("#reviewSummary").innerHTML = reviewSummary;

// Track total reviews
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
document.querySelector("#reviewCounter").textContent = `Total reviews submitted: ${reviewCount}`;

// Footer
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;
