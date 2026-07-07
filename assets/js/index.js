const slider = document.getElementById("slider");
  const images = slider.children.length;
  let index = 0;

  document.getElementById("next").addEventListener("click", () => {
    if (index < images - 1) {
      index++;
    } else {
      index = 0;
    }
    slider.style.transform = `translateX(-${index * 100}%)`;
  });

  document.getElementById("prev").addEventListener("click", () => {
    if (index > 0) {
      index--;
    } else {
      index = images - 1;
    }
    slider.style.transform = `translateX(-${index * 100}%)`;
  });