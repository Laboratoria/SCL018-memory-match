//Barajar cartas

const shuffle = (array) => {// Se le pasa el parámetro del conjunto de imágenes
    let shortArray = array.length - 1; //-1 para que no considere la posición 0
    let value = array.length; //
    while(shortArray > 0) { //Bucle que, antes de ejecutarse, evalúa como verdadera la condición shortArray > 0
        let finalValue = array[shortArray]; //Estableciendo propiedad de shortArray
        let randomArray = Math.floor(Math.random()* value);//Estableciendo el array randomizado mediante el método Math.floor y función Math.random 
        array[shortArray]= array [randomArray];//Se reasigna valor a array[shortArray]
        array[randomArray]= finalValue;//Se reasigna valor a array[randomArray]
        shortArray=shortArray-1;//Por qué shortArray -1?
        value=value -1;//Por qué value -1?
    
    }
    return array;

}
  
export default shuffle;