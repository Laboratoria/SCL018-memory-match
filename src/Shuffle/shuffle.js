//Barajar cartas

const shuffle = (array) => {
    let shortArray = array.length - 1; //Para que no considere la posición 0
    let value = array.length;
    while(shortArray > 0) {
        let finalValue = array[shortArray];
        let randomArray = Math.floor(Math.random()* value);
        array[shortArray]= array [randomArray];
        array[randomArray]= finalValue;
        shortArray=shortArray-1;
        value=value -1;
    
    }
    return array;

}
  
export default shuffle;