!function() {
  let view = document.querySelector(".messages")
  let model = {
    init: function() {
      var APP_ID = 'HGBsbSSJ8sOsTzkj1566sLbx-gzGzoHsz';
      var APP_KEY = 'mKhtjNsqy60hzMvVNEX0w15i';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    find: function() {
      return new AV.Query('Message').find()
    },
    save: function(name, content) {
      let MessageObject = AV.Object.extend("Message")
      let messageObject = new MessageObject()
      return messageObject.save({
        name: name,
        content: content
      })
    }
  }
  let controller = {
    view: null,
    messageObject: null,
    init: function(view, model) {
      this.view = view
      this.model = model
      this.model.init()
      this.bindEvents()
      this.listMessage()
    },
    saveMessage: function(name, content) {
      this.model.save(name, content)
        .then(function(object) {
          this.showMessage(object.attributes)
        }.bind(this), function(object) {
          console.log(object)
        })
    },
    showMessage: function(messageObject) {
      let li = document.createElement('li')
      li.innerText = `${messageObject.name}: ${messageObject.content}`
      this.view.querySelector("#messageList").appendChild(li)
    },
    listMessage: function() {
      this.model.find().then(function (objects) {
        let result = objects.map((message) => message.attributes)
        result.forEach((message) => {
          this.showMessage(message)
        })
      }.bind(this), function (error) {
        alert("哎呀，明天再来吧")
      });
    },
    bindEvents: function() {
      let messageForm = this.view.querySelector("#messageForm")
      messageForm.addEventListener('submit', function(event) {
        event.preventDefault()
        let name = document.querySelector("input[name=name]").value
        let content = document.querySelector("input[name=content]").value
        this.saveMessage(name, content)
      }.bind(this))
    }
  }

  controller.init.call(controller, view, model)
}.call()