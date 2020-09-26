const EventEmitter = require('events');

class Logger extends EventEmitter {
  execute(cb) {
    console.log('Before');
    this.emit('start')
    cb()
    this.emit('finish')
    console.log('After');
  }
}

const logger = new Logger()

logger.on('start', () => console.log('Empezando'))
logger.on('finish', () => console.log('Terminando'))

logger.execute(() => console.log('Me estoy ejecutando'))