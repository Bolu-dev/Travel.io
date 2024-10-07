// selectedUserId = 0;
// testing
const nameData = document.getElementById("userdata-1");
// Retrieve the data from localStorage
const formData = JSON.parse(localStorage.getItem("formData"));
//access to the backdrop and form
const backdrop = document.getElementById("backdrop");
const formElement = document.getElementById("configjs");
console.log(formElement);
//access to cancel button
const cancelBtn = document.getElementById("cancelBtn");
const form = document.querySelector("#configjs form");
console.log(form);
const errorMessage = document.getElementById("error");

//
const signIn = document.getElementById("orange");
console.log(signIn);
signIn.addEventListener("click", openForm);

cancelBtn.addEventListener("click", closeForm);
backdrop.addEventListener("click", closeForm);
//form submitevent
form.addEventListener("submit", saveUser);
