let basket = JSON.parse(localStorage.getItem("data")) || [];
// Showing Value inside of Cart Icon
let calc = () => {
  let cart = document.getElementById("cartAmount");
  cart.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calc();
