/*=================================================================
    FILE: talks-page.js
    PURPOSE: Displays conference messages selected from the Home page.
=================================================================*/

import { setupNavigation } from "./navigation.js";
import { getTalkData, findTalk } from "./talks.js";
import {
    isFavorite,
    isStudied,
    toggleFavorite,
    toggleStudied
} from "./storage.js";

//HINT: This prepares the mobile navigation menu.
setupNavigation();

//HINT: These connect JavaScript to the Study page.
const talksGrid = document.querySelector("#talks-grid");
const studyHeading = document.querySelector("#study-heading");
const studyIntroduction = document.querySelector("#study-introduction");
const resultsMessage = document.querySelector("#results-message");
const allMessagesLink = document.querySelector("#all-messages-link");
const talkDialog = document.querySelector("#talk-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeDialogButton = document.querySelector("#close-dialog");
const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

//HINT: This stores every talk after the JSON file loads.
let talks = [];

//HINT: These titles explain the six Home page choices.
const topicInformation = {
    peace: {
        heading: "Messages for Peace",
        introduction:
            "These messages offer spiritual calm during uncertainty, conflict, or worry."
    },
    hope: {
        heading: "Messages for Hope",
        introduction:
            "These messages remind us that hardship does not have the final word."
    },
    direction: {
        heading: "Messages for Direction",
        introduction:
            "These messages teach about prayer, revelation, and spiritual guidance."
    },
    change: {
        heading: "Messages about Change",
        introduction:
            "These messages teach that repentance and new beginnings are possible through Jesus Christ."
    },
    strength: {
        heading: "Messages for Strength",
        introduction:
            "These messages offer courage for trials and difficult seasons."
    },
    discipleship: {
        heading: "Messages about Following Christ",
        introduction:
            "These messages teach simple ways to love, serve, and live as a disciple."
    }
};

//HINT: These display the current year and last modified date.
currentYear.textContent = new Date().getFullYear();

lastModified.textContent =
    `Last modified: ${document.lastModified}`;

//HINT: This loads the JSON data when the page opens.
async function startPage()
{
    talks = await getTalkData();

    if (talks.length === 0)
    {
        talksGrid.innerHTML =
            "<p>Sorry, the study messages could not be loaded.</p>";

        resultsMessage.textContent =
            "No study messages are available.";

        return;
    }

    const parameters =
        new URLSearchParams(window.location.search);

    const selectedTopic =
        parameters.get("topic");

    let selectedTalks = talks;

    if (selectedTopic && topicInformation[selectedTopic])
    {
        selectedTalks = talks.filter(function (talk)
        {
            return talk.topic === selectedTopic ||
                talk.need === selectedTopic;
        });

        studyHeading.textContent =
            topicInformation[selectedTopic].heading;

        studyIntroduction.textContent =
            topicInformation[selectedTopic].introduction;

        allMessagesLink.hidden = false;
    }

    displayTalks(selectedTalks);
}

//HINT: This displays one card for every selected talk.
function displayTalks(talkList)
{
    talksGrid.innerHTML = "";

    if (talkList.length === 0)
    {
        talksGrid.innerHTML =
            "<p>No messages were found for this topic.</p>";

        resultsMessage.textContent =
            "No study messages found.";

        return;
    }

    talkList.forEach(function (talk)
    {
        let favoriteText = "Save Favorite";
        let studiedText = "Mark Studied";

        if (isFavorite(talk.id))
        {
            favoriteText = "Remove Favorite";
        }

        if (isStudied(talk.id))
        {
            studiedText = "Studied ✓";
        }

        talksGrid.innerHTML += `
            <article class="talk-card">

                <p class="talk-need">
                    ${talk.question}
                </p>

                <h3>
                    ${talk.truth}
                </h3>

                <p class="talk-summary">
                    ${talk.summary}
                </p>

                <div class="talk-source">

                    <p>
                        <strong>${talk.title}</strong>
                    </p>

                    <p>
                        ${talk.speaker}
                    </p>

                    <p>
                        ${talk.conference}
                    </p>

                </div>

                <div class="talk-actions">

                    <button class="details-button"
                        type="button"
                        data-id="${talk.id}">
                        Why This Matters
                    </button>

                    <button class="favorite-button"
                        type="button"
                        data-id="${talk.id}">
                        ${favoriteText}
                    </button>

                    <button class="studied-button"
                        type="button"
                        data-id="${talk.id}">
                        ${studiedText}
                    </button>

                </div>

            </article>
        `;
    });

    resultsMessage.textContent =
        `${talkList.length} study messages shown.`;

    addButtonEvents();
}

//HINT: This opens the modal for the selected message.
function openDialog(talkId)
{
    const talk = findTalk(talkId);

    if (!talk)
    {
        return;
    }

    dialogContent.innerHTML = `
        <p class="eyebrow">
            ${talk.question}
        </p>

        <h2>
            ${talk.truth}
        </h2>

        <section class="dialog-section">

            <h3>
                The 30-Second Message
            </h3>

            <p>
                ${talk.summary}
            </p>

        </section>

        <section class="dialog-section">

            <h3>
                Live It Today
            </h3>

            <p>
                ${talk.application}
            </p>

        </section>

        <section class="dialog-section">

            <h3>
                Supporting Scripture
            </h3>

            <p>
                ${talk.scripture}
            </p>

        </section>

        <section class="dialog-section">

            <h3>
                Conference Message
            </h3>

            <p>
                <strong>${talk.title}</strong>
            </p>

            <p>
                ${talk.speaker}
            </p>

            <p>
                ${talk.conference}
            </p>

            <a class="button primary-button full-talk-link"
                href="${talk.url}"
                target="_blank"
                rel="noopener">
                Read the Full Conference Talk
            </a>

        </section>
    `;

    talkDialog.showModal();
}

//HINT: This connects each card button to its action.
function addButtonEvents()
{
    const detailsButtons =
        document.querySelectorAll(".details-button");

    const favoriteButtons =
        document.querySelectorAll(".favorite-button");

    const studiedButtons =
        document.querySelectorAll(".studied-button");

    detailsButtons.forEach(function (button)
    {
        button.addEventListener("click", function ()
        {
            const talkId =
                Number(button.dataset.id);

            openDialog(talkId);
        });
    });

    favoriteButtons.forEach(function (button)
    {
        button.addEventListener("click", function ()
        {
            const talkId =
                Number(button.dataset.id);

            toggleFavorite(talkId);
            startPage();
        });
    });

    studiedButtons.forEach(function (button)
    {
        button.addEventListener("click", function ()
        {
            const talkId =
                Number(button.dataset.id);

            toggleStudied(talkId);
            startPage();
        });
    });
}

//HINT: This closes the modal.
closeDialogButton.addEventListener("click", function ()
{
    talkDialog.close();
});

//HINT: This begins loading the page.
startPage();
