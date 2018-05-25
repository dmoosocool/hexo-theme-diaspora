;(function(window, undefined) {
  var init = function(){
    // 执行页面加载动画.
    window._LOADING('#pageLoader',{spinner:0, timeToHide: 1000, bgColor:'#ffffff'});
    replaceTopArchiveHeight();
    $(window).on('load', replaceTopArchiveHeight);
    $(window).on('resize', replaceTopArchiveHeight);
  };

  var replaceTopArchiveHeight = function(){
    $('#topArchive-bg').find('.ibg-bg').remove().end().height($(window).height()).interactive_bg({strength:45});
  };

  $(function(){
    init();
  });
}(window));