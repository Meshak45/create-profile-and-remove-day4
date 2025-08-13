export function createCard(name, role) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = name;

  const rolePara = document.createElement("p");
  rolePara.textContent = role;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(title);
  card.appendChild(rolePara);
  card.appendChild(deleteBtn);

  return card;
}
