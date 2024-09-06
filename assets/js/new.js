
  let carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleAutoplaying'), {
    interval: 3000, // Adjust interval time in milliseconds (3000 = 3 seconds)
    wrap: true, // Whether the carousel should cycle continuously or have hard stops
    pause: 'hover' // Pauses the cycling of the carousel on mouseenter and resumes on mouseleave
  });


  
  document.addEventListener('DOMContentLoaded', function () {
      const slider = document.querySelector('.product-sliding-row');
      const scrollAmount = 1; // Change this to adjust the scroll speed
      const delay = 10; // Delay in milliseconds
  
      function autoScroll() {
          slider.scrollLeft += scrollAmount;
  
          // If we've scrolled to the end, reset to start
          if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
              slider.scrollLeft = 0;
          }
      }
  
      setInterval(autoScroll, delay);
  });
  
  

