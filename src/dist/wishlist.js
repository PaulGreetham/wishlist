"use strict";

const state = {
  items: [],
};

const container = document.querySelector(".wishlist-container");
const form = document.querySelector(".wishlist-form");
const titleInput = document.querySelector("#title-input");
const descriptionInput = document.querySelector("#description-input");

function saveStateToLocalStorage(state) {
  localStorage.setItem("wishlistState", JSON.stringify(state));
}

function loadStateFromLocalStorage() {
  const stateJSON = localStorage.getItem("wishlistState");
  return stateJSON ? JSON.parse(stateJSON) : null;
}

function render() {
  container.innerHTML = "";

  state.items.forEach((item, index) => {
    const { title, description, done } = item;

    const card = document.createElement("button");
    card.classList.add("wishlist-card", done && "done");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const titleEl = document.createElement("h3");
    titleEl.textContent = title;

    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;

    cardContent.appendChild(titleEl);
    cardContent.appendChild(descriptionEl);
    card.appendChild(cardContent);

    const toggleButton = createButton(
      done ? "Not Done" : "Done",
      () => toggleDone(index)
    );

    const removeButton = createButton("Remove", () => removeItem(index));

    card.appendChild(toggleButton);
    card.appendChild(removeButton);
    container.appendChild(card);
  });
}

function createButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

function addItemToState(title, description, done = false) {
  const item = { title, description, done };
  state.items.push(item);
  saveStateToLocalStorage(state);
}

function toggleDone(index) {
  const item = state.items[index];
  item.done = !item.done;

  if (item.done) {
    state.items.splice(index, 1);
    state.items.push(item);
  } else {
    state.items.splice(index, 1);
    state.items.unshift(item);
  }

  saveStateToLocalStorage(state);
  render();
}

function removeItem(index) {
  state.items.splice(index, 1);
  saveStateToLocalStorage(state);
  render();
}

function handleSubmit(event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title && description) {
    addItemToState(title, description);
    titleInput.value = "";
    descriptionInput.value = "";
    render();
  }
}

form.addEventListener("submit", handleSubmit);

const savedState = loadStateFromLocalStorage();

if (savedState) {
  state.items = savedState.items;
}

render();
