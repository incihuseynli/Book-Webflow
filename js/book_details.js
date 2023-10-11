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

  console.log(basket);
};

// Decrement Function
let decrement = (selectedItem) => {
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.item === 0) {
    return;
  } else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
  console.log(basket);
};

// Showing Updated Value
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calc();
};

// Showing Value inside of Cart Icon
let calc = () => {
  let cart = document.getElementById("cartAmount");
  cart.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calc();

// ========================== Showing Data ============================================
document.addEventListener("DOMContentLoaded", function () {
  const details = document.querySelector(".bookDetailsContainer");

  async function DisplayBookDetails() {
    const ALL_BOOKS_URL = new URLSearchParams(document.location.search);
    let id = ALL_BOOKS_URL.get("id");
    let res = await fetch(`https://my-json-server.typicode.com/incihuseynli/BooksData/allBooks/${id}`);
    let bookDetail = await res.json();
    const smIMG = bookDetail.smallImg
      ? `  <div class="smallImg"><img src=${bookDetail.smallImg} alt="" /></div>`
      : "";
    let search = basket.find((x) => x.id === id) || [];
    details.innerHTML += `
    <div class="book-details" id=product-id-${bookDetail.id} >
      <div class="image">
        <img src="${bookDetail.image}" />
        ${smIMG}
      </div>
      <div class="info">
        <h4 class="subtitle">${bookDetail.title}</h4>
        <span class="price">${bookDetail.price} USD</span>
        <p>${bookDetail.info}</p>
        <ul class="details">
          <li>
            <span>Publisher</span>
            <span>:</span>
            <span>${bookDetail.publisher}</span>
          </li>
          <li>
            <span>Language</span>
            <span>:</span>
            <span>${bookDetail.language}</span>
          </li>
          <li>
            <span>Paperback</span>
            <span>:</span>
            <span>${bookDetail.paperback}</span>
          </li>
          <li>
            <span>ISBN-10</span>
            <span>:</span>
            <span>${bookDetail.code}</span>
          </li>
          <li>
            <span>Dimensions</span>
            <span>:</span>
            <span>${bookDetail.dimensions}</span>
          </li>
        </ul>
        <div class="inputBx">
          <div class="amounts">
            <i onclick="decrement({ id: ${
              bookDetail.id
            } })" class="fa-solid fa-minus"></i>
            <div class="quantity" id=${bookDetail.id}>
            ${search.item === undefined ? 0 : search.item}
            </div>
            <i onclick="increment({ id: ${
              bookDetail.id
            } })" class="fa-solid fa-plus"></i>
          </div>
          <button class="btn" type="submit">
            <a href="cart.html">
            <i class="fa-solid fa-cart-shopping"></i>
            Go to Cart
          </a></button>
        </div>
      </div>
       </div>  `;
  }
  DisplayBookDetails();

  // =============================== Deatils Banner ==================================================
  const detailsBanner = document.querySelector(".details-banner");
  // const DETAILS_BANNER_URL = "http://localhost:3003/detailsBanner";
  const DETAILS_BANNER_URL = "https://my-json-server.typicode.com/incihuseynli/OtherDatas/detailsBanner";
  fetch(DETAILS_BANNER_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach(({ title, content }) => {
        detailsBanner.innerHTML += `
            <div class="item">
                <div class="icon">
                    <i class="fa-solid fa-user-shield"></i>
                </div>
                <h4 class="subtitle">${title}</h4>
                <p>${content}</p>
            </div>
        `;
      });
    });

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tabcontent");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      contents.forEach((content) => {
        content.classList.remove("active");
      });
      contents[index].classList.add("active");
    });
  });
});
