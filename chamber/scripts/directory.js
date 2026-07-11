/* --------------- DIRECTORY ELEMENTS ---------------*/


const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const hamburgerButton = document.querySelector("#ham-btn");
const navigation = document.querySelector("#nav-bar");


/* --------------- GET MEMBER DATA---------------*/

async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Member data could not be loaded. ");
        }


        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error(error);


        membersContainer.innerHTML =
            "<p>Member information is currently unavailable.</p>";
    }
}

/* --------------- MEMBERSHIP LEVELS -----------------*/


function getMembershipLevel(level) {
    if (level === 3) {
        return "Gold Member";
    }

    if (level === 2) {
        return "Silver Member";
    }

    return "Nonprofit Member";
}

/* ---------- DISPLAY MEMBERS ---------- */



function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" 
            alt="${member.name} logo"
            width="100"
            height="100"
            loading="lazy"
            >

            
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank" rel="noopener">
            Visit Website
            </a>

            <p>${member.description}</p>
            <p>Membership Level: ${getMembershipLevel(member.membership)}</p>
        `;


        membersContainer.appendChild(card);
    });
}



/* --------------- GRID AND LIST BUTTONS  ------------- */


gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});


/* --------------- MOBILE NAVIGATION ---------------*/

hamburgerButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburgerButton.classList.toggle("open");


    const menuIsOpen = navigation.classList.contains("open");

    hamburgerButton.setAttribute(
        "aria-label",
        menuIsOpen ? "Close navigation menu" : "Open navigation menu"

    );

});

/* --------------- START DIRECTORY --------------- */

getMembers();

