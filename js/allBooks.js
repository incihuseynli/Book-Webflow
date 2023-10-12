const ALL_BOOKS_URL = "https://my-json-server.typicode.com/incihuseynli/Data1/allBooks";
// const ALL_BOOKS_URL = "http://localhost:3003/allBooks";

const booksListContainer = document.querySelector(".booksList .lists");

fetch(ALL_BOOKS_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ id, image, title, price, info, type, smallImg }) => {
      const smIMG = smallImg
        ? `  <div class="smallImg"><img src=${smallImg} alt="" /></div>`
        : "";
      booksListContainer.innerHTML += `
        <div class="item">
        <div class="image">
          <img src=${image} alt="" />
          ${smIMG}
        </div>
        <div class="info">
          <div class="row">
            <h4 class="subtitle">${title}</h4>
            <span class="price">${price}</span>
          </div>
          <p>${info}</p>
          <div class="type">
            <i class="fa-solid fa-circle"></i>
            <h4>${type}</h4>
          </div>
          <button class="btn-outline"><a href="book_details.html?id=${id}">Order Today</a></button>
        </div>
      </div>
        `;
    });
  });
