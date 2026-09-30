const foods = [
    {
        id: 1,
        name: "Skittels",
        description: "Skittles, Diffrent flavors every 2 weeks!",
        price: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdpF1hyyQczBNcrizLDmzMDpacOkRHK_s6hI14_aVww&s=10"
    },
    {
        id: 2,
        name: "Flamming Hot mix",
        description: "A variety of Hot Cheetos, Doritos, Funyuns, and Chesters.",
        price: 1,
        image: "https://www.cheetos.com/sites/cheetos.com/files//2025-09/Cheetos%20FH%202025%20%281%29.png"
    },
    {
        id: 3,
        name: "Airhead Xtremes",
        description: "Airhead Xtream, filled with a mix of sweet and sour.",
        price: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1U-cvckYHXxy2YCJkrdIqBpmGCsCPsdusmSqgeItEw&s=10"
    },
    {
        id: 4,
        name: "Arizona Drink Bottles",
        description: "Arizonia drink bottles, perfect for a quick and refreshing drink.",
        price: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKJcK2dUPQ3TcY4mSy80Ef6tMyRhENgnbJUiKgnhCpA&s=10"
    },
    {
        id: 5,
        name: "Monster Energy",
        description: "See Updates about Flavors",
        price: 3.50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXXYYZT_O5R011XjqBcTyoIOPHV-psQTb2gfT8UT5wLw&s=10"
    },
    {
        id: 6,
        name: "Salad",
        description: "Fresh garden salad",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 7,
        name: "Soda",
        description: "Cold soft drink",
        price: 1.99,
        image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 8,
        name: "Ice Cream",
        description: "Vanilla ice cream",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80"
    }
];

let cart = {};
let currentOrder = null;


/* -------------------------
   START WEBSITE
------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    renderFoods();
    updateCartCount();

    document
        .getElementById("checkoutForm")
        .addEventListener("submit", submitOrder);
});


/* -------------------------
   FOOD MENU
------------------------- */

function renderFoods() {
    const foodGrid = document.getElementById("foodGrid");

    foodGrid.innerHTML = "";

    foods.forEach(function (food) {
        const card = document.createElement("div");

        card.className = "food-card";

        card.innerHTML =
            '<img class="food-image" src="' + food.image + '" alt="' + food.name + '">' +
            '<div class="food-info">' +
                '<h3>' + food.name + '</h3>' +
                '<div class="food-description">' + food.description + '</div>' +
                '<div class="food-bottom">' +
                    '<div class="food-price">$' + food.price.toFixed(2) + '</div>' +
                    '<button class="add-button" onclick="addToCart(' + food.id + ')">+ Add</button>' +
                '</div>' +
            '</div>';

        foodGrid.appendChild(card);
    });
}


/* -------------------------
   CART
------------------------- */

function addToCart(foodId) {
    if (cart[foodId] === undefined) {
        cart[foodId] = 0;
    }

    cart[foodId]++;

    updateCartCount();
}


function increaseItem(foodId) {
    if (cart[foodId] === undefined) {
        cart[foodId] = 0;
    }

    cart[foodId]++;

    renderCart();
    updateCartCount();
}


function decreaseItem(foodId) {
    if (cart[foodId] === undefined) {
        return;
    }

    cart[foodId]--;

    if (cart[foodId] <= 0) {
        delete cart[foodId];
    }

    renderCart();
    updateCartCount();
}


function removeItem(foodId) {
    delete cart[foodId];

    renderCart();
    updateCartCount();
}


function getCartItemCount() {
    let count = 0;

    Object.keys(cart).forEach(function (id) {
        count += cart[id];
    });

    return count;
}


function updateCartCount() {
    document.getElementById("cartCount").textContent =
        getCartItemCount();
}


/* -------------------------
   CART WINDOW
------------------------- */

function openCart() {
    renderCart();

    document
        .getElementById("cartOverlay")
        .classList.add("active");
}


function closeCart() {
    document
        .getElementById("cartOverlay")
        .classList.remove("active");
}


function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const emptyCart = document.getElementById("emptyCart");
    const checkoutButton = document.getElementById("checkoutButton");

    cartItems.innerHTML = "";

    const itemIds = Object.keys(cart);

    if (itemIds.length === 0) {
        emptyCart.style.display = "block";
        checkoutButton.disabled = true;

        document.getElementById("cartTotal").textContent = "0";

        return;
    }

    emptyCart.style.display = "none";
    checkoutButton.disabled = false;

    itemIds.forEach(function (id) {
        const food = findFood(Number(id));

        if (!food) {
            return;
        }

        const quantity = cart[id];

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML =
            '<img class="cart-item-image" src="' + food.image + '" alt="' + food.name + '">' +

            '<div class="cart-item-info">' +
                '<h4>' + food.name + '</h4>' +
                '<div>$' + food.price.toFixed(2) + '</div>' +
            '</div>' +

            '<div>' +
                '<div class="cart-controls">' +
                    '<button class="quantity-button" onclick="decreaseItem(' + food.id + ')">−</button>' +
                    '<strong>' + quantity + '</strong>' +
                    '<button class="quantity-button" onclick="increaseItem(' + food.id + ')">+</button>' +
                '</div>' +

                '<button class="remove-button" onclick="removeItem(' + food.id + ')">Remove</button>' +
            '</div>';

        cartItems.appendChild(item);
    });

    document.getElementById("cartTotal").textContent =
        getCartItemCount();
}


/* -------------------------
   CHECKOUT
------------------------- */

function openCheckout() {
    if (getCartItemCount() === 0) {
        alert("Your cart is empty.");
        return;
    }

    renderCheckoutSummary();

    closeCart();

    document
        .getElementById("checkoutOverlay")
        .classList.add("active");
}


