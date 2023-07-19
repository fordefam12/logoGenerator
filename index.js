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
        svg += `<circle cx="150" cy="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`
    }
}