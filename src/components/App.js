import Mononoke from '../data/Ghibli/Ghibli.js'; // Importar Mononoke de Ghibli.js (Importarla a una función que use los datos para crear las cartas)
import shuffle from './shuffle.js'; // Importar función shuffle 
import matchCards from './Match.js'; //Importar función match.

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = '';

  const displayMononoke = document.createElement('div');
  displayMononoke.className = 'mononokeBg';
  el.appendChild(displayMononoke);

  // header del juego 
  const header = document.createElement('div');
  header.className = 'header'
  displayMononoke.appendChild(header);

  //Esto debería quedar general (para hacer los temas según la elección de mazo)
  const logoHeader = document.createElement('img');
  logoHeader.className = 'logo';
  logoHeader.src = './img/logoprincesa.png';
  header.appendChild(logoHeader);

    //contenedor de las cartas (también general)
    const Box = document.createElement('div');
    Box.className = 'Box';
    displayMononoke.appendChild(Box);

  //contenedor de las cartas (también general)
  const cardsBox = document.createElement('div');
  cardsBox.className = 'cardsBox';
  Box.appendChild(cardsBox);

  //Cuadrícula para mostrar puntaje (general)
  const scoreBox = document.createElement('div');
  scoreBox.className = 'scoreBox';
  Box.appendChild(scoreBox);

  //Cuadrícula para distribuir las cartas 
  const grid = document.createElement('div');
  grid.className = 'grid';
  cardsBox.appendChild(grid);

  //document.getElementById("btn-intro").addEventListener("click",displayMononoke);

  //Duplicar cada item de la data y randomizarlos (general, para ser usado por cada mazo)
  let doubleArray = Mononoke.items.concat(Mononoke.items); // Declara variable que dobla los items de Mononoke de Ghibli.js
  const shuffleCards = shuffle(doubleArray);

  //Declaro variables a utilizar
  let clickCard = [];

  //Recorro los elementos del array y los encierro en un div
  for (let i = 0; i < shuffleCards.length; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = shuffleCards[i].id;
    grid.appendChild(card);

    //Encierro las imagenes en el div anterior
    let frontCard = document.createElement("img");
    frontCard.src = shuffleCards[i].image;
    frontCard.className = 'frontCard';
    card.appendChild(frontCard);

    let backCard = document.createElement("img");
    backCard.src = './img/kodamabg.png';
    backCard.className = 'backCard';
    card.appendChild(backCard);

    //Hacer flip a 2 cartas.
    const flipCard = () => {
      if (clickCard.length < 2) {
        clickCard.push(card);
        //clickedElements.push(card);
        card.classList.add("flipCard");

        setTimeout(() => {
        matchCards(clickCard);
       }, 2000);

      }
    }
    card.addEventListener("click", flipCard);
  }

  return el;

};
export default App;

