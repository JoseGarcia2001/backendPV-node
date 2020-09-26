const os = require('os');

console.log('CPUS INFO:', os.cpus());
console.log('IP address', os.networkInterfaces().eth0.map(i => i.address));
console.log('MEMORIA LIBRE EN BYTES', os.freemem());
console.log('TIPO DEL SISTEMA', os.type());
console.log('VERSION DEL SISTEMA', os.release());
console.log('INFORMACION DEL USUARIO', os.userInfo());