const About = document.getElementById("about");
const Resume = document.getElementById("resume");
const Project = document.getElementById("project");
const Contact = document.getElementById("contact");
const ActiveAbout = document.getElementsByClassName("about");
const ActiveResume = document.getElementsByClassName("resume");
const ActiveProject = document.getElementsByClassName("project");
const ActiveContact = document.getElementsByClassName("contact");

About.addEventListener("click", openAbout);
Resume.addEventListener("click", openResume);
Project.addEventListener("click", openProject);
Contact.addEventListener("click", openContact);

function openResume() {
  Resume.classList.remove("hide");
  Resume.classList.add("active");
  About.classList.add("hide");
  About.classList.remove("active");
  Project.classList.add("hide");
  Project.classList.remove("active");
  Contact.classList.add("hide");
  Contact.classList.remove("active");
}

function openAbout() {
  About.classList.remove("hide");
  About.classList.add("active");
  Resume.classList.add("hide");
  Resume.classList.remove("active");
  Project.classList.add("hide");
  Project.classList.remove("active");
  Contact.classList.add("hide");
  Contact.classList.remove("active");
}
function openProject() {
  Project.classList.remove("hide");
  Project.classList.add("active");
  Resume.classList.add("hide");
  Resume.classList.remove("active");
  About.classList.add("hide");
  About.classList.remove("active");
  Contact.classList.add("hide");
  Contact.classList.remove("active");
}
function openContact() {
  Contact.classList.remove("hide");
  Contact.classList.add("active");
  Resume.classList.add("hide");
  Resume.classList.remove("active");
  Project.classList.add("hide");
  Project.classList.remove("active");
  About.classList.add("hide");
  About.classList.remove("active");
}
