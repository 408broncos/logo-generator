//acquiring shapes.js file, fs and inquier
const { square, triangle, circle } = require("./lib/shapes.js");
const fs = require("fs")
const inquirer = require("inquirer");

//setting the svg initial width and length logo prompt when logo.svg is created and users inputed shape choice
function writeToFile(fileName, answers, callback) {
    let svg = `
      <svg version="1.1" width="300" height="200">
        <g>
          ${answers.shape}
    `;
  
    //adding if, else and else if statments for user inputs based on shape selection
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
    svg += `<text x="105" y="110" text-anchor="middle" font-size="40" fill="${answers.color}">${answers.text}</text>
      </g>
    </svg>`;
  
    //when logo.svg is created a message "Generated logo.svg" is prompted in the terminal
    fs.writeFile(fileName, svg, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Generated logo.svg");
        callback();
    }
  });
}

//users prompt choices when in terminal
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
//if user enters more than 3 characters a console.log message appears telling the user "Must enter more than 3 characters"
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

//calling the promptUser function
promptUser(() => {
});