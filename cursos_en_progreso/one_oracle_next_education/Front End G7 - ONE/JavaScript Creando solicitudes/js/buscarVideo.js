import {conexionAPI} from "../js/conexionAPI.js";
import crearCard  from "../js/mostrarVideos.js"; 

async function buscarVideo(evento){
    evento.preventDefault();
    const input = document.querySelector("[data-input-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideo(input);
    // console.log(busqueda)

    const lista = document.querySelector("[data-lista]")
    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)));
    
    if(busqueda.length==0){
        lista.innerHTML=`<h2>No fueron encontrados elementos para ${input}</h2>`
    }

}
const boton = document.querySelector("[data-boton-busqueda]");
boton.addEventListener("click", evento => buscarVideo(evento))
