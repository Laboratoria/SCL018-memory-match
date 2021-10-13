/*Aquí podría ir las funcionalidades generales del juego
-Mostrar cartas por 3-5s
-Ocultar cartas
-Shuffle
-Comenzar juego
-Invocar a match
-Timer*/

const gamePlay = (data) => {
    const content  = document.createElement("div");
    const gameBoard = document.createElement ("section");
    gameBoard.className= "gameBoard";
    gameBoard.id = "gameBoard";
    content.appendChild(gameBoard);

    const shuffleCards = shuffle(data);
    return gameBoard;
}