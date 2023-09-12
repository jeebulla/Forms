var database = [];

function signUp(e) {
  e.preventDefault();
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  //   let username = document.getElementById("username").value;

  let newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    // username: username,
  };

  database.push(newUser);
  localStorage.setItem("users", JSON.stringify(database));

  console.log(database);
  window.location.href = "./signIn.html";
}
