const heroDetails = document.querySelector(".hero .info .details");
const heroImg = document.querySelector(".hero .image");
// const BOOK_URL = "http://localhost:3003/books?id=1";
const BOOK_URL =
  "https://my-json-server.typicode.com/dbStoreForProjects/Data1/books?id=1";
fetch(BOOK_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ pages, length, image, raiting, voteCounts }) => {
      heroDetails.innerHTML += `
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
  <li>
    <i class="fa-solid fa-circle"></i>
    <h4>
      Ratings:
      <p>${raiting}/5 (${voteCounts} ratings)</p>
    </h4>
  </li>
    `;
      heroImg.innerHTML += `
    <img src=${image} alt="" />
    `;
    });
  });
// ======================= About Author Section ==================================
// const ABOUT_AUTHOR = "http://localhost:3003/about";
const ABOUT_AUTHOR =
  "https://my-json-server.typicode.com/dbStoreForProjects/Data1/about";

const aboutSec = document.querySelector(".about");

fetch(ABOUT_AUTHOR)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach(
      ({
        imageHome,
        smallInfo,
        reviewPoint,
        publishedBooks,
        awards,
        qrCode,
        fullname,
        degree,
        email,
        phone,
      }) => {
        aboutSec.innerHTML += `
        <div class="image">
        <div class="img">
          <img src=${imageHome} alt="" />
        </div>
        <div class="decoration"></div>
      </div>
      <div class="info">
        <h4 class="subtitle">About Author</h4>
        <div class="line"></div>
        <p class="detailText">${smallInfo}</p>
        <div class="ratings">
          <div class="rating">
            <h4>${publishedBooks}</h4>
            <p>Books Published</p>
          </div>
          <div class="rating">
            <h4>${reviewPoint}</h4>
            <p>User Reviews</p>
          </div>
          <div class="rating">
            <h4>${awards}</h4>
            <p>Best Seller Awards</p>
          </div>
        </div>
        <div class="qrCode">
          <img src="${qrCode}"/>
          <div class="text">
            <h5>${fullname} , ${degree}</h5>
            <p>Mail : ${email}</p>
            <p>Phone : ${phone}</p>
          </div>
        </div>
      </div>
        `;
      }
    );
  });



//   ====================== Reasons Section ====================================

// const REASONS_URL = "http://localhost:3003/reasons";
const REASONS_URL = "https://my-json-server.typicode.com/incihuseynli/Data3/reasons";

const reasonsContainer = document.querySelector(".reasons .cards");

fetch(REASONS_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ id, content }) => {
      reasonsContainer.innerHTML += `
        <div class="card">
            <div class="number">${id}</div>
            <p>${content}</p>
        </div>
        `;
    });
  });

//   ====================== Chapters Section ====================================

// const CHAPTERS_URL = "http://localhost:3003/chapters";
const CHAPTERS_URL =
  "https://my-json-server.typicode.com/incihuseynli/Data3/chapters";

const chaptersContainer = document.querySelector(".chapters .cards");

fetch(CHAPTERS_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ title, content, pages, length }) => {
      chaptersContainer.innerHTML += `
        <div class="card">
            <h4 class="subtitle">${title}</h4>
            <p>${content}</p>
            <div class="row">
                <li>
                    <i class="fa-solid fa-circle"></i>
                    <h4>
                    Pages :
                    <span>${pages}</span>
                    </h4>
                </li>
                <li>
                    <i class="fa-solid fa-circle"></i>
                    <h4>
                    Length :
                    <span>${length}</span>
                    </h4>
                </li>
            </div>
      </div>
        `;
    });
  });

//   ====================== Reviews Section ====================================

// const REVIEWS_URL = "http://localhost:3003/reviews";
const REVIEWS_URL =
  "https://my-json-server.typicode.com/incihuseynli/Data3/reviews";

const reviewsCardContainer = document.querySelector(".reviews .cards");
const reviewsInfo = document.querySelector(".reviews .info");
fetch(REVIEWS_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ review, title, text, raitingOverall }) => {
      reviewsInfo.innerHTML += `
        <div class="head">
        <h1 class="title">${title}</h1>
        <div class="line"></div>
      </div>
      <p>${text}</p>
      <div class="overallRate">
        <div class="ratings">
          <i class="fa-solid fa-circle"></i>
          <i class="fa-solid fa-circle"></i>
          <i class="fa-solid fa-circle"></i>
          <i class="fa-solid fa-circle"></i>
          <i class="fa-solid fa-circle-half-stroke"></i>
        </div>
        <h6>(${raitingOverall}/5)</h6>
      </div>
      <h6>Overall Customer Ratings</h6>
        `;
      review.forEach(
        ({ image, username, content, spotlightSentence, rate }) => {
          reviewsCardContainer.innerHTML += `
        <div class="card">
        <div class="card-head">
          <div class="image">
            <img src=${image} alt="" />
          </div>
          <div class="col">
            <h4>${username}</h4>
            <div class="ratings">
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle-half-stroke"></i>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h4 class="spotlightedText">${spotlightSentence}</h4>
          <p>${content}</p>
        </div>
      </div>
        `;
        }
      );
    });
  });

//   ====================== Blog Section ====================================

// const BLOG_URL = "http://localhost:3003/news?_limit=4";
const BLOG_URL =
  "https://my-json-server.typicode.com/incihuseynli/Data2/news?_limit=4";

const blogContainerCards = document.querySelector(".blogContainer .cards");

fetch(BLOG_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(({ id, image, title, date, info }) => {
      blogContainerCards.innerHTML += `
        <div class="card">
            <div class="card-head">
              <img src=${image} alt="" />
            </div>
            <div class="card-body">
              <h4 class="subtitle">${title}</h4>
              <p>${info}</p>
              <div class="row">
                <a href="blog.html?id=${id}" class="btn-text">Read more</a>
                <div class="date">
                  <p class="dateOfPost">${date}</p>
                </div>
              </div>
            </div>
          </div>
        `;
    });
  });
