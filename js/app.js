/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const sectionElement = document.getElementsByTagName("section");
const navbarMenu = document.getElementsByClassName("navbar__menu");
const sectionList = [];

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
window.onload = function () {
  navLink();
  activeNav();
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function navLink() {
  // const sections = document.querySelectorAll("section");
  for (const element of sectionElement) {
    const navName = element.dataset.nav;
    const itemSection = {};
    itemSection.id = element.id;
    itemSection.name = element.dataset.nav;
    itemSection.offsetTop=element.offsetTop;
    itemSection.itemElement=element;
    sectionList.push(itemSection);
  }
  const navListElement = document.getElementById("navbar__list");
  sectionList.map((item) => {
    let liElement = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", `#${item.id}`);
    linkElement.innerText = item.name;
    linkElement.className = "menu__link";
    liElement.setAttribute("id", item.id);
    liElement.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top: item.itemElement.offsetTop,
        behavior:"smooth",
      })
    });
    liElement.appendChild(linkElement);
    // console.log(liElement);
    navListElement.appendChild(liElement);
  });
}

// Add class 'active' to section when near top of viewport

function activeNav() {
  const sections = document.querySelectorAll("section");
  const navListLink = document.querySelectorAll(".menu__link");
//   console.log(navListLink);
  sections.forEach((section, index) => {
    const location = section.getBoundingClientRect();
    if (location.top <= 0 && location.bottom >= 350) {
      //add class your-active-class for section element
      section.classList.add("your-active-class");
      //add class active for menu_link
      navListLink[index].classList.add("active");
    } else {
      //remove class your-active-class for section element
      section.classList.remove("your-active-class");
      //remove class active for menu_link
      navListLink[index].classList.remove("active");
    }
  });
}
// Scroll to anchor ID using scrollTO event

document.addEventListener("scroll", function () {
  activeNav();
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// function scrollSmmoth(indexTo) {
//   const sections = document.querySelectorAll("section");
//   sections.forEach((section) => {
//     window.scrollTo({
//       top: section.offsetTop,
//       behavior: "smooth",
//     });
//   });
// }

// Set sections as active
//add class reponsive navbar
function responNav() {
//   console.log(navbarMenu[0]);
  navbarMenu[0].classList.toggle("active");
}

document.addEventListener("click", () => {
  responNav();
});
