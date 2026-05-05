// Get elements
// document.getElementById("id")
// document.querySelector(".class")

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");

// store expression
// "let" means the value CAN change later
// "" means empty string (no text inside)
// This variable will store what user types

let expression = "";

// Loop through every button
// forEach Means: “repeat for every item”

buttons.forEach(function(button) {

    // Add click event to each button
    // addEventListener("click", function() {}) Means: “When this button is clicked, run this code”

    button.addEventListener("click", function() {

        // Get the value of the button (like 7, +, etc.)

    const value = button.getAttribute("data-value");

        // If button has NO value (like = or C), stop or skip

    if (!value) return;

        // Add clicked value to expression 

    expression = expression + value;

       // Show it on screen

    display.value = expression;
    })
})

// equal button
equalsBtn.addEventListener("click", function() {

    // eval() calculates the expression , Converts string into real math, try {} → try to run code , catch{} → if error happens

    try {  const result = eval(expression); 

        //  show result 

        display.value = result;

        // Save result for next calculation , Converts number → string
        
        expression = result.toString();

    } catch (error) { 
        // If something goes wrong 
        
        display.value = "Error"; 
        expression = "";
}
})

clearBtn.addEventListener("click", function() {
      // Reset everything 

      expression = ""; 
      display.value = "";
})
