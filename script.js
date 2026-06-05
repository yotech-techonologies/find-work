// Handle registration
document.getElementById("registerForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;

  // Save registration info
  localStorage.setItem("registeredUser", JSON.stringify({ name, email, role }));

  alert(`Thank you, ${name}! You registered as "${role}". You can now access Jobs.`);
});

// Protect Jobs link until registered
document.getElementById("jobsLink")?.addEventListener("click", e => {
  if (!localStorage.getItem("registeredUser")) {
    e.preventDefault();
    alert("Please register first before accessing jobs.");
  }
});
