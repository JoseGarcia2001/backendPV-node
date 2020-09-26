const { Transform } = require('stream');

const challengeTransform = new Transform({
  transform(chunk, cb) {
    this.push(
      chunk
        .toString()
        .split(" ")
        .map((word, index) => {
          return index === 0
            ? word.toLowerCase()
            : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join("")
    );
  }
})

process.stdin.pipe(challengeTransform).pipe(process.stdout)