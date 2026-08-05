/*=================================================================
    FILE: talks.js
    PURPOSE: Loads the General Conference talk data from JSON.
=================================================================*/

//HINT: This stores the talks after the JSON file loads.
let talks = [];

//HINT: This loads and returns the talk data.
export async function getTalkData()
{
    try
    {
        //HINT: This asks the browser to get the local JSON file.
        const response = await fetch("data/talks.json");

        //HINT: This changes the JSON response into JavaScript data.
        talks = await response.json();

        //HINT: This sends the completed talk list back to the page.
        return talks;
    }
    catch (error)
    {
        //HINT: This returns an empty list if the data cannot load.
        return [];
    }
}

//HINT: This finds one talk that matches the selected ID.
export function findTalk(talkId)
{
    return talks.find((talk) => talk.id === talkId);
}
