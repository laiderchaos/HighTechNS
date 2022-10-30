import user from "./modules/user";
import ajax from "./modules/ajax";
import Article from "./modules/article";
import modal from "./modules/modal";
import SlideReview from "./modules/slideReview";
import BlockNews from "./modules/blockNews";
import ListOfNews from "./modules/listOfNews";

window.addEventListener('DOMContentLoaded', () => {
    new Article()._clearAll('.__all', '.middle', '.lineNews', true);
    new BlockNews().standTable();

    const slider = new SlideReview();
    slider.standCard('http://localhost:3000/article', 'review');
    slider.setSliderSettings(250, 20, 2);

    modal('.login_window', '.login', '.close_btn_log');
    modal('.sign_in_window', '.signin', '.close_btn_si');

    new ListOfNews('news', 5, 'http://localhost:3000/article', '.__news').renderByType();
    new ListOfNews('all', 5, 'http://localhost:3000/article', '.__all').renderByType();
    new ListOfNews('review', 5, 'http://localhost:3000/article', '.__reviews').renderByType();
});
