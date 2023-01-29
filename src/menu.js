import eggURL from "./images/Chilled-egg.jpg";
import lobsterURL from "./images/Lobster.jpg";
import riceURL from "./images/friedrice.jpg";
import pastaURL from "./images/pasta.jpg";

export default function pageLoad() {
  // menu content
  const menusDiv = document.createElement("div");
  menusDiv.setAttribute("id", "menus");
  for (let index = 0; index < menuList.length; index++) {
    const menuData = menuList[index];
    const h2 = document.createElement("h2");

    h2.textContent = menuData.name;
    const menuDishesDiv = createDishesDOM(menuData);

    menusDiv.appendChild(h2);
    menusDiv.appendChild(menuDishesDiv);
  }
  menusDiv.classList.add("menu");
  menusDiv.classList.add("main");
  return menusDiv;
}

function createDishesDOM(menuData) {
  const dishesDiv = document.createElement("div");
  for (let index = 0; index < menuData.dishes.length; index++) {
    const dish = menuData.dishes[index];
    const img = new Image();
    const nameH3 = document.createElement("h3");
    const desc = document.createElement("p");
    img.src = dish.imgURL;
    nameH3.textContent = dish.name;
    desc.textContent = dish.description;

    const dishTextDiv = document.createElement("div");
    dishTextDiv.appendChild(nameH3);
    dishTextDiv.appendChild(desc);

    const dishDiv = document.createElement("div");
    dishDiv.classList.add("dish");
    dishDiv.appendChild(img);
    dishDiv.appendChild(dishTextDiv);

    dishesDiv.appendChild(dishDiv);
  }
  return dishesDiv;
}

// Class
class Menu {
  constructor(name, dishes) {
    this.name = name;
    this.dishes = dishes;
  }
}
class Dish {
  constructor(name, imgURL, description) {
    this.name = name;
    this.imgURL = imgURL;
    this.description = description;
  }
}

// Data
const dimSumDishes = [];
const egg = new Dish(
  "Chilled Preserved Egg Jelly With Sour Ginger",
  eggURL,
  "Chilled Preserved Egg Jelly With Sour Ginger"
);
const lobster = new Dish(
  "Combination of Pan-Seared Lobster With Almond Cream Accompanied With Pan-Seared Foie Gras And Pomelo",
  lobsterURL,
  `Combination of Pan-Seared Lobster With Almond Cream Accompanied With Pan-Seared Foie Gras And Pomelo`
);
dimSumDishes.push(lobster);
dimSumDishes.push(egg);

const mainDishes = [];
const rice = new Dish(
  "Kai Garden Signature Fried Rice",
  riceURL,
  `Chef Fung's expertise shines through in his Signature Fried Rice, an explosion of colours, textures and flavours, with each grain of rice and ingredients evenly cooked and imbued with just the right amount of "wok hei" for the perfect taste and texture.`
);
const pasta = new Dish(
  "Stir-Fried Angel Hair Pasta with Seafood in Black Truffle Sauce",
  pastaURL,
  `The simplest dish can often give the best enjoyment; with the rich flavors and aroma of the prized black truffle showcased to its full glory in this angel hair pasta, and beautifully cooked seafood adding freshness to the dish.`
);
mainDishes.push(rice);
mainDishes.push(pasta);

const dimSumMenu = new Menu("Dim Sum", dimSumDishes);
const mainsMenu = new Menu("Mains/Soups", mainDishes);
const menuList = [];
menuList.push(dimSumMenu);
menuList.push(mainsMenu);
