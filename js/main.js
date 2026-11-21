const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", toggleMenu);

function toggleMenu() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

//first-slider

$(document).ready(function () {
	$(".slider-football").slick({
    infinite: false,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    prevArrow:
      '<button class="slider-control slider-control__prev" aria-label="Previous">←</button>',
    nextArrow:
      '<button class="slider-control slider-control__next" aria-label="Next">→</button>',
    appendArrows: ".slider-nav",
    appendDots: ".slider-nav",
    responsive: [
      {
        breakpoint: 481,
        settings: {
          dots: false,
        },
      },
    ],
  });
})

