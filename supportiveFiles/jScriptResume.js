"use strict";
let identification = "";
let navIdentification = "";
let arrayOfNavID = [
  "#AboutMe",
  "#Objective",
  "#Skills",
  "#Experience",
  "#Education",
  "#Certificates",
];
let arrayOfNavClass = [
  ".first_item",
  ".second_item",
  ".third_item",
  ".fourth_item",
  ".fifth_item",
  ".sixth_item",
];

const emphasisGateScore = function (identification) {
  console.log(identification);

  if (identification) {
    document.querySelector(".Backdrop").style.display = "block";
    document.querySelector(identification).style.display = "block";

    document.querySelector(".Backdrop").addEventListener("click", function () {
      document.querySelector(".Backdrop").style.display = "none";
      document.querySelector(identification).style.display = "none";
    });

    document
      .querySelector(identification)
      .addEventListener("click", function () {
        document.querySelector(".Backdrop").style.display = "none";
        document.querySelector(identification).style.display = "none";
      });
  }
};

const emphasisBox = function (navIdentification) {
  if (navIdentification) {
    document.querySelector(".main-header").style.position = "static";

    document.querySelector(navIdentification).style.boxShadow =
      "2px 2px 20px 12px rgb(0, 29, 0)";
    document.querySelector(navIdentification).style.transition = "1s";
    document.querySelector(`${navIdentification} h2`).style.textDecoration =
      "underline rgb(0, 29, 0)";
    if (navIdentification !== "#AboutMe") {
      if (window.matchMedia("(min-width:32rem)").matches)
        document.querySelector(`${navIdentification} h2`).style.paddingLeft =
          "42%";
      else
        document.querySelector(`${navIdentification} h2`).style.paddingLeft =
          "30%";
      document.querySelector(`${navIdentification} h2`).style.transition = "1s";
    }

    if (navIdentification === "#Certificates") {
      const allLinks = document.querySelectorAll(`${navIdentification} a`);
      for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].style.color = "green";
        allLinks[i].style.textDecoration = "underline green";
        allLinks[i].style.transition = "1s";
      }
    }

    document.addEventListener("wheel", function () {
      if (
        document.querySelector(".Backdrop").style.display === "none" ||
        document.querySelector(".Backdrop").style.display === ""
      ) {
        document.querySelector(".main-header").style.position = "fixed";
        document.querySelector(navIdentification).style.boxShadow =
          "2px 2px 20px 2px rgb(2, 2, 83)";
        document.querySelector(`${navIdentification} h2`).style.textDecoration =
          "none";
        if (navIdentification !== "#AboutMe")
          document.querySelector(`${navIdentification} h2`).style.paddingLeft =
            "0vw";

        if (navIdentification === "#Certificates") {
          const allLinks = document.querySelectorAll(`${navIdentification} a`);
          for (let i = 0; i < allLinks.length; i++) {
            allLinks[i].style.color = "rgb(1, 1, 59)";
            allLinks[i].style.textDecoration = "none";
          }
        }
      }
    });
  }
};

for (let i = 1; i <= 6; i++) {
  document.querySelector(`.gsc${i}`).addEventListener("click", function () {
    emphasisGateScore(`#GSC${i}`);
  });
}

for (let i = 0; i < arrayOfNavID.length; i++) {
  document
    .querySelector(arrayOfNavClass[i])
    .addEventListener("click", function () {
      emphasisBox(arrayOfNavID[i]);
    });
}

document.querySelector(".allow").addEventListener("click", function () {
  emphasisGateScore("#request");
});
