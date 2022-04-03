const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greetingName = document.querySelector("#greeting")

const handleSubmit = (event) => {
    event.preventDefault();
    const userName = loginInput.value;
    greetingName.innerText = `Hello ${userName}`;
    localStorage.setItem("username", userName);
}

loginForm.addEventListener("submit", handleSubmit);

const savedUserName = localStorage.getItem("username");

if(!savedUserName) {

} else {greetingName.innerText = `Hello ${savedUserName}`;}
