/*Funciones del Match
-Acceder a la data a ser evaluada
-Recorrer elecciones de jugador
-Guardar las elecciones en una variable
-Comparar similitud de carta 1 y carta 2
-Si son similares en algún atributo, es match (true)
-De lo contrario, son false y se deben volver a voltear*/


const matchCards = (array) => {
    if (array.length == 2 && array[0].id == array[1].id) {
      /*score += 100;
      numberScore.innerHTML = score;
      if (score == 900) {
        textScore.innerHTML = "Congrats! You've caught them all!"*/

      array[0].matched = true;
      array[1].matched = true;
      array.length = 0;
    } else /*if(array.length == 2 && array[0].id !== array[1].id)*/ {
      array.length = 0;
    }}
    
export default matchCards;