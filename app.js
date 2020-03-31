function DetectTallImg() {
  const galleryImages = document.querySelectorAll(".gallery img");
  galleryImages.forEach(image => {
    if (image.height >= 0.8 * (1 + image.width)) {
      console.log("hell ya !", image.height);
      image.classList.add("tall");
    }
  });
}

DetectTallImg();
