const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
  console.log(1);
  document.querySelector(".heroSection").style.visibility = "hidden";
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
  document.querySelector(".heroSection").style.visibility = "visible";
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

// document.querySelector(".buttons").addEventListener("click", (e) => {
//   document.querySelector(".buttons").style.display = "none";
// });
AOS.init();

//remove multiple attributes from element
//https://stackoverflow.com/a/50541881
Element.prototype.removeAttributes = function (...attrs) {
  attrs.forEach((attr) => this.removeAttribute(attr));
};

//round to 2 decimal places
//https://stackoverflow.com/a/11832950
function r(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

//remove svg whitespace
function svgRemoveWhitespace(svg) {
  let box = svg.getBBox(),
    viewBox = [r(box.x), r(box.y), r(box.width), r(box.height)].join(" ");

  svg.setAttribute("viewBox", viewBox);
  svg.removeAttributes("width", "height"); //optional
}

const svgs = document.querySelectorAll("svg");
svgs.forEach((svg) => svgRemoveWhitespace(svg));

var image_tracker = "1";

function change() {
  var image = document.getElementById("circle");
  if (image_tracker == "1") {
    image.src = "./assets/2.png";
    image_tracker = "2";
  } else if (image_tracker == "2") {
    image.src = "./assets/3.png";
    image_tracker = "3";
  } else if (image_tracker == "3") {
    image.src = "./assets/4.png";
    image_tracker = "4";
  } else if (image_tracker == "4") {
    image.src = "./assets/5.png";
    image_tracker = "5";
  } else if (image_tracker == "5") {
    image.src = "./assets/6.png";
    image_tracker = "6";
  } else if (image_tracker == "6") {
    image.src = "./assets/7.png";
    image_tracker = "7";
  } else if (image_tracker == "7") {
    image.src = "./assets/8.png";
    image_tracker = "8";
  } else if (image_tracker == "8") {
    image.src = "./assets/9.png";
    image_tracker = "9";
  } else if (image_tracker == "9") {
    image.src = "./assets/10.png";
    image_tracker = "10";
  } else if (image_tracker == "10") {
    image.src = "./assets/11.png";
    image_tracker = "11";
  } else if (image_tracker == "11") {
    image.src = "./assets/12.png";
    image_tracker = "12";
  } else if (image_tracker == "12") {
    image.src = "./assets/13.png";
    image_tracker = "13";
  } else if (image_tracker == "13") {
    image.src = "./assets/14.png";
    image_tracker = "14";
  } else if (image_tracker == "14") {
    image.src = "./assets/15.png";
    image_tracker = "15";
  } else if (image_tracker == "15") {
    image.src = "./assets/16.png";
    image_tracker = "16";
  } else if (image_tracker == "16") {
    image.src = "./assets/17.png";
    image_tracker = "17";
  } else if (image_tracker == "17") {
    image.src = "./assets/1.png";
    image_tracker = "1";
  }
}

var timer = setInterval("change();", 1000);
