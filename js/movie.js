const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

async function getMovie() {

    const res = await fetch(
        `${Base_URL}/movie/${movieId}?api_key=${API_KEY}`
    );

    const movie = await res.json();

    showmovie(movie);

}


function showMovie(movie) {
    const container = document.getElementById("movieDetails");

    container.innerHTML = `
    <h1>${movie.title}</h1>
    <img src = ${IMAGE_URL}${movie.poster_path}>
    <p>${movie.overview}</p>
    <p>rating:${movie.vote_averaage}</p>
    `;
}

getMovie();








