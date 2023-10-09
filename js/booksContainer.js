// ======================= Books Section ==================================
const BOOKS_URL = "http://localhost:3003/books";

const booksContainer = document.querySelector(".books-container .books");
fetch(BOOKS_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
   
    data.forEach(({ id, title, info, image, pages, length }) => {
      booksContainer.innerHTML += `
            <div class="book">
            <div class="image">
              <img
                src=${image}
                alt=${title}
              />
            </div>
            <div class="info">
              <h4 class="subtitle">${title}</h4>
              <p>${info}</p>
              <ul class="details">
                <li>
                  <i class="fa-solid fa-circle"></i>
                  <h4>
                    Pages:
                    <p>${pages}</p>
                  </h4>
                </li>
                <li>
                  <i class="fa-solid fa-circle"></i>
                  <h4>
                    Length:
                    <p>${length}</p>
                  </h4>
                </li>
              </ul>
              <button class="btn-outline">
                <a href="book_details.html?id=${id}">Order Today</a></button>
            </div>
          </div>
            `;
    });
  });

