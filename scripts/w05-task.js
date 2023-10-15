/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
var templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        var templeArticle = document.createElement("article");

        var templeH3 = document.createElement("h3");
        templeH3.textContent = temple.templeName;

        var templeImg = document.createElement("img");
        templeImg.setAttribute("src", temple.imageUrl);
        templeImg.setAttribute("alt", temple.location);

        templeArticle.appendChild(templeH3);
        templeArticle.appendChild(templeImg);

        templesElement.appendChild(templeArticle)

    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (!response.ok) {
            throw new Error("No network, check your internet try again");
        }
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);
        console.log(templeList);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

/* reset Function */
function reset() {
    document.getElementById("temples").innerHTML = "";
}

/* sortBy Function */
function sortBy(temples) {
    reset();
    const filter = document.querySelector("#sortBy").value;

    switch (filter){
        case "utah":
            const filteredUtah = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(filteredUtah);
            break;

        case "notutah":
            const filteredNotUtah = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples(filteredNotUtah);
            break;

        case "older":
            const filteredOld = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            console.log(filteredOld);
            displayTemples(filteredOld);
            break;

        case "all":
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
});