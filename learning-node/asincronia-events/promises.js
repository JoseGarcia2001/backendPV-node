function promiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log("Hello world");
        resolve ("Todo en orden");
      } else {
        reject(new Error("Hay un error"), null);
      }
    }, 1000);
  })
};

promiseFunction()
  .then(data => data.toUpperCase())
  .then(data => console.log(data))
  .catch(error => console.error(error.message))