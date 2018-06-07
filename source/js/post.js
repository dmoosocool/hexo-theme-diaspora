;(function(window, undefined){
  var leancloud = window.leancloud;
  
  var leanCloudInit = function(pageId) {
    // 初始化Valine评论.
    leancloud.initValine(pageId);
    // 先添加文章阅读数然后拿到数据,
    leancloud.addCount('read', pageId, function(status, err){
      if(status){
        renderComment(pageId);
      }else{
        console.error(err);
      }
    });
  };

  /**
   * 渲染计数
   * 
   * @param {string} pageId 
   */
  var renderComment = function(pageId) {
    pageId = pageId || window.location.pathname;
    leancloud.getCount(pageId, function(resp) {
      leancloud.getCommentCount(pageId).then( function(comment) {
        $('.describe .comment em').text(comment);
        $('.describe .reader em').text(resp.get('read'));
        $('.describe .likes em').text(resp.get('like'));
      });
    });
  };

  var init = function(){
    var pageId = decodeURIComponent(location.pathname);
    leanCloudInit(pageId);

    var isLiked = window.localStorage.getItem(location.pathname+'_liked');

    // 生成二维码
    new QRCode($('#qrcode')[0], {
      text: location.href,
      width: 128,
      height: 128
    });

    if(!!isLiked && isLiked == 'true') {
      $('.like-this').addClass('heartAnimation');
    }

    /**
     * eventLinstener window scroll for scrollbar
     * 
     */
    $(window).on('scroll', function() {
      if ($('.scrollbar').length) {
          var st = $(window).scrollTop(),
              ct = $('.content').height();
          if (st > ct) {
              st = ct
          }
          $('.scrollbar').width((50 + st) / ct * 100 +'%')
          if (st > 80 && window.innerWidth > 800) {
              $('.subtitle').fadeIn()
          } else {
              $('.subtitle').fadeOut()
          }
      }
    });

    $('.scrolltop').on('click', function(){
      $(window).scrollTop(0);
    });

    $('.like-this').on('click', function(){
      var isLiked = window.localStorage.getItem(location.pathname+'_liked'),
          that = this;
      // 已经点过喜欢的
      if(!!isLiked && isLiked == 'true') {
        leancloud.reduceCount('like', pageId, function(status, error) {
          if(!!error) console.error(err);
          window.localStorage.setItem(location.pathname+'_liked', false);
          $(that).removeClass('heartAnimation');

          renderComment(pageId);
        });
      }
      // 未点过喜欢的
      else{
        leancloud.addCount('like', pageId, function(status, error) {
          if(!!error) console.error(error);
          window.localStorage.setItem(location.pathname + '_liked', true);
          $(that).addClass('heartAnimation');
          renderComment(pageId);
        })
      }
    });

    $('.icon-wechat').on('click', function() {
      $('#qrcode').toggle()
    });
  };
  init();
}(window));