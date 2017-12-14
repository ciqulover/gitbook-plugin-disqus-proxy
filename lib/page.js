module.exports=function (page) {

  const config = this.config.values.pluginsConfig['disqus-proxy']
  if (!config) return console.warn('disqus-proxy config missed')

  const cdn = `
            <script src="//cdn.bootcss.com/react/16.0.0/umd/react.production.min.js"></script>
            <script src="//cdn.bootcss.com/react-dom/16.0.0/umd/react-dom.production.min.js"></script>
            <script src="//cdn.bootcss.com/fetch/2.0.3/fetch.min.js"></script>
            <script src="//cdn.jsdelivr.net/npm/blockies-identicon@0.1.0/blockies.min.js"></script>
            <link rel="stylesheet" href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            `
  const mainScript = `<script src="/scripts/disqus-proxy-core.js" async></script>`

  page.content = page.content + cdn + '<div id="disqus_proxy_thread">' + mainScript

  const script = `
        <script>
          window.disqusProxy={
            shortname: '${config.shortname}',
            username: '${config.username}',
            server: '${config.host}',
            port: ${config.port},
            identifier: window.location.pathname,
          }
          window.disqus_config = function () {
            this.page.url = window.location.href
            this.page.identifier = window.disqusProxy.identifier
          }
        </script>`

  page.content = page.content + script

  return page
}
