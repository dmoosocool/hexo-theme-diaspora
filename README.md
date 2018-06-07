<h1 align="center">hexo-theme-diaspora</h1>

> A beautiful hexo theme.



## Demo

- [dmoo.cool](https://www.github.com/dmoosocool/dmoo.cool)



## Live Preview

- [kya.cc](https://kya.cc)
- [dmoo.cool](https://dmoo.cool)



## Introduction

diaspora theme for hexo.

A beautiful hexo theme, rewrite by [disapora](https://github.com/LoeiFy/Diaspora). thanks a lot[@LoeiFy](https://github.com/LoeiFy/diaspora).



## Installation

**1.** create a hexo blog init. (how to install hexo please to see [hexo](https://github.com/hexojs/hexo).)

```shell
$ hexo init Lolita
$ cd Lolita
```

**2.** check your **hexo root** directory. There must be `node_modules`, `source`, `themes` and other directories:

```shell
$ ls
_config.yml  node_modules  package.json  public  scaffolds  source  themes
```

**3.** download theme.

```shell
$ git clone https://github.com/dmoosocool/hexo-theme-diaspora themes/disapora
```

**4.** copy the `default._config.yml` file to your **hexo root** directory.

```sh
$ mv _config.yml bak._config.yml
$ cp themes/disapora/default._config.yml ./_config.yml
```

**5.** rewrite your configure.



## Upgrade theme

```shell
$ cd themes/disapora
$ git pull
```



## Already realized functions

**1.** UI rewrite by [disapora](https://github.com/LoeiFy/Diaspora).

**2.** use comment system by [Valine](https://github.com/xCss/Valine).

**3.** Helper: [getCategoryList.js](https://github.com/dmoosocool/hexo-theme-diaspora/blob/master/scripts/helper/getCategoryList.js). relation related articles.

**4.** Helper: [getArticleCount.js](https://github.com/dmoosocool/hexo-theme-diaspora/blob/master/scripts/helper/getArticleCount.js). finding count the number of words in the article.

**5.** Helper: [getArticlePic.js](https://github.com/dmoosocool/hexo-theme-diaspora/blob/master/scripts/helper/getArticlePic.js). dynamic get picture by article if used [qiniu OSS](https://www.qiniu.com).

**6.** Lib: [leancloud.js](https://github.com/dmoosocool/hexo-theme-diaspora/blob/master/source/lib/leancloud.js). likes, reads count storage by [LeanCloud](https://leancloud.cn/).

**7.** Links page.

**8.** About page.



## Bugs & Demand

if you find any bugs or demands, please write a as detailed as possible [issue](https://github.com/dmoosocool/hexo-theme-diaspora/issues).



## Thanks

- [hexo](https://github.com/hexojs/hexo)
- [@LoeiFy](https://github.com/LoeiFy/diaspora)
- [Valine](https://github.com/xCss/Valine) ( **a beautiful comment system.**)
- [qiniu OSS](https://www.qiniu.com)
- [LeanCloud](https://leancloud.cn/)
- and thank you used the beautiful hexo themes



## Author

**hexo-theme-diaspora** © [dmoosocool](https://github.com/dmoosocool), Released under the [MIT](https://github.com/dmoosocool/hexo-theme-diaspora/blob/master/LICENSE) License.

> Blog [@dmoosocool](https://www.kya.cc) · GitHub [@dmoosocool](https://github.com/dmoosocool) 