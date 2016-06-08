// I know this could be more DRY... 
// Just wanted to get it working and may come back later clean up.

//////////////////Button Locations for Listeners mostly
var addButtonEl = document.getElementById("addButton");             // Reference to the "+" button element in the DOM
var subtractButtonEl = document.getElementById("subtractButton");   // Reference to the "-" button element in the DOM
var multiplyButtonEl = document.getElementById("multiplyButton");   // Reference to the "*" button element in the DOM
var divideButtonEl = document.getElementById("divideButton");       // Reference to the "/" button element in the DOM

var buttonResetEl = document.getElementById("buttonResetEl");           // Reference to the button Reset element in the DOM
var resultsDiv = document.getElementById("resultsDiv");


// Create a function that adds two numbers passed in as arguments. Return the sum.
function additionFunction () {
  var input1 = parseInt(document.getElementById("userInput1").value);
  var input2 = parseInt(document.getElementById("userInput2").value);
  var added = input1 + input2;
  console.log("User Input1 = ", input1);
  console.log("User Input2 = ", input2);
  console.log("input1 + input2 =", added );
  resultsDiv.innerHTML = `${added}`
  return added;
}
// Create a function that subtracts two numbers passed in as arguments. Return the difference.
function subtractionFunction () {
  var input1 = parseInt(document.getElementById("userInput1").value);
  var input2 = parseInt(document.getElementById("userInput2").value);
  var subtracted = input1 - input2;
  console.log("User Input1 = ", input1);
  console.log("User Input2 = ", input2);
  console.log("input1 - input2 =", subtracted);
  resultsDiv.innerHTML = `${subtracted}`
  return subtracted;
}
// Create a function that multiplies two numbers passed in as arguments. Return the product.
function multiplicationFunction (input1, input2) {
  var input1 = parseInt(document.getElementById("userInput1").value);
  var input2 = parseInt(document.getElementById("userInput2").value);
  var multiplied = input1 * input2;
  console.log("User Input1 = ", input1);
  console.log("User Input2 = ", input2);
  console.log("input1 * input2 =", multiplied);
  resultsDiv.innerHTML = `${multiplied}`
  return multiplied;
}
// Create a function that divides two numbers passed in as arguments. Return the quotient. 
function divisionFunction (input1, input2) {
  var input1 = parseInt(document.getElementById("userInput1").value);
  var input2 = parseInt(document.getElementById("userInput2").value);
  var divided = input1 / input2;
  console.log("User Input1 = ", input1);
  console.log("User Input2 = ", input2);
  console.log("input1 / input2 =", divided);
  resultsDiv.innerHTML = `${divided}`
  return divided;
}

  // Create a function that accepts three arguments.
  //   1. First number
  //   2. Second number
  //   3. A function that performs an operation on them

  // Return the value of the operation.

addButtonEl.addEventListener("click", additionFunction);
subtractButtonEl.addEventListener("click", subtractionFunction);
multiplyButtonEl.addEventListener("click", multiplicationFunction);
divideButtonEl.addEventListener("click", divisionFunction);


/////////////Cleanup Function (need to add for function scopes above to work)
// buttonResetEl.addEventListener("click", cleanUp);
// function cleanUp() {
//   // console.log("Clear Clicker", event);
//   // document.getElementById("userInput1").value = ""; //same as below 
//   input1.value = "";
//   // document.getElementById("userInput2").value = ""; //same as below 
//   input2.value = "";
//   resultsDiv.innerHTML = "Results=";
// }
