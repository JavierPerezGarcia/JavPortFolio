//Navbar elements

const navAbout = document.querySelector(".nav-about");
const navEducation = document.querySelector(".nav-education");
const navSkills = document.querySelector(".nav-skills");
const navHobbies = document.querySelector(".nav-hobbies");
const navProjects = document.querySelector(".nav-projects");
const navContact = document.querySelector(".nav-contact");

//Cards elements

const about = document.querySelector(".card-about-me");
const education = document.querySelector(".card-education");
const skills = document.querySelector(".card-skills");
const hobbies = document.querySelector(".card-hobbies");
const projects = document.querySelector(".card-projects");
const contact = document.querySelector(".card-contact");
const logo = document.querySelector(".card-logo");

//a tags elements

const mail = document.querySelector(".email");
const linked = document.querySelector(".linkedin");
const github = document.querySelector(".github");

navAbout.addEventListener("click", openCardAbout);
navEducation.addEventListener("click", openCardEducation);
navSkills.addEventListener("click", openCardSkills);
navHobbies.addEventListener("click", openCardHobbies)
navProjects.addEventListener("click", openCardProjects);
navContact.addEventListener("click", openCardContact);

mail.addEventListener("click", openCardContact);
linked.addEventListener("click", openCardContact);
github.addEventListener("click", openCardContact);

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
  /* verifyActive(); */
}

function openCardSkills() {
  skills.classList.toggle('active');
}

function openCardHobbies() {
  hobbies.classList.toggle('active');
}

function openCardProjects() {
  projects.classList.toggle('active');
}

function openCardContact() {
  contact.classList.toggle('active');
}

function openCardLogo() {
  logo.classList.toggle('active');
}