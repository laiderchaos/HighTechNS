export default class Article {
    constructor(src, gameName, alt, title, article, author, rating, date, type, parentSelector) {
        this._src = src;
        this._gameName = gameName;
        this._alt = alt;
        this._title = title;
        this._article = article;
        this._author = author;
        this._rating = rating;
        this._date = date;
        this._type = type;
        this._parent = document.querySelector(parentSelector);
    }

    async _getResources(url) {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    // Clear all middle area on the page.
     _clearAll(include) {
        let all = document.querySelector('.middle').children;
        let slider = document.querySelector('.reviews_slider');

        let counter = all.length;

         for (let i = 0; i < counter; i++) {
             if (all[i].className !== include) {
                 all[i].style.display = 'none';
             } else {
                 continue;
             }
         }

         slider.style.display = 'none';

         /*for (let i = 0; i < all.length; i++) {
             if (all[i].className !== `${include}`) {
                 all.);
             } else {
                 continue;
             }
         }*/
    }

    _waitScreen() {

    }
}