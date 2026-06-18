/* VIDA E CAFFE _ SCRIPT.JS 
INTERACTIVE WEBSITE FEATURES */

/*CART SYSTEM*/

let cart = [];
let Total = 0;

const prices = {
    "Espresso": 25.00,
    "Cappuccino": 35.00,
    "Latte": 40.00,
    "lemonade": 38.00,
    "Smoothie": 45.00,
    "Muffin": 20.00,
    "Sandwich": 50.00,
};

function addToCart(product) {
    cart.push(product);
    if (prices[product]) {
        Total += prices[product];
    } 
    
    updateCartDisplay();
    saveCart();
 }

function updateCartDisplay() {
    const CartDisplay = document.getElementById("cart");

    if (CartDisplay) {
        CartDisplay.innerHTML = 
        `Your Order: ${cart.length} item(s) | Total:R$ {Total}`;
    }

    function saveCart() {

    localStorage.setItem("vidaCart", JSON.stringify(cart));
    localStorage.setItem("vidaTotal", total);
}

function loadCart() {

    const savedCart =
        JSON.parse(localStorage.getItem("vidaCart"));

    const savedTotal =
        localStorage.getItem("vidaTotal");

    if (savedCart) {
        cart = savedCart;
    }

    if (savedTotal) {
        total = Number(savedTotal);
    }

    updateCartDisplay();
}
}

/*PRODUCT SEARCH*/

function searchProducts() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const filter =
        input.value.toLowerCase();

    const cards =
        document.querySelectorAll(".product-card");

    cards.forEach(card => {
        const title =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        if (title.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}

/*PRODUCT FILTER*/

function filterProducts(category) {

    const cards =
        document.querySelectorAll(".product-card");

    cards.forEach(card => {

        const text =
            card.textContent.toLowerCase();

        if (category === "all") {

            card.style.display = "block";

        } else if (text.includes(category.toLowerCase())) {

            card.style.display = "block";
        } else {

            card.style.display = "none";

        }
    });
}

