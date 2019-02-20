function launch_message() {
  let view = View(".messages")
  let model = Model({resourceName: "Message"})

  let controller = Controller({
    init: function() {
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
  })

  controller.init.call(controller, view, model)
}

export default launch_message
