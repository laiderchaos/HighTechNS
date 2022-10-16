export default class User {
    static forms = document.querySelectorAll('form');
    static prevModalDialog = document.querySelector(`.sign_in_window`);
    static loginBtn = document.querySelector('.login_btn');
    static signInBtn = document.querySelector('.signin_btn');
    static signModalDialog = document.querySelector('.login_window');

    constructor(email, password, nickname, pass_repeat) {
        this._email = email;
        this._password = password;
        this._nickname = nickname;
        this._repeat = pass_repeat;
        this._terms = false;
    }
}