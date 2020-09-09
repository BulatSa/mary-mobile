"use strict";

/*! gulp-start v0.0.1 | (c) 2020 Bulat | MIT License | https://github.com/BulatSa/gulp-start */
$(function () {
  if (document.documentElement.clientWidth <= 680) {
    // Mobile Menu Toggle
    var mobileMenuToggle = function mobileMenuToggle(e) {
      e.preventDefault();
      var dataLink = e.target.dataset.menuMobileLink;
      var linkedMenu = document.querySelector(".".concat(dataLink));
      var burger = document.querySelector(".menu-mobile__item--burger");

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

    var closeAllMobileMenu = function closeAllMobileMenu(menuMobileLink) {
      var linkedMenuList = document.querySelectorAll("[".concat(menuMobileLink, "]"));
      linkedMenuList.forEach(function (el) {
        document.querySelector(".".concat(el.dataset.menuMobileLink)).classList.remove("open");
      });
    };

    var mobileBurgerOpen = function mobileBurgerOpen(burger) {
      burger.classList.add("open");
    };

    var mobileBurgerClose = function mobileBurgerClose(burger) {
      burger.classList.remove("open");
      closeAllMobileMenu("data-menu-mobile-link");
    };

    var menuMobileLink = document.querySelectorAll("[data-menu-mobile-link]");

    if (menuMobileLink) {
      menuMobileLink.forEach(function (el) {
        el.addEventListener("click", mobileMenuToggle);
      });
    } // End of Mobile Menu Toggle
    // menuMobileScrollToggle on Scroll


    var menuMobile = document.querySelector(".menu-mobile");

    if (menuMobile) {
      var lastScrollTop = 0;
      var menuTransparent = menuMobile.dataset.menuTransparent === "true" ? true : false;

      var menuMobileScrollToggle = function menuMobileScrollToggle() {
        var scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
          // Scroll down
          if (menuTransparent && scrollTop > 120) {
            menuMobile.classList.add("show-bg");
          } //menuMobile.classList.add("hide");

        } else {
          // Scroll up
          if (menuTransparent && scrollTop < 120) {
            menuMobile.classList.remove("show-bg");
          } //menuMobile.classList.remove("hide");

        }

        lastScrollTop = scrollTop;
      };

      window.addEventListener("scroll", menuMobileScrollToggle);
    } // End of menuMobileScrollToggle on Scroll
    // Fotorama Slider


    $(".columns__left__padding").fotorama({
      //width: '100%',
      height: "380"
    }); // End of Fotorama Slider
  }
});