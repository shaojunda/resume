"use strict";

!function () {
  var view = document.querySelector('#siteWorks');
  var controller = {
    view: null,
    swiper: null,
    swiperOptions: {
      // Optional parameters
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination'
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    init: function init(view) {
      this.view = view;
      this.initSwiper();
    },
    initSwiper: function initSwiper() {
      this.swiper = new Swiper(this.view.querySelector('.swiper-container'), this.swiperOptions);
    }
  };
  controller.init.call(controller, view);
}.call();