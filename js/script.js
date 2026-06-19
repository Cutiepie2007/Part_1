/* VIDA E CAFFE _ SCRIPT.JS 
INTERACTIVE WEBSITE FEATURES */

/*CART SYSTEM*/

let cart = [];
let total = 0;

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
       total += prices[product];
    } 
    
    updateCartDisplay();
    saveCart();
 }

function updateCartDisplay() {
    const CartDisplay = document.getElementById("cart");

    if (CartDisplay) {
        CartDisplay.innerHTML =
            `Your Order: ${cart.length} item(s) | Total: R$ ${total}`;
    }
}

function saveCart() {
    localStorage.setItem("vidaCart", JSON.stringify(cart));
    localStorage.setItem("vidaTotal", total);
}

function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem("vidaCart"));
    const savedTotal = localStorage.getItem("vidaTotal");

    if (savedCart) {
        cart = savedCart;
    }

    if (savedTotal) {
        total = Number(savedTotal);
    }

    updateCartDisplay();
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

/*FAQ ACCORDION*/

function setupFAQ() {

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const answer =
            item.querySelector("p");

        if (answer) {
            answer.style.display = "none";
        }

        item.addEventListener("click", () => {

            faqItems.forEach(other => { 
                
                if (other !== item) {

                    const p =
                        other.querySelector("p");

                    if (p) {
                        p.style.display = "none";
                    }
                }
            });

            if (answer) {  
                    answer.style.display =
                        answer.style.display === "block"
                        ? "none"
                        : "block";
            }
        });
    });
}

/* CONTACT FORM VALIDATION*/

function validateContactForm() {

    const name =
        document.querySelector(
            '.contact-form-section input[type="text"]'
        );

    const email =
        document.querySelector(
            '.contact-form-section input[type="email"]'
        );

    const message =
        document.querySelector(
            '.contact-form-section textarea'
        );
    if (!name || !email || !message) {
        return false;
    }

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
    ) {

        showMessage(
            "Please complete all fields.",
            "error"
        );

        return false;
    }
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {

        showMessage(
            "Please enter a valid email.",
            "error"
        );

        return false;
    }

    fakeAjaxSubmit();

    return true;
}

/*ENQUIRY FORM VALIDATION*/

function validateEnquiryForm() {

    const inputs =
        document.querySelectorAll(
            ".enquiry-section input, .enquiry-section textarea"
        );

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {
            valid = false;
        }

    });
    if (!valid) {

        showMessage(
            "Please complete all enquiry fields.",
            "error"
        );

        return false;
    }

    showMessage(
        "Enquiry submitted successfully!",
        "success"
    );

    return true;
}
/* AJAX SIMULATION*/

function fakeAjaxSubmit() {

    showMessage(
        "Sending message...",
        "success"
    );

    setTimeout(() => {

        showMessage(
            "Message sent successfully!",
            "success"
        );

    }, 1500);
}
/*SUCCESS / ERROR MESSAGE*/

function showMessage(message, type) {

    const oldMessage =
        document.querySelector(".popup-message");

    if (oldMessage) {
        oldMessage.remove();
    }

    const popup =
        document.createElement("div");

    popup.className =
        `popup-message ${type}`;

    popup.textContent = message;

    document.body.appendChild(popup);
    setTimeout(() => {

        popup.remove();

    }, 3000);
}

/*IMAGE LIGHTBOX*/

function setupLightbox() {

    const images =
        document.querySelectorAll(
            ".product-card img"
        );

    images.forEach(image => {

        image.addEventListener("click", () => {

            const overlay =
                document.createElement("div");

            overlay.classList.add(
                "lightbox-overlay"
            );

            overlay.innerHTML = `
                <img src="${image.src}" alt="">
            `;

            document.body.appendChild(
                overlay
            );

            overlay.addEventListener(
                "click",
                () => {
                    overlay.remove();
                }
            );

        });

    });

}

/* HERO ANIMATION*/
function animateHero() {

    const hero =
        document.querySelector(".hero-logo");

    if (!hero) return;

    let rotation = 0;

    setInterval(() => {

        rotation += 1;

        hero.style.transform =
            `rotate(${Math.sin(rotation/20)*2}deg)`;

    }, 50);
}

/*SCROLL ANIMATION*/

function revealOnScroll() {

    const cards =
        document.querySelectorAll(
            ".card, .product-card, .info-block"
        );

    const trigger =
        window.innerHeight * 0.85;

    cards.forEach(card => {

        const top =
            card.getBoundingClientRect().top;

        if (top < trigger) {
            card.classList.add("show");
        }
 });
}
window.addEventListener(
    "scroll",
    revealOnScroll
);

