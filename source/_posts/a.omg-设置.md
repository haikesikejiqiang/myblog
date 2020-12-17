---
title: OneManager 后台设置
cover: 'https://cdn.jsdelivr.net/gh/haikesikejiqiang/picred@master/2020/05/29/wallpaper2.jpg'
abbrlink: 15559
categories:
  - 综合技术
  - 云函数
tags:
  - 云函数
date: 2020-07-31 23:55:00
---

## 前言

云函数用户，在对文件操作不会立即生效。或者刷新时而生效时而不生效，是因为缓存系统会有旧缓存

## 后台变量 
一些基本设置，有些设置非必要
### adminloginpage
如果设置这个参数，登录按钮及页面被隐藏。管理登录的页面不再是 `?admin`，而是手动在网盘地址后改为`?此设置的值`

### background
自定义背景图片，设置一个url作为背景

### customCss
自定义css样式，隐藏复制所有复制下载链接按钮

```
<style>.file button{display:none}</style>
```
### customScript
自定义js样式，在所有页都会存在，http重定向跳转到https

```html
<script type="text/javascript">
    var targetProtocol = "https:";
    if (window.location.protocol != targetProtocol)
        window.location.href = targetProtocol + window.location.href.substring(window.location.protocol.length);
</script>
```

### customTheme
自定义主题，放一个html格式的主题的url

```
https://cdn.jsdelivr.net/gh/kizx/onemoe-theme/onemoe.html
```
### disableShowThumb
如果填 1，将不显示缩略图按钮和功能，默认不填
### hideFunctionalityFile
0 或 1。如果 1, 某些文件不列表给游客看，但它的功能正常，比如readme.md
### passfile
自定义密码文件的名字，可以是`ppp`，也可以是`qqq.txt`等等；列目录时不会显示，只有知道密码才能查看或下载此文件。在目录下新建一个密码文件，密码是这个文件的内容，可以空格、可以中文
### sitename
设置网站名称
#### theme
切换内置主题
#### timezone
设置默认时区，一般写8

## 多盘设置
添加Onedrive盘
### diskname
这个盘你想显示什么名称
### domain_path
使用多个自定义域名时，指定不同的域名看到不同的目录。如果只有一个域名，那么与public_path作用相同，指定子目录路径

```
a1.com:/dirto/path1|b1.com:/path2
```

### downloadencrypt
0 或 1。如果 1, 那加密目录内的文件可以不需要密码就能下载但是无法在网页浏览
### guestup_path
设置游客上传路径（图床路径），不设置这个值时该目录内容会正常列文件出来，设置后只有上传界面，不显示其中文件（登录后显示）
### public_path
设置该盘的显示的根目录，默认为`/`，显示全部。也可以设置不同路径的文件夹作为当前网盘的目录，可以设置为`/public/uploads/`。有了这个功能，即使只有一个onedrive账号，我们也可以通过重复绑定同一个账号来生成多盘，然后每个盘的public_path设置为不同的路径，这样可以将一个盘的功能分开

## 进阶设置
一些页面美化和进阶升级设置
### 设置网站ico图标
在网盘根目录下上传`favicon.ico`图片，或者customCss全局设置

```
<link rel="icon" href="https://cloud.tencent.com/favicon.ico" type="image/x-icon">
```
### 随机背景图片
background填写随机背景图片api

```
https://img.xjh.me/random_img.php?type=bg&ctype=acg&return=302  
https://api.dujin.org/pic/
https://api.paugram.com/wallpaper/
https://s0.xinger.ink/acgimg/acgurl.php
https://acg.xydwz.cn/api/api.php
https://api.btstu.cn/sjbz/api.php?lx=dongman&format=images
http://api.mtyqx.cn/api/random.php
https://api.yuzhitu.cn//sjbz/api.php
http://api.52yi.vip/api
https://api.ixiaowai.cn/api/api.php
http://www.dmoe.cc/random.php
https://acg.yanwz.cn/wallpaper/api.php
https://api.ixiaowai.cn/mcapi/mcapi.php
https://api.ixiaowai.cn/gqapi/gqapi.php
```
### 设置自定义页面
如果一个目录下有名为index.html的文件，则直接显示该文件，可以利用这个功能设置一个自定义页面或者用于隐藏一个特定页面，相当于部署了一个静态页面
### 设置顶部和底部说明文字
在需要展示顶部说明的目录下新建一个`head.md`文件，在文件里写入说明内容即可，这是一个markdown文件，可以使用markdown语言进行书写。
底部说明说明文字对应的是`readme.md`文件，规则与顶部文字一样
### 利用head.omf设置一言
head.omf作用和head.md一样，区别是他不支持markdonw语言，但是支持html语言，可以写入html、css、js内容。在想展示一言的目录新建`head.omf`文件

```html
<p id="hitokoto">:D 获取中...</p>
<script>
    fetch('https://v1.hitokoto.cn')
        .then(response => response.json())
        .then(data => {
            const hitokoto = document.getElementById('hitokoto')
            hitokoto.innerText = data.hitokoto
        })
        .catch(console.error)
</script>
```
### 利用foot.omf设置Valine评论
使用Valine也是基本操作了，新建`foot.omf`，写入以下内容

