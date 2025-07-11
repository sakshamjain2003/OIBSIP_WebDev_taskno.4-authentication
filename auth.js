function register() {
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Registered successfully!");
  window.location.href = "login.html";
}

function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user found. Please register first.");
    return;
  }

  if (username === storedUser.username && password === storedUser.password) {
    alert("Login successful!");
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", username);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password.");
  }
}
