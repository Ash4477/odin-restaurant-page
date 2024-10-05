import burgerImg from "../images/food/burger.png";
import cookiesImg from "../images/food/cookies.png";
import chickenImg from "../images/food/chicken.png";
import mayoChickenImg from "../images/food/mayoburger.png";
import noodleImg from "../images/food/noodle-lomein.png";
import padThaiImg from "../images/food/pad-thai.png";
import pizzaImg from "../images/food/pizaa.png";
import shwarmaImg from "../images/food/shawarma.png";
import tacosImg from "../images/food/tacos.png";

const getMenu = function(itemsCount) {
    const menuItems = [
        {
            name: 'Classic Beef Patty',
            price: 4.40,
            ratings: 230,
            image: mayoChickenImg,
        },
        {
            name: 'Homemade Cookies',
            price: 2.20,
            ratings: 130,
            image: cookiesImg,
        },
        {
            name: 'Lo Mein Noodles',
            price: 3.20,
            ratings: 223,
            image: noodleImg,
        },
        {
            name: 'Pad Thai Noodles',
            price: 4.20,
            ratings: 130,
            image: padThaiImg,
        },
        {
            name: 'Pepperoni Pizza',
            price: 5.20,
            ratings: 112,
            image: pizzaImg,
        },
        {
            name: 'Beef Shawarma',
            price: 4.40,
            ratings: 140,
            image: shwarmaImg,
        },
        {
            name: 'Classic Cheese Burger',
            price: 4.40,
            ratings: 230,
            image: burgerImg,
        },
        {
            name: 'Soft Chicken Tacos',
            price: 3.40,
            ratings: 111,
            image: tacosImg,
        },
        {
            name: 'Priginal Fried Chicken',
            price: 4.30,
            ratings: 211,
            image: chickenImg
        },
    ]

    const bestItems = [
        {
            name: 'Classic Beef Patty',
            image: mayoChickenImg,
        },
        {
            name: 'Priginal Fried Chicken',
            image: chickenImg
        },
        {
            name: 'Beef Shawarma',
            image: shwarmaImg,
        },
    ];

    const renderBestItems = () => {
        const bestItemsDiv = document.createElement("div");
        bestItemsDiv.classList.add("best-items");

        const bestItemsHeader = document.createElement("div");
        const bestItemText1 = document.createElement("h2");
        bestItemText1.innerHTML = "Best <span class='highlight'>Delivered</span> Categories";
        const bestItemText2 = document.createElement("p");
        bestItemText2.innerHTML = "<p class='highlight'>Ready to eat?</p> Take a look at our top choices and order now!";
        bestItemsHeader.appendChild(bestItemText1);
        bestItemsHeader.appendChild(bestItemText2);
        bestItemsHeader.classList.add("best-items-header");

        const bestItemsBox = document.createElement("div");
        bestItemsBox.classList.add("best-items-box");
        const bestItemCards = [document.createElement("div"), document.createElement("div"), document.createElement("div")];
        bestItemCards.forEach((item, i) => {
            const img = document.createElement("img");
            img.src = bestItems[i].image;
            const text = document.createElement("h3");
            text.textContent = bestItems[i].name;
            const orderText = document.createElement("p");
            orderText.textContent = "Order Now";

            item.appendChild(img);
            item.appendChild(text);
            item.appendChild(orderText);
            bestItemsBox.appendChild(item);
        });

        bestItemsDiv.appendChild(bestItemsHeader);
        bestItemsDiv.appendChild(bestItemsBox);
        return bestItemsDiv;
    };

    const renderMenu = () => {
        const menuItemsDiv = document.createElement("div");

        const menuItemsHeader = document.createElement("div");
        const menuItemText1 = document.createElement("h2");
        menuItemText1.innerHTML = "Our <span class='highlight'>Regular</span> Menu";
        const menuItemText2 = document.createElement("p");
        menuItemText2.innerHTML = "<p class='highlight'>Check out</p> our full menu and order now!";
        menuItemsHeader.appendChild(menuItemText1);
        menuItemsHeader.appendChild(menuItemText2);
        menuItemsHeader.classList.add("menu-items-header");

        const menuItemsBox = document.createElement("div");
        menuItemsBox.classList.add("menu-items-box");

        for (let i=0; i<menuItems.length; i++) {
            if (itemsCount) {
                if (i === itemsCount) break;
            }

            const menuItemCard = document.createElement("div");
            menuItemCard.classList.add("menu-card");
            const itemImgDiv = document.createElement("div");
            const itemImg = document.createElement("img");
            itemImg.src = menuItems[i].image;
            itemImgDiv.appendChild(itemImg);
            const itemName = document.createElement("h3");
            itemName.textContent = menuItems[i].name;

            const div = document.createElement("div");
            const itemPrice = document.createElement("p");
            itemPrice.textContent = `$ ${menuItems[i].price}`;
            const buyNowBtn = document.createElement("button");
            buyNowBtn.textContent = "Buy Now";
            div.appendChild(itemPrice);
            div.appendChild(buyNowBtn);

            menuItemCard.appendChild(itemImgDiv);
            menuItemCard.appendChild(itemName);
            menuItemCard.appendChild(div);
            menuItemsBox.appendChild(menuItemCard);
        }

        menuItemsDiv.appendChild(menuItemsHeader);
        menuItemsDiv.appendChild(menuItemsBox);
        return menuItemsDiv;
    };

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-div");

    
    menuContainer.appendChild(renderBestItems());
    menuContainer.appendChild(renderMenu());
    return menuContainer;
};

export default getMenu;