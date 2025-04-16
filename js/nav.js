document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
  
    if (!menuToggle || !navContainer) return; // safety check
  
    // Initially hide nav
    navContainer.style.display = 'none';
  
    // Fix: Show nav if wide enough on page load
    if (window.innerWidth > 768 && window.matchMedia('(orientation: landscape)').matches) {
      navContainer.style.display = 'flex';
    }
  
    // Toggle nav visibility on hamburger click
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
  
      if (navContainer.classList.contains('active')) {
        navContainer.classList.remove('active');
        setTimeout(() => {
          navContainer.style.display = 'none';
        }, 50);
      } else {
        navContainer.style.display = 'flex';
        setTimeout(() => {
          navContainer.classList.add('active');
        }, 50);
      }
    });
  
    // Adjust nav display on window resize
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768 && window.matchMedia('(orientation: landscape)').matches) {
        navContainer.style.display = 'flex';
        navContainer.classList.remove('active');
        menuToggle.classList.remove('active');
      } else {
        if (!navContainer.classList.contains('active')) {
          navContainer.style.display = 'none';
        }
      }
    });
  });
  