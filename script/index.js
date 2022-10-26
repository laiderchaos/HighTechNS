import user from "./modules/user";
import ajax from "./modules/ajax";
import Article from "./modules/article";
import modal from "./modules/modal";
import SlideReview from "./modules/slideReview";
import BlockNews from "./modules/blockNews";
import ListOfNews from "./modules/listOfNews";

window.addEventListener('DOMContentLoaded', () => {

    let a = document.querySelector('.__all');
    a.addEventListener('click', () => {
        new Article()._clearAll();
    });
    new BlockNews().standTable();

    const slider = new SlideReview();
    slider.standCard('http://localhost:3000/article', 'review');
    slider.setSliderSettings(360, 20, 4);

    modal('.login_window', '.login', '.close_btn_log');
    modal('.sign_in_window', '.signin', '.close_btn_si');

    new ListOfNews('all', 2, 'http://localhost:3000/article', '.__news').renderByType();
});
