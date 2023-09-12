var database = [];

function signUp(e) {
  e.preventDefault();
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm").value;

  let newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  database.push(newUser);
  localStorage.setItem("users", JSON.stringify(database));

  console.log(database);
  window.location.href = "./signIn.html";
}
