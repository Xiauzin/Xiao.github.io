var myImage = document.querySelector("#main-image");
var resetButton = document.querySelector("#reset-button");
var skillsList = document.querySelector("#skills-list");

var skills = ["JavaScript", "CSS", "HTML"];

skills.forEach(function (skill) {
  var listItem = document.createElement("li");
  listItem.textContent = skill;
  skillsList.appendChild(listItem);
});

var position = 0;
var imageSlided = false;

myImage.onclick = function () {
  if (!imageSlided) {
    position = 250;
    myImage.style.transform = "translateX(" + position + "px)";
    imageSlided = true;
  }
};

resetButton.onclick = function () {
  position = 0;
  myImage.style.transform = "translateX(0px)";
  imageSlided = false;
};

function setUserName() {
  var userName = prompt("¿Cómo te llamas?");
  if (userName !== null && userName.trim() !== "") {
    localStorage.setItem("name", userName);
    document.querySelector("#main-heading").innerHTML = "¡Hola, " + userName + "!";
  }
}

if (localStorage.getItem("name")) {
  var storedName = localStorage.getItem("name");
  document.querySelector("#main-heading").innerHTML = "¡Hola, " + storedName + "!";
}

document.querySelector("button").onclick = function () {
  setUserName();
};
