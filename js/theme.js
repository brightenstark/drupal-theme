(function (Drupal, once) {
  'use strict';

  /**
   * Initialize theme behaviors.
   */
  Drupal.behaviors.mytheme = {
    attach: function (context) {
      // Handle mobile menu state
      once('mobileMenu', '[data-bs-toggle="collapse"]', context).forEach((toggle) => {
        toggle.addEventListener('click', function() {
          const target = document.querySelector(this.dataset.bsTarget);
          target.classList.toggle('show');
          this.setAttribute('aria-expanded', target.classList.contains('show'));
        });
      });

      // Responsive table handling
      once('responsiveTables', 'table', context).forEach((table) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-responsive';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      });
    }
  };

  // Viewport resize handler
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      Drupal.attachBehaviors(document.body, Drupal.settings);
    }, 250);
  });

})(Drupal, once);
