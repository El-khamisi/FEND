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
 * Define Global Variables
 * 
 */

var navList = document.querySelector("#navbar__list");
var sections = document.querySelectorAll("section");
var flag = 1;

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

let handler = (className) => {
    let elements = document.querySelectorAll(`.${className}`);
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", (e) => {
            e.preventDefault();
            scrolling(i);
        });
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildNav() {
    let frg = new DocumentFragment();
    sections.forEach((sec) => {
        let li = document.createElement("li");
        let name = sec.getAttribute("data-nav");
        li.innerHTML = `<a class="menu__link">${name}</a>`;
        frg.appendChild(li);
    });
    navList.appendChild(frg);
}

// Add class 'active' to section when near top of viewport
setInterval(() => {
    if (!flag) {
        let act = 1;
        let menuActive = document.querySelectorAll(".menu__link");
        for (let i = 0; i < sections.length; i++) {
            let bounds = sections[i].getBoundingClientRect();

            if (bounds.bottom >= 300 && bounds.top <= (window.innerHeight || html.clientHeight) && act) {
                sections[i].classList.add("your-active-class");
                menuActive[i].classList.add("menu__link__active");
                act = 0;
            } else {
                sections[i].classList.remove("your-active-class");
                menuActive[i].classList.remove("menu__link__active");
            }
        }
    }
    flag = 1;
}, 500);

// Scroll to anchor ID using scrollTO event
function scrolling(elementNo) {
    let scrollOptions = {
        lef: 0,
        top: sections[elementNo].offsetHeight * elementNo,
        behavior: "smooth"
    };
    window.scrollTo(scrollOptions);
}
/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
buildNav();

// Scroll to section on link click
handler("menu__link");

// Set sections as active
document.addEventListener("scroll", () => {
    flag = 0;
});