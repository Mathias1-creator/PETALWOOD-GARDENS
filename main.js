/* Petalwood Gardens — main.js */
(function () {
  "use strict";

  /* ---- Header hide/show on scroll ---- */
  var header = document.querySelector(".site-header");
  var toTop = document.querySelector(".to-top");
  var lastScrollY = 0;

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;

    if (header) {
      header.classList.toggle("scrolled", y > 8);
      if (y > lastScrollY && y > 76) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
      lastScrollY = y;
    }

    if (toTop) toTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  var closeBtn = document.querySelector(".mobile-close");

  function openNav() {
    if (!mobileNav) return;
    mobileNav.classList.add("open");
    mobileNav.setAttribute("aria-hidden", "false");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
    var firstLink = mobileNav.querySelector("a, button");
    if (firstLink) firstLink.focus();
  }
  function closeNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove("open");
    mobileNav.setAttribute("aria-hidden", "true");
    if (toggle) { toggle.setAttribute("aria-expanded", "false"); toggle.focus(); }
    document.body.classList.remove("nav-open");
  }

  if (toggle) toggle.addEventListener("click", openNav);
  if (closeBtn) closeBtn.addEventListener("click", closeNav);
  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileNav && mobileNav.classList.contains("open")) closeNav();
  });

  /* ---- Back to top ---- */
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---- Scroll reveal ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");

  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Footer year ---- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();
})();
