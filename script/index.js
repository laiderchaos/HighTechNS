import user from "./modules/user";
import ajax from "./modules/ajax";
import Article from "./modules/article";
import modal from "./modules/modal";
import SlideReview from "./modules/slidereview";
import BlockNews from "./modules/blocknews";
import '../style/style.css';
import json from 'db.json';

console.log(json)

window.addEventListener('DOMContentLoaded', () => {

    new BlockNews().standTable();

    const slider = new SlideReview();
    slider.standCard();
    slider.setSliderSettings(360, 20, 4);

    modal('.login_window', '.login', '.close_btn_log');
    modal('.sign_in_window', '.signin', '.close_btn_si');
});