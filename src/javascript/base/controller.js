window.Controller = function(options) {
  var init = options.init
  let object = {
    view: null,
    model: null,
    init: function(view, model) {
      this.view = view
      this.model = model
      this.model.init()
      this.bindEvents.call(this)
      init.call(this)
    }
  }

  for (let key in options) {
    if (key !== 'init') {
      object[key] = options[key]
    }
  }
  return object
}
