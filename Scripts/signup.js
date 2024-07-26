const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = event.target.children[0].value
    const password = event.target.children[1].value
    console.log("email", email);
    console.log("password", password);
})