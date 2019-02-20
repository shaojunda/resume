"use strict";

window.Model = function (options) {
  var resourceName = options.resourceName;
  return {
    init: function init() {
      var APP_ID = 'HGBsbSSJ8sOsTzkj1566sLbx-gzGzoHsz';
      var APP_KEY = 'mKhtjNsqy60hzMvVNEX0w15i';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    find: function find() {
      return new AV.Query(resourceName).find();
    },
    save: function save(name, content) {
      var MessageObject = AV.Object.extend(resourceName);
      var messageObject = new MessageObject();
      return messageObject.save({
        name: name,
        content: content
      });
    }
  };
};