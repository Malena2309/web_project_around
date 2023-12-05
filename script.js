//variables
const addButton = document.querySelector(".button_type_edit-profile");
const openFormButton = document.querySelector('.button_type_edit-profile');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const form = document.querySelector('.popup__form');

function toggleForm() {
    popup.classList.toggle('popup_visible');
}

openFormButton.addEventListener('click', toggleForm);

closeButton.addEventListener('click', toggleForm);


function handleFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    form.reset();
    toggleForm();
}

form.addEventListener('submit', handleFormSubmit);



