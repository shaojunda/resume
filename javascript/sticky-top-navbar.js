!function() {
  var view = document.querySelector("#topNavBar")
  var controller = {
    init: function(view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function() {
      window.addEventListener('scroll', () => {
        if(window.scrollY > 0) {
          this.active()
        } else {
          this.deactive()
        }
      })
    },
    active: function() {
      this.view.classList.add("sticky")
    },
    deactive: function() {
      this.view.classList.remove("sticky")
    }
  }

  controller.init.call(controller, view)
}.call()
