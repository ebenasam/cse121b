/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Ebenezer N. Y. Asamoah",
    photo : "images/my_img.png",
    favoriteFoods : [
        "Rice and tomatoe source",
        "Fufu and light soup",
        "Boiled plantain and kontomere stew",
        "Banku and okro stew",
        "Mix-fruit drink",
    ],

    hobbies: [
        "Going to the gym",
        "Football",
        "Watching TV",
        "Listening to music",
        "Reading"

    ],

    placesLived : [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "Takoradi, Western Ghana",
    length: "25 years"
},
{
    place: "Sefwi-Juaboso, Western Ghans",
    length: "2 years",
},
{
    place: "Asankrangwa, Ghana",
    length: "15 years",
}
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) =>{
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
}
);

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
}
);

/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement("dt");
    placesLivedPlace.textContent = placeLived.place;
  
    let placesLivedLength = document.createElement("dd");
    placesLivedLength.textContent = placeLived.length;
  
    document.querySelector("#places-lived").appendChild(placesLivedPlace);
    document.querySelector("#places-lived").appendChild(placesLivedLength);
  }
  );

