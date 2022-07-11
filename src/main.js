//Navbar elements

const navAbout = document.querySelector(".nav-about");
const navEducation = document.querySelector(".nav-education");
const navSkills = document.querySelector(".nav-skills");
const navHobbies = document.querySelector(".nav-hobbies");
const navSettings = document.querySelector(".nav-settings");
const navContact = document.querySelector(".nav-contact");

//Cards elements

const about = document.querySelector(".card-about-me");
const education = document.querySelector(".card-education");
const skills = document.querySelector(".card-skills");
const hobbies = document.querySelector(".card-hobbies");
const settings = document.querySelector(".card-settings");
const contact = document.querySelector(".card-contact");

navAbout.addEventListener("click", openCardAbout);
navEducation.addEventListener("click", openCardEducation);
navSkills.addEventListener("click", openCardSkills);
navHobbies.addEventListener("click", openCardHobbies)
navSettings.addEventListener("click", openCardSettings);
navContact.addEventListener("click", openCardContact);


const cards = document.querySelectorAll('.card');

cards.forEach(card => card.addEventListener('click', transition));

function transition() {
  this.classList.toggle('active');
}



//Functions for flip the cards

function openCardAbout() {
  about.classList.toggle('active');
}

function openCardEducation() {
  education.classList.toggle('active');
}

function openCardSkills() {
  skills.classList.toggle('active');
}

function openCardHobbies() {
  hobbies.classList.toggle('active');
}

function openCardSettings() {
  settings.classList.toggle('active');
}

function openCardContact() {
  contact.classList.toggle('active');
}