let basket = JSON.parse(localStorage.getItem("data")) || [];
// Showing Value inside of Cart Icon
let calc = () => {
  let cart = document.getElementById("cartAmount");
  cart.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calc();



// ================ Getting Datas =============================
const cartLists = document.querySelector(".lists");
const BOOK_URL = "http://localhost:3003/allBooks";

fetch(BOOK_URL).then(res =>{return res.json()})
.then(data => {
  data.forEach(({}) => {
    cartLists.innerHTML += ``;
  });
});