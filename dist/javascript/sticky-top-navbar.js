"use strict";

!function () {
  var view = document.querySelector("#topNavBar");
  var controller = {
    init: function init(view) {
      this.view = view;
      this.bindEvents();
    },
    bindEvents: function bindEvents() {
      var _this = this;

      window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
          _this.active();
        } else {
          _this.deactive();
        }
      });
    },
    active: function active() {
      this.view.classList.add("sticky");
    },
    deactive: function deactive() {
      this.view.classList.remove("sticky");
    }
  };
  controller.init.call(controller, view);
}.call();