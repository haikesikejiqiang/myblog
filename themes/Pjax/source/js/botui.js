var botui = new BotUI("my-botui-app");
botui.message.add({
    delay: 500,
    content: "Hi, there"
}).then(function() {
    botui.message.add({
        delay: 610,
        content: "这里是山河"
    }).then(function() {
        botui.message.add({
            delay: 700,
            content: "一个可爱的蓝孩子~"
        })
    }).then(function() {
        botui.action.button({
            delay: 2000,
            action: [{
                    icon: 'play',
                    text: '然后呢',
                    value: 'next'
                },
                {
                    icon: 'stop',
                    text: "给爷爬",
                    value: "skip"
                }
            ]
        }).then(function(a) {
            "next" == a.value && next();
            "skip" == a.value && end()
        })
    });
    var next = function() {
            firstpart()
        },
        firstpart = (function() {
            botui.message.add({ // show a message

                content: '你叫什么名字' + ' 😃 '
            }).then(function() { // wait till its shown
                return botui.action.text({
                    addMessage: false, // show 'text' action
                    action: {
                        placeholder: 'Your name'
                    }
                });
            }).then(function(res) { // get the result
                botui.message.add({
                    human: true,
                    content: '我叫 ' + res.value + ' 😘 '
                });
            }).then(function() {
                botui.message.add({
                    delay: 400,
                    content: '这个名字难听极了，听好了'
                });
            }).then(function() {

                botui.message.add({
                    type: 'html',
                    content: "<img style='margin: 0 auto;vertical-align: middle;width: 100%;height: 100%;' src='https://p.ananas.chaoxing.com/star3/origin/6ae821dfdede10f3d16a6611dfaffb90.gif'>"
                })
            }).then(function() {

                botui.message.add({
                    type: 'html',
                    delay: 800,
                    content: '<span>我是你爹</span>' + ' ! '
                });
            }).then(function() {

                botui.message.add({
                    type: 'html',
                    delay: 800,
                    content: '<span>我是你爹</span>' + ' ! '
                });
            }).then(function() {

                botui.message.add({
                    type: 'html',
                    delay: 800,
                    content: '<span>我是你爹</span>' + ' ! '
                });
            }).then(function() {

                botui.message.add({
                    human: true,
                    type: 'html',
                    delay: 1800,
                    content: "<img style='margin: 0 auto;vertical-align: middle;width: 100%;height: 100%;' src='https://cdn.jsdelivr.net/gh/HCLonely/valine-face@1.0.1/bilibili_tv/baiyan.png'>"
                });
            }).then(function() {
                botui.action.button({
                    delay: 2000,
                    action: [{
                            icon: 'play',
                            text: '就这呀',
                            value: 'sure'
                        },
                        {
                            icon: 'stop',
                            text: "给爷爬",
                            value: "skip"
                        }
                    ]
                }).then(function(a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
});
var sure = function() {
        botui.message.add({
            type: 'html',
            content: "<img style='margin: 0 auto;vertical-align: middle;width: 100%;height: 100%;' src='https://p.ananas.chaoxing.com/star3/origin/64bcee5ca671c7c0e3e9504f0e1f22df.gif'>"
        }).then(function() {

            botui.message.add({
            	 delay: 1000,
                content: '打我呀，笨蛋' + ' ! '
            });
        }).then(function() {

            botui.message.add({
                human: true,
                delay: 1000,
                content: '就这就这就这啊，我还以为多狠呢装什么大哥逞什么英雄'
            });
        }).then(function() {
            secondpart()
        })
    },
    end = function() {
        botui.message.add({
            type: 'html',
            content: "<img style='margin: 0 auto;vertical-align: middle;width: 100%;height: 100%;' src='https://p.ananas.chaoxing.com/star3/origin/54b2a42b67aa53d565956458a27716b8.jpg'>"
        })
    },
    secondpart = function() {
        botui.message.add({
            delay: 1400,
            content: "一名计算机专业的应届生"
        }).then(function() {
            botui.message.add({
                type: 'html',
                content: "<img style='margin: 0 auto;vertical-align: middle;width: 100%;height: 100%;' src='https://p.ananas.chaoxing.com/star3/origin/6cb13d96b430b10b203e260db452625c.jpg'>"
            })
        }).then(function() {
            botui.message.add({
                delay: 1400,
                content: "对于HTML/CSS/JavaScript/Node.js都会一丢丢 😐"
            }).then(function() {
                botui.message.add({
                    delay: 1400,
                    content: "对于C、C#、易语言、PHP也会，就是忘记了 🙄"
                })
            }).then(function() {
                botui.message.add({
                    delay: 1500,
                    content: "热爱游戏，精通英雄联盟"
                }).then(function() {
                    botui.message.add({
                        delay: 1500,
                        content: "鄙人不才，巅峰时期至少也有白银三的实力"
                    }).then(function() {
                        botui.message.add({
                            delay: 1500,
                            content: "你艾希我奶妈"
                        }).then(function() {
                            botui.action.button({
                                delay: 1700,
                                addMessage: false,
                                action: [{
                                    text: "爱吗",
                                    value: "why-mashiro"
                                }]
                            }).then(function(a) {
                                thirdpart()
                            })
                        })
                    })
                })
            })
        })
    },
    thirdpart = function() {
        botui.message.add({
            human: true,
            content: "爱 "
        }).then(function() {
            botui.message.add({
                delay: 1000,
                content: "只要妹妹长得乖，这把团战我来开"
            })
        }).then(function() {
            botui.action.button({
                delay: 1000,
                action: [{
                    text: "为什么叫山河呢",
                    value: "why-cat"
                }]
            }).then(function(a) {
                fourthpart()
            })
        })
    },
    fourthpart = function() {
        botui.message.add({
            delay: 1000,
            content: "想到这个就是这个，没有为什么"
        }).then(function() {
            botui.action.button({
                delay: 1100,
                action: [{
                    text: "域名有什么含义吗",
                    value: "why-domain"
                }]
            }).then(function(a) {
                fifthpart()
            })
        })
    },
    fifthpart = function() {
        botui.message.add({
            content: "某妖友转卖给我的域名，这个比较便宜"
        }).then(function() {
            botui.message.add({
                delay: 100,
                content: "你都看到这里了，快给我打钱"
            }).then(function() {
                botui.action.button({
                    delay: 1100,
                    action: [{
                        text: "打钱",
                        value: "pay"
                    }]
                }).then(function(a) {
                    pay()
                })
            })
        })
    },
    pay = function() {
        window.open("http://zyan.gq")
    }