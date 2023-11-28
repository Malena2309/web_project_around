let container=document.querySelector('.container');
let namesContainer=container.querySelector ('names-container');
let names=namesContainer.querySelectorAll('.name');
let addButton=container.querySelector(".form__submit-bt_action_add");
let resetButton=container.querySelector(".form__submit-btn_action_reset");
const openFormButton = document.querySelector('.button_type_submit');
const popup =document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
function toggleForm () {
    popup.classList.toggle('popup_visible');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);
const form = document.querySelector('.popup__form');
function handleFormSubmit() {
    form.addEventListener('submit', handleFormSubmit);
}
const form = document.querySelector('.popup__form');
function handleFormSubmit(event) {
    event.preventDefault();
    form.addEventListener('submit', handleFormSubmit);
}

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const input Name = document.querySelector('.popup__input_type_name');
const input Job = document.querySelector('.popup__input_type_job');

function handleFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}

function toggleForm () {
    inputName.value = profileName.textContent;
    inputBreed.value = profileJob.textContent;
    popup.classList.add('.popup_visible');
}
