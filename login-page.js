const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const Password = loginForm.Password.value;
    const Email = loginForm.Email.value;


    if (Password === "mindset" && Email === "sankey901@solutions.com") {
        alert("You have successfully logged in.");
        window.location.replace("newpage.html");
        return false;
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

function lpage(){
    window.location.replace("Landingpage.html")
}