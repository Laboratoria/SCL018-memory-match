import App from './components/App.js';
document.getElementById('btn-intro').addEventListener('click',function() {
    document.getElementById("intro").style.display="none";
    document.getElementById('root').style.display= 'block';
})
document.getElementById('root').appendChild(App());// Desde el HTML se toma root para crearle un hijo desde App.js