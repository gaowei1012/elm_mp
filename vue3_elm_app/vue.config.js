const path = require('path'); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
module.exports = {
  lintOnSave: false,
  indexPath: 'index.html', // 相对于打包路径index.html的路径
  outputDir: process.env.VUE_APP_outputDir || 'dist', // 'admin', 生产环境构建文件的目录
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  publicPath: './',
  chainWebpack: config => {
    // config.plugin('html').tap(args => {
    //   args[0].title = process.env.VUE_APP_TITLE;
    //   return args;
    // });
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('./src/components'))
      .set('assets', resolve('./src/assets'));

    //set第一个参数：设置的别名，第二个参数：设置的路径
    // const svgRule = config.module.rule('svg');
    // svgRule.uses.clear();
    // svgRule
    //   .test(/\.svg$/)
    //   .include.add(path.resolve(__dirname, './src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]',
    //   });
    // const fileRule = config.module.rule('file');
    // fileRule.uses.clear();
    // fileRule
    //   .test(/\.svg$/)
    //   .exclude.add(path.resolve(__dirname, './src/icons'))
    //   .end()
    //   .use('file-loader')
    //   .loader('file-loader');

    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 37.5, // 给的设计稿/10
      });
  },

  devServer: {
    compress: true,
    disableHostCheck: true, //webpack4.0 开启热更新
    hot: true,
    port: 6666,
    proxy: {
      // '/api': {
      //   target: 'http://api.topeak.com', //目标地址
      //   ws: true, // 是否启用websockets
      //   changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      //   pathRewrite: {
      //     '^/api': '/',
      //   }, //这里重写路径
      // },

      // '/pay': {
      //   target: 'http://pay.topeak.com/api/do', //目标地址
      //   ws: true, // 是否启用websockets
      //   changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      //   pathRewrite: {
      //     '^/pay': '/',
      //   }, //这里重写路径
      // },
    },
  },
};
