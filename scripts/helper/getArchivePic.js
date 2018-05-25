/**
 * 获取文章图片.
 * @param {Object} archive 文章对象.
 */
var getArchivePic = function getArchivePic(archive) {
  var defaultPic = '/assets/images/598ac151a702e.jpg';

  // 如果文章中没有图片字段则返回默认的图片.
  if(undefined === archive.pic) return defaultPic;

  // 如果文章中使用的外链图片则直接使用, 如果是使用的文章内的图片则使用本地图片.
  return (archive.pic.indexOf('http') > -1) ? archive.pic : archive.permalink + archive.pic;
};

hexo.extend.helper.register('getArchivePic', getArchivePic);