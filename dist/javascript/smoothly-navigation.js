"use strict";

!function () {
  var view = document.querySelector('nav.menu');
  var controller = {
    view: null,
    aTags: null,
    liTags: null,
    init: function init(view) {
      this.view = view;
      this.aTags = this.view.querySelectorAll("nav.menu > ul > li > a");
      this.liTags = this.view.querySelectorAll("nav.menu > ul > li");
      this.initAnimation();
      this.bindEvents();
    },
    initAnimation: function initAnimation() {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }

      requestAnimationFrame(animate);
    },
    scrollToElement: function scrollToElement(element) {
      var top = element.offsetTop;
      var n = 25;
      var duration = 500 / n;
      var currentTop = window.scrollY;
      var targetTop = top - 80;
      var coords = {
        y: currentTop
      };
      var distance = targetTop - currentTop;
      var time = Math.abs(distance / 100 * 300);

      if (time > 500) {
        time = 500;
      }

      var tween = new TWEEN.Tween(coords).to({
        y: targetTop
      }, time).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
        window.scrollTo(0, coords.y);
      }).start(); // Start the tween immediately.
    },
    bindEvents: function bindEvents() {
      for (var index = 0; index < this.liTags.length; index++) {
        this.liTags[index].onmouseenter = function (event) {
          event.currentTarget.classList.add("active");
        };

        this.liTags[index].onmouseleave = function (event) {
          event.currentTarget.classList.remove("active");
        };
      }

      for (var _index = 0; _index < this.aTags.length; _index++) {
        this.aTags[_index].onclick = function (event) {
          event.preventDefault();
          var a = event.currentTarget;
          var href = a.getAttribute("href");
          var element = document.querySelector(href);
          this.scrollToElement(element);
        };
      }
    }
  };
  controller.init.call(controller, view);
}.call();