# logo-generator


## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| SVG    | [https://www.freecodecamp.org/news/things-you-need-to-know-about-working-with-svg-in-vs-code-63be593444dd/](https://www.freecodecamp.org/news/things-you-need-to-know-about-working-with-svg-in-vs-code-63be593444dd/)  
| Javascript   | [https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import](https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import) 


## Description 

For this project I was given a task to create a functioning logo generator using the "svg" file. In this assignment we were also given a acceptance criteria to follow which states the user must have: options to choose which shapes the user wants, color options for the text, color options for the background and character inputs (max 3 characters). After inputting these answers to the given prompt a logo.svg file is then created with all given inputs that user put in. 

## Markdown



https://user-images.githubusercontent.com/126821868/234170384-822da9c3-4511-4d45-a207-81bbe3d39e5c.mp4



## Code Examples

Here I will be showing an example of a section I was stuck on but eventually discovered the solution to:


```js
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
```

For this example I really got stuck on what needed to be inputted to display the stylings for the shapes. To get my solutions I needed to refer a lot to past activities working with jest, test and json and I found a lot of great examples to help with formatting this section of code.


```js
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
```
In this example I ran into a lot of console errors telling me that my callback function was not being defined and I had no idea why. After reffering to those past activities I was able to see that by inputting "callback" into the empty paranthesese and update my inquirer package, I was finally able to get that function running. 


## Usage 

For usages I found that looking at the past activities and the work really helps refresh my memory on how to format certain codes and where they should be placed. Another usage I found helpful was stackoverflow, I find it very reassuring that other people are just as stuck as I am and it helps a lot to see questions I have answered.


## Learning Points 

This assignment for me was pretty challenging especially working node and adding more steps to my work than I had previously done with past assignments. However, I am getting more and more confident with my work the more I progress with these homeworks.

## Author Info

### Jordan Cardenas 
* [LinkedIn](https://www.linkedin.com/in/jordan-cardenas-87a58520b/)
* [Github](https://github.com/408broncos)

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
