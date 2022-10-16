export default function modal(modal, openBtn, closeBtn) {

    const modalWindow = document.querySelector(`${modal}`),
        modalHider = document.querySelector('.modal_hider'),
        openButton = document.querySelector(`${openBtn}`),
        closeButton = document.querySelector(`${closeBtn}`);

    function closeModal() {
        modalWindow.classList.remove('active');
        modalWindow.classList.add('hide');
        modalHider.classList.add('hide');
    }

    function openModal() {
        modalWindow.classList.add('active');
        modalWindow.classList.remove('hide');
        modalHider.classList.remove('hide');
    }

    function clickOnObject(obj, func) {
        obj.addEventListener('click', () => {
            func();
        });
    }

    clickOnObject(modalHider, closeModal);
    clickOnObject(openButton, openModal);
    clickOnObject(closeButton, closeModal);

    document.addEventListener('keydown', function (event) {
        const {key} = event;
        if (key === "Escape") {
            closeModal();
        }
    });
    closeModal();
}