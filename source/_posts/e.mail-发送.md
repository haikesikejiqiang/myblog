---
title: NodeMail 暖暖小邮件
cover: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/2020/12.35lbodax7nm0.png'
categories:
  - Centos
  - NodeJs
tags:
  - NodeJs
abbrlink: 3053
date: 2020-10-06 23:50:00
---


## 前言

秋日里的暖暖小邮件，请给所有女孩一个家

[`NodeMail`](https://github.com/Vincedream/NodeMail)使用[`Nodemailer模块`](https://github.com/nodemailer/nodemailer)可发送能够爬取天气预报和ONE每日订阅的邮件


## 效果预览

**年少不知软饭香，错把青春插稻秧**

{% folding blue open, 效果图片 %}

![](https://p.ananas.chaoxing.com/star3/origin/5f524f2d4bf968d94c1f1a176d84d618.jpg)

{% endfolding %}


  
## 使用方法

推荐[`云开发`](https://workbench.aliyun.com)，这样就不需要我们的服务器

当然了，我们还需要守护这个进程才能在后台不中断运行

可以使用forever模块或者screen命令


```
git clone https://github.com/Vincedream/NodeMail
cd NodeMail
vi main.js
npm install
node main.js
```

### forever模块

[`forever`](https://github.com/foreversd/forever)是一个简单的CLI工具，用于确保给定脚本持续永久运行

```
npm install -g forever
```

查看帮助信息

```
forever -help
```

常用命令

```
forever start app.js
forever stop app.js
forever restart app.js
forever stopall
forever restartall
forever list
```

### screen命令

`screen`为多重视窗管理程序，可以实现后台运行


```
sudo su root

# Centos
yum install screen

# Debian/Ubuntu
apt install screen
```

查看帮助信息

```
screen -help
```

新建终端

```
screen -S test
```

恢复终端

```
screen -R test
```

查看已创建终端

```
screen -ls
```


