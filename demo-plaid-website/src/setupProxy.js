const { createProxyMiddleware } = require('http-proxy-middleware');

const target = process.env.REACT_APP_PROXY_SERVER;

module.exports = function(app) {
  app.use(
    '/graphql',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  )
};