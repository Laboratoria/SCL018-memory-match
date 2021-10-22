import Mononoke from '../data/Ghibli/Ghibli.js'; // Importar Mononoke de Ghibli.js
import shuffle from './shuffle.js'; // Importar función shuffle
//import matchCards from './Match.js'; //Importar función match.

const App = () => {
  const el = document.createElement('div');
  el.className = 'App';
  el.textContent = '';
  //Declaro variables a utilizar
  let clickCard = [];
  let score = 0;

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

  //Contenedor de las cartas (también general)
  const cardsBox = document.createElement('div');
  cardsBox.className = 'cardsBox';
  displayMononoke.appendChild(cardsBox);

  //Cuadrícula para mostrar puntaje (general)
  const scoreBox = document.createElement('div');
  scoreBox.className = 'scoreBox';
  displayMononoke.appendChild(scoreBox);

  //Mostrar el puntaje
  const theScore = document.createElement('p');
  theScore.className = 'theScore';
  theScore.innerHTML = 'Tu puntaje es: ';
  const scoreNum = document.createElement('span');
  scoreNum.className = 'scoreNum';
  theScore.appendChild(scoreNum);
  scoreBox.appendChild(theScore);
  const monoGif = document.createElement('img');
  monoGif.className = 'monoGif';
  monoGif.src = './img/gifMono.gif';
  scoreBox.appendChild(monoGif);
  const replayBut = document.createElement('img');
  replayBut.className = 'replayBut';
  replayBut.src = './img/returnImg.png';
  scoreBox.appendChild(replayBut);

  //Cuadrícula para distribuir las cartas 
  const grid = document.createElement('div');
  grid.className = 'grid';
  cardsBox.appendChild(grid);

  //Se crea div con mensaje ganador.
  const winner = document.createElement('div');
  winner.className = 'winner';
  winner.id = 'winner';
  const winnerBox = document.createElement('div');
  winnerBox.className = 'winnerBox';
  winner.id = 'winner';
  const winnerText = document.createElement('p');
  winnerText.className = 'winnerText';
  winnerText.innerHTML = '¡GANASTE!';
  const winBut = document.createElement('img');
  winBut.className = 'winBut';
  winBut.src = './img/botonotravez.png';
  winner.appendChild(winnerBox);
  winnerBox.appendChild(winnerText);
  winnerBox.appendChild(winBut);
  displayMononoke.appendChild(winner);

  //document.getElementById("btn-intro").addEventListener("click",displayMononoke);

  //Duplicar cada item de la data y randomizarlos (general, para ser usado por cada mazo)
  let doubleArray = Mononoke.items.concat(Mononoke.items); // Declara variable que dobla los items de Mononoke de Ghibli.js
  const shuffleCards = shuffle(doubleArray);

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
        card.classList.add("flipCard");

        setTimeout(() => {
          matchCards(clickCard);
        }, 2000);

      }
    }
    card.addEventListener("click", flipCard);

    //Función Match
    const matchCards = (array) => {
      let matchPos = []; //Se crea variable con array abierto.
      if (array.length == 2 && array[0].id == array[1].id) { //Se comparan los id de los elementos clickeados.
        matchPos.push(array[0], array[1]); //Si son iguales se encierran los elementos en la variable.
        matchPos.forEach(element => { //Se recorre el array y se cambian las clases de los elementos.
          element.classList.add("matchCards");
        });
        score += 100;
        scoreNum.innerHTML = score;
        if (score == 200) {
          winner.classList.add('active');
        }
        array.length = 0; //Si hacen match se vacía el array (parámetro).
      } else { //Si no hacen match...
        document.querySelectorAll(".flipCard").forEach(element => { //Se toman los elementos y se remueve el flip para que se volteen las cartas.
          element.classList.remove("flipCard");
        });
        array.length = 0; //Si no hacen match se vacía el array (parámetro).
      }

    };

  }
  //(En la pantalla Ganadora) Al dar click en botón se reinicia el juego. 
  winBut.addEventListener('click', function () {
    location.reload();
  })
  //(En la pantalla de juego) Al dar click en botón se reinicia el juego. 
  replayBut.addEventListener('click', function () {
    location.reload();
  })
  return el;

};
export default App;
