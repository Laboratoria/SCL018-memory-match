/*Funciones del Match
-Acceder a la data a ser evaluada
-Recorrer elecciones de jugador
-Guardar las elecciones en una variable
-Comparar similitud de carta 1 y carta 2
-Si son similares en algún atributo, es match (true) y quedan fijas
-De lo contrario, son false y se deben volver a voltear*/



const matchCards = (array) => {
  //let matchPos = [];
    for(let i = 0; i < array.length; i++){
    if (array.length == 2 && array[0] == array[1]) {
      //matchPos.push(array[i]);
      console.log(matchPos);
      alert('hicieron match');
      /*score += 100;
      numberScore.innerHTML = score;
      if (score == 900) {
        textScore.innerHTML = "Congrats! You've caught them all!"*/

      /*array[0].matched = true;
      array[1].matched = true;*/
      array.length = 0;
    } else if(array.length == 2 && array[0] !== array[1]){
      /*array.style.transform = 'rotateY(0deg)'*/
      alert('no hicieron match');
      array.length = 0;
    }}}
    
export default matchCards;