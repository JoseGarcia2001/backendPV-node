function asyncFunction(cb) {
  setTimeout(() =>{
    if(Math.random() > 0.5) {
      console.log('Hello world');
      cb(null, 'Todo en orden')
    } else {
      cb(new Error('Hay un error'), null);
    }
  }, 1000)
};

asyncFunction((err, msg) => {
  if(err) {
    console.log(err);
  } else {
    console.log(msg);
  }
})