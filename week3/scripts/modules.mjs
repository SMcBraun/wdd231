/*------------------------------------------
*File: modules.js
*Purpose: main controller for the application.
*
*This file connects all of the module files together.
*It imports the course data, section functions, and output
*functions, then responds to the button clicks and starts the 
*program when the page loads.
*-------------------------------------------*/


/*--------- Get Course Information  ------------*/

// Gets the course information from course.mjs so this file can access
//the course information and change student enrollment.
import byuiCourse from "./course.mjs";


//Gets the function that fills the section drop down menu.
import { setSectionSelection } from "./sections.mjs";


//Gets the functions that display the course information on the webapge.
import { setTitle, renderSections } from "./output.mjs";


/*---------------Enroll Student Button--- -----------*/

//Waits for a click on the Enroll student botton.
document.querySelector("#enrollStudent").addEventListener("click", function () {

    //Gets the selected section number and changes it into a number.
    const sectionNum = Number(
        document.querySelector("#sectionNumber").value
    );

    //Add one student to the selected section
    byuiCourse.changeEnrollment(sectionNum);

    //Displays the updated enrollment information on the page.
    renderSections(byuiCourse.sections);

});


/*--------------- Drop Student Button  -----------*/

//Listens for a click on the Drop Student button.
document.querySelector("#dropStudent").addEventListener("click", function () {

    //Gets the selected section number and changes it into a number.
    const sectionNum = Number(
        document.querySelector("#sectionNumber").value
    );

    //Removes one student from the selected section.
    //The false value tells changeEnrollment to substract instead of add.
    byuiCourse.changeEnrollment(sectionNum, false);

    //Display the updated enrollment information on the page.
    renderSections(byuiCourse.sections);
});


/*--------------- Start the application ------ -----------*/

//Displays the course name and course code.
setTitle(byuiCourse);

//Adds the available course sections to the drop-down menu.
setSectionSelection(byuiCourse.sections);

//Displays the section information when the page first laods.
renderSections(byuiCourse.sections);



