!function() {
  var view = document.querySelector('nav.menu')
  var controller = {
    view: null,
    aTags: null,
    liTags: null,
    init: function(view) {
      this.view = view
      this.aTags = this.view.querySelectorAll("nav.menu > ul > li > a")
      this.liTags = this.view.querySelectorAll("nav.menu > ul > li")
      this.initAnimation()
      this.bindEvents()
    },
    initAnimation: function() {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement: function(element) {
      let top = element.offsetTop

      let n = 25
      let duration = 500 / n
      let currentTop = window.scrollY
      let targetTop = top - 80
      let coords = { y: currentTop };
      let distance = targetTop - currentTop
      let time = Math.abs((distance / 100) * 300)
      if (time > 500) {
        time = 500
      }
      var tween = new TWEEN.Tween(coords)
        .to({ y: targetTop }, time)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function() {
          window.scrollTo(0, coords.y)
        })
        .start(); // Start the tween immediately.
    },
    bindEvents: function() {
      for (let index = 0; index < this.liTags.length; index++) {
        this.liTags[index].onmouseenter = function(event) {
          event.currentTarget.classList.add("active")
        }
        this.liTags[index].onmouseleave = function(event) {
          event.currentTarget.classList.remove("active")
        }
      }

      for (let index = 0; index < this.aTags.length; index++) {
        this.aTags[index].onclick = function(event) {
          event.preventDefault()
          let a = event.currentTarget
          let href = a.getAttribute("href")
          let element = document.querySelector(href)
          this.scrollToElement(element)
        }
      }
    }
  }
  controller.init.call(controller, view)
}.call()
