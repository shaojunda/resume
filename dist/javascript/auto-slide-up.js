"use strict";

!function () {
  var specialTags = document.querySelectorAll("[data-special-tag]");

  for (var index = 0; index < specialTags.length; index++) {
    var element = specialTags[index];
    element.classList.add("offset");
  }

  window.addEventListener('scroll', function () {
    customScroll();
  });
  setTimeout(function () {
    customScroll();
  }, 1100); // helper

  function customScroll() {
    var specialTags = document.querySelectorAll('[data-special-tag]');
    var minIndex = 0;

    for (var _index = 0; _index < specialTags.length; _index++) {
      if (Math.abs(specialTags[_index].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = _index;
      }
    }

    specialTags[minIndex].classList.remove("offset");
    var id = specialTags[minIndex].id;
    var a = document.querySelector('a[href="#' + id + '"]');
    var li = a.parentNode;
    var brothersAndMe = li.parentNode.children;

    for (var _index2 = 0; _index2 < brothersAndMe.length; _index2++) {
      var _element = brothersAndMe[_index2];

      _element.classList.remove("highlight");
    }

    li.classList.add("highlight");
  }
}.call();