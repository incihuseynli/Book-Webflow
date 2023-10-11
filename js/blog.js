// const BLOG_URL = "http://localhost:3003/news";
const BLOG_URL = "https://my-json-server.typicode.com/incihuseynli/NewsData/news";

const blogContainerSection = document.querySelector(
  ".blogContainer.blogPage .cards"
);

fetch(BLOG_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ id, title, info, date, image, tag, content }) => {
      blogContainerSection.innerHTML += `
        <div class="card">
        <div class="card-head">
          <img src=${image} alt="" />
        </div>
        <div class="card-body">
          <h4 class="subtitle">${title}</h4>
          <p>${info}</p>
          <div class="row">
            <a href="blog_post.html?id=${id}" class="btn-text">Read more</a>
            <div class="date">
              <a href="#">Author</a> -
              <p class="dateOfPost">${date}</p>
            </div>
          </div>
        </div>
      </div>
        `;
    });
  });
