---
title: Butterfly主题添加Dplayer
cover: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/2020/11.2zxelen9jm00.png'
abbrlink: 44775
date: 2020-09-14 11:50:00
---



## 前言
哇，如此可爱的HTML5弹幕视频播放器
## 添加Dplayer

{% tabs tab-id %}

<!-- tab 方法 -->
在`myblog/themes/Pjax/layout/includes/Butterfly`中新建`player.pug`和`video.pug`


{% folding blue, 参考图片 %}

![](https://p.ananas.chaoxing.com/star3/origin/3ebb03be64302c47a45fc4481cfc3f43.jpg)

{% endfolding %}


当前目录下复制`layout.pug`内容粘贴到`player.pug`

我们需要引入`video.pug`，在`player.pug`中添加



```
    #body-wrap
      if theme.background
        - var is_photo = theme.background.startsWith('url') ? 'photo':'color'
        #web_bg(data-type=is_photo)

      include ./sidebar.pug
      include ./header/index.pug
      include ./video.pug
```

我们需要加载`DPlayer`文件，并且启用HLS支持

在`video.pug`中添加

```
.card
  .video
    #dplayer
    script(type='text/javascript', src='https://cdn.jsdelivr.net/npm/hls.js@latest')
    script(type='text/javascript', src='https://cdn.jsdelivr.net/gh/MoePlayer/DPlayer@master/dist/DPlayer.min.js')
    script(type='text/javascript', src='js/video.js')
```



在`myblog/themes/Butterfly/source/js`中新建`video.js`

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: '',
        type: 'hls',
    },
    pluginOptions: {
        hls: {
            // hls config
        },
    },
});
console.log(dp.plugins.hls); // Hls 实例
```



在`myblog/themes/Butterfly/layout/index.pug`中修改


```
extends includes/player.pug

block content
  include ./includes/mixins/post-ui.pug
  #recent-posts.recent-posts
    +postUI
    include includes/pagination.pug
```




<!-- endtab -->

<!-- tab 效果 -->


<div id="dplayer"></div>
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script src='https://cdn.jsdelivr.net/gh/MoePlayer/DPlayer@master/dist/DPlayer.min.js'></script>
<script src='https://cdn.jsdelivr.net/gh/haikesikejiqiang/picred@master/2020/03/13/dp.js'></script>


<!-- endtab -->

{% endtabs %}


