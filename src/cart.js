export default function cart() {
    // ==== CART ELEMENTS ====
    const cartBtn = document.querySelector('[data-cart-btn]');
    const cartEl = document.querySelector('[data-cart-el]');
    const cartCounter = document.querySelector('[data-cart-counter]');
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const cartContent = document.querySelector('[data-cart-content]');
    const cartProductPrice = document.querySelector(
        '[data-cart-product-price]'
    );
    const cartProductQuantity = document.querySelector(
        '[data-cart-product-quantity]'
    );
    const cartTotalPrice = document.querySelector('[data-cart-total-price]');
    const cartProductName = document.querySelector('[data-cart-product-name]');
    const cartDelete = document.querySelector('[data-cart-delete]');

    // ==== INFORMATION SECTION ELEMENTS ====
    const infoProductName = document.querySelector('[data-info-name]');
    const infoCurrentPrice = document.querySelector(
        '[data-info-current-price]'
    );
    const infoDiscount = document.querySelector('[data-info-discount]');
    const infoPreviousPrice = document.querySelector('[data-info-prev-price]');

    // ==== SHOP SECTION ELEMENTS ====
    const remove = document.querySelector('[data-minus]');
    const quantityEl = document.querySelector('[data-quantity]');
    const add = document.querySelector('[data-plus]');
    const addToCartEl = document.querySelector('[data-add-to-cart]');

    let quantity = 0;
    const cart = {
        product: 'Fall Limited Edition Sneakers',
        previousPrice: 250,
        discount: 0.5,
        currency: '$',
        quantity: 0,
        getCurrentPrice: function () {
            return this.previousPrice * this.discount;
        },
    };

    window.addEventListener('load', () => {
        // Quantity update
        quantity = JSON.parse(localStorage.getItem('quantity')) || 0;
        cart.quantity = JSON.parse(localStorage.getItem('cartQuantity')) || 0;
        updateQuantity(quantity, cart.quantity);

        // Product info update
        const currentPriceValue = `${
            cart.currency
        }${cart.getCurrentPrice()}.00`;
        const discountValue = `${cart.discount * 100}%`;
        const previousPriceValue = `${cart.currency}${cart.previousPrice}.00`;

        infoProductName.innerText = cart.product;
        infoCurrentPrice.innerText = currentPriceValue;
        infoDiscount.innerText = discountValue;
        infoPreviousPrice.innerText = previousPriceValue;

        cartProductName.innerText = cart.product;
        cartProductPrice.innerText = currentPriceValue;
        cartProductQuantity.innerText = cart.quantity;
        cartTotalPrice.innerText = `${cart.currency}${
            cart.getCurrentPrice() * cart.quantity
        }.00`;
    });

    cartBtn.addEventListener('click', toggleCart);
    add.addEventListener('click', addProduct);
    remove.addEventListener('click', removeProduct);
    addToCartEl.addEventListener('click', addToCart);
    cartDelete.addEventListener('click', removeFromCart);

    function toggleCart() {
        cartBtn.classList.toggle('header__cart-container--opened');
        cartEl.classList.toggle('cart--active');

        toggleCartContent();
    }

    function addProduct() {
        quantity += 1;
        updateQuantity(quantity, cart.quantity);
    }

    function removeProduct() {
        if (quantity === 0) return;
        quantity -= 1;
        updateQuantity(quantity, cart.quantity);
    }

    function updateQuantity(quantity, cartQuantity) {
        localStorage.setItem('quantity', JSON.stringify(quantity));
        quantityEl.innerText = quantity;

        if (cartQuantity !== 0) {
            cartCounter.classList.add('header__cart-counter--active');
            cartProductQuantity.innerText = cartQuantity;
            cartTotalPrice.innerText = `${cart.currency}${
                cart.getCurrentPrice() * cartQuantity
            }.00`;
            cartCounter.innerText = cartQuantity;
        }

        if (cartQuantity === 0) {
            cartCounter.classList.remove('header__cart-counter--active');
        }

        localStorage.setItem('cartQuantity', JSON.parse(cartQuantity));
    }

    function addToCart() {
        if (quantity === 0) return;
        cart.quantity += quantity;
        quantity = 0;
        updateQuantity(quantity, cart.quantity);

        if (!cartEl.classList.contains('cart--active')) {
            toggleCart();
        } else {
            toggleCartContent();
        }
    }

    function removeFromCart() {
        if (cart.quantity === 0) return;
        cart.quantity -= 1;
        toggleCartContent();
        updateQuantity(quantity, cart.quantity);
    }

    function toggleCartContent() {
        if (cart.quantity > 0) {
            cartEmpty.classList.add('cart__empty--full');
            cartContent.classList.add('cart__content--active');
        } else {
            cartEmpty.classList.remove('cart__empty--full');
            cartContent.classList.remove('cart__content--active');
        }
    }
}
