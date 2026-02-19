const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const login_status = document.querySelector(".login-status");

const login_button = document.getElementById("login-button");

let default_email = "<email>";
let default_password = "<password>";

login_button.addEventListener("click", (event) => {
    event.preventDefault();
    const email = email_input.value;
    const password = password_input.value;
    login_status.style.display = "none";

    // Simulate login validation (replace with actual validation logic)
    if (email === default_email && password === default_password) {
        login_status.textContent = "Login successful!";
        login_status.classList.replace("error", "success");
    } else if (email !== default_email) {
        login_status.textContent = "User not found";
        login_status.classList.replace("success", "error");
    } else if (email === default_email && password !== default_password) {
        login_status.textContent = "Incorrect Password";
        login_status.classList.replace("success", "error");
    } else {
        login_status.textContent = "Invalid email or password.";
        login_status.classList.replace("success", "error");
    }

    login_status.style.display = "block";
});