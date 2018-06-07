/**
 * 获取文章图片
 * 
 * @param {Object} archive 文章对象.
 * @param {Object} opts 七牛cdn优化参数
 * @param {Integer} opts.quality 图片质量
 * @param {Integer} opts.width 指定宽度 如果不指定宽度则默认值压缩图片.
 */
var getArchivePic = function getArchivePic(archive, opts) {
  var pic = '',
      defaultPic = '/assets/images/598ac151a702e.jpg',
      qiniuConfig = hexo.theme.config.qiniu;
      
  archive.pic = archive.pic || defaultPic;
  // 如果文章中使用的外链图片则直接使用, 如果是使用的文章内的图片则使用本地图片.
  if(archive.pic.indexOf('http') > -1){
    pic = archive.pic;
  }
  // 如果没有使用外链图片.
  else{
    // 如果开启了七牛选项
    if(qiniuConfig && qiniuConfig.enabled){
      var httpPath = qiniuConfig.host.http,
          httpsPath = qiniuConfig.host.https;
      opts = opts || {};
      opts.quality = opts.quality || 75;
      optimize = '?imageView2/0/q/' + opts.quality + '|imageslim';
      // 指定宽度缩放. 
      if(opts && opts.width){
        optimize = '?imageMogr2/auto-orient/thumbnail/' + opts.width + 'x/blur/1x0/quality/' + opts.quality + '|imageslim';
      }

      // 如果文章中没有图片字段则返回默认的图片.
      if(undefined === archive.pic) {
        pic = defaultPic;
      }
      // 否则拿到文章图片
      else{
        pic = archive.pic;
      }

      if(pic == defaultPic){
        pic = 'default_qiniu.jpg';
      }
      
      pic = !qiniuConfig.ssl ? [qiniuConfig.host.http, pic].join('/') + optimize : [qiniuConfig.host.https, pic].join('/') + optimize;
      
    }
    // 没有开启七牛.
    else{
      // 如果文章中没有图片字段则返回默认的图片.
      if(defaultPic === archive.pic) {
        pic = defaultPic;
      }
      // 否则拿到文章图片
      else{
        pic = archive.permalink + archive.pic;
      }
    }
  }
  return pic;
};

hexo.extend.helper.register('getArchivePic', getArchivePic);