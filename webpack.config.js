const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: {
    main: path.join(__dirname, 'app') + '/app.js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      '@': path.join(__dirname, 'app'),
      'component': path.join(__dirname, 'app/component')
    }
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }, {
        test: /\.(css|less)$/,
        include: [/node_modules\/antd/, /app\/assets\/common/],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: require.resolve('less-loader'),
            options: {
              importLoaders: 1,
              javascriptEnabled: true
            }
          }
        ]
      }, {
        test: /\.(css|less)$/,
        exclude: [/node_modules/, /app\/assets\/common/],
        use: [
          'style-loader',
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]__[hash:base64:5]'
              },
              import: true,
              importLoaders: true,
            }
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              importLoaders: 1,
              javascriptEnabled: true
            }
          }
        ]
      }]
  },
  plugins: [
    new htmlPlugin({
      title: 'webtest',
      filename: 'index.html',
      template: path.join(__dirname, 'app') + '/index.html',
      minify: {
        removeAttributeQuotes: true
      }
    }),
  ],
  devServer: {
    // 设置基本目录结构
    contentBase: path.resolve(__dirname, 'dist'),
    // 服务器ip地址，使用localhost代替
    host: 'localhost',
    // 服务端是否压缩代码
    compress: true,
    // 服务接口
    port: 8080,
    // 允许ip访问
    disableHostCheck: true
  }
}

module.exports = config