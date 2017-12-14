## disqus-proxy gitbook 插件
[![npm package](https://img.shields.io/npm/v/gitbook-plugin-disqus-proxy.svg?style=flat)](https://www.npmjs.org/package/gitbook-plugin-disqus-proxy)

[![NPM](https://nodei.co/npm/gitbook-plugin-disqus-proxy.png)](https://nodei.co/npm/gitbook-plugin-disqus-proxy/)

### 安装

1. 配置`book.json`:
```
{
    "plugins": ["disqus-proxy"],
    "pluginsConfig": {
        "disqus-proxy":{
            "shortname":"ciqu",
            "username":"ciqu",
            "host": "disqus-proxy.ycwalker.com",
            "port": 5509
        }
    }
}
```
2. 执行`gitbook install`

参数说明：
* `shortname` 是你的website的 shortname 名称 比如在你的disqus安装代码中 有这样一句脚本：
         s.src = 'https://test-eo9kkdlcze.disqus.com/embed.js';
         那么你的disqus 的shortname 就是 test-eo9kkdlcze
* `username` 是你的disqus用户名，即评论时候留下的名字，用来区别disqus-proxy的评论头像显示
* `host`是你启用disqus代理的VPS的域名
* `port`是VPS服务器启用disqus代理的端口，需要与之后配置的后端一致

### 后端配置

**后端已经分离出来，查看[这里](https://github.com/ciqulover/disqus-proxy-server)进行配置** 
