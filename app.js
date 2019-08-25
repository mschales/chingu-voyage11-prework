const getNavLinks = document.getElementById("menu").querySelectorAll("a");
const about = document.getElementById("about");
const header = document.getElementById("header");
let curHash = '';

setupNavItemsListeners();

function setupNavItemsListeners() {
  getNavLinks.forEach(navItem => {
    navItem.addEventListener("click", e => {
      clearActiveNavItems();
      e.target.parentElement.classList.add("active");
    });
  });
}

function lookNavItem() {
  getNavLinks.forEach(navItem => {
    if (navItem.hash.length <= 0) return;    
    let gethash = navItem.hash.substr(1, (navItem.hash.length));
    let distanceCheck = (document.getElementById(gethash).offsetTop - 96);
    if ( window.scrollY > distanceCheck) {
        clearActiveNavItems();
        navItem.parentElement.classList.add('active');
    }
  });
}

function clearActiveNavItems() {
  getNavLinks.forEach(navItem => {
    navItem.parentElement.classList.remove("active");
  });
}

document.addEventListener("scroll", () => {
    lookNavItem();
});
