let form = document.getElementsByClassName("register-form")[0];
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    let text = document.getElementsByClassName("info-message")[0];
    text.innerText = "You pressed the button"
    console.log("Hello world!")
}