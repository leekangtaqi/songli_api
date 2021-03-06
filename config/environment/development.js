'use strict';

module.exports = {
    api: {
        url: 'http://api.dev.songni.cc'
    },
		port: 3030,
    mongo: {
        uris: 'mongodb://torpedo:ushIgidKuaj1@123.150.207.19:27017/snapipro'
    },
    redis: {
        host: '101.201.208.166',
        port: 6399,
        pass: 'EcDot1Oshjed'
    },
    // 第三方平台的配置
    wechat: {
        component: {
            appId: 'wx1007c99533665b6b'
        }
    },
    log4jsPath: '/tmp/logs',
    // 微信菜单默认配置
    menu: {
        "wx1007c99533665b6b": { //礼物
            "button": [{
                "type": "view",
                "name": "礼物列表",
                "url": "http://$APPID$.songni.cc"
            }, {
                "type": "view",
                "name": "我送的礼物",
                "url": "http://$APPID$.songni.cc/order/list"
            }]
        }
    },
    domain: {
        serve: "www.dev.songni.cc",
        client: "dev.songni.cc",
        api: "api.dev.songni.cc",
				img: "imgs.songni.cc",
        contact: "010-84988362"
    },
    newrelic: true
};
