const btnBuscar = document.getElementById("btn-movie");
const container = document.querySelector(".container");

const urlPeliculas = "https://www.omdbapi.com/?s=avengers&apikey=4b229795&";

btnBuscar.onclick = async function(){
    const respuesta = await fetch(urlPeliculas);
    const data = await respuesta.json();

    let movies = data.Search;
    mostrarPeliculas(movies);
}

function mostrarPeliculas (movies){
    container.innerHTML = "";
    movies.forEach(movie => {
        container.innerHTML += 
        `
        <div class="card">
            <img src="${movie.Poster}" alt="">
            <h3>${movie.Title}</h4>
            <p>${movie.Year}</p>
        </div>
        `
    });
}