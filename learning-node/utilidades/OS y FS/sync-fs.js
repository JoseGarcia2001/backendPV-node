const fs = require('fs');

try {
  const file = process.argv[2]

  const content = fs.readFileSync(file).toString()

  const lines = content.split('\n').length

  console.log(content);
  console.log(lines);

} catch (error) {
  console.log(error);
}