function closeCheckout() {
    document
        .getElementById("checkoutOverlay")
        .classList.remove("active");
}


function renderCheckoutSummary() {
    const summary =
        document.getElementById("checkoutSummary");

    summary.innerHTML = "";

    Object.keys(cart).forEach(function (id) {
        const food = findFood(Number(id));

        if (!food) {
            return;
        }

        const quantity = cart[id];

        const row = document.createElement("div");

        row.className = "summary-row";

        row.innerHTML =
            '<span>' +
                food.name +
                ' × ' +
                quantity +
            '</span>' +

            '<strong>$' +
                (food.price * quantity).toFixed(2) +
            '</strong>';

        summary.appendChild(row);
    });

    const totalRow = document.createElement("div");

    totalRow.className = "summary-row";

    totalRow.style.borderTop = "1px solid #ccc";
    totalRow.style.marginTop = "10px";
    totalRow.style.paddingTop = "10px";

    totalRow.innerHTML =
        '<strong>Total</strong>' +
        '<strong>$' +
            calculateTotal().toFixed(2) +
        '</strong>';

    summary.appendChild(totalRow);
}


/* -------------------------
   SUBMIT ORDER
------------------------- */

function submitOrder(event) {
    event.preventDefault();

    const name =
        document.getElementById("customerName").value.trim();

    const email =
        document.getElementById("customerEmail").value.trim();

    const notes =
        document.getElementById("customerNotes").value.trim();

    if (name === "" || email === "") {
        alert("Please enter your name and email.");
        return;
    }

    const items = [];

    Object.keys(cart).forEach(function (id) {
        const food = findFood(Number(id));

        if (!food) {
            return;
        }

        items.push({
            id: food.id,
            name: food.name,
            price: food.price,
            quantity: cart[id]
        });
    });

    currentOrder = {
        orderNumber: generateOrderNumber(),
        name: name,
        email: email,
        notes: notes,
        items: items,
        total: calculateTotal(),
        date: new Date().toLocaleString()
    };

    closeCheckout();

    showConfirmation();

    sendOrderEmail(currentOrder);
}


/* -------------------------
   CONFIRMATION
------------------------- */

function showConfirmation() {
    const details =
        document.getElementById("confirmationDetails");

    let html =
        '<div class="confirmation-details">' +

        '<strong>Order #' +
            currentOrder.orderNumber +
        '</strong>' +

        '<br><br>' +

        '<strong>' +
            escapeHTML(currentOrder.name) +
        '</strong>' +

        '<br>' +

        escapeHTML(currentOrder.email) +

        '<br><br>';

    currentOrder.items.forEach(function (item) {
        html +=
            escapeHTML(item.name) +
            " × " +
            item.quantity +
            " — $" +
            (item.price * item.quantity).toFixed(2) +
            "<br>";
    });

    html +=
        '<br><strong>Total: $' +
        currentOrder.total.toFixed(2) +
        '</strong>' +
        '</div>';

    details.innerHTML = html;

    document
        .getElementById("confirmationOverlay")
        .classList.add("active");
}


/* -------------------------
   PRINT ORDER
------------------------- */

function printOrder() {
    if (!currentOrder) {
        return;
    }

    let html =
        '<h1>Food Order</h1>' +

        '<p><strong>Order #' +
        currentOrder.orderNumber +
        '</strong></p>' +

        '<p>Customer: ' +
        escapeHTML(currentOrder.name) +
        '</p>' +

        '<p>Email: ' +
        escapeHTML(currentOrder.email) +
        '</p>' +

        '<p>Date: ' +
        escapeHTML(currentOrder.date) +
        '</p>' +

        '<hr>' +

        '<h2>Items</h2>';

    currentOrder.items.forEach(function (item) {
        html +=
            '<div class="print-line">' +

                '<span>' +
                    escapeHTML(item.name) +
                    ' × ' +
                    item.quantity +
                '</span>' +

                '<span>$' +
                    (item.price * item.quantity).toFixed(2) +
                '</span>' +

            '</div>';
    });

    html +=
        '<div class="print-total">' +
            'Total: $' +
            currentOrder.total.toFixed(2) +
        '</div>';

    if (currentOrder.notes !== "") {
        html +=
            '<h3>Notes</h3>' +
            '<p>' +
                escapeHTML(currentOrder.notes) +
            '</p>';
    }

    document.getElementById("printArea").innerHTML = html;

    window.print();
}


/* -------------------------
   NEW ORDER
------------------------- */

function newOrder() {
    cart = {};
    currentOrder = null;

    document
        .getElementById("confirmationOverlay")
        .classList.remove("active");

    document
        .getElementById("checkoutForm")
        .reset();

    updateCartCount();
}


/* -------------------------
   HELPER FUNCTIONS
------------------------- */

function findFood(id) {
    for (let i = 0; i < foods.length; i++) {
        if (foods[i].id === id) {
            return foods[i];
        }
    }

    return null;
}


function calculateTotal() {
    let total = 0;

    Object.keys(cart).forEach(function (id) {
        const food = findFood(Number(id));

        if (food) {
            total += food.price * cart[id];
        }
    });

    return total;
}


function generateOrderNumber() {
    return Math.floor(
        100000 +
        Math.random() * 900000
    );
}


function escapeHTML(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* -------------------------
   EMAIL PLACEHOLDER
------------------------- */

function sendOrderEmail(order) {
    /*
        The website currently logs the order.

        We will connect this to an email service
        when you are ready.
    */

    console.log("New order:", order);
}