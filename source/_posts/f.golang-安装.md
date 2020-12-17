---
title: Golang 环境安装
cover: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/2020/13.1fdgqvzcrq8w.png'
categories:
  - Centos
  - Golang
tags:
  - Golang
abbrlink: 31361
date: 2020-11-03 23:50:00
---


## 前言

{% note primary no-icon %}
本机系统：CentOS 7.5
{% endnote %}

 - `源码安装`：标准的软件安装方式，可以定制，表示不会使用
 - `标准包安装`：`Go`提供了方便的安装包，并支持各种系统，适合快速安装，表示强烈推荐
 - `第三方工具安装`：比较推荐多版本管理工具`gvm`，不推荐使用软件包管理器`yum、apt、homebrew`安装旧版本

## 安装

下载Go发行版安装到指定位置`/opt/go`

```shell
wget https://studygolang.com/dl/golang/go1.15.2.linux-amd64.tar.gz
tar -xzf go1.15.2.linux-amd64.tar.gz -C /opt
```

修改配置文件

```shell
cp /etc/profile /etc/profile.bak
vi /etc/profile
```
添加环境变量

```shell
export GOROOT=/opt/go
export PATH=$PATH:$GOROOT/bin
```

立即生效
```shell
source /etc/profile
```

查看版本

```shell
go version
```

## 测试

新建`hello.go `

```shell
vi hello.go
```
写入以下内容
```go
package main

import "fmt"

func main() {
    fmt.Printf("hello, world\n")
}
```
接着运行

```shell
[root@sangpub ~]# go run hello.go
hello, world
```
## 查看环境信息
打印`Go`的环境信息
```shell
go env
```

`GOARCH`：目标处理器架构
`GOBIN`：编译后文件目录
`GOHOSTOS`： 目标操作系统
`GOPATH`：当前工作目录
`GOROOT`：标准包安装目录
```shell
... 

GO111MODULE="on"
GOARCH="amd64"
GOBIN=""
GOCACHE="/root/.cache/go-build"
GOENV="/root/.config/go/env"
GOEXE=""
GOFLAGS=""
GOHOSTARCH="amd64"
GOHOSTOS="linux"
GOINSECURE=""
GOMODCACHE="/root/go/pkg/mod"
GONOPROXY=""
GONOSUMDB=""
GOOS="linux"
GOPATH="/root/go"
GOPRIVATE=""
GOPROXY="https://goproxy.cn,direct"
GOROOT="/opt/go"
GOSUMDB="sum.golang.org"
GOTMPDIR=""

...
```
## GOPATH

Go 1.8 版本之后，GOPATH 默认在用户目录的 go 文件夹下

设置当前目录为工作目录
```shell
export GOPATH=`pwd`
source /etc/profile
```

## GOBIN
一般默认在`$GOPATH/bin`下

表示生成编译好的二进制文件在这里

## Goproxy

可能会出现以下错误，则需要修改[`Go`](https://goproxy.cn/)模块代理

```shell
[root@shanhe]# go build
go: github.com/Masterminds/sprig/v3@v3.1.0: Get "https://proxy.golang.org/github.com/%21masterminds/sprig/v3/@v/v3.1.0.mod": dial tcp 172.217.160.81:443: i/o timeout
```
Go 1.13 及以上（推荐）
```shell
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```
macOS 或 Linux
```shell
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
```



## go get
`go get`可以借助代码托管来获取源码进行编译安装，通常可以直接使用

获取前，请确保 GOPATH 已经设置

获取后，会存放在`$GOBIN`

```shell
go get -u github.com/caddyserver/xcaddy/cmd/xcaddy
```
