// Initialize the database array with existing users from local storage, if any.
let database = JSON.parse(localStorage.getItem("users")) || [];

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

  if (password !== confirmPassword) {
    alert(`Password does not match`);
  } else {
    database.push(newUser);

    // Save the updated database back to local storage.
    localStorage.setItem("users", JSON.stringify(database));
    window.location.href = "./signIn.html";
  }
}

function login(e) {
  e.preventDefault();
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    let user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      alert(`Login Successful`);
      //   clearAllInput();
    } else {
      alert(`Invalid Login credentials`);
    }
  } else {
    alert(`No user found`);
  }

  //   function clearAllInput() {
  //     email.value = "";
  //     password.value = "";
  //   }
}
