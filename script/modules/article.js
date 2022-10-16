export default class Article {
    _allItems = document.querySelector('.middle');

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
    _clearAll() {
        let list = this._allItems;
        for (let i = 0; i < list.children.length; i++) {
            list.children.item(i).remove();
        }
        this._allItems.remove();
    }
}