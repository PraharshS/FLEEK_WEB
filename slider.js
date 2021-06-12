$(document).ready(function () {
  $(".slider1").slick({
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    adaptiveHeight: true,
    variableWidth: true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerMode: true,
          centerPadding: 0,
          pauseOnHover: false,
          pauseOnFocus: false,
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          centerMode: true,
          centerPadding: 0,
          pauseOnHover: false,
          pauseOnFocus: false,
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          pauseOnHover: false,
          pauseOnFocus: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          pauseOnHover: false,
          pauseOnFocus: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".slider2").slick({
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerMode: true,
          centerPadding: 0,
          pauseOnHover: false,
          pauseOnFocus: false,
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          centerMode: true,
          centerPadding: 0,
          pauseOnHover: false,
          pauseOnFocus: false,
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          pauseOnHover: false,
          pauseOnFocus: false,
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          pauseOnHover: false,
          pauseOnFocus: false,
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  });
});
// $(".slider1 .card").hover(function (index1, value1) {
//   $(this).css("opacity", "1");
//   $(this).css("transform", "scale(1.05)");
//   var current = this;
//   $(".slider1 .card").each(function (index) {
//     if (this !== current) {
//       $(this).css("opacity", "0.9");
//       $(this).css("transform", "scale(1)");
//     }
//   });
// });
// $(".slider2 .card").hover(function (index1, value1) {
//   $(this).css("opacity", "1");
//   $(this).css("transform", "scale(1.05)");
//   var current = this;
//   $(".slider2 .card").each(function (index) {
//     if (this !== current) {
//       $(this).css("opacity", "0.9");
//       $(this).css("transform", "scale(1)");
//     }
//   });
// });
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
    image.src = "./assets/people8.png";
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
