async function listarVideos(){
    const conexion = fetch('http://localhost:3001/videos');
    const parseConection = (await conexion).json();
    console.log(parseConection)
}

listarVideos()