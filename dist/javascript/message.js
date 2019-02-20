"use strict";

!function () {
  var view = View(".messages");
  var model = Model({
    resourceName: "Message"
  });
  var controller = Controller({
    init: function init() {
      this.listMessage();
    },
    saveMessage: function saveMessage(name, content) {
      this.model.save(name, content).then(function (object) {
        this.showMessage(object.attributes);
      }.bind(this), function (object) {
        console.log(object);
      });
    },
    showMessage: function showMessage(messageObject) {
      var li = document.createElement('li');
      li.innerText = "".concat(messageObject.name, ": ").concat(messageObject.content);
      this.view.querySelector("#messageList").appendChild(li);
    },
    listMessage: function listMessage() {
      this.model.find().then(function (objects) {
        var _this = this;

        var result = objects.map(function (message) {
          return message.attributes;
        });
        result.forEach(function (message) {
          _this.showMessage(message);
        });
      }.bind(this), function (error) {
        alert("哎呀，明天再来吧");
      });
    },
    bindEvents: function bindEvents() {
      var messageForm = this.view.querySelector("#messageForm");
      messageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.querySelector("input[name=name]").value;
        var content = document.querySelector("input[name=content]").value;
        this.saveMessage(name, content);
      }.bind(this));
    }
  });
  controller.init.call(controller, view, model);
}.call();