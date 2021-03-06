const app = require('./webapp.service')();
const http = require('http');
const WWW_PORT = '3000';

/**
 * Normalize a port into a number, string, or false.
 */

const normalizePort = val => {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

const port = normalizePort(WWW_PORT);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */


/**
 * Event listener for HTTP server "error" event.
 */

const onError = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string' ?
      'Pipe ' + port :
      'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  /**
   * Event listener for HTTP server "listening" event.
   */
  
  const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
      'pipe ' + addr :
      'port ' + addr.port;
  }


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

