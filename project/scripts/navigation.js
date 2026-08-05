/*=================================================================
    FILE: navigation.js
    PURPOSE: Opens and closes the mobile navigation menu.
=================================================================*/

//HINT: This prepares the menu button and navigation links.
export function setupNavigation()
{
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#primary-navigation");

    //HINT: This stops the function if the page does not contain the menu.
    if (!menuButton || !navigation)
    {
        return;
    }

    //HINT: This opens or closes the navigation when the button is selected.
    menuButton.addEventListener("click", function ()
    {
        navigation.classList.toggle("open");

        const menuIsOpen = navigation.classList.contains("open");

        menuButton.setAttribute("aria-expanded", menuIsOpen);
    });
}
