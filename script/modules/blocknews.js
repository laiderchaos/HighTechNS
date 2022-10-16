import Article from "./article";

export default class BlockNews extends Article {
    _startPos = 0;
    _newsCount = 4;
    _breakPoint;
    _loadMoreBtn = document.querySelector('.load_more');

    constructor(src, alt, title, author, date, type, parentSelector, ...classes) {
        super(src, alt, title, author, date, type, parentSelector);
        this._src = src;
        this._alt = alt;
        this._title = title;
        this._author = author;
        this._date = date;
        this._type = type;
        this._parent = document.querySelector(parentSelector);
        this._classes = classes;
    }

    // Render the main news element.
    #renderMainNews() {
        let elem = document.createElement('a');
        elem.style.cursor = "pointer";

        if (this._classes.length === 0) {
            this.elem = 'main_plate';
            elem.classList.add(this.elem);
        } else {
            this._classes.forEach(className => elem.classList.add(className));
        }

        elem.innerHTML = `
                <img src="${this._src}" alt="${this._alt}" class="img_main_plate">
                <h1 class="typeOfBlock">${this._type}</h1>
                <h1 class="txt_main">${this._title}</h1>
                <h1 class="author_details">Name: ${this._author} date: ${this._date}</h1>
            `;

        this._parent.append(elem)
    }

    // Render other news and reviews which will be located under the main block.
    #renderNewsAndReviews() {
        let elem = document.createElement('a');
        elem.style.cursor = "pointer";

        if (this._classes.length === 0) {
            this.elem = 'basic_block_news';
            elem.classList.add(this.elem);
        } else {
            this._classes.forEach(className => elem.classList.add(className));
        }

        elem.innerHTML = `
            <div class="main_block_news">
                <img src="${this._src}" alt="${this._alt}" class="img_news_ico">
                <h1 class="typeOfBlock">${this._type}</h1>
                <h1 class="page_link" href="#">${this._title}</h1>
                <h1 class="author_details">Name: ${this._author} date: ${this._date}</h1>
            </div>
            `;

        this._parent.append(elem)
    }

    // "MORE NEWS" button settings.
    #addingMoreNews() {
        this._loadMoreBtn.addEventListener('click', () => {
            this._newsCount += 4;
            this._startPos += 4;
            this.#standAllNews(this._startPos, this._newsCount);
        });
    }

    // Method taking data from the "db.json" file and render it on the page.
    #standAllNews(startPos, cardCount) {
        this._getResources('http://localhost:3000/article')
            .then(data => {
                for (let i = startPos; i < cardCount; i++) {
                    try {
                        let {img, alt, title, author, date, type} = data[i];

                        if (i !== this._breakPoint) {
                            new BlockNews(
                                `${img}`,
                                `${alt}`,
                                `${title}`,
                                `${author}`,
                                `${date}`,
                                `${type.toUpperCase()}`,
                                `.all_news`,
                                `basic_block_news`,
                            ).#renderNewsAndReviews();
                        } else {
                            startPos++;
                            cardCount++;
                            this._newsCount++;
                            this._startPos++;
                        }
                    } catch (err) {
                        this._loadMoreBtn.textContent = 'The news is over.'
                        setTimeout(function () {
                            document.querySelector('.load_more').remove();
                        }, 3000)

                        throw new Error("No news in database.");
                    }
                }
            });
    }

    // Last method who`s search in db first element with type "news",
    // and render it on the page. After then renders other news and button "MORE NEWS".
    standTable() {
        this._getResources('http://localhost:3000/article')
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].type === 'news') {
                        let {img, alt, title, author, date, type} = data[i];

                        new BlockNews(
                            `${img}`,
                            `${alt}`,
                            `${title}`,
                            `${author}`,
                            `${date}`,
                            `${type.toUpperCase()}`,
                            `.all_news`,
                            `main_plate`,
                        ).#renderMainNews();
                        this._breakPoint = i;
                        break;
                    }
                }
            })
            .then(data => {
                this.#standAllNews(this._startPos, this._newsCount);
                this.#addingMoreNews();
            })
    }
}