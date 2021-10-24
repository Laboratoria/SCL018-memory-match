import App from './components/App.js';
document.getElementById('btn-intro').addEventListener('click',function() {
    document.getElementById('intro').style.display='none';
    document.getElementById('root').style.display= 'block';
})
//Función para botón de instrucciones.
document.getElementById('btn-instructions').addEventListener('click',function() {
    document.getElementById('overlay').classList.add('show');
})
document.getElementById('closeInst').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('show');
})
document.getElementById('root').appendChild(App());// Desde el HTML se toma root para crearle un hijo desde App.js