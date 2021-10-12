//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

//Qué parte del código vamos a escribir aquí?
/*
DOM - Crear e insertar elementos
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de código: document.createDocumentFragment()*/

import Mononoke from '../data/Ghibli/Ghibli.js';// Importar Mononoke de Ghibli.js*/
import shuffle from '../shuffle/shuffle.js';// Importar función shuffle

const App = () => { 
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = '';

  const displayMononoke = document.createElement('div');
  displayMononoke.className = 'mononokeBg';
  el.appendChild(displayMononoke);

  
// header del juego 
  const header = document.createElement ('div');
  header.className= 'header'
  displayMononoke.appendChild(header);

  const logoHeader = document.createElement('img');
  logoHeader.className = 'logo';
  logoHeader.src = './img/logoprincesa.png';
  header.appendChild(logoHeader);

  //contenedor de las cartas
  const cardsBox = document.createElement('div');
  cardsBox.className = 'cardsBox';
  displayMononoke.appendChild(cardsBox);

  //Cuadrícula para mostrar puntaje 
  const scoreBox = document.createElement('div');
  scoreBox.className = 'scoreBox';
  displayMononoke.appendChild(scoreBox);

  //Cuadrícula para distribuir las cartas 
  const grid = document.createElement('div');
  grid.className = 'grid';
  cardsBox.appendChild(grid);

//Duplicar cada item de la data y randomizarlos
  let doubleArray= Mononoke.items.concat(Mononoke.items);// Declara variable que dobla los items de Mononoke de Ghibli.js
  const shuffleCards = shuffle(doubleArray);

//Recorro los elementos del array y los encierro en un div
  for(let i = 0; i < shuffleCards.length; i++){
    const card = document.createElement('div');
    card.className = 'card';        
    card.id = shuffleCards[i].id;
    
//Encierro las imagenes en el div anterior
    let frontCard = document.createElement("img");
    frontCard.src = shuffleCards[i].image;
    frontCard.className = 'frontCard';
    card.appendChild(frontCard);
    
    let backCard = document.createElement("img");
    backCard.src = './img/kodamabg.png';
    backCard.className = 'backCard';
    card.appendChild(backCard);

//Crear contenedor para card.
    const cardContainer = document.createElement('div');
    cardContainer.className = 'cardContainer';
    grid.appendChild(cardContainer);

    cardContainer.appendChild(card);
}

/*function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }*/

  return el;

};
export default App;
