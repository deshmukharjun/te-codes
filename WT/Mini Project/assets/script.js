document.addEventListener('DOMContentLoaded', () => {
    const heroCarouselSlide = document.querySelector('.carousel-slide');
    const heroCarouselImages = document.querySelectorAll('.carousel-slide img');
    const heroPrevBtn = document.querySelector('.carousel-controls .prev');
    const heroNextBtn = document.querySelector('.carousel-controls .next');
    const heroPaginationDots = document.querySelectorAll('.carousel-pagination span');
  
    let heroCurrentIndex = 0;
    const heroTotalSlides = heroCarouselImages.length;
  
    // Update the carousel position and pagination dot
    function updateHeroCarousel() {
      // Move the carousel by updating the translateX percentage
      heroCarouselSlide.style.transform = `translateX(-${heroCurrentIndex * 100}%)`;
  
      // Debugging: Log the current index
      console.log(`Current Index: ${heroCurrentIndex}`);
  
      // Loop through pagination dots and set the active one
      heroPaginationDots.forEach((dot, index) => {
        dot.classList.remove('active'); // Remove the active class from all dots
        if (index === heroCurrentIndex) {
          dot.classList.add('active'); // Add the active class to the current dot
        }
      });
  
      // Debugging: Log the current active dot
      const activeDot = document.querySelector('.carousel-pagination .active');
      console.log('Active Dot:', activeDot);
    }
  
    // Move to the next slide
    heroNextBtn.addEventListener('click', () => {
      heroCurrentIndex = (heroCurrentIndex + 1) % heroTotalSlides; // Loop to the first slide if necessary
      updateHeroCarousel();
    });
  
    // Move to the previous slide
    heroPrevBtn.addEventListener('click', () => {
      heroCurrentIndex = (heroCurrentIndex - 1 + heroTotalSlides) % heroTotalSlides; // Loop to the last slide if necessary
      updateHeroCarousel();
    });
  
    // Click event for pagination dots
    heroPaginationDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        heroCurrentIndex = index; // Set the current index to the clicked dot index
        updateHeroCarousel();
      });
    });
  
    // Initial update for the Hero Carousel
    updateHeroCarousel();
  });
  