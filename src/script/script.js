
async function getTrendingMoviesPreview(){
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY )
    const data1 = await res.json()
    const movies = data1.results

    movies.forEach(movie => {
        const movieContainer = document.createElement('div')
        const sectionContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
        
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt', movie.title )
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path)

        movieContainer.appendChild(movieImg)
        sectionContainer.appendChild(movieContainer)
    });
}

getTrendingMoviesPreview()