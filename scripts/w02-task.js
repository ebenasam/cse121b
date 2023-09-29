/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Ebenezer Nana Yaw Asamoah";
let currentYear = new Date().getFullYear();
let profilePicture = "images/my_img.png";



/* Step 3 - Element Variables */
let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");

const imageElement = document.querySelector("#home picture img");
/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;


imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile picture of ${fullName}`);

/* Step 5 - Array */
let favFood = ["Rice and tomatoe source"," Fufu and light soup"," Boiled plantain and kontomere stew"];
let anotherFavFood = " Banku and okro stew.";

favFood.push(anotherFavFood);

foodElement.innerHTML = `<br> ${favFood}`
favFood.shift();

foodElement.innerHTML += `<br> ${favFood}`
favFood.pop();

foodElement.innerHTML += `<br> ${favFood}`

