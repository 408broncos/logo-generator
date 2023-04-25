const { square, triangle, circle } = require("./lib/shapes.js");
const fs = require("fs")
const inquirer = require("inquirer");

function writeToFile(fileName, answers, callback) {
    let svg = `
      <svg version="1.1" width="300" height="200">
        <g>
          ${answers.shape}
    `;
  
    let shape;
    if (answers.shape === "square") {
      shape = new square();
      svg += `<rect width="200" height="200" fill="${answers.bgColor}"/>`;
    } else if (answers.shape === "triangle") {
      shape = new triangle();
      svg += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.bgColor}"/>`;
    } else {
      shape = new circle();
      svg += `<circle cx="100" cy="100" r="90" fill="${answers.bgColor}"/>`;
    }
    svg += `<text x="110" y="110" text-anchor="middle" font-size="40" fill="${answers.color}">${answers.text}</text>
      </g>
    </svg>`;
  
    fs.writeFile(fileName, svg, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Generated logo.svg");
        callback();
    }
  });
}

function promptUser(callback) {
  inquirer.prompt([
    {
      name: "text",
      message:
        "Choose the 3 character text you would like to use for your logo?",
      type: "input",
    },
    {
      name: "color",
      message:
        "Choose the color you would like to use in (hexadecimal number)",
      type: "input",
    },
    {
      name: "shape",
      message: "Choose which shape you would like to use for your logo?",
      choices: ["square", "triangle", "circle"],
      type: "list",
    },
    {
      name: "bgColor",
      message: "Choose the background color for your shape",
      type: "input",
    },
  ]).then((answers) => {
    if (answers.text.length > 3) {
      console.log("Must enter more than 3 characters");
      promptUser(callback);
    } else {
      writeToFile("logo.svg", answers, callback);
    }
  }).catch((err) => {
    console.log(err);
  });
}

promptUser(() => {
});