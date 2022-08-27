import Glide from '@glidejs/glide';

export default function slider() {
    // Mobile slider
    new Glide('.glide-1').mount();

    // Lightbox slider
    new Glide('.glide-2').mount();

    // Desktop slider
    const expositionSlider = new Glide('.glide-3', {
        swipeThreshold: false,
        dragThreshold: false,
        gap: 50,
    });

    const thumbnails = document.querySelectorAll('[data-slide-thumbnail]');
    const activeClass = 'exposition__thumbnail--active';

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', e => {
            removeActive();
            const element = e.target;
            const id = Number(element.id.slice(-1));
            console.log(element, id);

            if (element.nodeName === 'BUTTON') {
                element.classList.add(activeClass);
            } else {
                element.parentElement.classList.add(activeClass);
            }

            expositionSlider.go(`=${id}`);
        });

        thumbnail.addEventListener('keydown', e => {
            if (e.code === 'Enter') {
                thumbnail.click();
            }
        });
    });

    function removeActive() {
        thumbnails.forEach(thumbnail => {
            thumbnail.classList.remove(activeClass);
        });
    }

    expositionSlider.mount();
}
