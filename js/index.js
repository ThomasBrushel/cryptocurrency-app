var menu = document.querySelector("nav");
var hamburger = document.getElementById("burger").addEventListener("click", function () {
  menu.classList.toggle("block");
});

var modal = document.querySelector(".modal");
window.onload = function () {
  document.querySelector(".modal").innerHTML = "\n    <div class=\"modal\">\n      <span class=\"modal-close\">x</span>\n      <h2 class=\"modal-title\">Welcome to Cryptotracker<h2>\n      <p class=\"modal-copy\">On this site you can see live market updates. Comming soon are push notification on coins you want to keep track of your cryptocurrency</p>\n    </div>\n";






  setTimeout(function () {
    document.querySelector(".modal").remove();
  }, 2000);
  document.querySelector(".modal-close").addEventListener("click", function (e) {
    modal.remove();
  });
};

fetch("https://api.coinmarketcap.com/v2/ticker/?start=0&limit=200").
then(function (response) {
  return response.json();
}).
then(function (resp) {
  console.log(resp);
  var oData = Object.getOwnPropertyNames(resp.data).slice(0, 12).map(function (i) {
    return resp.data[i];
  });
  showPrice(oData);
}).catch(function (err) {return console.log('err:' + err);});

function showPrice(cryptoPrice) {

  var divs = cryptoPrice.map(function (price) {
    return "<div class=\"col-4\">\n       <div class=\"card\">\n         <h1>" +

    price.name + "</h1>\n         <span><b>Symbol:</b> " +
    price.symbol + "</span>\n         <p><b>Price:</b> <span class=\"dollar-amount\">" +
    price.quotes.USD.price + "</span></p>\n         <p class=\"change\">Change (24hr) " +
    price.quotes.USD.percent_change_24h + "%</p>\n       </div>\n     </div>";


  }).
  join("");
  document.querySelector(".results").innerHTML = "\n    <div class=\"container max-lg text-center\">" +
  divs + "</div>";
}


fetch("https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=2b580165d6d44c26ba2f84b75e3e9f87").
then(function (response) {return response.json();}).
then(function (resp) {
  console.log(resp);
  var articleArray = resp.articles;
  console.log(articleArray);

  showArticles(articleArray);
});

function showArticles(articleArray) {
  document.querySelector(".articles").innerHTML = "\n  <div class=\"container padding-a-xsm\">\n    <div class=\"col-6\">\n      <div class=\"article-card\">\n        <img src=\"" +



  articleArray[0].urlToImage + "\">\n      <div class=\"article-card-body\">\n        <h2>" +

  articleArray[0].title + "</h2>\n        <p class=\"margin-bottom-md\">" +
  articleArray[0].description + "</p>\n        <a class=\"read-more-btn\" href=\"" +
  articleArray[0].url + "\" target=\"_blank\">Read More</a>\n       </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"article-card\">\n        <img src=\"" +





  articleArray[1].urlToImage + "\">\n        <div class=\"article-card-body\">\n          <h2>" +

  articleArray[1].title + "</h2>\n          <p class=\"margin-bottom-md\">" +
  articleArray[1].description + "</p>\n          <a class=\"read-more-btn\" href=\"" +
  articleArray[1].url + "\" target=\"_blank\">Read More</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"artcile-card\">\n        <img src=\"" +





  articleArray[2].urlToImage + "\">\n        <div class=\"article-card-body\">\n          <h2>" +

  articleArray[2].title + "</h2>\n          <p class=\"margin-bottom-md\">" +
  articleArray[2].description + "</p>\n          <a class=\"read-more-btn\" href=\"" +
  articleArray[2].url + "\" target=\"_blank\">Read More</a>\n        </div>\n      </div>\n     </div>\n     <div class=\"col-6\">\n      <div class=\"artcile-card\">\n        <img src=\"" +





  articleArray[3].urlToImage + "\">\n        <div class=\"article-card-body\">\n          <h2>" +

  articleArray[3].title + "</h2>\n          <p class=\"margin-bottom-md\">" +
  articleArray[3].description + "</p>\n          <a class=\"read-more-btn\" href=\"" +
  articleArray[3].url + "\" target=\"_blank\">Read More</a>\n        </div>\n      </div>\n     </div>\n  </div>\n";





}

var signUpForm = document.getElementById("sign-up-form");
var errorMsg = document.querySelector(".error-message");
signUpForm.addEventListener("submit", validateForm);
function validateForm(e) {
  e.preventDefault();
  var emailField = document.querySelector(".email-input");
  if (emailField.value === "") {
    emailField.style.border = "1px solid red";
    errorMsg.style.display = "block";
  } else {
    emailField.value = "";
    emailField.style.border = "";
    errorMsg.style.display = "none";
  }
}

var footerDate = document.querySelector(".date");
var date = new Date();
footerDate.innerHTML = "Copyright " + date.getFullYear();