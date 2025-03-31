
const form = document.getElementById("demoForm");
const username = document.getElementById("username");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", function (event) {
    if (username.value.trim() === "") {
        event.preventDefault(); 
        errorMsg.textContent = "Username is required!";
    } else {
        errorMsg.textContent = ""; 
        alert("Form submitted successfully!");
    }
});

const changeColorButton = document.getElementById("changeColorButton");
const interactiveDiv = document.getElementById("interactiveDiv");

changeColorButton.addEventListener("click", function () {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    interactiveDiv.style.backgroundColor = randomColor;
    alert("Background color changed!");
});
