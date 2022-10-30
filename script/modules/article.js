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
     _clearAll(button, destroyingChild, excluding, withSlider) {

         let mid = document.querySelector(`${destroyingChild}`).children;
         let but = document.querySelector(`${button}`);
         let slider = document.querySelector('.reviews_slider');

         but.addEventListener('click', () => {
             for (let i = 0; i < mid.length; i++) {
                 if (excluding !== mid[i].className) {
                     mid[i].remove()
                 }
             }
             if (withSlider === true) {
                 slider.remove();
             }

         })
    }

    _waitScreen() {

    }
}