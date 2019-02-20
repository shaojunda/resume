"use strict";

window.Controller = function (options) {
  var _init = options.init;
  var object = {
    view: null,
    model: null,
    init: function init(view, model) {
      this.view = view;
      this.model = model;
      this.model.init();
      this.bindEvents.call(this);

      _init.call(this);
    }
  };

  for (var key in options) {
    if (key !== 'init') {
      object[key] = options[key];
    }
  }

  return object;
};