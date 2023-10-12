document.addEventListener("DOMContentLoaded", function () {
  const detailsContainer = document.querySelector(".blogPost-details");
  async function DisplayPostDetails() {
    const BLOG_URL = new URLSearchParams(document.location.search);
    let id = BLOG_URL.get("id");
    // let res = await fetch(`http://localhost:3003/news/${id}`);
    let res = await fetch(`https://my-json-server.typicode.com/incihuseynli/Data2/news/${id}`);
    let blogPost = await res.json();
    console.log(blogPost);
    detailsContainer.innerHTML += `
        <img src=${blogPost.image} class="postImg" />
        <div class="tag">
            <span class="dateOfPost">${blogPost.date}</span> /
            <span>${blogPost.tag}</span>
        </div>
        <p>${blogPost.text}</p>
        <h5 class="subtitle">${blogPost.subtitle}</h5>
        <p>${blogPost.subContent}</p>
        <ul class="list">
            ${blogPost.list
              .map(
                (item) => `
            <li class="row">
                <i class="fa-solid fa-circle"></i>
                <span>${item.listItem}</span>
            </li>`
              )
              .join("")}
        </ul>
        <div class="quote">
            <img src="./assets/icons/quote.svg" class="quoteIcon" />
            <p>${blogPost.quote}</p>
        </div>
        <h5 class="subtitle">${blogPost.subtitle}</h5>
        <p>${blogPost.subContent}</p>
        <ol class="list" type="1">
            ${blogPost.list
              .map(
                (item) => `
            <li>${item.listItem}</li>`
              )
              .join("")}
        </ol> 
  `;

    const pageHeader = document.querySelector(".page-header .head");
    pageHeader.innerHTML += `
        <h1 class="title">${blogPost.title}</h1>
        <div class="line"></div>
    `;
  }

  DisplayPostDetails();
});
