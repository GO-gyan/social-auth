const express = require('express');
const path = require('path');
const morgan = require('morgan');
const favicon = require('serve-favicon');

const createApp = () => {
    const app = express();
    return app;
  }

const setupStaticRoutes = app => {
    app.use(express.static(path.resolve(__dirname, '../', 'public')));
    return app;
}

const setupMiddlewares = app => {
    //  For logging each requests
    app.use(morgan('dev'));
  
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: false
    }));
  
    const compression = require('compression');
    app.use(compression());
  
    const helmet = require('helmet');
    app.use(helmet());
    const RateLimit = require('express-rate-limit');
    const limiter = new RateLimit({
      windowMs: 15*60*1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      delayMs: 0 // disable delaying - full speed until the max limit is reached
    });
    app.use(limiter);
  
    return app;
  }

  const setupWebpack = app => {
    if (process.env.NODE_ENV !== 'production') {
      const webpack = require('webpack');
      const webpackDevMiddleware = require('webpack-dev-middleware');
      const webpackHotMiddleware = require('webpack-hot-middleware');
  
      const webpackConfig = require('../webpack.config.js');
      const webpackCompiler = webpack(webpackConfig);
  
      app.use(webpackHotMiddleware(webpackCompiler));
      app.use(webpackDevMiddleware(webpackCompiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
      }));
    }
  
    return app;
  }

  const setupRestRoutes = app => {
    //  MOUNT YOUR REST ROUTE HERE
    app.use('/api/v1/auth', require(path.join(__dirname, './auth')));
  
    app.use((req, res) => {
      const err = new Error('Resource not found');
      err.status = 404;
      return res.status(err.status).json({
        error: err.message
      });
    });
  
    app.use((err, req, res) => {
      console.error('Internal error in watch processor: ', err);
      return res.status(err.status || 500).json({
        error: err.message
      });
    });
  
    return app;
  }

  // App Constructor function is exported
module.exports = {
    createApp,
    setupStaticRoutes,
    setupRestRoutes,
    setupMiddlewares,
    setupWebpack
  };