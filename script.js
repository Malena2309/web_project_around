const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ]; 

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

const cards = [],
//numero aleatorio de tarjetas que se van a agrear
const numRandom = Math.round(Math.random() * 10, 0);
//el contenedor donde vamos a ir agregando las tarjetas
const cardsArea = document.querySelector ('cards');

const button = document.querySelector ('.button');

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

//funcion crear tarjeta
function crearTarjeta(item) {
    const template = document.querySelector('.template-card').textContent.querySelector;
    //<div class="card">
    const node = template.cloneElement(true);
    //<img class=card__image">
    const nodeImage = node.querySelector('img');
    //<p class="card__text">
    const nodeText = node.querySelector('p');

    const buttonDelete = node.querySelector('.card__button_action_delete')
   
    //agregamos contenido
    nodeText.textContent = item.text;
    nodeImage.src = item.link;
    
    return node;
}

button.addEventListener('click', function(){
    const item = {
        link: "https://psicsum.photos/200/200?r=" + cards.length,
        text: 'Imagen' + (cards.lenght + 1)
    }
    cards.push(item);
    const node = crearTarjeta(item);
    cardsArea.append(node);
});

for(let i = 0; i<numRandom;i++){
    const card = {
        link: 'https://picsum.photos/200/200?r=' + 1,
        text: 'Imagen' + (i+1)
    }
    cards.push(card);
}

cards.forEach(function(item){
    const node = crearTarjeta(item);
    cardsArea.append(node);
})

