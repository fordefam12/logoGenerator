const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/classes");

function writeToFile(FileName, answers) {
  let svg = "";
  svg ='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svg += "<g>";
  svg += `${answers.Shape}`;
// console.log(answers.Shape);
  let shapeChoice;
  if (answers.Shape === "Triangle") {
    shapeChoice = new Triangle();
    svg += `<polygon points="150,18 244, 182 56,182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.Shape === "Square") {
    shapeChoice = new Square();
    svg += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svg += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }
  svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svg += "<g>";
  svg += "</svg>";

  fs.writeFile(FileName,svg, (err) => {
    err ? console.log(err) : console.log("generated shape");
    
   
   
  });
}
 function promptUser() {
  inquirer
    .prompt([
        {
            type: "list",
            message: "what shape would you like the logo to be?",
            name: "Shape",
            choices:["Triangle","Square","Circle"],
          },
        {
            type: "Input",
            message: "choose shape color...",
            name: "shapeBackgroundColor",
          },
     
      {
        type: "Input",
        message: "choose Text color...",
        name: "textColor",
      },
      
      {
        type: "Input",
        message: "what text would you like your logo to display ?",
        name: "text",
      },
      
     
    ])
    
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("must enter a value of no more than 3 characters");
        promptUser();
      } else {
        // fs.createWriteStream(`./examples/${answers.Shape}.svg`, answers),
        writeToFile(`./examples/${answers.Shape}.svg`, answers);
        // fs.createWriteStream(`./examples/${answers.Shape}.svg`);
      }
    
    });
}

promptUser();

