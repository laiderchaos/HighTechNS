import Article from "./article";

class ListOfNewsIn extends Article {
    constructor(src, title, article, author, date, type, parentSelector) {
        super(src, title, article, author, date, type, parentSelector);
        this._src = src;
        this._title = title;
        this._article = article;
        this._author = author;
        this._date = date;
        this._type = type;
        this._parent = document.querySelector(parentSelector);
    }

    #limitationOfText(numberOfSymbols, string) {
        let stringArr = string.split(' ');
        let arr = [];
        let str = 'sad';
        for (let i = 0; i < stringArr.length; i++) {
            if (str.length > numberOfSymbols - 10) {
                break;
            } else {
                arr.push(stringArr[i]);
                str = arr.join(' ');
            }
        }
        return str + '...';
    }

    _renderList() {
        let div = document.createElement('div');

        div.innerHTML = `
            <div class="basic_block_news">
                <img src='${this._src}' class="img_news_ico">
                <div class="text_block">
                    <h1 class="typeOfBlock">${this._type}</h1>
                    <a class="page_link" href="#">${this._title}</a>
                    <h1 class="article_text">${this.#limitationOfText(190, this._article)}</h1>
                    <h1 class="author_details">Name: ${this._author} date: ${this._date}</h1>
                </div>
            <div>
        `;

        this._parent.append(div);
    }
}



export default class ListOfNews extends ListOfNewsIn {
    #count = 0;
    /**
     * @param {string} typeOfNews The type of article to add.
     * @param {number} newsAmount The number of news items to add the page.
     * @param {string} urlDB URL of available database.
     * @param {string} button A button that, when clicked, opens a page with the desired content.
     * @return Create the required number of blocks{newsAmoun} with news{urlDB} by clicking the button{button}.
     * */
    constructor(typeOfNews, newsAmount, urlDB, button) {
        super();
        this._typeOfNews = typeOfNews;
        this._newsAmount = newsAmount;
        this._urlDB = urlDB;
        this._button = document.querySelector(button);
    }
     renderByType() {
        this._button.addEventListener('click', () => {
            /*this._getResources(this._urlDB)
                .then(data => {
                    if (this._typeOfNews === 'all') {
                        for (let j = 0; j < this._newsAmount; j++) {
                            let {img, title, article, author, date, type} = data[j];

                            this.#count++

                            new ListOfNewsIn(`${img}`,
                                `${title}`,
                                `${article}`,
                                `${author}`,
                                `${date}`,
                                `${type.toUpperCase()}`,
                                '.lineNews')._renderList();
                        }
                    } else if (this._typeOfNews !== 'all') {
                        for (let i = 0; i < this._newsAmount; i++) {
                            if (data[i].type === this._typeOfNews && this._newsAmount >= this.#count) {
                                this.#count++;

                                let {img, title, article, author, date, type} = data[i];

                                new ListOfNewsIn(`${img}`,
                                    `${title}`,
                                    `${article}`,
                                    `${author}`,
                                    `${date}`,
                                    `${type.toUpperCase()}`,
                                    '.lineNews')._renderList();
                            } else {
                                this._newsAmount++;
                            }
                        }
                    }
                })*/
        });
    }
}
