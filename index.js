const api_key = 'f485e5c815c3b8ee3e79e1f1309aa1b1';
const baseUrl = 'https://developers.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/w500/';
const searchUrl = baseUrl + 'search/movie?' + api_key;
const main = document.getElementById('main');
let searchMOvies = document.getElementById('search');
let searchInPage = document.getElementById('keyWord')


searchMOvies.addEventListener('keyup', (event) => {
    let moviesName = event.target.value


    search(moviesName).then(r => moviesName)

})

//search movies with api
async function search(moviesName) {


    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f485e5c815c3b8ee3e79e1f1309aa1b1&language=en-US&query=${moviesName}&page=1&include_adult=false`);


    if (response.status === 200) {
        let data = await response.json();

        showMovise(data.results);

    } else {


        console.log(response.status); // 400
        console.log(response.statusText); // Not Found

    }
}


//check connction with api

async function fetchMovies() {
    let response = await fetch(' https://api.themoviedb.org/3/movie/popular?api_key=f485e5c815c3b8ee3e79e1f1309aa1b1&language=en-US&page=1');


    if (response.status === 200) {
        let data = await response.json();

        console.log(data.results);
        showMovise(data.results);

    } else {


        console.log(response.status); // 400
        console.log(response.statusText); // Not Found

    }
}


async function nowplaying() {
    let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f485e5c815c3b8ee3e79e1f1309aa1b1&language=en-US&page=1');


    if (response.status === 200) {
        let data = await response.json();

        console.log(data.results);
        showMovise(data.results);

    } else {


        console.log(response.status); // 422
        console.log(response.statusText); // Not Found

    }
}

async function popular() {
    let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f485e5c815c3b8ee3e79e1f1309aa1b1&language=en-US&page=1');


    if (response.status === 200) {
        let data = await response.json();

        console.log(data.results);
        showMovise(data.results);

    } else {


        console.log(response.status); // 422
        console.log(response.statusText); // Not Found

    }
}


async function toprated() {
    let response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f485e5c815c3b8ee3e79e1f1309aa1b1&language=en-US&page=1');


    if (response.status === 200) {
        let data = await response.json();

        console.log(data.results);
        showMovise(data.results);

    } else {


        console.log(response.status); // 422
        console.log(response.statusText); // Not Found

    }
}

async function trending() {
    let response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=f485e5c815c3b8ee3e79e1f1309aa1b1');


    if (response.status === 200) {
        let data = await response.json();

        console.log(data.results);
        showMovise(data.results);

    } else {


        console.log(response.status); // 422
        console.log(response.statusText); // Not Found

    }
}

async function upcoming() {
    let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=f485e5c815c3b8ee3e79e1f1309aa1b1&language=en-US&page=1');


    if (response.status === 200) {
        let data = await response.json();

        console.log(data.results);
        showMovise(data.results);

    } else {


        console.log(response.status); // 422
        console.log(response.statusText); // Not Found

    }
}

//get movies

function showMovise(data) {
    main.innerHTML = '';
    data.forEach(movies => {
        const {title, overview, release_date, vote_average, poster_path} = movies;
        const showMovies = document.createElement("div");
        showMovies.classList.add('col-md-4');
        showMovies.innerHTML = `

 
<div class="movies my-3" >

            <div class="container-img ">
               <img src="${imgUrl + poster_path}" alt="${title}" class="w-100 "  >
                <div class="overlay    ">
                    <div class="overlay-text">
                        <div class="movie-info">
                             <h2>${title}</h2>
                             <p>${overview}</p>
                            <p>rate:${vote_average}</p>
                            <p>${release_date}</p>
                        </div>
                    </div>
                </div>
            </div>
 
        </div>

            `
        main.appendChild(showMovies)
    })
}


fetchMovies();


// navbar

$(document).ready(function () {

    $('.sidebarBtn').click(function () {


        $('.side-nav').toggleClass('active');
        $('.side-nav').toggleClass('change');


        $('.fade6').delay(1000).fadeToggle('slow');
        $('.fade5').delay(800).fadeToggle('slow');
        $('.fade4').delay(550).fadeToggle('slow');
        $('.fade3').delay(400).fadeToggle('slow');
        $('.fade2').delay(250).fadeToggle('slow');
        $('.fade1').delay(100).fadeToggle('slow');


    });

})
