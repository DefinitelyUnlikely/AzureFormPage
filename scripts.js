// https://visitregistration-a9btgsd0ephsbade.swedencentral-01.azurewebsites.net/api/httpformtrigger

let form = document.getElementsByClassName("register-form")[0];
form.addEventListener("submit", submitForm);

async function submitForm(event) {
    event.preventDefault();

    let text = document.getElementsByClassName("info-message")[0];
    const url = "https://visitregistration-a9btgsd0ephsbade.swedencentral-01.azurewebsites.net/api/httpformtrigger"

    var email = document.getElementById("email-input").value;
    var name = document.getElementById("name-input").value;
    var reason = document.getElementById("reason-input").value;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            name: name,
            reason: reason
        })
    });

    if (!response.ok) {
        text.innerText = "Please try again."
        return;
    }

    text.innerText = "Your visit has been registrated"
}
