const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
webpackConfig.plugins.push(
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
  }),
  new WebpackPwaManifest({
    name: 'Budget Tracker',
    short_name: 'Budget',
    description: 'An application for tracking your budget',
    start_url: '/',
    icons: [
      {
        src: path.resolve('src/images/icons/icon-192x192.png'),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join('assets', 'icons'),
      },
    ],
  }),
// TODO: Add CSS loaders and babel to webpack.
  new InjectManifest({
    swSrc: './src/service-worker.js',
    swDest: 'service-worker.js',
  })
);

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
