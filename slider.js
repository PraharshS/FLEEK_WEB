$(".slider1").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(document).ready(function () {
  $(".slider2").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
$(".slider1 .card").hover(function (index1, value1) {
  $(this).css("opacity", "1");
  $(this).css("transform", "scale(1.05)");
  var current = this;
  $(".slider1 .card").each(function (index) {
    if (this !== current) {
      $(this).css("opacity", "0.7");
      $(this).css("transform", "scale(1)");
    }
  });
});
$(".slider2 .card").hover(function (index1, value1) {
  $(this).css("opacity", "1");
  $(this).css("transform", "scale(1.05)");
  var current = this;
  $(".slider2 .card").each(function (index) {
    if (this !== current) {
      $(this).css("opacity", "0.7");
      $(this).css("transform", "scale(1)");
    }
  });
});
