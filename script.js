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
const addCardButton = document.querySelector('.button_type_add-place');
const profileFormButton = document.querySelector('.button_type_edit-profile');
const popupProfile = document.querySelector('.popup');
const popupCards = document.querySelector('.popup__content_add-card');
const closeProfileForm = popupProfile.querySelector('.popup__button-close');
const closeCardsForm = popupCards.querySelector('.popup__button-close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_job');
const profileForm = document.querySelector('.popup__form');
const addCardForm = document.querySelector('#add-card-form');
const cardInputName = document.querySelector("#card-name-input");
const cardInputLink = document.querySelector("#card-link-input");
const PopUpImage = document.querySelector('.popup__image');
const CloseImage = document.querySelector('#close-image');
const PopUpTitle = document.querySelector('.popup__title'); 
const PopUpOpenImage = document.querySelector('#popup-open-image');



const cards = [];
const numRandom = Math.round(Math.random() * 10, 0);
const cardsArea = document.querySelector ('.elements');
const button = document.querySelector ('.button');

function toggleProfileForm() {
    popupProfile.classList.toggle('popup_visible');
}

function toggleAddCardForm() {
  popupCards.classList.toggle('popup_visible');
}

profileFormButton.addEventListener("click", toggleProfileForm);
closeProfileForm.addEventListener("click", toggleProfileForm);
addCardButton.addEventListener("click", toggleAddCardForm);
closeCardsForm.addEventListener("click", toggleAddCardForm);

function handleFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    profileForm.reset();
    toggleProfileForm();
}
 function togglePopUpImage(name, link){
    PopUpImage.src = link
    PopUpTitle.textContent = name
    PopUpOpenImage.classList.toggle('popup__show')
  }

  function toggleCloseImage(){
    PopUpOpenImage.classList.remove('popup__show')
  }

profileForm.addEventListener('submit', handleFormSubmit);

//Funcion crear tarjeta
CloseImage.addEventListener('click', toggleCloseImage);

function crearTarjeta(name, link) {
    const template = document
    .querySelector('.template-card')
    .content.querySelector ('.element');
    const node = template.cloneNode(true);
    const nodeImage = node.querySelector('img');
    const nodeText = node.querySelector('p');
    const buttonLike = node.querySelector('.element__like');
    const buttonDelete = node.querySelector('.element__delete');


    buttonLike.addEventListener ('click', function() {
        buttonLike.classList.toggle('element__like_active');
    })

    
     buttonDelete.addEventListener('click', function() {
      node.remove();
    });

    nodeImage.addEventListener('click', function(){
      togglePopUpImage(name,link)
   });

     nodeText.textContent = name;
     nodeImage.src = link;

   return node;
  }
     
 
   addCardForm.addEventListener("submit", function (evt) {
     evt.preventDefault();
     const node = crearTarjeta(cardInputName.value, cardInputLink.value);
     cardsArea.prepend(node);
     toggleAddCardForm();
     //limpiar el formulario
     addCardForm.reset();
 });
 
initialCards.forEach((values) => {
       const node = crearTarjeta(values.name, values.link);
       cardsArea.append(node);
 });
