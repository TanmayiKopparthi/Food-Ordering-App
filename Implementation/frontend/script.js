let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    totalElement.textContent = total;
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    fetch("http://localhost:3000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
    })
    .then(response => response.json())
    .then(data => {
        alert("Order placed successfully!");
        cart = [];
        updateCart();
    })
    .catch(error => console.error("Error:", error));
}
