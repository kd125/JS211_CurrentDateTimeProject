// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("date").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const numToString = (numInput) => {
  let changeToString = numInput.toString();
}


// Write a JavaScript program to convert a string to the number.
const stringToNum = (str) => {
  let changeToNum = parseInt(str);
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
const bool = true;
const nul = null;
const undef = undefined;
const numero = 4;
const nonANum = NaN;
const strng = 'Hello';

const typesOfData = (typeInput) => {
  console.log(typeInput + " is a " + typeof typeInput);
}





// Write a JavaScript program that adds 2 numbers together.
const addTwoNums = (num1, num2) => 
{
  return num1 + num2;
}


// Write a JavaScript program that runs only when 2 things are true.
const twoTruths = (truth1, truth2) => {
  if(truth1 && truth2){
    console.log('The program will run');
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTruth = (true1, true2) => {
  if(truth1 || truth2){
    console.log('The program will run')
  }
}


// Write a JavaScript program that runs when both things are not true.  
const noTruths = (true1, true2) => {
  if(!true1 && !true2){
    console.log('The program will run');
  }
}



// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
