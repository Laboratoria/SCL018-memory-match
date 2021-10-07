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

/*import Mononoke from '../data/Ghibli/Ghibli.js';// Importar Mononoke de Ghibli.js*/
import Castillo from '../data/Castillo/castillo.js';
import shuffle from '../shuffle/shuffle.js';// Importar función shuffle

const App = () => { 
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = '';

  const cardsBox = document.createElement('div');
  cardsBox.className = 'cardsBox';
  el.appendChild(cardsBox);

  //Duplicar cada item de la data y randomizarlos
  let doubleArray= Castillo.items.concat(Castillo.items);// Declara variable que dobla los items de Mononoke de Ghibli.js
  const shuffleCards = shuffle(doubleArray);
  console.log(shuffleCards);

//Recorro los elementos del array y los encierro en un div
  for(let i = 0; i < shuffleCards.length; i++){
    const card = document.createElement('div');
    card.className = 'card';
    card.id = shuffleCards[i].id;
    cardsBox.appendChild(card);
    
//Encierro las imagenes en el div anterior
    let frontCard = document.createElement("img");
    frontCard.id = shuffleCards[i].id;
    imfrontCard.src = shuffleCards[i].age;
    frontCard.className = 'frontCard';
    card.appendChild(frontCard);
 
}

  return el;

};


/*el.innerHTML += `
<div class='memoryCard' id='memoryCard'> 
  <img class="fotos" src="${shuffleCards[i].image}">
  <div class='descripcion'>
  <p class='nombres'>${shuffleCards[i].id}</p><br>
  </div>`;*/

export default App;
