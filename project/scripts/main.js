// Farm Smart Project by Danson Kisilu

document.addEventListener("DOMContentLoaded", () => {
  // show year in footer
  document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());

  // ======= Home Page Logic =======
  const tips = [
    "Use drip irrigation to save water.",
    "Add compost to improve soil fertility.",
    "Rotate crops to prevent soil depletion.",
  ];

  const list = document.querySelector("#tipsList");
  const addBtn = document.querySelector("#addTip");

  if (list && addBtn) {
    renderTips();
    addBtn.addEventListener("click", addTip);
  }

  function renderTips() {
    list.innerHTML = tips.map(t => `<li>${t}</li>`).join("");
    localStorage.setItem("farmTips", JSON.stringify(tips));
  }

  function addTip() {
    const newTip = prompt("Enter a new farm tip:");
    if (newTip) {
      tips.push(newTip);
      renderTips();
    }
  }

  // ======= Contact Form =======
  const form = document.querySelector("#contactForm");
  const message = document.querySelector("#formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value;
      localStorage.setItem("contactName", name);
      message.textContent = `Thanks, ${name}! We’ll reach out soon.`;
      form.reset();
    });
  }
});
