const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelectorAll(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle[0].setAttribute("aria-label", "Close navigation menu.");
  document.querySelector(".heroSection").style.visibility = "hidden";
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle[0].setAttribute("aria-label", "Open navigation menu.");
  document.querySelector(".heroSection").style.visibility = "visible";
}

navbarToggle[0].addEventListener("click", () => {
  console.log("click");
  if (navbar.classList.contains("opened")) {
    console.log("close");
    closeMobileNavbar();
  } else {
    console.log("open");
    openMobileNavbar();
  }
});
function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle[1].setAttribute("aria-label", "Close navigation menu.");
  document.querySelector(".heroSection").style.visibility = "hidden";
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle[1].setAttribute("aria-label", "Open navigation menu.");
  document.querySelector(".heroSection").style.visibility = "visible";
}

navbarToggle[1].addEventListener("click", () => {
  console.log("click");
  if (navbar.classList.contains("opened")) {
    console.log("close");
    closeMobileNavbar();
  } else {
    console.log("open");
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelectorAll(".navbar-menu");
const navbarLinksContainer1 = navbar.querySelector(".navbar-links");

navbarLinksContainer1.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu[0].addEventListener("click", closeMobileNavbar);

const navbarLinksContainer2 = navbar[1].querySelector(".navbar-links");

navbarLinksContainer2.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu[1].addEventListener("click", closeMobileNavbar);

AOS.init();

Element.prototype.removeAttributes = function (...attrs) {
  attrs.forEach((attr) => this.removeAttribute(attr));
};

function r(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function svgRemoveWhitespace(svg) {
  let box = svg.getBBox(),
    viewBox = [r(box.x), r(box.y), r(box.width), r(box.height)].join(" ");

  svg.setAttribute("viewBox", viewBox);
  svg.removeAttributes("width", "height");
}

const svgs = document.querySelectorAll("svg");
svgs.forEach((svg) => svgRemoveWhitespace(svg));
