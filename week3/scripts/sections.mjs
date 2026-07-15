/*------------------------------------------------------------------
*File: sections.mjs
*Purpose: Fills the section selection menu.
*This file creates the section choices that appear in the drop-down
*list for the user to select.
*-------------------------------------------------------------------*/


/*------------------------BUILD SECTION MENU-------------------------------*/


//Create the section number sin the drop down menu.
export function setSectionSelection(sections) {

    // Finds the section drop-down list on the  webpage.
    const sectionSelect = document.querySelector("#sectionNumber");

    //Goes thru each course section.
    sections.forEach((section) => {

        // Creates a new option in the drop-down menu.
        const option = document.createElement("option");

        // Sets the value of the option.
        option.value = section.sectionNumber;

        // Displays the section number to the user.
        option.textContent = `${section.sectionNumber}`;

        // Adds the option to the drop-down menu.
        sectionSelect.appendChild(option);
    });

}


