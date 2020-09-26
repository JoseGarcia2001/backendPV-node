// console.log('Un %s y un %s', 'perro', 'gato');
// console.info('Solo soy un alias de log')
// console.warn('Solo soy un alias del error')
// console.assert(42 === '42')
// // Para llamar errores pero que me indique la linea
// console.trace('Error')

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('Problem from debugger');

const myUselessFunction = util.deprecate(() => {
  console.log('Esta funcion es vieja');
}, 'no deberías usar más esta función')

// myUselessFunction()