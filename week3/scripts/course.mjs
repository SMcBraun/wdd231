/*-------------------------------------------------------------------
*File:course.mjs
*Purpose: Stores the course information and manages student enrollment
*This file is responsible for the course data only. It does not dispaly
*anything on the webpage.
*-------------------------------------------------------------------*/

/*-------------------Course Information---------------------------*/


//Stores the course name,c ourse code and all section data.
const byuiCourse = {
    code: "WDD231",
    name: "Web Frontend Development I",
    sections: [
        {
            sectionNumber: 1,
            enrolled: 88,
            instructor: "Brother Bingham",
        },
        {
            sectionNumber: 2,
            enrolled: 81,
            instructor: "Sister Shultz",
        },
        {
            sectionNumber: 3,
            enrolled: 95,
            instructor: "Sister Smith",
        },
    ],


    /*-------------------Change Student Enrollment--------------------------*/


    //Adds or removes one student from the selected section.  The "Add" value defaults
    //to true unless false is sent.
    changeEnrollment: function (sectionNumber, add = true) {




        // Finds the section with the given section number.
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNumber == sectionNumber
        );



        //If the section exists, update the enrollment.
        if (sectionIndex >= 0) {

            //Add one student.  
            if (add) {
                this.sections[sectionIndex].enrolled++;
            }


            //Remove one student.
            else {
                this.sections[sectionIndex].enrolled--;
            }
        }
    },
};


/*------------------- Share course information--------------------------*/

//Makes the course information avaiable to other module files.
export default byuiCourse;
