// Import
import { filmLoader } from "./filmLoader.js";
import { getFilms } from "./getFilms.js";
import { pageLoader } from "./pageLoader.js";

// Variables
const form = document.getElementById('searchForm');
const filmList = document.getElementById('filmList');
const pages = document.getElementById('pages');
let pagesList;
let loading = false;

let titleTyped = "";
let pageSelected = 1;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)

    titleTyped = formData.get('title');
    pageSelected = 1;
    filmList.innerHTML = "";
    
    if (!loading) {
        loading = true;
        getFilms(titleTyped, pageSelected).then(films => {
            // Affichage des films
            films.results.forEach(film => {
                filmLoader(film, filmList);
            });
            loading = false;

            // Affichage des pages
            reload(films)
        })
    }
})

// Affichages des pages dynamiques (Un enfer a créer)
const reload = (list) => {
    if (!loading) {
        loading = true;
        pageLoader(list.total_pages, pageSelected, pages);

        pagesList = document.getElementsByClassName('page');
        Array(...pagesList).forEach(page => {
            page.addEventListener('click', (e) => {
                pageSelected = e.target.dataset.page;
                filmList.innerHTML = "";

                getFilms(titleTyped, pageSelected).then(films => {
                    films.results.forEach(film => {
                        filmLoader(film, filmList);
                    });
                    loading = false;

                    reload(films);
                })
            })
        })
    }
}