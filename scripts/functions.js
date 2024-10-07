//fuction to open sign in page
function openForm() {
  // const selectedUserId = +event.target.dataset.userid;
  backdrop.style.display = "block";
  formElement.style.display = "block";
}

//
function closeForm() {
  backdrop.style.display = "none";
  formElement.style.display = "none";
  form.firstElementChild.classList.remove("error");
  error.textContent = "";
}

//save user data
function saveUser(event) {
  event.preventDefault();
  //instatiating an object based on the object blueprint
  //a FormData is a function that knows how to generate objects that have certain shape
  //we can use such blueprint by executing the blueprint func as func and adding "new" in front of them
  //formData is a built-in blue print that takes a form(points at a form html elemnts)
  //and automatically extracts values entered into inputs in that form for us
  const formData = new FormData(event.target);
  const enteredUserName = formData.get("username").trim(); //'  max don  '=> 'max don'
  console.log(enteredUserName);
  if (!enteredUserName) {
    // enteredUserName === ''
    event.target.firstElementChild.classList.add("error");
    error.textContent = "Please enter a valid name!";
    return;
  }

  // const updateUser = document.getElementById("userdata-" + selectedUserId);
  // updateUser.textContent = enteredUserName;
  // Send the data to home.html using localStorage (or a server-side solution)
  localStorage.setItem("formData", JSON.stringify(formData));

  // Redirect to home.html
  window.location.href = "home.html";
  nameData.textContent = enteredUserName;
}
