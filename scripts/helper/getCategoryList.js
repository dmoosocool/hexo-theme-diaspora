var getCategoryList = function getCategoryList(archive, size) {
  var posts = hexo.locals.get('posts');
  var articleArr = [];
  size = size || 10;
    for(var i = 0; i< posts.length; i++){
      if(!!archive.categories.data.length > 0) {
        if(posts.data[i].categories.data.indexOf(archive.categories.data) > -1 && archive._id != posts.data[i]._id) articleArr.push(posts.data[i]);
      } 

      else{
        if(archive._id != posts.data[i]._id) articleArr.push(posts.data[i]);
      }
    }
  return articleArr.slice(0, size);
}

hexo.extend.helper.register('getCategoryList', getCategoryList);