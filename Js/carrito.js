const addToShoppingCartButtons = document.querySelectorAll(`.AddToCart`);
addToShoppingCartButtons.forEach((addtocartbutton) => {
  addtocartbutton.addenventlistener(`click`, addToCartClicked);
});
const ShoppingItemContainer = document.querySelector("ShoppingItemContainer");

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest(`.item`);
  const itemtitle = item.querySelector(`item-title`).textcontent;
  const itemprice = item.querySelector(`item-price`).textcontent;
  addItemToShoppingCart(itemtitle, itemprice, itemimg);
}
// falta terminar funcion del carrito
function addItemToShoppingCart(itemprice, itemtitle) {
  const ShoppingCartRow = document.createElement(`div`);
  const ShoppingCartContent = "";
}
// funcion de calcular total
