const fs = require("fs");

  const file = process.argv[2];

  const content = fs.readFile(file, (err, data) => {
    if(err) {
      return console.log(err);
    }

  const lines = data.toString().split("\n").length;
  console.log(data.toString());
  console.log(lines);
  })


