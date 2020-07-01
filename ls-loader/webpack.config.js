const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 使用插件
const SelfServicePlugin = require('./plugins/index');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/, // ES6/ES7/JSX 转义需要 Babel 的依赖
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/react'],
                plugins: [
                    ["@babel/plugin-proposal-decorators", { "legacy": true }]
                ]
              }
            }
          ],
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'title', 
        template: 'src/index.html'
      }),
      // 调用插件信息
      // new SelfServicePlugin({ options: true, test: 'linjiayu' })
    ],
    devServer: {
      contentBase: './dist',
      port: '8080',
      host: 'localhost'
    }
}
