const fs = require("fs");
const inquirer = require("inquirer");
const { triangle, square, circle } = require("./lib/classes");


function writeToFile (FileName, answers) {
    const svg = "";
    svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    svg = "<g>"
    svg += `${snaswers.shape}`;

    let shapeChoice;
    if (answers.shape === "square") {
        shapeChoice = new square();
        svg += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`
    }
    else {
        shapeChoice = new circle ();
        svg += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`
    }
    svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svg += "<g>";
    svg += "</svg>";
    
    fs.writeFile(FileName, svg, (err) => {
        err ? console.log(err) : console.log("generated logo.svg");
    });
}
function promptUser() {
    inquirer
    .prompt([
        {
            type: "Input",
            message: "what text would you like your logo to display ?",
            name: "text",
        },
        {
            type: "Input",
            message: "choose Text color",
            name: "textColor",
        },
        {
            type: "list",
            message: "what shape would you like the logo to be?",
            name: "shape",
        },
        {
            type: "Input",
            message: "choose shape color",
            name: "shapeBackgroundColor",
        },
    ])
    .then((answers) => {
        if (answers.text.length > 3) {
            console.log("must enter a value of no more than 3 characters");
            promptUser();
        }
        else {
            writeToFile("logo.svg", answers)
        }
    })
}
promptUser();