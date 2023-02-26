interface WishlistItem {
    title: string;
    description: string;
    done: boolean;
  }
  
  interface WishlistState {
    items: WishlistItem[];
  }
  
  const state: WishlistState = {
    items: [],
  };
  
  function saveStateToLocalStorage(wishlistState: WishlistState) {
    localStorage.setItem('wishlistState', JSON.stringify(wishlistState));
  }
  
  function loadStateFromLocalStorage(): WishlistState | null {
    const stateJSON = localStorage.getItem('wishlistState');
    if (stateJSON) {
      return JSON.parse(stateJSON);
    }
    return null;
  }
  
  function render() {
    const container = document.querySelector('.wishlist-container')!;
    container.innerHTML = '';
    state.items.forEach((item, index) => {
      const card = document.createElement('btnAddCard');
      card.classList.add('wishlist-card');
      if (item.done) {
        card.classList.add('done');
      }
      const cardContent = document.createElement('txtCardTitle');
      cardContent.classList.add('card-content');
      const title = document.createElement('h3');
      title.textContent = item.title;
      const description = document.createElement('p');
      description.textContent = item.description;
      cardContent.appendChild(title);
      cardContent.appendChild(description);
      card.appendChild(cardContent);
      const toggleButton = document.createElement('button');
      toggleButton.classList.add('toggle-button');
      toggleButton.textContent = item.done ? 'Not Done' : 'Done';
      toggleButton.addEventListener('click', () => {
        state.items[index].done = !state.items[index].done;
        if (state.items[index].done) {
          const doneItem = state.items.splice(index, 1)[0];
          state.items.push(doneItem);
        } else {
          const undoneItem = state.items.splice(index, 1)[0];
          state.items.unshift(undoneItem);
        }
        saveStateToLocalStorage(state);
        render();
      });
      const removeButton = document.createElement('button');
      removeButton.classList.add('remove-button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        state.items.splice(index, 1);
        saveStateToLocalStorage(state);
        render();
      });
      card.appendChild(toggleButton);
      card.appendChild(removeButton);
      container.appendChild(card);
    });
  }
  
  function addItemToState(title: string, description: string) {
    const item: WishlistItem = {
      title,
      description,
      done: false,
    };
    state.items.push(item);
    saveStateToLocalStorage(state);
  }
  
  function handleSubmit(event: Event) {
    event.preventDefault();
    const titleInput = document.querySelector<HTMLInputElement>('#title-input')!;
    const descriptionInput = document.querySelector<HTMLTextAreaElement>('#description-input')!;
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    if (title && description) {
      addItemToState(title, description);
      titleInput.value = '';
      descriptionInput.value = '';
      render();
    }
  }
  
  const form = document.querySelector('.wishlist-form')!;
  form.addEventListener('submit', handleSubmit);
  
  const savedState = loadStateFromLocalStorage();
  if (savedState) {
    state.items = savedState.items;
  }
  render();
  