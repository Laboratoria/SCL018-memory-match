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

import Mononoke from '../data/Ghibli/Ghibli.js';// Importar Mononoke de Ghibli.js
import shuffle from '../shuffle/shuffle.js';// Importar función shuffle

console.log(Mononoke);
const App = () => { 
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = '';

  //Duplicar cada item de la data y randomizarlos
  let dobleArray= Mononoke.items.concat(Mononoke.items);// Declara variable que dobla los items de Mononoke de Ghibli.js
  const shuffleCards = shuffle(dobleArray);
  console.log(shuffleCards);
  
  
  

  return el;

};

let array=[];
for (let index = 0; index <Mononoke.items.length; index++) {
array.push(Mononoke.items[index]);

}
console.log(array);


export default App;
