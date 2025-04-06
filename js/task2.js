(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.myolivero = {
    attach: function (context) {
      // Smooth scroll for anchor links
      once('smoothScroll', 'a[href^="#"]', context).forEach((anchor) => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Dynamic sidebar positioning
      const sidebar = document.querySelector('.layout-sidebar-left');
      if (sidebar) {
        const stickyHandler = () => {
          const scrollTop = window.pageYOffset;
          sidebar.style.top = scrollTop > 100 ? '1rem' : '3rem';
        };
        
        window.addEventListener('scroll', stickyHandler);
        stickyHandler();
      }
    }
  };

})(Drupal, once);
