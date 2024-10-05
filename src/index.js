import { getHero } from "./pages";
import "./styles.css";

//TODO: ADD EVENT LISTENERS TO NAV BUTTONS
const pageLoader = function(){
    const parent = document.querySelector("#content");

    parent.appendChild(getHero);
}();