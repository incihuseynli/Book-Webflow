// const ABOUT_URL = "http://localhost:3003/about";
const ABOUT_URL = "https://my-json-server.typicode.com/dbForProjects/Data1/about";

const aboutAuthorSection = document.querySelector(".about-author"),
  storyOfAuthorSection = document.querySelector(".authorStory");

fetch(ABOUT_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(
      ({
        fullname,
        degree,
        email,
        phone,
        publishedBooks,
        reviewPoint,
        awards,
        smallInfo,
        country,
        language,
        genre,
        publicationDate,
        imageHome,
        imageAboutBig,
        imageAboutSmall,
        qrCode,
        authorStory,
      }) => {
        // About Author
        aboutAuthorSection.innerHTML += `
        <div class="image">
        <img src=${imageAboutBig} alt="" />
        </div>
        <div class="row">
            <ul class="card">
                <li>
                    <h4>Country :</h4>
                    <span>${country}</span>
                </li>
                <li>
                    <h4>Language :</h4>
                    <span>${language}</span>
                </li>
                <li>
                    <h4>Genre :</h4>
                    <span>${genre}</span>
                </li>
                <li>
                    <h4>Publication date :</h4>
                    <span>${publicationDate}</span>
                </li>
                <li>
                    <h4>Share us on:</h4>
                    <div class="socials">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </li>
            </ul>
            <div class="about-text">
                <h4 class="subtitle">About Dr. John Abraham</h4>
                <div class="line"></div>
                <p>${smallInfo}</p>
                <button class="btn"><a href="contact.html">Contact now</a></button>
            </div>
      </div>
        `;

        // Story of Author
        storyOfAuthorSection.innerHTML += `
        <div class="image">
        <img src=${imageAboutSmall} alt="" />
      </div>
      <div class="info">
       <div class="head">
        <h4 class="subtitle">My Story</h4>
        <div class="line"></div>
       </div>
        <p>${smallInfo}</p>
        <ul class="list">
          <div class="numbers">
            <div class="number">01</div>
            <hr class="dotted-line"></hr>
            <div class="number">02</div>
            <hr class="dotted-line"></hr>
            <div class="number">03</div>
          </div>
          <ul class="content"></ul>
        </ul>
      </div>
        `;

        const listContent = document.querySelector(".authorStory .content");

        authorStory.forEach(({ title, content }) => {
          listContent.innerHTML += `
            <li>
                <h4 class="listTitle">${title}</h4>
                <p>${content}</p>
            </li>
            `;
        });
      }
    );
  });
