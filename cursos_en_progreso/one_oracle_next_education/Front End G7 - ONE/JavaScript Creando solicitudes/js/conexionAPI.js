const url = 'http://localhost:3001/videos'

async function listarVideos(){
    const conexion = await fetch(url);
    const parseConection = conexion.json();
    console.log(parseConection)
    return parseConection
}

async function enviarVideo(titulo, descripcion, url, imagen){
    const conexion = await fetch("http://localhost:3001/videos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:`${descripcion} mil visualizaciones`,
            url:url,
            imagen:imagen
        }),
    })
    const parsedConection = conexion.json();
    if (!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video")
    }
    return parsedConection;
}

async function buscarVideo(titulo){
    const conexion = await fetch(`http://localhost:3001/videos?titulo=${titulo}`);
    const results = conexion.json();
    return results
}


// Exportamos la funcion listarVideos
export const conexionAPI = {
    listarVideos, enviarVideo, buscarVideo

}
