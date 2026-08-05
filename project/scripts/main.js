import { setupNavigation } from "./navigation.js";
import { getFavorites, getStudied } from "./storage.js";

setupNavigation();

const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");
const totalCount = document.querySelector("#total-count");
const studiedCount = document.querySelector("#studied-count");
const favoriteCount = document.querySelector("#favorite-count");
const progressPercent = document.querySelector("#progress-percent");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = `Last modified: ${document.lastModified}`;
}

const favorites = getFavorites();
const studied = getStudied();
const totalTruths = 15;
const completedPercent = Math.round((studied.length / totalTruths) * 100);

if (totalCount) {
    totalCount.textContent = totalTruths;
}

if (studiedCount) {
    studiedCount.textContent = studied.length;
}

if (favoriteCount) {
    favoriteCount.textContent = favorites.length;
}

if (progressPercent) {
    progressPercent.textContent = `${completedPercent}%`;
}
