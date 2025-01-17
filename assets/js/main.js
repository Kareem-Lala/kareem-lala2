/**
* Template Name: Personal
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Updated: Nov 04 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */

  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }


  /**
   * Contact form
   */
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const resultSection = document.getElementById('result-section');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Collecting form data
      const name = document.getElementById('name').value.trim();
      const surname = document.getElementById('surname').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const address = document.getElementById('address').value.trim();
      const attr1 = parseFloat(document.getElementById('attr1').value) || 0;
      const attr2 = parseFloat(document.getElementById('attr2').value) || 0;
      const attr3 = parseFloat(document.getElementById('attr3').value) || 0;
      const attr4 = parseFloat(document.getElementById('attr4').value) || 0;
      const attr5 = parseFloat(document.getElementById('attr5').value) || 0;
  
      // Calculate the average of attributes
      const numericAttributes = [attr1, attr2, attr3, attr4, attr5];
      const average = numericAttributes.reduce((sum, val) => sum + val, 0) / numericAttributes.length;
  
      // Determine the average color
      let averageColor = 'green'; // Default color
      if (average < 10) {
        averageColor = 'red';
      } else if (average < 20) {
        averageColor = 'orange';
      }
  
      const headingColor = 'darkblue';  // Color for headings
      const paragraphColor = 'darkgray'; // Color for paragraphs

      // Display the result in the result-section
      resultSection.innerHTML = `
        <h4 style="color: ${headingColor};">Submitted Information:</h4>
        <p style="color: ${paragraphColor};"><strong>Name:</strong> ${name}</p>
        <p style="color: ${paragraphColor};"><strong>Surname:</strong> ${surname}</p>
        <p style="color: ${paragraphColor};"><strong>Email:</strong> ${email}</p>
        <p style="color: ${paragraphColor};"><strong>Phone:</strong> ${phone}</p>
        <p style="color: ${paragraphColor};"><strong>Address:</strong> ${address}</p>
        <p style="color: ${paragraphColor};"><strong>Attribute 1:</strong> ${attr1}</p>
        <p style="color: ${paragraphColor};"><strong>Attribute 2:</strong> ${attr2}</p>
        <p style="color: ${paragraphColor};"><strong>Attribute 3:</strong> ${attr3}</p>
        <p style="color: ${paragraphColor};"><strong>Attribute 4:</strong> ${attr4}</p>
        <p style="color: ${paragraphColor};"><strong>Attribute 5:</strong> ${attr5}</p>
        <p style="color: ${paragraphColor};"><strong>Average:</strong> 
          <span style="color: ${averageColor}; font-weight: bold;">${average.toFixed(2)}</span>
        </p>
      `;
  
      // Log data to console (optional for debugging)
      console.log({
        name,
        surname,
        email,
        phone,
        address,
        attr1,
        attr2,
        attr3,
        attr4,
        attr5,
        average,
      });
    });
  });
  

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });
  
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  document.body.classList.add(`${currentTheme}-mode`);

  themeToggleBtn.addEventListener('click', () => {
      if (document.body.classList.contains('light-mode')) {
          document.body.classList.replace('light-mode', 'dark-mode');
          localStorage.setItem('theme', 'dark');
      } else {
          document.body.classList.replace('dark-mode', 'light-mode');
          localStorage.setItem('theme', 'light');
      }
  });
});
  
  // Function to get the current time and format it
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    
    // Display the time in the clock element
    document.getElementById('clock').textContent = formattedTime;
  }

  // Call updateClock every second
  setInterval(updateClock, 1000);

  // Initialize the clock immediately
  updateClock();


 
})();