import { createCard } from "./cardUtils.js";

const addProfileBtn = document.getElementById("addProfileBtn");
const cardContainer = document.getElementById("cardContainer");

addProfileBtn.addEventListener("click", () => {
  const name = prompt("Enter Name:");
  const role = prompt("Enter Role:");

  if (name && role) {
    const newCard = createCard(name, role);
    cardContainer.appendChild(newCard);
  } else {
    alert("Please enter both Name and Role!");
  }
});
