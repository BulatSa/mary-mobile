/*! gulp-start v0.0.1 | (c) 2020 Bulat | MIT License | https://github.com/BulatSa/gulp-start */
$((function () {
  // Contact Menu Toggle
  const contactMenuToggle = (e) => {
    e.preventDefault();

    const contactMenu = document.querySelector(".contact-menu");
    if (contactMenu.classList.contains("open")) {
      contactMenu.classList.remove("open");
    } else {
      contactMenu.classList.add("open");
    }
  };

  const contactMobileOpenLink = document.querySelectorAll(
    '[data-menu-mobile-link="contact-menu"]'
  );

  if (contactMobileOpenLink) {
    contactMobileOpenLink.forEach((el) => {
      el.addEventListener("click", contactMenuToggle);
    });
  }
  // End of Contact Menu Toggle

  // menuMobileScrollToggle on Scroll
  const menuMobile = document.querySelector(".menu-mobile");

  if (menuMobile) {
    let lastScrollTop = 0;

    const menuMobileScrollToggle = () => {
      let scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        // Scroll down
        menuMobile.classList.add("hide");
      } else {
        // Scroll up
        menuMobile.classList.remove("hide");
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", menuMobileScrollToggle);
  }
  // End of menuMobileScrollToggle on Scroll
}));
