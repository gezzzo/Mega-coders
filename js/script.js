// function setZoom(percentage) {
//   document.body.style.zoom = percentage + "%";
// }

// Set the zoom level to 67%
document.addEventListener("DOMContentLoaded", function () {
  const owlCarousels = document.querySelectorAll(".owl-carousel");

  owlCarousels.forEach(function (carousel) {
    $(carousel).owlCarousel({
      loop: false,
      margin: 10,
      dots: true,
      nav: false,
      autoplay: true, // Enable autoplay
      autoplayTimeout: 5000, // Set autoplay interval in milliseconds (5 seconds in this example)
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
  });
});

// setZoom(88);
// Function to increase the number to 300 when hovered over

function increaseNumber(element) {
  element.textContent = "300"; // Change the text content to "300"
  element.style.fontSize = "24px"; // Set the font size to your desired size
}
