/* ------------------ COPYRIGHT YEAR --------------- */

const currentYear = document.querySelector("#currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}




/* --------------- LAST MODIFIED YEAR --------------- */

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
}
