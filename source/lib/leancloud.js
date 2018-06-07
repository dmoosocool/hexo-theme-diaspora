;(function(window, undefined){
  var leancloud = {

    appId: window.DIASPORA_CONFIG.leancloud_appId,
    appKey: window.DIASPORA_CONFIG.leancloud_appKey,

    /**
     * 初始化leancloud
     * 
     * @returns {void}
     */
    initVA: function() {
      AV.init({
        appId: this.appId,
        appKey: this.appKey
      });
    },

    /**
     * 初始化valine插件.
     * @param {string} pageId 
     * @returns {void}
     */
    initValine: function(pageId) {
      new Valine({
        el: '#comment' ,
        notify:false, 
        verify:false, 
        appId: this.appId,
        appKey: this.appKey,
        placeholder: '快来加入评论吧~ (≧∇≦)ﾉ',
        path: pageId,
        avatar:'mm' 
      });
    },

    /**
     * 初始化文章数据
     * 
     * @param {object} option 初始化数据,
     * @param {string} options.pageId 文章id
     * @param {number} options.read 阅读数
     * @param {number} options.like 喜欢数
     * @param {function} callback 回调
     */
    initArchive: function(option, callback) {
      var Counter = AV.Object.extend('Counter');
      var model = new Counter();

      // 合并默认数据
      $.extend({
        pageId: decodeURIComponent(location.pathname),
        read: 0,
        like: 0
      }, option, true);

      // 设置数据
      model.set('url', option.pageId);
      model.set('read', option.read);
      model.set('like', option.like);

      // 保存
      model.save( {fetchWhenSave: true }).then( callback );
    },

    /**
     * 根据类型计数.
     * 
     * @param {string} type 添加计数的类型　'read'|'like'
     * @param {string} pageId 
     * @param {function} callback 添加完成回调.
     */
    addCount: function(type, pageId, callback) {
      var Counter = AV.Object.extend('Counter'),
        counter = new AV.Query(Counter),
        type = type || 'read',
        pageId = pageId || window.location.pathname,
        callback = callback || function(){},
        that = this;

      // 查询当前文章的数据.
      counter.equalTo('url', pageId);
      // 取出数据.
      counter.first().then(function(resp) {
        // 有数据则累加
        if(!!resp){
          resp.increment(type, 1);
          resp.save({fetchWhenSave: true}).then(function(){
            callback && callback({status: 1});
          });
        }
        // 无数据则插入该文章的初始数据.
        else{
          that.initArchive({ pageId: pageId, read: 1, like: 0 }, function() {
            callback && callback({status: 1});
          });
        }
      }, function(error) {
        callback && callback({status: 0, error: error});
      });
    },

    /**
     * 根据类型减数(用于取消喜欢)
     * 
     * @param {string} type 需要减法的类型 'like'
     * @param {string} pageId
     * @param {function} callback 回调函数
     */
    reduceCount: function(type, pageId, callback) {
      var Counter = AV.Object.extend('Counter'),
        counter = new AV.Query(Counter),
        type = type || 'like',
        pageId = pageId || window.location.pathname,
        callback = callback || function(){},
        that = this;
        
      counter.equalTo('url', pageId);
      counter.first().then(function(resp) {
        if(!!resp){
          resp.increment(type, -1);
          resp.save({fetchWhenSave: true}).then(function(){
            callback && callback({status:1});
          })
        }
        // 无数据则插入该文章的初始数据.
        else{
          that.initArchive({ pageId: pageId, read: 0, like: 0 }, function() {
            callback && callback({status: 1});
          });
        }
      }, function(error) {
        callback && callback({status:0, error: error})
      });

    },
    /**
     * 获取计数
     * 
     * @param {string} pageId 
     * @param {function} callback 
     */
    getCount: function(pageId, callback) {
      var Counter = AV.Object.extend('Counter');
      var counter = new AV.Query(Counter);
      // 查询当前文章的数据
      counter.equalTo('url', pageId);
      counter.first().then(function(resp) {
        callback && callback(resp);
      });
    },

    /**
     * 获取评论数
     * 
     * @param {string} pageId 
     * @param {function} callback 回调函数
     * @returns {Promise}
     */
    getCommentCount: function(pageId, callback) {
      var Comment = AV.Object.extend('Comment');
      var query = new AV.Query(Comment);

      query.equalTo('url', pageId);
      return query.count();
    }
  }
  window.leancloud = leancloud;
}(window));