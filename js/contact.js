const faqContainer = document.querySelector(".faqContainer");
const questionBx = document.querySelector(".faqContainer .col");

// const CONTACT_URL = "http://localhost:3003/FAQ";
const CONTACT_URL = "https://my-json-server.typicode.com/incihuseynli/FaqData/FAQ";

fetch(CONTACT_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const middle = data.length / 2;
    const colCounts = 2;
    for (let i = 0; i < colCounts; i++) {
      let col = '<div class="col">';
      data
        .slice(i * middle, middle + i * middle)
        .forEach(({ id, question, answer }) => {
          col += `
            <div class="question">
                <div class="top">
                  <i class="fa-solid fa-circle"></i>
                  <h5 class="faqTitle">${question}</h5>
                </div>
                <p class="answer">${answer}</p>
            </div>
            `;
        });
      faqContainer.innerHTML += col + "</div>";
    }

    // Accordion
    const question = document.querySelectorAll(".question");
    question.forEach((item) => {
      let questionHeader = item.querySelector(".top");
      questionHeader.addEventListener("click", () => {
        item.classList.toggle("open");

        let answer = item.querySelector(".answer");
        let icon = item.querySelector("i");

        if (item.classList.contains("open")) {
          answer.style.display = "block";
          icon.classList.replace("fa-circle", "fa-circle-half-stroke");
        } else {
          answer.style.display = "none";
          icon.classList.replace("fa-circle-half-stroke", "fa-circle");
        }
      });
    });
  });
