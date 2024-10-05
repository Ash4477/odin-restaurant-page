import landscape1 from "../images/discount-food/landscape-1.png";
import landscape2 from "../images/discount-food/landscape-2.png";
import landscape3 from "../images/discount-food/landscape-3.png";
import portrait1 from "../images/discount-food/portrait.png";
import portrait2 from "../images/discount-food//portrait-2.png";

const getOffers = function() {
    const offerImgs = [landscape1, portrait1, landscape2, portrait2, landscape3];
    const offersContainer = document.createElement("div");
    offersContainer.classList.add("offers-div");

    for (let i=0; i<5; i++) {
        const offerDiv = document.createElement("div");
        const offerImg =  document.createElement("img");
        offerImg.src = offerImgs[i];
        offerImg.setAttribute("alt", "discount offer");
        offerDiv.appendChild(offerImg);
        offerDiv.classList.add(`offer-${i+1}`);

        offersContainer.appendChild(offerDiv);
    }

    return offersContainer;
}();

export default getOffers;