const fs = require('fs')

fs.readdir(__dirname, (err, dirs) => {
  if(err) {
    console.error(err);
  }

  console.log(dirs);
})

fs.copyFile('texto.txt', 'texto2.txt', (err) => console.log(err))

fs.mkdir('./carpeta1/carpeta2', {recursive: true}, err => console.log(err))