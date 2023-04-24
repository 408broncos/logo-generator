import { square, triangle, circle } from "./lib/shapes.js";
import { promises as fs } from "fs";
import inquirer from "inquirer";

async function writeToFile(fileName, answers) {
    try {
      let svg = `
        <svg version="1.1" width="300" height="200">
          <g>
            ${answers.shape}
      `;

      let shape;
      if (answers.shape === "square") {
        shape = new square();
        svg += `<rect width="300" height="100" style="fill:${answers.bgColor}"/>`;
      } else if (answers.shape === "triangle") {
        shape = new triangle();
        svg += `<polygon points="150, 18 244, 182 56, 182" style="fill:${answers.bgColor}"/>`;
      } else {
        shape = new circle();
        svg += `<circle cx="100" cy="100" r="90" style="fill:${answers.bgColor}"/>`;
      }
      svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.color}">${answers.text}</text>
      </g>
    </svg>`;

    await fs.writeFile(fileName, svg);
    console.log("Generated logo.svg");
  } catch (error) {
    console.log(error);
  }
}

async function promptUser() {
    try {
      const answers = await inquirer.prompt([
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
          name: "shapes",
          message: "Choose which shape you would like to use for your logo?",
          choices: ["Triangle", "Square", "Circle"],
          type: "input",
        },
        {
          name: "bgColor",
          message:
            "Choose the background color for your shape",
          type: "input",
        },
      ]);
      if (answers.text.length > 3) {
        console.log("Must enter more than 3 characters");
        await promptUser();
      } else {
        await writeToFile("logo.svg", answers);
      }
    } catch (error) {
      console.log(error);
    }
  }
  promptUser();
