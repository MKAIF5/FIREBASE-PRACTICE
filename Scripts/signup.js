import { auth, createUserWithEmailAndPassword } from "./firebase.js";


const form = document.querySelector("#form")
form.addEventListener("submit", async (event) => {
   try {
    event.preventDefault();
    const email = event.target.children[0].value
    const password = event.target.children[1].value
  await  createUserWithEmailAndPassword(auth, email, password)

    console.log("email", email);
    console.log("password", password);
   } catch (error) {
    console.log( "my error", error.message);
   }
})