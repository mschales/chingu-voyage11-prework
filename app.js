const getNavLinks = document.getElementById("menu").querySelectorAll("a");
const about = document.getElementById("about");
const header = document.getElementById("header");
let curHash = '';
let offsetValue = 180;
let scrollOffset = 48;
let ulSelector = document.querySelector('ul');

setupNavItemsListeners();


function setScrollOffset() {
    if (window.screen.width > 1300) {
        scrollOffset = 128;
    }

    else if (window.screen.width < 1300 && window.screen.width > 960) {
      scrollOffset = 98;      
    }
}

function setupNavItemsListeners() {
  getNavLinks.forEach(navItem => {

    navItem.parentElement.addEventListener('click', () => {
      if (window.screen.width <= 800) {
        getNavLinks.forEach(navItem => {
          navItem.parentElement.classList.remove("active");
        });
        document.getElementById('home').classList.remove('mobile-menu');
      }
    })

    navItem.addEventListener("click", e => {
      clearActiveNavItems();
      let gethash = e.target.hash.substr(1, (e.target.hash.length));

    ulSelector.style.display = 'none';
    ulSelector.style.visibility = "hidden";
    ulSelector.classList.remove("active");
      
      setScrollOffset();
      smoothScroll(gethash);
      e.preventDefault();
    })
  })
}

function lookNavItem() {
  getNavLinks.forEach(navItem => {
    if (navItem.hash.length <= 0) return;    
    let gethash = navItem.hash.substr(1, (navItem.hash.length));
    let distanceCheck = (document.getElementById(gethash).offsetTop - offsetValue);
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

function smoothScroll (domToScroll) {{

  window.scrollTo({
     top: document.getElementById(domToScroll).getBoundingClientRect().top + window.pageYOffset - scrollOffset, 
    behavior: 'smooth' });
}}

document.addEventListener("scroll", () => {
    lookNavItem();
});


document.querySelector('.mobile-menu-button').addEventListener('click', () => {
  if (ulSelector.classList.contains("active")) {
    ulSelector.classList.remove("active");
    ulSelector.style.display = 'none';
    ulSelector.style.visibility = "hidden"; 
  }
  
  else {
    ulSelector.style.visibility = "visible"; 
    ulSelector.style.display = 'block';
    ulSelector.classList.add("active");
  }
});

window.addEventListener('resize', () => {
  if (window.screen.width > 800) {
    ulSelector.style.visibility = "visible"; 
    ulSelector.style.display = 'block';
  }
});

