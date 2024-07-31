import { auth, signInWithEmailAndPassword , doc, setDoc , db } from "./firebase.js";

let addUserToFirestore = async (user) =>{
 const response =  await setDoc(doc(db, "users", user.uid), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
  console.log(response);
}

const form = document.querySelector("#login-form")
form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    const email = event.target.children[0].value
    const password = event.target.children[1].value
    await signInWithEmailAndPassword(auth, email, password)

    console.log("email", email);
    console.log("password", password);
  } catch (error) {
    console.log("my error", error.message);
  }
})