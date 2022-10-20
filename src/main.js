//Navbar elements

/* const navAbout = document.querySelector(".nav-about");
const navEducation = document.querySelector(".nav-education");
const navSkills = document.querySelector(".nav-skills");
const navHobbies = document.querySelector(".nav-hobbies");
const navProjects = document.querySelector(".nav-projects");
const navContact = document.querySelector(".nav-contact"); */

//Reverse about photo

//const front = document.querySelector(".card-front");
//const back = document.querySelector(".card-back");

//Cards elements

const about = document.querySelector(".card-about-me");
const education = document.querySelector(".card-education");
const skills = document.querySelector(".card-skills");
const hobbies = document.querySelector(".card-hobbies");
const projects = document.querySelector(".card-projects");
const contact = document.querySelector(".card-contact");
const logo = document.querySelector(".card-logo");
const mode = document.querySelector(".card-color-mode");

//a tags elements

const mail = document.querySelector(".email");
const linked = document.querySelector(".linkedin");
const github = document.querySelector(".github");

//Click events

//front.addEventListener("click", rotate);

/* navAbout.addEventListener("click", openCardAbout);
navEducation.addEventListener("click", openCardEducation);
navSkills.addEventListener("click", openCardSkills);
navHobbies.addEventListener("click", openCardHobbies)
navProjects.addEventListener("click", openCardProjects);
navContact.addEventListener("click", openCardContact); */

/* about.addEventListener("click", activeNavAbout);
education.addEventListener("click", activeNavEducation);
skills.addEventListener("click", activeNavSkills);
hobbies.addEventListener("click", activeNavHobbies);
projects.addEventListener("click", activeNavProjects);
contact.addEventListener("click", activeNavContact); */

mail.addEventListener("click", openCardContact);
linked.addEventListener("click", openCardContact);
github.addEventListener("click", openCardContact);

const cards = document.querySelectorAll('.card');
const horCards = document.querySelectorAll('.card-hor');
/* const navs = document.querySelectorAll('.nav'); */

cards.forEach(card => card.addEventListener('click', transition));
horCards.forEach(c => c.addEventListener('click', horTransition));

function transition() {
  this.classList.toggle('active');
}

function horTransition() {
  this.classList.toggle('active-horizontal');
}

//Function for rotate the about photo

//function rotate() {
//this.classList.toggle('active2');
//}

//Functions for flip the cards

function activeNavAbout() {
  navAbout.classList.toggle('active');
}

function activeNavEducation() {
  navEducation.classList.toggle('active');
}

function activeNavSkills() {
  navSkills.classList.toggle('active');
}

function activeNavHobbies() {
  navHobbies.classList.toggle('active');
}

function activeNavProjects() {

  navProjects.classList.toggle('active');
}

function activeNavContact() {
  navContact.classList.toggle('active');
}


function openCardAbout() {
  about.classList.toggle('active');
  navAbout.classList.toggle('active');
}

function openCardEducation() {
  education.classList.toggle('active');
  navEducation.classList.toggle('active');
  //verifyActive();
}

function openCardSkills() {
  skills.classList.toggle('active');
  navSkills.classList.toggle('active');
}

function openCardHobbies() {
  hobbies.classList.toggle('active');
  navHobbies.classList.toggle('active');
}

function openCardProjects() {
  projects.classList.toggle('active');
  navProjects.classList.toggle('active');
}

function openCardContact() {
  contact.classList.toggle('active');
  navContact.classList.toggle('active');
}

function openCardLogo() {
  logo.classList.toggle('active');
}

/* function openCardMode() {
  mode.classList.toggle('active-horizontal');
} */