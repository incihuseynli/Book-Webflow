// ======================= Trusted Stores Section ==================================

// const STORES_URL = "http://localhost:3003/trustedStores";
const STORES_URL = "https://my-json-server.typicode.com/dbForProjects/Data3/trustedStores";

const storesContainer = document.querySelector(".storesContainer");

fetch(STORES_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ storeName, image, info }) => {
      storesContainer.innerHTML += `
            <div class="store">
                <img src=${image} alt="brand1" />
                <h4 class="subtitle">${storeName}</h4>
                <p>${info}</p>
             </div>
        `;
    });
  });
