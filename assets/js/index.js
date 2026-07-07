const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
let index = 0;

// دالة لتحديث حجم الصور
function updateSlides() {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("scale-110"); // تكبير الصورة الحالية
      slide.classList.remove("opacity-70"); 
    } else {
      slide.classList.remove("scale-110");
      slide.classList.add("opacity-70"); // باقي الصور تكون عادية
    }
  });
}

// أول تحديث عند التحميل
updateSlides();

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateSlides();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateSlides();
});
