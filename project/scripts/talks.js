/*=================================================================
    *FILE: talks.js
    *PURPOSE: Loads the General Conference talk data from JSON.*
=================================================================*/

//HINT: This code makes a place to hold all my talks.
let talks = [];

//HINT: This code gets my talk information; 
// async lets this function wait for information that take time to load, 
// and export lets another file use it.

export async function getTalkData()
{
    //HINT : TRY tells the program to try getting my talks.
    try
    {
        //HINT: "Fetch" gets my talks from the  JSON file;
        // "await" waits until the talks are ready.
        const response = await fetch("data/talks.json");



        //HINT: This code  changes the talk information so
        // JavaScript can understand it.
        talks = await response.json();

        //HINT: This code sends all the talk info to the page
        return talks;
    }
    //HINT: If the talks dont load, "catch" handles the problem 
    //so the page does not stop working.
    catch (error)
    {
        //HINT: This  code  tells the page there are no talks to show.
        return [];
    }
}

//HINT: This code finds the one talk the person chose.
export function findTalk(talkId)
{
    return talks.find((talk) => talk.id === talkId);
    
}


//OPERATIONS SCOPE: Make a place for my talks → get my talks → wait for them →
// make them understandable → send them to the page → handle a problem 
// → find the talk the person chose.