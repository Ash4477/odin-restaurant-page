import { getHero, getMenu, getOffers, getServices } from "./pages";
import "./styles.css";

//TODO: ADD EVENT LISTENERS TO NAV BUTTONS
const pageLoader = function(){
    const parent = document.querySelector("#content");

    const renderHomePage = () => {
        parent.innerHTML = "";
        parent.appendChild(getHero);
        parent.appendChild(getServices(true));
        parent.appendChild(getMenu(3));
        parent.appendChild(getOffers);
    };
    const renderMenuPage = () => {
        parent.innerHTML = "";
        parent.appendChild(getMenu());
    };
    const renderOffersPage = () => {
        parent.innerHTML = "";
        parent.appendChild(getOffers);
    };
    const renderServicesPage = () => {
        parent.innerHTML = "";
        parent.appendChild(getServices());
    };

    // Adding event listeners to nav buttons
    document.querySelector("#home").addEventListener("click", renderHomePage);
    document.querySelector("#menu").addEventListener("click", renderMenuPage);
    document.querySelector("#offers").addEventListener("click", renderOffersPage);
    document.querySelector("#services").addEventListener("click", renderServicesPage);

    // Initially rendering home page
    renderHomePage();
}();