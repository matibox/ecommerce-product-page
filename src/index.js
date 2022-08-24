import './styles/main.scss';
import assets from './assets';
assets();

import nav from './nav';
nav();

import slider from './slider';
slider();

// Enable transitions after the page loads
window.addEventListener('load', () => {
    document.querySelectorAll('.preload').forEach(element => {
        element.classList.remove('preload');
    });
});
