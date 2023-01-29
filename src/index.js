import "./style.css";
import homeLoad from "./home";
import menuLoad from "./menu";
import contactLoad from "./contact";

// User interface
const content = document.getElementById("content");
const headerDiv = document.createElement("div");
const footerP = document.createElement("a");
headerDiv.setAttribute("id", "content-header");
footerP.setAttribute("id", "content-footer");
const tagSpan = document.createElement("span");
const h1 = document.createElement("h1");
const homeLink = document.createElement("a");
const menuLink = document.createElement("a");
const contactLink = document.createElement("a");

footerP.textContent = "RESERVATION";
footerP.href = "";
h1.textContent = "Kai Garden Restaurant";
homeLink.textContent = "Home".toUpperCase();
homeLink.href = "";
menuLink.textContent = "Menu".toUpperCase();
menuLink.href = "";
contactLink.textContent = "Contact".toUpperCase();
contactLink.href = "";

tagSpan.appendChild(homeLink);
tagSpan.appendChild(menuLink);
tagSpan.appendChild(contactLink);

headerDiv.appendChild(h1);
headerDiv.appendChild(tagSpan);
content.appendChild(headerDiv);
content.appendChild(footerP);

content.appendChild(homeLoad())

// Listeners
homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  homeLink.classList.add("active");
  menuLink.classList.remove("active");
  contactLink.classList.remove("active");
  removeContentFirstDiv();
  content.appendChild(homeLoad());
});
menuLink.addEventListener("click", (e) => {
  e.preventDefault();
  menuLink.classList.add("active");
  homeLink.classList.remove("active");
  contactLink.classList.remove("active");
  removeContentFirstDiv();
  content.appendChild(menuLoad());
});
contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  contactLink.classList.add("active");
  menuLink.classList.remove("active");
  homeLink.classList.remove("active");
  removeContentFirstDiv();
  content.appendChild(contactLoad());
});

// Normal functions
function removeContentFirstDiv() {
  const div = document.querySelector("#content > div.main");
  if (div) {
    content.removeChild(div);
  }
}

