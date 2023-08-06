$(document).ready(function () {
  const gallery = $(".gallery");
  const images = gallery.find("img");
  const arrowLeft = $(".arrow-left");
  const arrowRight = $(".arrow-right");
  let currentIndex = 0;
  const imagesToShow = 3; // Change this number to adjust the number of images shown by default
  const imageWidth = 300; // Change this to your desired image width, make sure it matches the CSS width
  const gap = 20; // Change this to adjust the gap between images, make sure it matches the CSS margin-right

  function showImage(index) {
    images.each(function (i) {
      let position = i - index;
      let offset = imagesToShow - 1 - position;
      let translateX = offset * (imageWidth + gap);
      $(this).css("transform", `translateX(${translateX}px)`);
    });
  }

  function updateGallery() {
    const width = $(window).width();
    const numImagesToShow = width < 768 ? 1 : imagesToShow;
    showImage(currentIndex);
  }

  arrowLeft.on("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
  });

  arrowRight.on("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  });

  // Initial setup
  updateGallery();

  // Re-adjust gallery on window resize
  $(window).on("resize", updateGallery);
});
