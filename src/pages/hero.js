import heroBurgerImg from "../images/food/burger.png";
import burgerIcon from "../images/icon/mascot-nobg.png";

const getHero = function() {
    const heroTitle = document.createElement("h1");
    heroTitle.textContent = "From Classic Fast Food to Authentic Local Dishes";
    heroTitle.classList.add("hero-title");

    const heroImg  = document.createElement("img");
    heroImg.src = heroBurgerImg;
    heroImg.setAttribute("alt", "burger");
    heroImg.classList.add("hero-img");

    const subHeroSpan = document.createElement("span");
    const subHeroTitle = document.createElement("p");
    const subHeroImg = document.createElement("img");
    subHeroTitle.textContent = "Quick Bites, Authentic Delights. Ready to Serve with a Click!";
    subHeroImg.setAttribute("src", burgerIcon);
    subHeroImg.setAttribute("alt", "burger icon");
    subHeroSpan.appendChild(subHeroImg);
    subHeroSpan.appendChild(subHeroTitle);
    subHeroSpan.classList.add("hero-span");

    const buttonsSpan = document.createElement("span");
    const buyBtn = document.createElement("button");
    buyBtn.textContent = "Buy Now";

    const howToOrderSpan = document.createElement("span");
    const howToOrderBtn = document.createElement("button");
    const howToOrderText = document.createElement("p");

    howToOrderBtn.innerHTML = "play";
    howToOrderText.textContent = "How to Order";
    howToOrderSpan.appendChild(howToOrderBtn);
    howToOrderSpan.appendChild(howToOrderText);

    buttonsSpan.appendChild(buyBtn);
    buttonsSpan.appendChild(howToOrderSpan);
    buttonsSpan.classList.add("buttons-span");


    const heroContainer = document.createElement("div");
    heroContainer.appendChild(heroTitle);
    heroContainer.appendChild(heroImg);
    heroContainer.appendChild(subHeroSpan);
    heroContainer.appendChild(buttonsSpan);
    heroContainer.classList.add("hero-container");

    return heroContainer;
}();

export default getHero;