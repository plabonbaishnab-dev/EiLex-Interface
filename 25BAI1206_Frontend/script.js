const API_KEY = "f5fd0da3af9b417d036e424444d2ed75";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/original";
const POSTER_URL = "https://image.tmdb.org/t/p/w500";

let movies = [];

document.addEventListener("DOMContentLoaded", () => {
    loadMovies();
});

async function loadMovies(){

    const movieNames = [
        "Interstellar",
        "Insidious",
        "Cars",
        "Titanic",
        "Squid Game"
    ];

    try{
        const requests = movieNames.map(name =>
            fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${name}`)
                .then(res => res.json())
        );

        const responses = await Promise.all(requests);

        movies = responses.map(res => res.results[0]).filter(Boolean);

        generateUI(movies);

    } catch(error){
        console.error("Error loading movies:", error);
    }
}


function generateUI(movieList){

    const contentContainer = document.getElementById("content-container");
    const carouselContainer = document.getElementById("carousel-container");

    contentContainer.innerHTML = "";
    carouselContainer.innerHTML = "";

    movieList.forEach((movie, index) => {

        const poster = movie.poster_path 
            ? POSTER_URL + movie.poster_path 
            : "";

        const backdrop = movie.backdrop_path 
            ? IMG_URL + movie.backdrop_path 
            : "";

        const title = movie.title || movie.name || "No Title";

        const year = movie.release_date 
            ? movie.release_date.split("-")[0]
            : (movie.first_air_date 
                ? movie.first_air_date.split("-")[0] 
                : "N/A");

        const overview = movie.overview || "No description available.";


        contentContainer.innerHTML += `
            <div class="content ${index === 0 ? 'active' : ''}">
                <h2>${title}</h2>
                <h4><span>${year}</span></h4>
                <p>${overview}</p>

                <div class="buttons">
                    <a class="play-btn">Play</a>
                    <a class="list-btn">My List</a>
                </div>
            </div>
        `;


        carouselContainer.innerHTML += `
            <div class="carousel-item"
                onclick="changeBG('${backdrop}', ${index})">
                <img src="${poster}">
            </div>
        `;
    });



    if(movieList.length > 0 && movieList[0].backdrop_path){
        document.querySelector(".banner").style.backgroundImage =
            `url(${IMG_URL + movieList[0].backdrop_path})`;
    }

    setTimeout(() => {
        const elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            shift: 50,
            padding: 50
        });
    }, 100);
}



function changeBG(bg, index){

    if(bg){
        document.querySelector(".banner").style.backgroundImage = `url(${bg})`;
    }

    const contents = document.querySelectorAll(".content");

    contents.forEach(c => c.classList.remove("active"));

    if(contents[index]){
        contents[index].classList.add("active");
    }
}



const searchInput = document.getElementById("genreSearch");

if(searchInput){
    searchInput.addEventListener("keypress", async function(e){

        if(e.key === "Enter"){

            const query = this.value.trim();

            if(query === "") return;

            try{
                const response = await fetch(
                    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`
                );

                const data = await response.json();

                const results = data.results.filter(item =>
                    item.poster_path && item.backdrop_path
                );

                if(results.length > 0){
                    generateUI(results.slice(0, 10));
                }

            } catch(error){
                console.error("Search error:", error);
            }
        }
    });
}