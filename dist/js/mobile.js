"use strict";

/*! gulp-start v0.0.1 | (c) 2020 Bulat | MIT License | https://github.com/BulatSa/gulp-start */
$(function () {
  if (document.documentElement.clientWidth <= 680) {
    // Mobile Menu Toggle
    var menuMobile = document.querySelector(".menu-mobile");
    var body = document.querySelector("body");

    var mobileMenuToggle = function mobileMenuToggle(e) {
      e.preventDefault();
      var scrollTop = window.scrollY;
      var dataLink = e.target.dataset.menuMobileLink;
      var linkedMenu = document.querySelector(".".concat(dataLink));
      var burger = document.querySelector(".menu-mobile__item--burger");

      if (linkedMenu.classList.contains("open")) {
        linkedMenu.classList.remove("open");
        body.classList.remove("open-menu");
        closeAllMobileMenu("data-menu-mobile-link");
        mobileBurgerClose(burger);

        if (scrollTop < 50) {
          menuMobile.classList.remove("show-bg");
        }
      } else {
        closeAllMobileMenu("data-menu-mobile-link");
        linkedMenu.classList.add("open");
        body.classList.add("open-menu");
        mobileBurgerOpen(burger);
        menuMobile.classList.add("show-bg");
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


    if (menuMobile) {
      var lastScrollTop = 0;
      var menuTransparent = menuMobile.dataset.menuTransparent === "true" ? true : false;

      var menuMobileScrollToggle = function menuMobileScrollToggle() {
        var scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
          // Scroll down
          if (menuTransparent && scrollTop > 50) {
            menuMobile.classList.add("show-bg");
          } //menuMobile.classList.add("hide");

        } else {
          // Scroll up
          if (menuTransparent && scrollTop < 50) {
            menuMobile.classList.remove("show-bg");
          } //menuMobile.classList.remove("hide");

        }

        lastScrollTop = scrollTop;
      };

      window.addEventListener("scroll", menuMobileScrollToggle);
    } // End of menuMobileScrollToggle on Scroll
    // Offers page hide call btn


    var fittingButtonOnOffers = document.querySelector(".offers_page .fitting-button");

    if (fittingButtonOnOffers) {
      var toggleFittingButtonOnOffers = function toggleFittingButtonOnOffers() {
        var scrollTop = window.scrollY;

        if (scrollTop > 220) {
          fittingButtonOnOffers.classList.add("visible");
        } else {
          fittingButtonOnOffers.classList.remove("visible");
        }
      };

      window.addEventListener("scroll", toggleFittingButtonOnOffers);
    } // End Offers page hide call btn
    // Replace Service MakeUp block


    var removeEventListeners = function removeEventListeners(el) {
      var elClone = el.cloneNode(true);
      el.parentNode.replaceChild(elClone, el);
    };

    var serviceMakeUpBlock = document.querySelector(".services__make-up-and-hairstyle__right");

    if (serviceMakeUpBlock) {
      removeEventListeners(serviceMakeUpBlock);
    } // End Replace Service MakeUp block
    // Main page Fotorama


    if ($(".fotorama").length) {
      $(".fotorama").fotorama({
        width: "340px"
      });
    }

    if ($(".silhouettes").length) {
      $(".silhouettes").fotorama({
        //width: "340px",
        height: "460px"
      });
    }

    if ($(".dark-pane .collections").length) {
      $(".dark-pane .collections").fotorama({
        width: "90%",
        ratio: "5/6",
        arrows: false
      });
    } // Main page Fotorama
    // About us More
    //const aboutUs = document.querySelector(".authors-container .about-us");
    //const aboutUsLink = document.querySelector(
    //  ".authors-container .about-us__more a"
    //);
    //
    //if (aboutUsLink) {
    //  const toggleAboutUsText = (e) => {
    //    e.preventDefault();
    //    if (aboutUs.classList.contains("open")) {
    //      aboutUs.classList.remove("open");
    //      aboutUsLink.textContent = "Читать далее";
    //    } else {
    //      aboutUs.classList.add("open");
    //      aboutUsLink.textContent = "Свернуть";
    //    }
    //  };
    //
    //  aboutUsLink.addEventListener("click", toggleAboutUsText);
    //}
    // About us More
    // About us More Jquery


    var $aboutUsMobile = $(".authors-container .about-us__mobile");
    var $aboutUsLink = $(".authors-container .about-us__more a");
    var $aboutUsFull = $(".about-us__mobile-full");

    if ($aboutUsLink.length && $aboutUsFull.length) {
      $aboutUsFull.slideUp();
      $aboutUsLink.on("click", function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 50;
        var $this = $(this);

        if ($aboutUsMobile.hasClass("open")) {
          $aboutUsMobile.removeClass("open");
          $this.text("Читать далее");
        } else {
          $aboutUsMobile.addClass("open");
          $this.text("Свернуть");
        }

        $aboutUsFull.slideToggle();
        $("html,body").stop().animate({
          scrollTop: destination
        }, 400);
        return false;
      });
    } // About us More Jquery
    // Fitting button


    var fittingButton = document.querySelector(".main-page .fitting-button");

    if (fittingButton) {
      var borderHeight = document.querySelector(".header.header_homepage").offsetHeight - window.innerHeight;

      var toggleFittingButton = function toggleFittingButton() {
        if (window.scrollY > borderHeight) {
          fittingButton.classList.add("show-mobile");
        } else {
          fittingButton.classList.remove("show-mobile");
        }
      };

      window.addEventListener("scroll", toggleFittingButton);
    } // Fitting button
    // Filtering catalog elements


    var collectionList = document.querySelectorAll(".collection ul[data-role=collection_list]");

    if (collectionList) {
      var checkLiWideElemets = function checkLiWideElemets(li) {
        if (li.classList.contains("photo-layout-factoid") || li.classList.contains("photo-layout-selection") || li.classList.contains("photo-layout-rotate")) {
          return true;
        }

        return false;
      };

      collectionList.forEach(function (el) {
        var collectionLi = el.querySelectorAll("li");

        if (collectionLi.length === 2) {
          var containsWideElements = false;
          collectionLi.forEach(function (li) {
            containsWideElements = checkLiWideElemets(li);
          });

          if (!containsWideElements) {
            el.classList.add("halfed");
          }
        }

        if (collectionLi.length === 3) {
          var _containsWideElements = false;
          collectionLi.forEach(function (li, i) {
            if (i === 0 || i === 1) {
              _containsWideElements = checkLiWideElemets(li);
            }
          });

          if (!_containsWideElements) {
            el.classList.add("halfed");
          }
        }
      });
    } // Filtering catalog elements

  }
});