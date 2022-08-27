export default function nav() {
    const iconActiveClass = 'header__nav-icon--active';
    const navActiveClass = 'nav--active';
    const overlayActiveClass = 'nav__overlay--active';
    const open = document.querySelector('[data-menu-open-btn]');
    const close = document.querySelector('[data-menu-close-btn]');
    const nav = document.querySelector('[data-nav]');
    const overlay = document.querySelector('[data-overlay]');

    open.addEventListener('click', toggle);
    close.addEventListener('click', toggle);

    function toggle() {
        open.classList.toggle(iconActiveClass);
        close.classList.toggle(iconActiveClass);
        nav.classList.toggle(navActiveClass);
        overlay.classList.toggle(overlayActiveClass);
    }
}
