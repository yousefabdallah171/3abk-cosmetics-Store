// Initialize the cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Redirect to the cart page when cart icon is clicked
function redirectToCartPage() {
    window.location.href = 'cart.html'; // Replace 'cart.html' with your actual cart page
}

function addToCart(name, price, image) {
    const product = { name, price, image };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;

    const cartItems = document.getElementById('cartItems');
    if (cartItems) {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" width="50" height="50">
                </div>
                <div class="cart-item-details">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">EGP ${item.price.toFixed(2)}</span>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
            cartItems.appendChild(itemDiv);
        });
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    updateCart();
}

function checkout() {
    if (cart.length > 0) {
        window.location.href = 'checkout.html';
    } else {
        alert('Your cart is empty!');
    }
}

// Initialize the cart display
updateCart();