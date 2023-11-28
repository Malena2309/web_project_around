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

