import {
    doc,
    setDoc,
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    db
} from "./firebase.js"
const form = document.getElementById("my-form")
const productName = document.querySelector("#product-name");
const productprice = document.querySelector("#product-price");
const productDetail = document.querySelector("#product-detail");
const mainProduct = document.querySelector(".products");

const myCollectionRefrence = collection(db, "collection");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const myProducts = {
        productName: productName.value,
        productprice: Number(productprice.value),
        productDetail: productDetail.value,
        productImg: null,
        createdAt: serverTimestamp()
    };
    try {
        await addDoc(myCollectionRefrence, myProducts)
        console.log(myProducts);
        
    }
    catch (error) {
        console.log(error);

    }
})