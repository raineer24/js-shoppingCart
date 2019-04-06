// variables

const cartBtn = document.querySelector(".cart-btn");
const closeCart = document.querySelector(".close-cart");
const clearCart = document.querySelector(".clear-cart");
const cart = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

//cart
let cart = [];

// getting the products
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
// display the products
class UI {}

//local storage
class Storage {}

document.addEventListener("DOMContentloaded", () => {
  const ui = new UI();
  const products = new Products();
});
