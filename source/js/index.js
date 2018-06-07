;(function(window, undefined) {
  var init = function(){
    // 执行页面加载动画.
    window._LOADING('#pageLoader',{spinner:0, timeToHide: 1000, bgColor:'#ffffff'}, function(){
      replaceTopArchiveHeight();
    });
    
    $(window).on('load', replaceTopArchiveHeight);
    $(window).on('resize', replaceTopArchiveHeight);
    $('.switchmenu').on('click', function(){
      window.scrollTo(0, 0);
      $('html, body').toggleClass('mu');
    });
  };

  var replaceTopArchiveHeight = function(){
    $('#topArchive-bg').find('.ibg-bg').remove().end().height($(window).height()).interactive_bg({strength:45});
    var vibrant = new Vibrant($('#cover')[0]);
    var swatches = vibrant.swatches();
    if (swatches['DarkVibrant']) {
      $('#vibrant polygon').css('fill', swatches['DarkVibrant'].getHex())
      $('#vibrant div').css('background-color', swatches['DarkVibrant'].getHex())
    }
    if (swatches['Vibrant']) {
      $('.icon-menu').css('color', swatches['Vibrant'].getHex())
    }
  };

  var getArticleCount = function() {
    window.leancloud.initVA();
    $('.archive-list .archive').each(function(n, archive) {
      var pageId = $(archive).find('a').eq(0).attr('href');
      window.leancloud.getCount(pageId, function(resp) {
        var count = {
          like: resp ? resp.get('like') : 0,
          read: resp ? resp.get('read') : 0
        }
        var archiveInfo = $(archive).find('.archive-content .archive-info');
        archiveInfo.find('.icon-view').text(count.read);
        archiveInfo.find('.icon-like').text(count.like);
      })
    });
  };

  $(function(){
    getArticleCount();
    init();
  });
}(window));