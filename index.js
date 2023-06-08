import qr from 'qr-image'
import inquirer from 'inquirer'
import fs from 'fs'
inquirer
  .prompt([
    {
      message: 'Type in your URL',
      name: 'URL',
    },
  ])
  .then((answers) => {
    const url = answers.URL
    var qr_svg = qr.image(url, { type: 'png' })
    qr_svg.pipe(fs.createWriteStream('qr_img.png'))

    fs.writeFile('url.txt', url, (error) => {
      if (error) throw error
      console.log('File url.txt is added')
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
