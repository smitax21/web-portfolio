const About = document.getElementById("about");
const Resume = document.getElementById("resume");
const Project = document.getElementById("project");
const Contact = document.getElementById("contact");
const AboutActive = document.getElementsByClassName("about");
const AboutResume = document.getElementsByClassName("resume");
const AboutProject = document.getElementsByClassName("project");
const AboutContact = document.getElementsByClassName("contact");

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

  //   -----for current active--------
  ActiveAbout.classList.remove("active");
  ActiveResume.classList.add("active");
  ActiveProject.classList.remove("active");
  ActiveContact.classList.remove("active");
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

  //   -----for current active--------
  ActiveAbout.classList.add("active");
  ActiveResume.classList.remove("active");
  ActiveProject.classList.remove("active");
  ActiveContact.classList.remove("active");
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

  //   -----for current active--------
  ActiveAbout.classList.remove("active");
  ActiveResume.classList.remove("active");
  ActiveProject.classList.add("active");
  ActiveContact.classList.remove("active");
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

  //   -----for current active--------
  ActiveAbout.classList.remove("active");
  ActiveResume.classList.remove("active");
  ActiveProject.classList.remove("active");
  ActiveContact.classList.add("active");
}
