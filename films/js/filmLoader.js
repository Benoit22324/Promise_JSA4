export const filmLoader = (film, where) => {
    where.innerHTML += `
    <div class='film'>
        ${film.poster_path ? `<img src=https://image.tmdb.org/t/p/w500/${film.poster_path} />` : "<p class='img_holder'>Pas d'affiche</p>"}
        <div class='film_text'>
            <h2>${film.title}</h2>
            ${film.overview ? `<p>${film.overview}</p>` : "<p class='text_holder'>Pas de Synopsis</p>"}
        </div>
    </div>`;
}