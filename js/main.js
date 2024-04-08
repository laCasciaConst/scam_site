// désactiver adblock
const adblock = document.getElementById("antiAdblock");
const adBtn = document.querySelector(".adblock");

adBtn.addEventListener("click", function () {
  adblock.classList.add("hide");
});

// cookieConsentBox
const consentBox = document.getElementById("cookieJar");
const acceptBtn = document.querySelector(".consentButton");
const rejectBtn = document.querySelector(".rejectButton");

acceptBtn.onclick = () => {
  document.cookie = "CookieBy=GeeksForGeeks; max-age=" + 60 * 60 * 24;
  if (document.cookie) {
    consentBox.classList.add("hide");
  } else {
    alert(
      "Cookie can't be set! Please" +
        " unblock this site from the cookie" +
        " setting of your browser."
    );
  }
};

rejectBtn.onclick = () => {
  alert("Cookies rejected. Some functionality may be limited.");
  consentBox.classList.add("hide");
};

let checkCookie = document.cookie.indexOf("CookieBy=GeeksForGeeks");
checkCookie !== 0
  ? consentBox.classList.add("hide")
  : // checkCookie !== -1 ? 이어야하는데 0으로 바꿔서 의미없게 만듦,
    // 리셋할때마다 매번 창이 떠
    consentBox.classList.remove("hide");

//
const learnMore = document.getElementById("learnMoreHmm");
const agreeAndClose = document.getElementById("agreeAndClose");
const agreement = document.getElementById("whyamidoingthis")

agreeAndClose.addEventListener("click", function () {
    agreement.classList.add("hide");
  });

learnMore.onclick = () => {
    alert("We can't provide you any other informations! Please Agree and Close.");
}

//
const greenButton = document.querySelector(".greenButton");

greenButton.onclick = () => {
    alert("Congratulations! \n\nStudent of ESAD!\n\nYou've been selected as a winner for the free $1000 printer Gift Card, Apple iPhone X 256G or Samsung Galaxy S8!\n\nPlease click Ok to claim yout prize before we give it away to somebody else.")
}

var xButtons = document.querySelectorAll(".xButton");

xButtons.forEach(function(xButton) {
    xButton.addEventListener("click", function() {
        var currentElement = this;

        // 부모 요소를 순회하며 DIV 태그를 찾기
        while (currentElement.parentElement != null && currentElement.parentElement.nodeName !== 'DIV') {
            currentElement = currentElement.parentElement;
        }

        if (currentElement.parentElement != null && currentElement.parentElement.nodeName === 'DIV') {
            currentElement.parentElement.style.visibility = "hidden";
        }
    });
});

// window.addEventListener("resize", function() {
//     let deviceHeight = (document.documentElement.clientWidth - (1200)) + px;
//     $(".wrapper").find("img").height(deviceWidth);
// }, false);

const envoyer = document.getElementById("envoyer");

envoyer.onclick = () => {
    alert("Dommage ! Vous êtes kidnappé(e) pour un trafic d'organ !");
}