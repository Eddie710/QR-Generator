const inquirer = require('inquirer');

inquirer
  .prompt([
    {
    message: "Enter your URL: ",
    name: URL,
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
  })

  fs.writeFile("Url.txt", url, (err) =>{
    if (err) throw err;
    console.log("File was saved. ")
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });