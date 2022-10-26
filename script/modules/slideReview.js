import Article from "./article";

export default class SlideReview extends Article {
    _widthSlide = 360;
    _paddingOfSlide = 20;
    _numberOfSlides = 4;

    #autoRefactor(number) {
        if (typeof number !== 'number') {
            return parseInt(number);
        } else {
            return number;
        }
    }

    setSliderSettings(widthSlide, paddingOfSlide, numberOfSlides) {
        this._widthSlide = this.#autoRefactor(widthSlide);
        this._paddingOfSlide = this.#autoRefactor(paddingOfSlide);
        this._numberOfSlides = this.#autoRefactor(numberOfSlides);
    }

    constructor(src, gameName, alt, rating, parentSelector, ...classes) {
        super(src, gameName, alt, rating, parentSelector);
        this._rating = rating;
        this._parent = document.querySelector(parentSelector);
        this._classes = classes;
    }

    #setupWidthSlide() {

        const slides = document.querySelectorAll('.slider');
        const imageSlides = document.querySelectorAll('.image_slide');
        const slidesField = document.querySelector('.offer_slider-inner');
        const slidesWrapper = document.querySelector('.slider_line-wrapper');
        const button_next = document.querySelector('.next_slide');
        const button_prev = document.querySelector('.prev_slide');

        let width = 0;
        let offset = 0;

        imageSlides.forEach(img => {
            img.style.width = this._widthSlide + 'px';
        })
        slides.forEach(slide => {
            slide.style.width = this._widthSlide + 'px';
            slide.style.padding = this._paddingOfSlide + 'px';
        })

        slidesWrapper.style.cssText = `
        width: ${slides[0].offsetWidth * this._numberOfSlides}px;
        overflow: hidden;
    `;

        width = slides[0].offsetWidth;

        button_next.addEventListener('click', () => {
            offset += width;
            let endPoint = ((slides.length - (this._numberOfSlides - 1)) * width);

            if (offset === endPoint) {
                offset = 0;
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
        });

        button_prev.addEventListener('click', () => {
            let endPoint = ((slides.length - (this._numberOfSlides - 1)) * width);

            if (offset === 0) {
                offset = endPoint;
            }

            offset -= width;

            slidesField.style.transform = `translateX(-${offset}px)`;
        });
    }


    standCard(url, typeOfSlide) {
        this._getResources(url)
            .then(data => {
                // If in the object contains type 'review', render card in slider.
                console.log(data)
                for (let obj of data) {
                    if (obj.type === typeOfSlide && typeOfSlide === 'review') {
                        // Destructuring and inserting values.
                        let {img, gameName, alt, rating} = obj;
                        new SlideReview(
                            `${img}`,
                            `${gameName}`,
                            `${alt}`,
                            `${rating}`,
                            `.offer_slider-inner`
                        ).#renderCard(typeOfSlide);
                    } else if (obj.type === typeOfSlide && typeOfSlide === 'news') {
                        let {img, title, alt} = obj;
                        new SlideReview(
                            `${img}`,
                            `${title}`,
                            `${alt}`,
                            '0',
                            `.offer_slider-inner`
                        ).#renderCard(typeOfSlide);
                    }
                }
            })
            .then(data => {
                this.#setupWidthSlide();
            })
    }

    #renderCard(type) {
        const elem = document.createElement('div');


        // If you don't add a class, the default value is inserted.
        if (this._classes.length === 0) {
            this.elem = 'slider';
            elem.classList.add(this.elem);
        } else {
            this._classes.forEach(className => elem.classList.add(className));
        }

        if (type === 'review') {
            elem.innerHTML = `
                <a class="container" href="#">
                    <img src=${this._src} class="image_slide" alt=${this._alt}>
                    <h1 class="title">${this._gameName}</h1>
                    <h1 class="rating">${this._rating}</h1>
                </a>
            `;
        } else if (type === 'news') {
            elem.innerHTML = `
                <a class="container" href="#">
                    <img src=${this._src} class="image_slide" alt=${this._alt}>
                    <h1 class="title">${this._gameName}</h1>
                </a>
            `;
        }

        this._parent.append(elem);
    };
}