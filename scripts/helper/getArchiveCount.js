/**
 * 根据文章内容返回文章字数.
 * @param {String} content 文章内容
 */
var getArchiveCount = function getArchiveCount(content) {
  return content.replace(/<[^>]*>/g,'').length;
};

hexo.extend.helper.register('getArchiveCount', getArchiveCount);