/* INITIALISE WEBSITE*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadCart();

        setupFAQ();

        setupLightbox();

        animateHero();

        revealOnScroll();

        const contactButton =
            document.querySelector(
                ".contact-form-section .btn-submit"
            );

        if (contactButton) {

            contactButton.addEventListener(
                "click",
                function (e) {

                    e.preventDefault();

                    validateContactForm();

                }
            );

        }           
        
        const enquiryButton =
            document.querySelector(
                ".enquiry-section .btn-submit"
            );

        if (enquiryButton) {

            enquiryButton.addEventListener(
                "click",
                function (e) {

                    e.preventDefault();

                    validateEnquiryForm();

                }
            );
        }
    }
);

/* PRODUCT SEARCH */
function searchProducts() {

    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product){

        let productName = product.querySelector("h3").textContent.toLowerCase();

        if(productName.includes(filter)){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}

// Inside your renderGallery loop:
// <img src="${p.image}" 
//      alt="${p.name}" 
//      class="clickable-image" 
//      onclick="openLightbox('${p.image}')" 
//      style="cursor: pointer;"></img>

     // --- ADD THESE FUNCTIONS TO VALIDATION.JS ---

function openLightbox(imageUrl) {
    const lightbox = document.getElementById('lightbox');
    const fullImage = document.getElementById('full-image');
    fullImage.src = imageUrl;
    lightbox.style.display = 'flex'; // This reveals your div
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none'; // This hides it
}
//1. Data
const products = [
    {name: "Espresso",category: "coffee",price: 25.00,image: "images/espresso.jpg"},
    {name: "Cappuccino",category: "coffee",price: 35.00,image: "images/cappuccino.jpg"},
    {name: "Latte",category: "coffee",price: 40.00,image: "images/latte.jpg"},
    {name: "Lemonade",category: "beverage",price: 38.00,image: "images/lemonade.jpg"},
    {name: "Smoothie",category: "beverage",price: 45.00,image: "images/smoothie.jpg"},
    {name: "Muffin",category: "food",price: 20.00,image: "images/muffin.jpg"},
    {name: "Sandwich",category: "food",price: 50.00,image: "images/sandwich.jpg"}
];

// Render gallery and UI helpers
function renderGallery(productList) {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    gallery.innerHTML = "";

    productList.forEach(p => {
        const item = document.createElement('div');
        item.className = 'product-card';
        item.innerHTML = `
<div class="product-image-wrapper">
    <img src="${p.image}" alt="${p.name}" loading="lazy" width="300" height="300" class="clickable-image"
        onclick="openLightbox('${p.image}')" style="cursor: pointer;">
</div>
<div class="product-info">
    <div class="product-text-meta">
        <h3 class="product-name">${p.name}</h3>
        <div class="product-category">${p.category}</div>
        <span class="product-price">R$ ${p.price.toFixed(2)}</span>
    </div>
    <button class="btn-add" onclick="addToCart('${p.name}')">Add to Cart</button>
    <div class="cart-icon-wrapper" style="pointer-events: none;">
        <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
            <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.16 14l.84-4h8l.84 4H7.16zM20 4h-3.586l-1.707-1.707A.999.999 0 0014.586 2H5a1 1 0 000 2h9l3.293 3.293A.999.999 0 0018.707 8H22a1 1 0 000-2z"/>
            <path d="M7.16 14h9l-.84-4H8l-.84 4z" fill="currentColor"/>
            <path d="M18.707 8H5a1 1 0 000 2h9l3.293-3.293A.999.999 0 0018.707 8z" fill="currentColor"/>
        </svg>
    </div>
</div>
`;
        gallery.appendChild(item);
    });
}

// Search/filter helper (renamed to avoid duplicate function names)
function filterGallery() {
    const input = document.getElementById("searchInput");
    if (!input) return;
    const filter = input.value.toLowerCase();

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(filter) ||
        p.category.toLowerCase().includes(filter)
    );
    renderGallery(filtered);
}

// Initial render
renderGallery(products);

// 5. Cart logic 
function addToCart(itemName) {
    //Increment Count
    cartTotal++;
    const countElement = document.getElementById(cart-count);
    if (countElement) countElement.textContent = cartTotal

    //Trigger Toast
    showToasts(`$(itemName) added to your card`);
}

// 6. UI Helpers
function showToasts(message) {
    const toast = document.getElementById("toast")
    if (toast) return;
    toast.textContent = message
    toast.style.display = "block"
    setTimeout(() => { toast.style.display = "none";}, 3000);
}

//7.Initialze
document.addEventListener (`DOMConentLoaded`, ()=> {
    if (document.getElementById(`gallery`)) {
        renderGallery(products);
    }
}
// Note: if you wire a search input, call filterGallery() on input events
)
