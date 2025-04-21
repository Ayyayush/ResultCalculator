// Selecting elements from the HTML page
const nameInput = document.querySelector(".student-name");
const rollInput = document.querySelector(".student-roll");
const submitBtn = document.querySelector("#submit-btn");
const welcomeMsg = document.querySelector("#welcome-msg");

const subject1 = document.querySelector("#subject1");
const subject2 = document.querySelector("#subject2");
const subject3 = document.querySelector("#subject3");
const subject4 = document.querySelector("#subject4");
const subject5 = document.querySelector("#subject5");

const calculateBtn = document.querySelector("#calculate-btn");
const resetBtn = document.querySelector("#reset-btn");

// Create and attach a single result display paragraph
const resultMsgElement = document.createElement('p');
document.querySelector('.marks-section').appendChild(resultMsgElement);

// Function to calculate Total Marks, Average, Grade, and Pass/Fail
function calculateResults(callback) {
    const marks1 = parseInt(subject1.value) || 0;
    const marks2 = parseInt(subject2.value) || 0;
    const marks3 = parseInt(subject3.value) || 0;
    const marks4 = parseInt(subject4.value) || 0;
    const marks5 = parseInt(subject5.value) || 0;

    const totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
    const average = totalMarks / 5;

    let grade;
    if (totalMarks >= 90) {
        grade = "A";
    } else if (totalMarks >= 75) {
        grade = "B";
    } else if (totalMarks >= 60) {
        grade = "C";
    } else if (totalMarks >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    const passFail = (marks1 >= 40 && marks2 >= 40 && marks3 >= 40 && marks4 >= 40 && marks5 >= 40) ? "Pass" : "Fail in atleast one subject";

    const result = {
        totalMarks,
        average,
        grade,
        passFail
    };

    callback(result);
}

// Event listener to display welcome message
submitBtn.addEventListener("click", function() {
    const studentName = nameInput.value || nameInput.placeholder;
    welcomeMsg.textContent = `Welcome, ${studentName}!`;
});

// Event listener to calculate and show result
calculateBtn.addEventListener("click", function(e) {
    e.preventDefault();

    calculateResults(function(result) {
        resultMsgElement.innerHTML = `
            Total Marks: ${result.totalMarks} <br>
            Average: ${result.average} <br>
            Grade: ${result.grade} <br>
            Result: ${result.passFail}
        `;
    });
});

// ✅ Updated: Event listener to clear inputs and also remove displayed result
resetBtn.addEventListener("click", function() {
    subject1.value = '';
    subject2.value = '';
    subject3.value = '';
    subject4.value = '';
    subject5.value = '';

    welcomeMsg.textContent = '';
    resultMsgElement.innerHTML = '';     // 👈 This clears the result on reset
});
