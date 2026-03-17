const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");
`window.location.href = detail.html?id=${id} `

const url = `https://api.themoviedb.org/3/movie/{movie_id}`

const IMG = 'https://image.tmdb.org/t/p/';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjE0ZGMwNDMxNjJiMjM4MzVjYjAzY2RiZGMwYzUyNyIsIm5iZiI6MTc3MzQwNTU0My45OTEwMDAyLCJzdWIiOiI2OWI0MDU2N2NmYzgwNzk3NjM3NjA4NGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VmTyeW18H18pa_Xd1OrmVBig-5tWNWgXqq5m6WMX_AU'
    }
};

fetch('https://api.themoviedb.org/3/movie/now_playing', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));


function buildTopbar() {
    document.getElementById('topbar').innerHTML = `
    <button class="back-btn" onclick="window.location.href='index.html'">
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    </button>
    <div class="topbar-title"></div>
    <label class="toggleSwitch">
      <input type="checkbox" id="themeToggle" onchange="toggletheme()"/>
      <div class="toggleSwitch__base">
        <div class="toggleSwitch__toggle"></div>
      </div>
    </label>
  `;
}


function toggletheme() {
    const isDark = document.getElementById('themeToggle').checked;
    document.body.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function restoreTheme() {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light');
        document.getElementById('themeToggle').checked = false;
    } else {
        document.body.classList.add('dark');
    }
}



// Popular Movies
fetch('https://api.themoviedb.org/3/movie/popular', options)
    .then(res => res.json())
    .then(res => {
        document.getElementById('PapulerMovies').innerHTML = res.results.map(popCard).join('');
    })
    .catch(err => {
        console.error(err);
        document.getElementById('PapulerMovies').innerHTML = `<div class="err"><strong>Could not load</strong>Check console (F12)</div>`;
    });

restoreTheme();
loadMovies();






