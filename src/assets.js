import Cart from './assets/icon-cart.svg';
import Close from './assets/icon-close.svg';
import Delete from './assets/icon-delete.svg';
import Menu from './assets/icon-menu.svg';
import Minus from './assets/icon-minus.svg';
import Plus from './assets/icon-plus.svg';
import Next from './assets/icon-next.svg';
import Previous from './assets/icon-previous.svg';
import Logo from './assets/logo.svg';
import Avatar from './assets/image-avatar.png';

import ProductOne from './assets/image-product-1.jpg';
import ProductTwo from './assets/image-product-2.jpg';
import ProductThree from './assets/image-product-3.jpg';
import ProductFour from './assets/image-product-4.jpg';
import ProductOneThumbnail from './assets/image-product-1-thumbnail.jpg';
import ProductTwoThumbnail from './assets/image-product-2-thumbnail.jpg';
import ProductThreeThumbnail from './assets/image-product-3-thumbnail.jpg';
import ProductFourThumbnail from './assets/image-product-4-thumbnail.jpg';

export default function assets() {
    const assets = [
        { assetName: Logo, element: 'logo' },
        { assetName: Menu, element: 'menu-open' },
        { assetName: Close, element: 'menu-close' },
        { assetName: Cart, element: 'cart' },
        { assetName: Avatar, element: 'pfp' },
        { assetName: Avatar, element: 'pfp' },
        { assetName: Avatar, element: 'pfp' },
        { assetName: Avatar, element: 'pfp' },
        { assetName: Avatar, element: 'pfp' },
        { assetName: ProductOne, element: 'product-1' },
        { assetName: ProductTwo, element: 'product-2' },
        { assetName: ProductThree, element: 'product-3' },
        { assetName: ProductFour, element: 'product-4' },
        { assetName: ProductOneThumbnail, element: 'product-t-1' },
        { assetName: ProductTwoThumbnail, element: 'product-t-2' },
        { assetName: ProductThreeThumbnail, element: 'product-t-3' },
        { assetName: ProductFourThumbnail, element: 'product-t-4' },
        { assetName: Plus, element: 'plus' },
        { assetName: Minus, element: 'minus' },
    ];

    function setAssetsSource(assets) {
        assets.forEach(asset => {
            const elements = document.querySelectorAll(
                `[data-${asset.element}]`
            );
            elements.forEach(element => (element.src = asset.assetName));
        });
    }

    setAssetsSource(assets);
}
