window.onload = function() {
    form.style.display = "flex";
    success.style.display = "none";
}

const email = document.querySelector(`input[type="email"]`);
const error = document.getElementById("email-error");

const submit = document.querySelector(`input[type="submit"]`);
const button = document.querySelector("button");

const form = document.querySelector(`section[class="form"]`);
const success = document.querySelector(`section[class="success"]`);

submit.addEventListener("click", function(event) {
    validateEmail(event);
});

function validateEmail(event) {
    let isValid = true;
    
    error.textContent = "";
    email.classList.remove("error");

    if (email.value === "") {
        event.preventDefault();
        error.textContent = "Email required";
        email.classList.add("error");
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        event.preventDefault();
        error.textContent = "Valid email required";
        email.classList.add("error");
        isValid = false;
    }

    if (isValid) {
        event.preventDefault();
        form.style.display = "none";
        success.style.display = "flex";
    }
}

button.addEventListener("click", function() {
    form.style.display = "flex";
    success.style.display = "none";
    email.value = "";
    email.classList.remove("error");
    error.textContent = "";
});
