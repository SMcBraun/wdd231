/*=================================================================
    FILE: storage.js
    PURPOSE: Saves and retrieves favorite and studied talk IDs.
=================================================================*/

//HINT: These names identify the two lists saved in local storage.
const FAVORITES_KEY = "conferenceFavorites";
const STUDIED_KEY = "conferenceStudied";

//HINT: This gets the saved favorite talk IDs.
export function getFavorites() {
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);

    if (savedFavorites) {
        return JSON.parse(savedFavorites);
    }

    return [];
}

//HINT: This gets the saved studied talk IDs.
export function getStudied() {
    const savedStudied = localStorage.getItem(STUDIED_KEY);

    if (savedStudied) {
        return JSON.parse(savedStudied);
    }

    return [];
}

//HINT: This checks whether one talk is already saved as a favorite.
export function isFavorite(talkId) {
    const favorites = getFavorites();

    return favorites.includes(talkId);
}

//HINT: This checks whether one talk is already marked as studied.
export function isStudied(talkId) {
    const studied = getStudied();

    return studied.includes(talkId);
}

//HINT: This adds or removes one talk from the favorite list.
export function toggleFavorite(talkId) {
    let favorites = getFavorites();

    if (favorites.includes(talkId)) {
        favorites = favorites.filter(removeFavorite);

        function removeFavorite(id) {
            return id !== talkId;
        }
    }
    else {
        favorites.push(talkId);
    }

    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(favorites)
    );
}

//HINT: This adds or removes one talk from the studied list.
export function toggleStudied(talkId) {
    let studied = getStudied();

    if (studied.includes(talkId)) {
        studied = studied.filter(removeStudied);

        function removeStudied(id) {
            return id !== talkId;
        }
    }
    else {
        studied.push(talkId);
    }

    localStorage.setItem(
        STUDIED_KEY,
        JSON.stringify(studied)
    );
}
