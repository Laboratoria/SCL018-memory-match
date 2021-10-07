const gamePlay = (data) => {
    const content  = document.createElement("div");
    const gameBoard = document.createElement ("section");
    gameBoard.className= "gameBoard";
    gameBoard.id = "gameBoard";
    content.appendChild(gameBoard);

    const shuffleCards = shuffle(data);
    return gameBoard;
}