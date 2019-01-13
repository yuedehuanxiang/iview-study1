/* eslint-disable */
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  publicPath: "/", // 根域上下文目录
  outputDir: "dist", // 构建输出目录
  assetsDir: "assets", // 静态资源目录 (js, css, img, fonts)
  devServer: {
    // open: true,
    // host: "localhost",
    // port: 8080,
    // https: false,
    // hotOnly: false,
    /*
    proxy: {
      // 配置跨域
      "/api": {
        target: "http://localhost:5000/api/",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    
    */
    before: app => {}
  }
};
