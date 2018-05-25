;(function(window, undefined){
  var util = {
    $: function(selector) {
      var type = selector.substr(0,1),            // 选择器类型.
        el = selector.substr(1, selector.length); // 元素别名.
      switch(type){
        case '#':
          return document.getElementById(el);
          break;
        case '.':
          return document.getElementsByClassName(el);
          break;
        default:
          el = selector;
          return document.getElementsByTagName(el);
          break;
      }
    }
  };

  window.UTIL = util;
}(window));