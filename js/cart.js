let basket = JSON.parse(localStorage.getItem("data")) || [];

// Increment Function
let increment = (selectedItem) => {
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search) {
    search.item += 1;
  } else {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  }
  update(selectedItem.id);

  localStorage.setItem("data", JSON.stringify(basket));
  displayItemsList(fetchedData);
  totalPrice(fetchedData);

  // console.log(basket);
};

// Decrement Function
let decrement = (selectedItem) => {
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search.item === 0) {
    return;
  } else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
  displayItemsList(fetchedData);
  totalPrice(fetchedData);

  // console.log(basket);
};

// Showing Updated Value
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calc();
};

let remove = (id) => {
  basket = basket.filter((x) => x.id !== id);
  // displayItemsList(data);
  localStorage.setItem("data", JSON.stringify(basket));
  displayItemsList(fetchedData);
};
//  Clear All Items in Cart
const clearAllBtn = document.querySelector(".checking .buttons .btn-outline");

let clearAllItems = () => {
  basket = [];
  localStorage.setItem("data", JSON.stringify(basket));
  displayItemsList(fetchedData);
  location.reload();
};
// Showing Value inside of Cart Icon
let calc = () => {
  let cart = document.getElementById("cartAmount");
  cart.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calc();

// ================ Getting Datas =============================
const cartLists = document.querySelector(".lists");
const cartSection = document.querySelector(".cartSection");
// const BOOK_URL = "http://localhost:3003/allBooks";
const BOOK_URL =
  "https://my-json-server.typicode.com/dbForProjects/Data1/allBooks";
let fetchedData = "";
fetch(BOOK_URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    fetchedData = data;
    displayItemsList(data);
    totalPrice(fetchedData);
  });

let displayItemsList = (data) => {
  if (basket.length !== 0) {
    return (cartLists.innerHTML = basket
      .map(({ id, item }) => {
        let search = data.find((y) => y.id === id) || [];
        // console.log(search);
        // console.log(search.inStock);
        let price = Math.floor(parseFloat(search.price));
        let subPrice = item * price;
        // console.log(subPrice);
        return `
        <div class="item">
          <img src="${search.image}" alt="" />
          <div class="col">
            <div class="row">
              <div class="info">
                <h6 class="name">${search.title}</h6>
                <p>$ ${search.price} USD</p>
              </div>
              <div class="details">
              <div class="amounts">
                  <i onclick="decrement({ id: ${id} })" class="fa-solid fa-minus"></i>
                  <div class="quantity" id=${id}>${item}</div>
                  <i onclick="increment({ id: ${id} })" class="fa-solid fa-plus"></i>
              </div>
                <i onclick="remove(${id})"  class="fa-solid fa-trash"></i>
              </div>
            </div>
            
            <div class="price">
              <h6>Subtotal price: </h6>
              <span class="subPrice">${subPrice} USD</span>
            </div>
            </div>
      </div>
        `;
      })
      .join(""));
  } else {
    cartSection.classList.add("empty");
    cartSection.innerHTML = `
      <h1 class="title">Your Cart is empty!</h1>
      <span>Please, add some books from store page for checkout..</span>
      <button class="btn"><a href="store.html">Show me books</a></button>
      `;
  }
};
// displayItemsList(data);

// Calc Total Prices
const totalPriceTag = document.querySelector(".totalPriceTag");
let totalPrice = (data) => {
  if (basket.length !== 0) {
    let amount = basket
      .map(({ id, item }) => {
        let search = data.find((y) => y.id === id) || [];
        let price = Math.floor(parseFloat(search.price));
        let subPrice = item * price;
        return subPrice;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    totalPriceTag.innerText = `$ ${amount} USD`;
  } else return;
};
totalPrice(fetchedData);
