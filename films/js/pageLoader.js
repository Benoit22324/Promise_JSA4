export const pageLoader = (pages, current, where) => {
    where.innerHTML = "";

    // Pages Totaux supérieur à 20
    if (pages > 20) {
        if (current < 11){
            // 15 Premières Pages
            for (let i = 1; i <= 15; i++) {
                where.innerHTML += `<li class='page' data-page=${i}>${i}</li>`;
            }

            // Dernière Page
            where.innerHTML += "<li class='page_holder'>...</li>";
            where.innerHTML += `<li class='page' data-page=${pages}>${pages}</li>`;
        }
        else if (current >= 10 && current < pages - 11) {
            // Première Page
            where.innerHTML += `<li class='page' data-page=${1}>${1}</li>`;
            where.innerHTML += "<li class='page_holder'>...</li>";

            // Pages écart de + et - 5
            for (let i = current - 5; i <= pages - (pages - current) + 5; i++) {
                where.innerHTML += `<li class='page' data-page=${i}>${i}</li>`;
            }

            // Dernière Page
            where.innerHTML += "<li class='page_holder'>...</li>";
            where.innerHTML += `<li class='page' data-page=${pages}>${pages}</li>`;
        }
        else if (current >= pages - 10) {
            // Première Page
            where.innerHTML += `<li class='page' data-page=${1}>${1}</li>`;
            where.innerHTML += "<li class='page_holder'>...</li>";

            // 15 Dernières pages
            for (let i = pages - 14; i <= pages; i++) {
                where.innerHTML += `<li class='page' data-page=${i}>${i}</li>`;
            }
        }
    }
    // Pages Totaux inférieurs à 20
    else {
        // Chargement de toute les pages
        for (let i = 1; i <= pages; i++) {
            where.innerHTML += `<li class='page' data-page=${i}>${i}</li>`;
        }
    }
}