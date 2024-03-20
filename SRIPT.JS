//alert("Hola este es mi Javascript");

//let nombre = "Cesar";
//nombre = "Alava"

//var nombre1 = "Leo";

//const nombre2 = "Leito" 
//nombre2 ="Paniagua"  no muestra porque es una constante

//console.log(nombre)

//console.log(nombre1)

//console.log(nombre2)

//CONDICONAL

//let contenido = "Martha";

//let titulo = document.querySelector("#encabezado");
//titulo.innerHTML = contenido;

//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);

//if(textoTitulo == "Nombre"){
  //  titulo.innerHTML = "otro";
//}
//else{
  //  console.log("No se cumple")
//}

//let cabeza = "Peru";

//let Acerca = document.querySelector("#about");
//Acerca.innerHTML = cabeza;

//let textoAcerca = Acerca.innerText;

//if(textoAcerca == "Peru"){
//   Acerca.innerHTML = "Otro";}
//else{
 //   console.log("No se Cumple")
//}

//FUNCIONES

let nombre = "Cesar";
let ciudad = "LM";
let gusto = "Chocolate";

let parrafo = document.querySelector(".contenido");

function cambiarTexto(nombre, ciudad, gusto){

    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en el distrito de Santiago de Surco. Me gusta el ${gusto} y ver peliculas en Netflix. Me encanta aprender a programar para poder crear mi propia empresa de programacion web.`;
    
    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}


function suma(a,b){
  return a + b;
}

console.log(suma(3,7));

const imprimir = (texto) => {
  console.log(texto);
}
imprimir("hola mundo");