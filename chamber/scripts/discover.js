/*===============================================================
    FILE: discover.js
    PURPOSE: Displays the Waianae Discover cards and visit message.
=================================================================*/

import { discoverPlaces } from "../data/discover.mjs";

/*--------------- DISCOVER CARD CONTAINER ---------------*/

const discoverCards = document.querySelector("#discover-cards");

/*--------------- CREATE DISCOVER CARDS ---------------*/

discoverPlaces.forEach((place) => {
    const card = document.createElement("article");
    card.classList.add("discover-card");

    const heading = document.createElement("h2");
    heading.textContent = place.name;

    const image = document.createElement("img");
    image.src = `images/${place.image}`;
    image.alt = `View of ${place.name}`;
    image.loading = "lazy";
    image.width = 300;
    image.height = 200;

    const address = document.createElement("address");
    address.textContent = place.address;

    const description = document.createElement("p");
    description.textContent = place.description;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Learn More";
    button.setAttribute(
        "aria-label",
        `Learn more about ${place.name}`
    );

    card.appendChild(heading);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    discoverCards.appendChild(card);
});

/*--------------- VISIT MESSAGE ---------------*/

const visitMessage = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";
} else {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    const daysSinceLastVisit = Math.floor(
        (currentVisit - Number(lastVisit)) / millisecondsPerDay
    );

    if (daysSinceLastVisit < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent =
            `You last visited ${daysSinceLastVisit} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);
