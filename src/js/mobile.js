$(function () {
  if (document.documentElement.clientWidth <= 680) {
    // Mobile Menu Toggle
    const mobileMenuToggle = (e) => {
      e.preventDefault();
      const dataLink = e.target.dataset.menuMobileLink;
      const linkedMenu = document.querySelector(`.${dataLink}`);
      const burger = document.querySelector(".menu-mobile__item--burger");
      if (linkedMenu.classList.contains("open")) {
        linkedMenu.classList.remove("open");
        closeAllMobileMenu("data-menu-mobile-link");
        mobileBurgerClose(burger);
      } else {
        closeAllMobileMenu("data-menu-mobile-link");
        linkedMenu.classList.add("open");
        mobileBurgerOpen(burger);
      }
    };

    const closeAllMobileMenu = (menuMobileLink) => {
      const linkedMenuList = document.querySelectorAll(`[${menuMobileLink}]`);
      linkedMenuList.forEach((el) => {
        document
          .querySelector(`.${el.dataset.menuMobileLink}`)
          .classList.remove("open");
      });
    };

    const mobileBurgerOpen = (burger) => {
      burger.classList.add("open");
    };

    const mobileBurgerClose = (burger) => {
      burger.classList.remove("open");
      closeAllMobileMenu("data-menu-mobile-link");
    };

    const menuMobileLink = document.querySelectorAll("[data-menu-mobile-link]");
    if (menuMobileLink) {
      menuMobileLink.forEach((el) => {
        el.addEventListener("click", mobileMenuToggle);
      });
    }
    // End of Mobile Menu Toggle

    // menuMobileScrollToggle on Scroll
    const menuMobile = document.querySelector(".menu-mobile");
    if (menuMobile) {
      let lastScrollTop = 0;
      const menuTransparent =
        menuMobile.dataset.menuTransparent === "true" ? true : false;

      const menuMobileScrollToggle = () => {
        let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
          // Scroll down
          if (menuTransparent && scrollTop > 50) {
            menuMobile.classList.add("show-bg");
          }
          //menuMobile.classList.add("hide");
        } else {
          // Scroll up
          if (menuTransparent && scrollTop < 50) {
            menuMobile.classList.remove("show-bg");
          }
          //menuMobile.classList.remove("hide");
        }
        lastScrollTop = scrollTop;
      };

      window.addEventListener("scroll", menuMobileScrollToggle);
    }
    // End of menuMobileScrollToggle on Scroll

    // Replace Service MakeUp block
    const removeEventListeners = (el) => {
      const elClone = el.cloneNode(true);
      el.parentNode.replaceChild(elClone, el);
    }

    const serviceMakeUpBlock = document.querySelector('.services__make-up-and-hairstyle__right');
    if (serviceMakeUpBlock) {
      removeEventListeners(serviceMakeUpBlock);
    }
    // End Replace Service MakeUp block

    // Main page Fotorama
    if ($(".fotorama").length) {
      $(".fotorama").fotorama({
        width: "340px",
      });
    }

    if ($(".silhouettes").length) {
      $(".silhouettes").fotorama({
        //width: "340px",
        height: '460px'

      });
    }
    // Main page Fotorama
  }
});
