// TMDB API
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjE0ZGMwNDMxNjJiMjM4MzVjYjAzY2RiZGMwYzUyNyIsIm5iZiI6MTc3MzQwNTU0My45OTEwMDAyLCJzdWIiOiI2OWI0MDU2N2NmYzgwNzk3NjM3NjA4NGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VmTyeW18H18pa_Xd1OrmVBig-5tWNWgXqq5m6WMX_AU'
    }
};

const IMG = "https://image.tmdb.org/t/p/w500";


// LOAD MOVIES
loadNowShowing();
loadPopular();

// NOW SHOWING (posters)
function loadNowShowing() {
    fetch('https://api.themoviedb.org/3/movie/now_playing', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));

    const movies = data.results.slice(0, 6);
    const html = movies.map(map => {

        return `
            <div class = "poster-card" onclick="openmovie"(${movie.id})>
               <img src ="${IMG + movie.poster_path}">
               <h3>${movie.title}</h3>

               <div class= "ratting">
               ⭐${movie.vote_average.toFixed(1)}/10 TMDb
               </div>
            </div>
            `
    }).json("")
    document.getElementById("nowShowing").innerHTML = html

}


// POPULER MOVIES (LIST)
function loadPopuler() {

    fetch('https://api.themoviedb.org/3/movie/now_playing', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));

    const movies = data.results - slice(0, 5);
    const html = movies.map(movies => {

        return `
            <div class ="movie-row" onclick= "openMovie"(${movie.id})>
                    <img src = ${"IMG + movie.poster_path"} class="poster-small">
                    <div class="movie-info">
                        <h3>${movie.title}</h3>
                    </div>
                    <div>⭐ ${movie.vote_average.toFixed(1)}/10 IMDb</div>
            </div>
            `
    }).json("")
    document.getElementById("populerMovies").innerHTML = html

}

//  THEME TOGGLE
function toggletheme() {
    // checkbox is checked = dark mode (your default since checked is set)
    const isDark = document.getElementById('themeToggle').checked;
    document.body.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function restoreTheme() {
    const saved = localStorage.getItem('theme');
    // Default is dark (checkbox starts as checked)
    if (saved === 'light') {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        document.getElementById('themeToggle').checked = false;
    } else {
        document.body.classList.add('dark');
    }
}

