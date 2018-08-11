const path = require('path');

const service = require('./serviceProvider');

// App Constructor function is exported
module.exports =  () => {
  let app = service.createApp();
  app = service.setupWebpack(app);
  app = service.setupStaticRoutes(app);
  app = service.setupMiddlewares(app);
  app = service.setupRestRoutes(app);

  return app;
};