```html
<script src='//cdn.jsdelivr.net/npm/valine/dist/Valine.min.js'></script>
<div id="vcomments"></div>
<script>
    new Valine({
        el: '#vcomments',
        appId: '你获取的AppID',
        appKey: '你获取的AppKey'
    })
</script>
```
### 设置动态背景
给[背景](https://pornhup.me/index/public/test/)设置常见js网页特效，比如雪、粒子线条、彩条等动态效果。如果将代码放在omf文件里则只能在当前目录有效果，下面是[雪花特效预览](https://pornhup.me/index/public/test/3d-snow)
```html
<div class="snow-container"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/haikesikejiqiang/picred@master/2020/05/29/3d-snow.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/haikesikejiqiang/picred@master/2020/05/29/jquery-3.4.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/haikesikejiqiang/picred@master/2020/05/29/snow.js"></script>
```

### 美化自定义登录页面
修改common.php相应地方，添加以下内容
![](https://p.ananas.chaoxing.com/star3/origin/78a8453a9887e93c4729367288c1d3cb.png)

```php
$html .= '
    <style>body{background-image:linear-gradient(60deg,#343b44 0%,#485563 100%);background-attachment:fixed;color:#343b44}body>div{position:absolute;text-align:center;background-color:rgba(221,221,221,.5);border-radius:20px;width:75vw;max-width:500px;height:350px;margin:auto;top:25%;bottom:50%;left:0;right:0}body>div:hover{box-shadow:3px 3px 6px 3px rgba(0,0,0,.3)}h4{font-size:40px}input{font-size:20px;margin:2%auto;border:#343b44 2px solid;border-radius:10px;padding:10px;height:50px;text-align:center}input:last-of-type{color:#343b44;height:50px;width:80px;font-weight:800}input:hover:last-of-type{cursor:pointer;color:#ddd;background-color:#485563}</style>
    <body>
    <div>
      <center><h4>'.getconstStr('InputPassword').'</h4>
      <form action="" method="post">
          <div>
            <input name="password1" type="password"/>
            </br>
            <input type="submit" value="'.getconstStr('Login').'">
          </div>
      </form>
      </center>
    </div>
';
```

### 设置全局背景
复制下面填入customCss里就可以了，[效果预览](https://pornhup.me/)
```html
<style>
    body {
        background: -webkit-linear-gradient( 0deg, rgba(247, 149, 51, 0.1) 0, rgba(243, 112, 85, 0.1) 15%, rgba(239, 78, 123, 0.1) 30%, rgba(161, 102, 171, 0.1) 44%, rgba(80, 115, 184, 0.1) 58%, rgba(16, 152, 173, 0.1) 72%, rgba(7, 179, 155, 0.1) 86%, rgba(109, 186, 130, 0.1) 100%);
        background: -moz-linear-gradient( 0deg, rgba(247, 149, 51, 0.1) 0, rgba(243, 112, 85, 0.1) 15%, rgba(239, 78, 123, 0.1) 30%, rgba(161, 102, 171, 0.1) 44%, rgba(80, 115, 184, 0.1) 58%, rgba(16, 152, 173, 0.1) 72%, rgba(7, 179, 155, 0.1) 86%, rgba(109, 186, 130, 0.1) 100%);
        background: -o-linear-gradient( 0deg, rgba(247, 149, 51, 0.1) 0, rgba(243, 112, 85, 0.1) 15%, rgba(239, 78, 123, 0.1) 30%, rgba(161, 102, 171, 0.1) 44%, rgba(80, 115, 184, 0.1) 58%, rgba(16, 152, 173, 0.1) 72%, rgba(7, 179, 155, 0.1) 86%, rgba(109, 186, 130, 0.1) 100%);
        background: -ms-linear-gradient( 0deg, rgba(247, 149, 51, 0.1) 0, rgba(243, 112, 85, 0.1) 15%, rgba(239, 78, 123, 0.1) 30%, rgba(161, 102, 171, 0.1) 44%, rgba(80, 115, 184, 0.1) 58%, rgba(16, 152, 173, 0.1) 72%, rgba(7, 179, 155, 0.1) 86%, rgba(109, 186, 130, 0.1) 100%);
        background: linear-gradient( 90deg, rgba(247, 149, 51, 0.1) 0, rgba(243, 112, 85, 0.1) 15%, rgba(239, 78, 123, 0.1) 30%, rgba(161, 102, 171, 0.1) 44%, rgba(80, 115, 184, 0.1) 58%, rgba(16, 152, 173, 0.1) 72%, rgba(7, 179, 155, 0.1) 86%, rgba(109, 186, 130, 0.1) 100%);
    }
</style>
```

> 文章参考 [Onedrive云盘程序——OneManager小白设置指南](https://www.2bboy.com/archives/176.html)
