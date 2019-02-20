window.Model = function(options) {
  let resourceName = options.resourceName
  return {
    init: function() {
      var APP_ID = 'HGBsbSSJ8sOsTzkj1566sLbx-gzGzoHsz';
      var APP_KEY = 'mKhtjNsqy60hzMvVNEX0w15i';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    find: function() {
      return new AV.Query(resourceName).find()
    },
    save: function(name, content) {
      let MessageObject = AV.Object.extend(resourceName)
      let messageObject = new MessageObject()
      return messageObject.save({
        name: name,
        content: content
      })
    }
  }
}
