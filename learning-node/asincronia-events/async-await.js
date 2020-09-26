function promiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log("Hello world");
        resolve("Todo en orden");
      } else {
        reject(new Error("Hay un error"), null);
      }
    }, 1000);
  });
}

const asyncAwait = async () => {
  try {
    const msg = await promiseFunction()
    const msgBig = await msg.toUpperCase();
    console.log(msgBig);
  } catch (error) {
    console.log(error.message);
  }
};

asyncAwait()