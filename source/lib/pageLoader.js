;(function(window, undefined){
  var pageLoader = function pageLoader(target, options) {
    // 动画数组.
    var spinners = [
      '<div class="fl spinner0"></div>',
      '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
      '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>',
      '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>',
      '<div class="fl spinner4"></div>',
      '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>',
      '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
      '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'
    ];

    // pageLoader配置文件.
    var settings = $.extend({
        timeToHide:1200,      // Default Time to hide fakeLoader
        pos:'fixed',          // Default Position
        top:'0px',            // Default Top value
        left:'0px',           // Default Left value
        width:'100%',         // Default width 
        height:'100%',        // Default Height
        zIndex: '1000',       // Default zIndex 
        bgColor: '#2ecc71',   // Default background color
        spinner: 1,           // Default Spinner
        imagePath:''          // Default Path custom image
    }, options);

    var el = $(target);

    // 设置样式.
    el.css({
      position: settings.pos,
      width: settings.width,
      height: settings.height,
      top: settings.top,
      left: settings.left
    });

    // 加载动画.
    el.html(spinners[settings.spinner]);

    // 自定义图片
    if(settings.imagePath != '') {
      el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
    }

    run(settings.spinner);

    setTimeout(function(){
      el.fadeOut();
    }, settings.timeToHide);

    el.css({
      backgroundColor: settings.bgColor,
      zIndex: settings.zIndex
    });
  };

  var run = function(){
    var winW = $(window).width(),
        winH = $(window).height(),
        spinnerW = $('.fl').outerWidth(),
        spinnerH = $('.fl').outerHeight(),
        left = winW/2 - spinnerW/2,
        top = winH/2 - spinnerH/2;

    if($('.fl').hasClass('spinner0')){
      top = top - 50;
    }

    $('.fl').css({
      position: 'absolute',
      left: left,
      top: top
    });
  };

  $(window).on('load', function(){
    run();
    $(window).on('resize', run);
  });
  window._LOADING = pageLoader;
}(window));