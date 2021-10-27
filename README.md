# Memory Match Game Estudio Ghibli

## Definición del producto
Memory Match de estudio Ghibli es un juego de memoria  inspirado en las películas de Estudio Ghibli que consiste en encontrar pares de cartas destapandolas de 2 en 2 hasta encontrar todos los pares. El juego está pensado para un público joven adulto y para jugar de manera individual en distintos dispositivos electrónicos como notebook o teléfono celular. 

## Historias de usuario
Las historias de usuario nacen después de realizar un research de usuario. Para ello elaboramos esta encuesta en Google Forms [_disponible aquí_](https://docs.google.com/forms/d/107VnGh2MsOVBne_0u3mY7cuWHa8uTwYJt4-8xZxs6oU/viewform?edit_requested=true) y a partir de los resultados caracterizamos al usuario objetivo:

¿Quiénes son los principales usuarios de producto?
Usuarios de 30 años promedio fans de estudio Ghibli

¿Cuáles son los componentes principales de la interfaz y por qué?
pantalla de inicio: bienvenida al juego, seleccionar opciones de mazo con tematicas de peliculas : porque el usuario quiere poder escoger su película favorita

¿Cuándo utilizan o utilizarían el producto?
En sus tiempos libres y en multiples dispositivos

![Historia de usuario 1](src/img/1.png)
### Criterios de aceptación:
* Diseña 3 temáticas de mazo
* El usuario debe seleccionar una categoría con un click 
* Se despliega el memory game según la temática elegida 
* Comienza el juego 

### Definición de terminado
* Se crea un archivo de categories.js 
* Se implementan 3 set de cartas según la temática seleccionada: La princesa Mononoke, El castillo ambulante, Mi vecino Totoro
* Se crean botones que al click despliegan la temática de cada set de cartas 

![Historia de usuario 2](src/img/2.png)
### Criterios de aceptación:
* Escoger 1 imagen para cada tarjeta según la temática del juego 
* Se despliegan 12 cartas barajadas en el tablero 
* Cada carta tiene un par en el tablero  

### Definición de terminado
* Importar las imagénes a la carpeta data
* Duplicar las imágenes con concat 
* Barajar las cartas creando una función shuffle 

## Diseño de la Interfaz de Usuario
#### Prototipo de baja fidelidad
![Menú de categorías](src/img/Imagen_de_iOS.jpg)

![Tablero del juego](src/img/IMG_20210921_161323.jpg)

#### Prototipo de alta fidelidad

[_Link de prototipo de Figma_](https://www.figma.com/file/iyYqH510cBTQekA7fVLXn2/Ghibli's-Memory-Match-Game?node-id=0%3A1)

#### Testeos de usabilidad

1.- Mujer de 37 años: Indica que le gusta el aspecto de la página aunque desconoce el concepto, expresa que es muy intuitivo diciendo que entiende cada ícono y botón que presenta. Se muestra interesada en memorizar las cartas antes de ser ocultadas y finaliza sentenciando que se entretuvo y cumple con su expectativa acerca de un juego de memoria clásico.

2.- Mujer de 21 años: Le gusta la temática del juego, los colores de fondo y la música es relajante. No necesita leer las instrucciones para comenzar a jugar. Juega el juego varias veces diciendo que la entretuvo, le gustaría que tuviese más niveles. 