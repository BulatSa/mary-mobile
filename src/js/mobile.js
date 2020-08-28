$(function () {
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
    })
  }
});
