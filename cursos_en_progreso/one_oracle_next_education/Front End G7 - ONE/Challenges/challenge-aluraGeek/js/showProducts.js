import {conectionAPI} from "../js/conectionAPI.js";


const listCards = document.querySelector("[data-list]");


/* Functions to insert new cards into the DOM*/


function crearCard(name, price, image) {
    const card = document.createElement('li');
    card.className = "card";
    card.innerHTML = `
        <img class="card__image" src="${image}" >
        <div class="card__description">
            <p class="card__description__text">${name}</p>
            <div class="card__description__bottomPart">
                <p class="card__description__bottomPart__price">$${price}</p>
                <img class="card__description__bottomPart__trashIcon" src="./assets/image copy 3.png" alt="Eliminar">
            </div>
        </div>
    `;

    // We add an event lister when we click on the tras icon
    const trashIcon = card.querySelector(".card__description__bottomPart__trashIcon");
    trashIcon.addEventListener("click", () => {
        card.remove(); // we remove the card
        conectionAPI.deleteProduct(image)
    });

    return card;
}

async function chargeCards(){
    try{
        const listAPI = await conectionAPI.listProducts();
        listAPI.forEach(card => listCards.appendChild(crearCard(card.text, card.price, card.image)))
    }
    catch{
        listCards.innerHTML = `<h2> Error 404 </h2>`
    }
}


const form = document.querySelector("[data-form]")

async function obtainDataForm(event){
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image =  document.querySelector("[data-image]").value;

    try{
        await conectionAPI.newProduct(name, price, image);
        const card = crearCard(name, price, image);
        listCards.appendChild(card);
        form.reset();
    }
    catch(error){
        alert(error)
    }
}


/* Obtaining de event from the submit button */

form.addEventListener("submit", event => obtainDataForm(event));
chargeCards();