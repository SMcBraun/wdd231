/*=================================================================
    FILE: thanks.js
    PURPOSE: Displays the submitted recommendation form values.
=================================================================*/

import { setupNavigation } from "./navigation.js";

//HINT: This prepares the mobile navigation menu.
setupNavigation();

//HINT: These connect JavaScript to the confirmation page.
const formResults = document.querySelector("#form-results");
const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

//HINT: This gets the submitted form values from the page URL.
const parameters = new URLSearchParams(window.location.search);

const name = parameters.get("name");
const email = parameters.get("email");
const talk = parameters.get("talk");
const speaker = parameters.get("speaker");
const conference = parameters.get("conference");
const topic = parameters.get("topic");
const reason = parameters.get("reason");

//HINT: This displays the submitted form values on the page.
formResults.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Talk:</strong> ${talk}</p>
    <p><strong>Speaker:</strong> ${speaker}</p>
    <p><strong>Conference:</strong> ${conference}</p>
    <p><strong>Topic:</strong> ${topic}</p>
    <p><strong>Why It Stayed with You:</strong> ${reason}</p>
`;

//HINT: These display the year and last modified date.
currentYear.textContent = new Date().getFullYear();

lastModified.textContent =
    `Last modified: ${document.lastModified}`;
