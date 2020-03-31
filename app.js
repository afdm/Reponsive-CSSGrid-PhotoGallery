function DetectTallImg() {
  const galleryImages = document.querySelectorAll(".gallery img");
  galleryImages.forEach(image => {
    if (image.height >= image.width * 1.3) {
      console.log("hell ya !", image.height);
      image.classList.add("tall");
    }
  });
}

DetectTallImg();
