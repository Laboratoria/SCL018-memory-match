
/*const shuffle (arreglo) => {
    arreglo.forEach( )
}
(function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();*/



const shuffle = (array) => {
    let shortArray = array.length - 1;
    let value = array.length;
    while(shortArray >0) {
        let finalValue = array[shortArray];
        let randomArray = Math.floor(Math.random()* value);
        array[shortArray]= array [randomArray];
        array[randomArray]= finalValue;
        shortArray=shortArray-1;
        value=value -1;
    
    }
    return array;

}
  /*function shuffle(array) w{
    let lastIndex = array.length - 1;
    let value = array.length;
    while (lastIndex > 0) {
      let lastValue = array[lastIndex];
      let randonIndex = Math.floor(Math.random() * value);
      array[lastIndex] = array[randonIndex];
      array[randonIndex] = lastValue;
      lastIndex = lastIndex - 1;
      value = value - 1;
    }
    return array;
  }*/
export default shuffle;