let adviceId = document.querySelector(".advice-id");
let qoute = document.querySelector(".advice-text");
let btn = document.querySelector(".btn");
let father = document.querySelector(".parent");
let url = "https://api.adviceslip.com/advice";
btn.addEventListener("click", changeQuote);

function changeQuote() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      adviceId.innerHTML = `advice #${result.slip.id}`;
      qoute.innerHTML = result.slip.advice;
      //   return changeQuote(result.slip.advice);
    });
}
