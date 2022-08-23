export default function nav() {
    const iconActiveClass = 'header__nav-icon--active';
    const navActiveClass = 'nav--active';
    const overlayActiveClass = 'nav__overlay--active';
    const open = document.querySelector('[data-menu-open]');
    const close = document.querySelector('[data-menu-close]');
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
