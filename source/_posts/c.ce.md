---
title: Hugo 初体验
cover: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/2020/10.d40irk16zu.png'
categories:
  - Hugo
tags:
  - Hugo
abbrlink: 38922
date: 2020-09-04 20:13:00
---

## 前言
`Hugo`是由Go语言实现的静态网站生成器。简单、易用、高效、易扩展、快速部署

{% note primary no-icon %}
本机环境：Window10、Git
{% endnote %}
 
## 快速开始
到[`Hugo Releases`](https://github.com/gohugoio/hugo/releases) 下载对应的操作系统版本的Hugo二进制文件

推荐扩展版，可以修改scss文件


{% folding blue, 查看图片 %}

![](https://p.ananas.chaoxing.com/star3/origin/e1a84a695976da854d0d4d36091bf02a.jpg)

{% endfolding %}

配置系统环境变量

{% folding blue, 查看图片 %}

![](https://p.ananas.chaoxing.com/star3/origin/895a73a6f2cd7155131996d3ec436adf.jpg)

{% endfolding %}

查看Hugo版本

```powershell
$ hugo version
Hugo Static Site Generator v0.74.3/extended windows/amd64 BuildDate: unknown
```

## 生成站点

使用Hugo快速生成站点，我希望生成到当下目录`myblog`文件夹中

```powershell
hugo new site myblog
cd myblog
```
站点目录结构

{% note info  no-icon %}
.
├── archetypes
│   └── default.md
├── config.toml
├── content
├── data
├── layouts
├── static
└── themes

{% endnote %}

## 安装主题

这里使用的是[`LeaveIt`](https://github.com/liuzc/LeaveIt)，一款简约的Hugo主题

```powershell
cd themes
git clone https://github.com/liuzc/LeaveIt.git
```
## 主题配置

复制`themes/LeaveIt/exampleSite`下`config.toml`和`content`覆盖到站点根目录

这样可以避免一些麻烦，接下来运行Hugo

```powershell
hugo server
```

浏览器里打开： http://localhost:1313

{% folding blue, 查看图片 %}

![](https://p.ananas.chaoxing.com/star3/origin/120a52c7c219f3e615d178ba778c5c8b.jpg)

{% endfolding %}

### 设置网站图标

推荐制作[`Favicons`](https://realfavicongenerator.net/)，除了web浏览器，还会生成手机桌面图标。

生成图标后，下载软件包复制到`myblog/static`中

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
```

### 设置菜单

参考exampleSite中的config.toml

```
[menu]
  [[menu.main]]
    name = "Blog"
    url = "/posts/"
    weight = 1
  [[menu.main]]
    name = "Categories"
    url = "/categories/"
    weight = 2
  [[menu.main]]
    name = "Tags"
    url = "/tags/"
    weight = 3
  [[menu.main]]
    name = "About"
    url = "/about/"
    weight = 4
```
### 设置链接

使用的是 iconfont，只添加了如下的社交账号图标

配置Social链接也可以制作自己的iconfont文件

```
[params.social]
    GitHub = "xxoo"
    Twitter = "xxoo"
    Email   = "xxoo"
    Instagram = "xxoo"
    Wechat = "/images/me/wechat.jpeg"  # Wechat QRcode image
    Facebook = "xxoo"
    Telegram = "xxoo"
    Dribbble = "xxoo"
    Medium = "xxoo"
```


### 添加内容


发现菜单栏有`About`和`About Hugo`有重复的地方

打开刚才复制的`myblog/content/about.md`

```
+++
title = "About Hugo"
date = "2014-04-09"
menu = "main"
+++

Hugo is the **world’s fastest framework for building websites**. It is written in Go.

It makes use of a variety of open source projects including:

* https://github.com/russross/blackfriday
* https://github.com/alecthomas/chroma
* https://github.com/muesli/smartcrop
* https://github.com/spf13/cobra
* https://github.com/spf13/viper

Learn more and contribute on [GitHub](https://github.com/gohugoio).


```
更多的设置，参考[`官方文档`](https://www.gohugo.org/doc/content/front-matter/)

```bash
title = "About Hugo"				# 内容标题
menu = "main"				        # 菜单定义
description: "spf13-vim"			# 内容描述
date = "2017-01-02T17:45:06+08:00"	        # 内容排序的日期
categories = ["Development","VIM"]	        # 分类
tags = ["Blog", "Hugo"]				# 标签
url = "new_start"				# 文章访问时相对url，默认为文件名
```


## 自定义 JS/CSS

### 自定义主题样式

如果你想修改主题的字体和链接的颜色，在`myblog/themes/LeaveIt/assets/css/_varibales/default.scss`中修改变量值

如果还有其他个性化的样式要求哦，在`myblog/themes/LeaveIt/assets/css/_custom.scss`中添加

### 引入 JS

在`myblog/themes/LeaveIt/layouts/partials`中新建`_custom.html`

在`myblog/themes/LeaveIt/layouts/partials/footer.html`中添加

```html
{{ partial "js.html" . }}
```
### 引入 css

在`myblog/themes/LeaveIt/layouts/partials/css.html`中添加

```html
<link rel="stylesheet" href="http://at.alicdn.com/t/font_2048431_n80qtofc5i8.css">
```



## 主题优化

一些个性化小修改和对主题的小优化

### 规范化

所有相对url会改为规范化使用`baseurl`，可以解决本地预览静态文件时出现样式丢失的问题

在`config.toml`中需要添加

```
canonifyurls = true
```

### 呈现 HTML


{% tabs tab-id %}
<!-- tab 问题 -->

`Goldmark`成为新的默认`Markdown`渲染器

在`Goldmark`中，默认设置是不呈现原始`HTML`标签

`F12`检查会发现以下注释，

```bash
<!-- raw HTML omitted -->
```
<!-- endtab -->

<!-- tab 方法1 -->


在`config.toml`中添加，设置blackfriday为默认的markdown引擎

```
[markup]
  defaultMarkdownHandler = "blackfriday"
```


<!-- endtab -->

<!-- tab 方法2 -->


在`config.toml`中添加，使用goldmark和markup.goldmark.renderer设置unsafe = true

```
[markup]
  defaultMarkdownHandler = "goldmark"
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
```

<!-- endtab -->
{% endtabs %}





### iconfont 图标


{% tabs tab-id %}
<!-- tab 效果 -->

我选用了三个图标，其实不要忘记主题其他地方还有用到的几个图标

我就是忘记了，那个爱心图标就没有了

{% folding blue, 查看图片 %}

![](https://p.ananas.chaoxing.com/star3/origin/20c0797633913cb4bb548e5d5ed87f68.jpg)

{% endfolding %}

<!-- endtab -->

<!-- tab 方法 -->


进入阿里[`iconfont`](https://www.iconfont.cn/)字体图标建立项目后下载至本地

复制解压后的字体文件覆盖`myblog/themes/LeaveIt/assets/font`

{% folding blue, 查看图片 %}

![](https://p.ananas.chaoxing.com/star3/origin/9b1e6ec7d86e6bf58da88611b266556a.jpg)

{% endfolding %}

在myblog/themes/LeaveIt/layouts/partials/social.html中清空内容后添加

```html
{{ with .Site.Params.Social.Qq}}
<a href="javascript:void(0);" rel="me noopener" onclick="document.getElementById('qq-lightbox').style.display='inline';"><i class="iconfont icon-QQ"></i></a>
{{end}}

{{ with .Site.Params.Social.Weixin}}
<a href="javascript:void(0);" rel="me noopener" onclick="document.getElementById('wx-lightbox').style.display='inline';"><i class="iconfont icon-weixin"></i></a> 
{{end}}

{{ with .Site.Params.Social.Alipay}}
<a href="javascript:void(0);" rel="me noopener" onclick="document.getElementById('alipay-lightbox').style.display='inline';"><i class="iconfont icon-zhifubao"></i></a>
{{end}}
```

我用的三个图标都是需要填写二维码图片，但是只有一个`lightbox`盒子

最简单的方法就是准备三个`lightbox`盒子

在`myblog/themes/LeaveIt/layouts/partials/home_profile.html`中添加，使用goldmark和markup

```
{{ if .IsHome }}
 {{ partial "weixin.html" . }}
 {{ partial "qq.html" . }}
 {{ partial "alipay.html" . }}
{{ end }}
```
在`myblog/themes/LeaveIt/layouts/partials/`中新建`qq.html`和`alipay.html`

清空`weixin.html`、`qq.html`和`alipay.html`内容后修改

{% folding blue, 查看代码 %}

{% folding cyan, weixin.html %}



```html
{{ $cdn_url := .Scratch.Get "cdn_url" }}
{{ with .Site.Params.Social.Weixin}}

{{ $weixin := .}}

<style type="text/css">
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
}

.center {
    width: 220px;
    height: 220px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -110px;
}

.center img {
    width: 220px;
}

.center i {
    color: #fff;
    font-size: 1.5em;
    position: relative;
    float: right;
    top: 0px;
    right: -20px;
    cursor: pointer;
}
</style>
<!-- LIGHTBOX CODE BEGIN -->

<div id="wx-lightbox" style="display: none" class="lightbox" onclick="document.getElementById('wx-lightbox').style.display='none';">
    <div class="center">
        <i class="iconfont icon-close"></i>
        <img src="{{ printf "%s%s" $cdn_url $weixin}}">
    </div>
</div>
<!-- LIGHTBOX CODE END -->
{{ end }}
```


{% endfolding %}

{% folding yellow, qq.html %}



```html
{{ $cdn_url := .Scratch.Get "cdn_url" }}
{{ with .Site.Params.Social.Qq}}

{{ $qq := .}}

<style type="text/css">
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
}

.center {
    width: 220px;
    height: 220px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -110px;
}

.center img {
    width: 220px;
}

.center i {
    color: #fff;
    font-size: 1.5em;
    position: relative;
    float: right;
    top: 0px;
    right: -20px;
    cursor: pointer;
}
</style>
<!-- LIGHTBOX CODE BEGIN -->

<div id="qq-lightbox" style="display: none" class="lightbox" onclick="document.getElementById('qq-lightbox').style.display='none';">
    <div class="center">
        <i class="iconfont icon-close"></i>
        <img src="{{ printf "%s%s" $cdn_url $qq}}">
    </div>
</div>
<!-- LIGHTBOX CODE END -->
{{ end }}
```


{% endfolding %}

{% folding red, alipay.html %}



```html
{{ $cdn_url := .Scratch.Get "cdn_url" }}
{{ with .Site.Params.Social.Alipay}}

{{ $alipay := .}}

<style type="text/css">
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
}

.center {
    width: 220px;
    height: 220px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -110px;
}

.center img {
    width: 220px;
}

.center i {
    color: #fff;
    font-size: 1.5em;
    position: relative;
    float: right;
    top: 0px;
    right: -20px;
    cursor: pointer;
}
</style>
<!-- LIGHTBOX CODE BEGIN -->

<div id="alipay-lightbox" style="display: none" class="lightbox" onclick="document.getElementById('alipay-lightbox').style.display='none';">
    <div class="center">
        <i class="iconfont icon-close"></i>
        <img src="{{ printf "%s%s" $cdn_url $alipay}}">
    </div>
</div>
<!-- LIGHTBOX CODE END -->
{{ end }}
```


{% endfolding %}


{% endfolding %}



在`config.toml`中添加

```
[params.social]
     Qq = "https://p.ananas.chaoxing.com/star3/origin/df2699647f6df1fa35697ece8227be86.jpg"
     Weixin = "https://p.ananas.chaoxing.com/star3/origin/6383ab99018994bec391fdfea4dd8575.jpg"
     Alipay = "https://p.ananas.chaoxing.com/star3/origin/f0926dc26f0826461cb1c6274f3842e8.jpg"
```



<!-- endtab -->

{% endtabs %}



### 夜间模式

夜间模式下，切换文章会有闪烁

在`myblog/themes/LeaveIt/assets/js/main.js`中修改

```js
    _Blog.toggleTheme = function() {
        const currentTheme = window.localStorage && window.localStorage.getItem('theme')
        const isDark = currentTheme === 'dark'
        // $('body').toggleClass('dark-theme', isDark)
        $('.theme-switch').on('click', () => {
            $('body').toggleClass('dark-theme')
            window.localStorage &&
                window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light', )
        })
    }
```
在`myblog/themes/LeaveIt/layouts/partials`中添加

```js
<script>
    const currentTheme = window.localStorage && window.localStorage.getItem('theme')
    const isDark = currentTheme === 'dark'
    if (isDark) {
        document.body.classList.add('dark-theme')
    }
</script>
```



### 修改底部版权信息

去掉`Powered by Hugo & LeaveIt`，修改工信部备案错误的网站

在`myblog/themes/LeaveIt/layouts/partials/footer.html`中修改

```html
<footer class="footer">
    <div class="copyright">
        &copy; {{ with .Site.Params.since }}
        <span itemprop="copyrightYear">{{.}} - {{ now.Year }}</span> {{ end }}
        <span class="with-love">
    	 <i class="iconfont icon-love"></i> 
         </span> {{ if .Site.Params.author }}
        <span class="author" itemprop="copyrightHolder"><a href="{{ .Site.BaseURL }}">{{ .Site.Params.author  }}</a> </span> {{ end }} {{ with .Site.Params.beian }}
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="external nofollow">{{ . }} </a> | {{ end }}

        <!-- <span>Powered by <a href="https://gohugo.io/" target="_blank" rel="external nofollow">Hugo</a> & <a 	href="https://github.com/liuzc/leaveit" target="_blank" rel="external nofollow">LeaveIt</a></span> -->

    </div>
    <script>
        const currentTheme = window.localStorage && window.localStorage.getItem('theme')
        const isDark = currentTheme === 'dark'
        if (isDark) {
            document.body.classList.add('dark-theme')
        }
    </script>

</footer>

{{ partial "js.html" . }}
```

### 修改引用样式

在`myblog/themes/LeaveIt/assets/css/_common/_core/base.scss`中修改

```css
blockquote {
    display: block;
    border-width: 1px 0;
    border-left: .2em solid $light-blockquote-color;
    color: #6a737d;
    padding: 1em 1em .5em 1em;
    margin: 1em 0 1em 0;
    position: relative;
}
```

在`myblog/themes/LeaveIt/assets/css/_varibales/default.scss`中修改变量

{% folding blue, 查看图片 %}


![](https://p.ananas.chaoxing.com/star3/origin/6dc3560d0c0f2e042d473c4d409aada4.jpg)

{% endfolding %}

### LightGallery 失效

在`myblog/themes/LeaveIt/layouts/_default/single.html`中修改

```html
{{ end }}
<!-- end featured_image-->

{{ $reAltIn := "<img src=\ "([^\"]+)\ " alt=\"([^\ "]+)?\">" }} {{ $reAltOut := ( printf "
<figure><img src=\ "/images/ring.svg\" data-sizes=\ "auto\" data-src=\ "%s$1\" alt=\ "$2\" class=\ "lazyload\">
    <figcaption class=\ "image-caption\">$2</figcaption>
</figure>" $cdn_url ) }} {{ $altContent := .Content | replaceRE $reAltIn $reAltOut | safeHTML }}
```


### 顶部进度条


在`myblog/themes/LeaveIt/layouts/partials`中新建`scoll.html`

```css
<script src="https://cdn.jsdelivr.net/gh/yimijianfang/MyScroll@master/docs/MyScroll.min.js"></script>
<script>let scroll=new MyScroll({"showBar":true,"color":"#1B9AF7","height":"3px","debug":false,"event":[]});</script>
```
在`myblog/themes/LeaveIt/layouts/page/single.html`中修改

其实可以放在很多模板文件中，这里只有关于页面和文章页面才生效

```html
{{ define "content" }}
{{ partial "scoll.html" . }}
<div class="post-warp archive">
    <h2 class="post-title" style="text-align:right;padding-bottom:2em">{{ .Title }}</h2>
    <div class="post-content">
        {{ .Content }}
        
    </div>
</div>
{{end }}
```

## Tag Plugins



复制[`我的scss`](http://d0.ananas.chaoxing.com/download/f5f2a3ca234c40b2f4b4d7d2b66d6a09?fn=_custom)，覆盖`myblog/themes/LeaveIt/assets/css/_custom.scss`


### Note 

{% tabs tab-id %}

<!-- tab 效果 -->

![](https://p.ananas.chaoxing.com/star3/origin/cdd6c50b9d271395eccd0334e31be4ff.jpg)

<!-- endtab -->

<!-- tab 方法 -->

```html
<div class="snote info"><p>info</p></div>
<div class="snote success"><p>success</p></div>
<div class="snote error"><p>error</p></div>
<div class="snote bug"><p>bug</p></div>
<div class="snote idea yellow"><p>idea-yellow</p></div>
<div class="snote link blue"><p>link- blue</p></div>
<div class="snote msg cyan"><p>msg cyan</p></div>
<div class="snote download"><p>download</p></div>
```

<!-- endtab -->

{% endtabs %}

### Tag-Hide




{% tabs tab-id %}

<!-- tab 效果 -->


{% folding blue, 查看图片 %}

假装有图

{% endfolding %}


<!-- endtab -->

<!-- tab 方法 -->

需要填写`src`引用的URL

```html
<details blue=""><summary><p>参考图片</p></summary><div class="content"><figure><img src=""data-sizes="auto"data-src=""alt="UqpSyL"class="lazyautosizes lazyloaded"sizes="446px"><figcaption class="image-caption"></figcaption></figure></div></details>
```

<!-- endtab -->

{% endtabs %}





### 按钮




{% tabs tab-id %}

<!-- tab 效果 -->


<center>
<a
  style="color: #1B9AF7;"
  href="https://sang.pub/posts/38922/"
  class="button button-glow button-border button-rounded button-primary"
  >这是效果</a
>
<center>

<!-- endtab -->

<!-- tab 方法 -->

[`BUTTONS`](https://www.bootcss.com/p/buttons/)是一个高度可定制的、免费并且开源的按钮 CSS 样式库

需要填写`href`引用的URL


```html
<center style="padding-bottom: 10px;">
<a style="color: #1B9AF7;" href="" class="button button-glow button-border button-rounded button-primary" data-pjax-state="">查看效果</a>
</center>
```



<!-- endtab -->

{% endtabs %}






## 自动化部署


我们新建一个仓库，在`myblog`下打开

```powershell
vim .travis.yml
```

申请[`github-token`](https://github.com/settings/tokens/new)，勾选`repo`权限

写入以下内容，记得修改`github-token的值`

```powershell
dist: bionic
language: python # 默认是ruby
python: 3.7

install:
  # nuo主题需要extended版本的hugo，其他主题可以用最新的普通版本就行
  - wget https://github.com/gohugoio/hugo/releases/download/v0.58.3/hugo_extended_0.58.3_Linux-64bit.deb
  - sudo dpkg -i hugo*.deb

script:
  - hugo

# 构建完成后会自动更新Github Pages
deploy:
  provider: pages
  skip-cleanup: true
  local-dir: public
  target-branch: master
  github-token: 34bf82361456789b8fd82c088dd1f790d18dc
  keep-history: true
  on:
    branch: source

```
新建`source`分支并提交

```powershell
git config --global user.name "yourname"
git config --global user.email "youremail"
git config user.name
git config user.email
git init
git remote add origin https://github.com/haikesikejiqiang/hugo.git
git add .
git commit -m "first push"
git branch -a
git branch source
git checkout source
git push origin source
```

使用`Github`注册[`Travis CI`](https://travis-ci.com/account/repositories)激活我们所有的`GitHub`存储库


{% folding blue, 查看图片 %}

![](https://p.ananas.chaoxing.com/star3/origin/2b607565873697626a3b1be5c5353709.jpg)

{% endfolding %}


选择我们需要部署的仓库，进入右上角的设定

添加一条环境变量，分别为`GITHUB_TOKEN` 和`github-token的值`

{% folding blue, 查看图片 %}

![](https://p.ananas.chaoxing.com/star3/origin/0ab6589b1e3998558ff86f6cc2e8276f.jpg)

{% endfolding %}

所有步骤已经完成，仓库没有任何变化，所以没有部署

在仓库随便给一个`Markdown`文件添加换行或者空格提交

{% folding blue, 查看图片 %}

![](https://p.ananas.chaoxing.com/star3/origin/53e1fe617f96e156c5520b044f9523da.jpg)

{% endfolding %}

## 托管 vercel

注册[`vercel`](https://vercel.com/)需要注意不能使用腾讯邮箱，否则无法登录

可以选择导入项目或者导入模块，都支持`Hugo`和`Hexo`

## 后记

`Hugo`比`Hexo`好玩多了

{% folding blue, 参考文档 %}

[`Hugo中文文档`](https://www.gohugo.org/)

[`LeaveIt主题的一些小优化`](https://www.telami.cn/2020/optimize-the-leaveit-theme/)

{% endfolding %}

