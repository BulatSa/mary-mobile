$(function () {
  if (document.documentElement.clientWidth <= 680) {
    // Mobile Menu Toggle
    const menuMobile = document.querySelector(".menu-mobile");
    const body = document.querySelector('body');
    const mobileMenuToggle = (e) => {
      e.preventDefault();
      let scrollTop = window.scrollY;
      const dataLink = e.target.dataset.menuMobileLink;
      const linkedMenu = document.querySelector(`.${dataLink}`);
      const burger = document.querySelector(".menu-mobile__item--burger");
      if (linkedMenu.classList.contains("open")) {
        linkedMenu.classList.remove("open");
        body.classList.remove('open-menu');
        closeAllMobileMenu("data-menu-mobile-link");
        mobileBurgerClose(burger);
        if (scrollTop < 50) {
          menuMobile.classList.remove("show-bg");
        }
      } else {
        closeAllMobileMenu("data-menu-mobile-link");
        linkedMenu.classList.add("open");
        body.classList.add('open-menu');
        mobileBurgerOpen(burger);
        menuMobile.classList.add("show-bg");
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

    // Offers page hide call btn
    const fittingButtonOnOffers = document.querySelector('.offers_page .fitting-button');
    if (fittingButtonOnOffers) {
      const toggleFittingButtonOnOffers = () => {
        let scrollTop = window.scrollY;
        if (scrollTop > 220) {
          fittingButtonOnOffers.classList.add('visible');
        } else {
          fittingButtonOnOffers.classList.remove('visible');
        }
      }
      window.addEventListener("scroll",toggleFittingButtonOnOffers);
    }
    // End Offers page hide call btn

    // Replace Service MakeUp block
    const removeEventListeners = (el) => {
      const elClone = el.cloneNode(true);
      el.parentNode.replaceChild(elClone, el);
    };

    const serviceMakeUpBlock = document.querySelector(
      ".services__make-up-and-hairstyle__right"
    );
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
        height: "460px",
      });
    }

    if ($(".dark-pane .collections").length) {
      $(".dark-pane .collections").fotorama({
        width: "90%",
        ratio: "5/6",
        arrows: false,
      });
    }
    // Main page Fotorama

    // About us More
    const aboutUs = document.querySelector(".authors-container .about-us");
    const aboutUsLink = document.querySelector(
      ".authors-container .about-us__more a"
    );

    if (aboutUsLink) {
      const toggleAboutUsText = (e) => {
        e.preventDefault();
        if (aboutUs.classList.contains("open")) {
          aboutUs.classList.remove("open");
          aboutUsLink.textContent = "Читать далее";
        } else {
          aboutUs.classList.add("open");
          aboutUsLink.textContent = "Свернуть";
        }
      };

      aboutUsLink.addEventListener("click", toggleAboutUsText);
    }
    // About us More

    // Fitting button
    const fittingButton = document.querySelector(".main-page .fitting-button");
    if (fittingButton) {
      const borderHeight =
        document.querySelector(".header.header_homepage").offsetHeight -
        window.innerHeight;
      const toggleFittingButton = () => {
        if (window.scrollY > borderHeight) {
          fittingButton.classList.add("show-mobile");
        } else {
          fittingButton.classList.remove("show-mobile");
        }
      };
      window.addEventListener("scroll", toggleFittingButton);
    }
    // Fitting button

    // Filtering catalog elements
    const collectionList = document.querySelectorAll(
      ".collection ul[data-role=collection_list]"
    );
    if (collectionList) {
      const checkLiWideElemets = (li) => {
        if (
          li.classList.contains("photo-layout-factoid") ||
          li.classList.contains("photo-layout-selection") ||
          li.classList.contains("photo-layout-rotate")
        ) {
          return true;
        }
        return false;
      };

      collectionList.forEach((el) => {
        const collectionLi = el.querySelectorAll("li");
        if (collectionLi.length === 2) {
          let containsWideElements = false;
          collectionLi.forEach((li) => {
            containsWideElements = checkLiWideElemets(li);
          });
          if (!containsWideElements) {
            el.classList.add("halfed");
          }
        }

        if (collectionLi.length === 3) {
          let containsWideElements = false;
          collectionLi.forEach((li, i) => {
            if (i === 0 || i === 1) {
              containsWideElements = checkLiWideElemets(li);
            }
          });
          if (!containsWideElements) {
            el.classList.add("halfed");
          }
        }
      });
    }
    // Filtering catalog elements
  }
});
