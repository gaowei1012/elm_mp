const path = require('path'); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
module.exports = {
  lintOnSave: false, // eslint检测
  indexPath: 'index.html', // 相对于打包路径index.html的路径
  outputDir: 'eleDist', // 'admin', 生产环境构建文件的目录
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  publicPath: '/', // 这里必须是/，不然就会报错:
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('./src/components'))
      .set('assets', resolve('./src/assets'));
  },
  devServer: {
    disableHostCheck: true, //webpack4.0 开启热更新
    hot: true,
    port: 1230,
    proxy: {
      '/api': {
        target: 'http://39.99.241.232:7071/api/', //目标地址
        ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '^/api': '/',
        }, //这里重写路径
      },
    },
  },
};
