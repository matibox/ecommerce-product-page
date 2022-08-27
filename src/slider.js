import Glide from '@glidejs/glide';

export default function slider() {
    // ==== MOBILE SLIDER ====
    new Glide('.glide-1').mount();

    // ==== LIGHTBOX SLIDER ====
    const lightboxSlider = new Glide('.glide-2');

    const openLightboxBtn = document.querySelector('[data-open-lightbox]');
    const closeLightboxBtn = document.querySelector('[data-close-lightbox]');
    const expositionSlides = document.querySelectorAll('[data-slide-main]');
    const lightbox = document.querySelector('[data-lightbox]');
    const lightboxThumbnails = document.querySelectorAll(
        '[data-slide-lightbox-thumbnail]'
    );

    const lightboxActiveClass = 'lightbox--active';
    const lightboxThumbnailActiveClass = 'lightbox__thumbnail--active';

    expositionSlides.forEach(slide => {
        slide.addEventListener('click', e => {
            const element = e.target;
            const id = Number(element.id.slice(-1));

            openLightbox(id);
        });
    });

    openLightboxBtn.addEventListener('click', () => {
        openLightbox();
    });
    closeLightboxBtn.addEventListener('click', closeLightbox);
    lightboxSlider.on('move', () => {
        removeLightboxActive();
        const { index } = lightboxSlider;
        lightboxThumbnails[index].classList.add(lightboxThumbnailActiveClass);
    });

    lightboxThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', e => {
            removeLightboxActive();
            const element = e.target;
            const id = Number(element.id.slice(-1));

            if (element.nodeName === 'BUTTON') {
                element.classList.add(lightboxThumbnailActiveClass);
            } else {
                element.parentElement.classList.add(
                    lightboxThumbnailActiveClass
                );
            }

            lightboxSlider.go(`=${id}`);
        });

        thumbnail.addEventListener('keydown', e => {
            if (e.code === 'Enter') {
                thumbnail.click();
            }
        });
    });

    function removeLightboxActive() {
        lightboxThumbnails.forEach(thumbnail => {
            thumbnail.classList.remove(lightboxThumbnailActiveClass);
        });
    }

    function openLightbox(id = 0) {
        console.log(id);
        lightbox.classList.add(lightboxActiveClass);
        lightboxSlider.update({ startAt: id });
        lightboxThumbnails[id].classList.add(lightboxThumbnailActiveClass);
        lightboxSlider.mount();
    }

    function closeLightbox() {
        lightbox.classList.remove(lightboxActiveClass);
    }

    // ==== DESKTOP SLIDER ====
    const expositionSlider = new Glide('.glide-3', {
        swipeThreshold: false,
        dragThreshold: false,
        gap: 50,
        keyboard: false,
        animationDuration: 300,
    });

    const thumbnails = document.querySelectorAll('[data-slide-thumbnail]');
    const activeClass = 'exposition__thumbnail--active';

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', e => {
            removeActive();
            const element = e.target;
            const id = Number(element.id.slice(-1));

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
