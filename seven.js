// Variable
const passingMarks = 40;

// Function
function checkResult() {

    // Getting input value
    let marks = document.getElementById("marks").value;

    // Convert string to number
    marks = Number(marks);

    // Condition
    if (marks >= passingMarks) {
        document.getElementById("result").innerText = "✅ You Passed!";
    } 
    else if (marks >= 0) {
        document.getElementById("result").innerText = "❌ You Failed!";
    } 
    else {
        document.getElementById("result").innerText = "⚠ Please enter valid marks!";
    }

    // Loop example
    for (let i = 1; i <= 3; i++) {
        console.log("Checking result attempt:", i);
    }
}