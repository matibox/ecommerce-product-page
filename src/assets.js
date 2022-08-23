import Cart from './assets/icon-cart.svg';
import Close from './assets/icon-close.svg';
import Delete from './assets/icon-delete.svg';
import Menu from './assets/icon-menu.svg';
import Minus from './assets/icon-minus.svg';
import Plus from './assets/icon-plus.svg';
import Next from './assets/icon-next.svg';
import Previous from './assets/icon-previous.svg';

export default function assets() {
    const assets = [
        //{ assetName: Logo, element: 'logo' },
    ];

    function setAssetsSource(assets) {
        assets.forEach(asset => {
            const elements = document.querySelectorAll(
                `[data-${asset.element}]`
            );
            elements.forEach(element => (element.src = asset.assetName));
        });
    }

    setAssetsSource();
}
