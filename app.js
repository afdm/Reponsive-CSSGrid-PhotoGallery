function DetectTallImg() {
  const galleryImages = document.querySelectorAll(".gallery img");
  galleryImages.forEach(image => {
    if (image.height > image.width * 1.3) {
      image.classList.add("tall");
    } else if (image.height < image.width * 1.3) {
      image.classList.add("wide");
    }
  });
}

DetectTallImg();
