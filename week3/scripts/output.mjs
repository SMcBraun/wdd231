/*------------------------------------------------------------------
*File: output.mjs
*Purpose: Displays course information on the webpage.
*This file is responsible for the showing the course title
*and the section information to the user.
*-------------------------------------------------------------------*/

/*------------------------DISPLAY COURSE TITLE -------------------------------*/

// Displays the course name and course code on the webpage.
export function setTitle(course) {

    // Shows the course name.
    document.querySelector("#courseName").textContent = course.name;


    // Shows the course code.
    document.querySelector("#courseCode").textContent = course.code;
}


/*------------------------DISPLAY COURSE SECTIONS-------------------------------*/

// Displays all course sections in the table.

export function renderSections(sections) {

    //Builds one table row for each course section.
    const html = sections.map(
        (section) => `<tr>
    <td>${section.sectionNumber}</td>
    <td>${section.enrolled}</td>
    <td>${section.instructor}</td>
    </tr>`
    );


    // Places all table rows inside the table body.
    document.querySelector("#sections").innerHTML = html.join("");
}

