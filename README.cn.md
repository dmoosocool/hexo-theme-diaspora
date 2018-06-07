<h1 align="center">hexo-theme-diaspora</h1>

> 一个漂亮的 hexo 主题.

- [Chinese Documentation](https://github.com/dmoosocool/hexo-theme-diaspora/blob/master/README.cn.md) | [English Documentation](https://github.com/dmoosocool/hexo-theme-diaspora/blob/master/README.md).

## 案例

- [dmoo.cool](https://www.github.com/dmoosocool/dmoo.cool)



## 在线浏览

- [kya.cc](https://kya.cc)
- [dmoo.cool](https://dmoo.cool)



## 介绍

diaspora的hexo主题.

一个漂亮的 hexo 主题, 重写于 [disapora](https://github.com/LoeiFy/Diaspora). 非常感谢[@LoeiFy](https://github.com/LoeiFy/diaspora).



## 安装

**1.** 创建一个hexo博客. (如何安装请看 [hexo](https://github.com/hexojs/hexo).)

```shell
$ hexo init Lolita
$ cd Lolita
```

**2.** 检查你的hexo主目录，这里必须包含node_modules, source, themes 和其他文件夹.

```shell
$ ls
_config.yml  node_modules  package.json  public  scaffolds  source  themes
```

**3.** 下载主题

```shell
$ git clone https://github.com/dmoosocool/hexo-theme-diaspora themes/disapora
```

**4.** 拷贝 `default._config.yml` 文件到你的 **hexo** 的主目录.

```sh
$ mv _config.yml bak._config.yml
$ cp themes/disapora/default._config.yml ./_config.yml
```

**5.** 修改`post.md` 脚手架 (${hexo_root}/scaffolds/post.md).

```shell
$ cd ${hexo_root}
$ vi _config.yml
```

```yaml
---
title: {{ title }}
date: {{ date }}
tags: 
mp3:
pic:
---

```

**6.** 设置你的leancloud的appId和appKey (${hexo_root}/themes/diaspora/source/lib/leancloud.js)

```shell
$ cd ${hexo_root}
$ vi themes/diaspora/source/lib/leancloud.js
```

- 找到文件头部

```javascript
;(function(window, undefined){
  var leancloud = {
    appId: 'bmBLlAnGqYMrkdSpw1HmjPiy-gzGzoHsz',  // upgrade yours appId.
    appKey: 'JYawwvAvz8dkzdYAu4qh1RnF',			// upgrade yours appKey.
    ...
  };
  ...
}(window);
```

- 如何获取leancloud的appId和appKey， 请看此文档: https://valine.js.org/quickstart/ 

**7.** 根据配置文件信息修改 `_config.yml`.

**8.** 启动hexo

```shell
$ cd ${hexo_root}
$ hexo clean && hexo g && hexo s
```

**9.** 恭喜

看看你漂亮的hexo博客吧~ 打开浏览器访问: http://localhost:4000



## 升级主题

```shell
$ cd themes/disapora
$ git pull
```



## 已完成的功能项

**1.** UI 重写于[disapora](https://github.com/LoeiFy/Diaspora).

**2.** 使用[Valine](https://github.com/xCss/Valine)评论系统.

**3.** Helper: [getCategoryList.js](https://github.com/dmoosocool/hexo-theme-diaspora/blob/master/scripts/helper/getCategoryList.js). 关联相关文章.

**4.** Helper: [getArticleCount.js](https://github.com/dmoosocool/hexo-theme-diaspora/blob/master/scripts/helper/getArticleCount.js). 计算文章文字数.

**5.** Helper: [getArticlePic.js](https://github.com/dmoosocool/hexo-theme-diaspora/blob/master/scripts/helper/getArticlePic.js). 动态获取文章图片, 如果你使用了[七牛云存储](https://www.qiniu.com).

**6.** Lib: [leancloud.js](https://github.com/dmoosocool/hexo-theme-diaspora/blob/master/source/lib/leancloud.js). 使用[LeanCloud](https://leancloud.cn/)存储文章的阅读数, 喜欢数.

**7.** 友链页面.

**8.** 关于页面.



## 问题&需求

如果你发现任何问题或者有需求,  请尽可能的写一个详细的 [issue](https://github.com/dmoosocool/hexo-theme-diaspora/issues).



## 感谢

- [hexo](https://github.com/hexojs/hexo)
- [@LoeiFy](https://github.com/LoeiFy/diaspora)
- [Valine](https://github.com/xCss/Valine) ( **一个漂亮的评论系统**)
- [七牛](https://www.qiniu.com)
- [LeanCloud](https://leancloud.cn/)
- 并且感谢使用这个主题的可爱的你. (≧∇≦)ﾉ 



## 作者

**hexo-theme-diaspora** © [dmoosocool](https://github.com/dmoosocool),  根据[MIT](https://github.com/dmoosocool/hexo-theme-diaspora/blob/master/LICENSE)许可证发布.

> Blog [@dmoosocool](https://www.kya.cc) · GitHub [@dmoosocool](https://github.com/dmoosocool) 