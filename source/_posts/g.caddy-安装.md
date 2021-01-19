---
title: Caddy 编译安装
cover: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/2020/14.3uesbltvuyw0.png'
categories:
  - Centos
  - Caddy
tags:
  - Caddy
abbrlink: 57765
date: 2020-11-04 01:50:00
---


## 前言

`Caddy 2`是功能强大的企业级开放源Web服务器，带有用`Go`语言编写的自动HTTPS

{% note primary no-icon %}
本机系统：CentOS 7.5
{% endnote %}

## 要求
Go  ≥ 1.14
```
[root@hecs-centos-7 ~]# go version
go version go1.15.2 linux/amd64
```
## caddy 安装
克隆存储库
```
git clone "https://github.com/caddyserver/caddy.git"
```
编译生成可执行文件`caddy`
```
cd caddy/cmd/caddy/
go build
```

确定`caddy`并在`PATH`环境变量中

```
echo $PATH
mv caddy /opt/go/bin
```
由于[`Go中的错误`](https://github.com/golang/go/issues/29228)，这些基本步骤不会嵌入版本信息。

如果需要版本，则需要参见Caddy的main.go文件将Caddy编译为依赖项而不是主模块
```
[root@hecs-centos-7 bin]# caddy version
(devel)
```
## xcaddy 安装
编译安装[`xcaddy`](https://github.com/caddyserver/xcaddy)在`$GOBIN`下

```
go get -u github.com/caddyserver/xcaddy/cmd/xcaddy
```

确保`xcaddy`并在`PATH`环境变量中

```
cd /root/go/bin
mv xcaddy /opt/go/bin
```
构建带有版本信息的 Caddy
```
cd /opt/go/bin
xcaddy build
```
使用`--with`进行插件构建

使用`@`自定义插件的版本

```
xcaddy build \
    --with github.com/caddyserver/nginx-adapter
	--with github.com/caddyserver/ntlm-transport@v0.1.1
```

查看版本
```
[root@hecs-centos-7 ~]# caddy version
v2.2.1 h1:Q62GWHMtztnvyRU+KPOpw6fNfeCD3SkwH7SfT1Tgt2c=
```

## 基本用法
在目录下新建`Caddyfile`
```
sang.pub

root * /home/hexoBlog
file_server
```

