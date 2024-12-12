console.log("main.js loaded");


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-In Animation on Scroll
const fadeInElements = document.querySelectorAll('.cta, section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

fadeInElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 1s, transform 1s';
    observer.observe(el);
});


// Basic Slider Functionality for Photography and Videography
// Select necessary elements
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('#photography-slider .slides');
    const slides = Array.from(slider.children);
    const totalSlides = slides.length;
  
    // Clone first and last slides for infinite effect
    const firstSlide = slides[0].cloneNode(true);
    const lastSlide = slides[totalSlides - 1].cloneNode(true);
    slider.appendChild(firstSlide); // Add first slide to the end
    slider.insertBefore(lastSlide, slides[0]); // Add last slide to the start
  
    let currentIndex = 1; // Start at first actual slide
    const slideInterval = 5000; // Time between slides (5 seconds)
    const transitionDuration = 2; // Transition time (2 seconds)
  
    // Set initial position and transition
    slider.style.transition = `transform ${transitionDuration}s ease-in-out`;
    slider.style.transform = `translateX(-${currentIndex * 300}px)`; // 300px width per image
  
    function moveSlider() {
      currentIndex++;
      slider.style.transform = `translateX(-${currentIndex * 300}px)`;
  
      // Reset position to start seamlessly after the last slide
      if (currentIndex === totalSlides + 1) {
        setTimeout(() => {
          slider.style.transition = 'none'; // Disable transition
          currentIndex = 1; // Reset to the first original slide
          slider.style.transform = `translateX(-${currentIndex * 300}px)`;
          setTimeout(() => {
            slider.style.transition = `transform ${transitionDuration}s ease-in-out`; // Re-enable transition
          }, 50);
        }, transitionDuration * 1000);
      }
    }
  
    // Auto-slide logic
    setInterval(moveSlider, slideInterval);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".video-slider .slides");
    const circles = document.querySelectorAll(".buttons .circle");
    const videos = slider.querySelectorAll("video"); // All video elements
    const totalVideos = videos.length; // Total number of videos
    const videoWidthPercentage = 100 / totalVideos; // Percentage width per video

    // Set the width of the slider dynamically based on the number of videos
    slider.style.width = `${totalVideos * 100}%`;

    circles.forEach((circle, index) => {
        circle.addEventListener("click", () => {
            // Calculate the correct position to move the slider
            const translateX = -(index * videoWidthPercentage);
            slider.style.transform = `translateX(${translateX}%)`;

            // Set a slower transition speed
            slider.style.transition = "transform 0.8s ease-in-out";

            // Update active button
            circles.forEach((btn) => btn.classList.remove("active"));
            circle.classList.add("active");
        });
    });

    // Set the first button as active by default
    circles[0].classList.add("active");
});


// Color-Grading Hover Effect
const colorGradingSlider = document.querySelector('.color-grading-slider');
const ungraded = colorGradingSlider.querySelector('.ungraded');
const graded = colorGradingSlider.querySelector('.graded');

colorGradingSlider.addEventListener('mouseenter', () => {
    ungraded.style.display = 'none';
    graded.style.display = 'block';
});

colorGradingSlider.addEventListener('mouseleave', () => {
    ungraded.style.display = 'block';
    graded.style.display = 'none';
});


  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeBtn = document.querySelector(".lightbox .close");
  const images = document.querySelectorAll(".grid-wrapper .image img");

  images.forEach(img => {
      img.addEventListener("click", () => {
          lightbox.style.display = "flex";
          lightboxImage.src = img.src;
      });
  });

  closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
      if (e.target !== lightboxImage) {
          lightbox.style.display = "none";
      }
  });

  // Filtering functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const imagesWrapper = document.querySelectorAll(".grid-wrapper .image");

  filterButtons.forEach(button => {
      button.addEventListener("click", () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove("active"));
          // Add active class to the clicked button
          button.classList.add("active");

          const filter = button.getAttribute("data-filter");

          imagesWrapper.forEach(image => {
              if (filter === "*" || image.classList.contains(filter.substring(1))) {
                  image.style.display = "block";
              } else {
                  image.style.display = "none";
              }
          });
      });
  });

