const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjYxMjIxYTM4YTgxZDNjZmRkNDVkZDE3NDYyZTYxMCIsIm5iZiI6MTcyOTE2OTM2Ni4yMTQwNzgsInN1YiI6IjY3MTEwNWY1ZGI3OWM5Y2VhZTBlZmZlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Peoh0bxcQ8G0tXilVP3-TWNMmVrGepnYUC63YXcJ2kM'
    }
};

export const getFilms = (title, page) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=${page}`, options)
        .then(response => response.json())
        .catch(err => console.error(err));
}