module.exports = {
    devServer: {
        port: 9000,
        proxy: {
            '/api': {
              target: '<url>',
              ws: true,
              changeOrigin: true
            },
            '/foo': {
              target: '<other_url>'
            }
          }
    }
}