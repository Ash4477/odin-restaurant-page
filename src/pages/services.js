const getServices = function(home=false) {
    const servicesList = [
        ["Speedy Delivery", "Get your meal hot and fresh at your doorstep within 1-2 hours, guaranteed."],
        ["Always Fresh", "We take pride in delivering food that’s 100% fresh, straight from our kitchen to your table - never stale, always delicious."],
        ["Free Delivery", "Enjoy your favorite dishes with zero delivery fees. Just order, relax, and savor the flavor!"],
    ]

    const servicesContainer = document.createElement("div");
    servicesContainer.classList.add("services-div");
    if (home) servicesContainer.classList.add("services-home");
    
    const servicesUl = document.createElement("ul");

    servicesList.forEach((item) => {
        const listHeader = document.createElement("h2");
        const listText = document.createElement("p");

        listHeader.textContent = item[0];
        listText.textContent = item[1];

        const listItem = document.createElement("li");
        listItem.appendChild(listHeader);
        listItem.appendChild(listText);

        servicesUl.appendChild(listItem);
    });

    servicesContainer.appendChild(servicesUl);
    return servicesContainer;
};

export default getServices;