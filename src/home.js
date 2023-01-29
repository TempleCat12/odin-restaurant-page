import homeURL from "./images/home.jpg";
// const contentDiv = document.getElementById('content')
export default function pageLoad() {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  console.log("hello");
  const img = new Image();
  const p = document.createElement("p");
  console.log("home.js");

  h2.textContent = "Kai Garden Restaurant";
  img.src = homeURL;
  p.innerHTML = `Welcome to Kai Garden, Singapore’s leading Cantonese fine dining restaurant owned and helmed by renowned award-winning Group Executive Chef Fung Chi Keung.

  <br><br>Located at Marina Square's new retail wing, the Chinese restaurant has an elegantly eye-pleasing and comfortable ambience and seats up to 200 diners.
  
  <br><br>Reminiscent of the opulent palaces of ancient China, our antique Chinese fan logo symbolises status and taste, while encompassing profound Chinese cultural characteristics.
  
  <br><br>This concept is brought forth in our exquisite Chinese Cantonese food and dim sum, which are delivered with the signature twists of highly acclaimed Chef Fung, while still remaining true to the rich heritage of Cantonese cuisine.
  
  <br><br>The fan’s diamond-like shimmer also reflects our continuous pursuit of quality in both the food we serve as well as our service to customers.`;
  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(p);
  div.classList.add("home");
  div.classList.add("main");
  return div;
}
