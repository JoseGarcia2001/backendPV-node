const { Duplex } = require('stream');

const duplexStream = new Duplex({
  write(chunk, encoding, cb) {
    console.log(chunk.toString())
    cb()
  },

  read(size) {
    if(this.currentCharCode > 90) {
      this.push(null)
      return
    }

    this.push(String.fromCharCode(this.currentCharCode++))
  }
})

duplexStream.currentCharCode = 65;
duplexStream
  .pipe(process.stdin)
  .pipe(process.stdout)