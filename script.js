// Prevent Jobs access until registered
document.getElementById("jobsLink")?.addEventListener("click", e => {
  if (!localStorage.getItem("registeredUser")) {
    e.preventDefault();
    alert("Please register first before accessing jobs.");
  }
});

// Save registration locally after FormSubmit submission
document.getElementById("registerForm")?.addEventListener("submit", e => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;
  localStorage.setItem("registeredUser", JSON.stringify({ name, email, role }));
});

// Role‑based Jobs page
const jobsContent = document.getElementById("jobsContent");
const userData = localStorage.getItem("registeredUser");

if (jobsContent && userData) {
  const user = JSON.parse(userData);

  if (user.role === "find") {
    jobsContent.innerHTML = `
      <h2>Available Jobs</h2>
      <ul class="job-list">
        <li><strong>Software Engineer</strong> - Remote</li>
        <li><strong>Marketing Specialist</strong> - Lagos, Nigeria</li>
        <li><strong>Data Analyst</strong> - London, UK</li>
      </ul>
    `;
  } else if (user.role === "post") {
    jobsContent.innerHTML = `
      <h2>Post a New Job</h2>
      <form action="https://formsubmit.co/yotechtechnologies@gmail.com" method="POST">
        <label for="title">Job Title:</label>
        <input type="text" name="title" id="title" required>

        <label for="location">Location:</label>
        <input type="text" name="location" id="location" required>

        <label for="description">Description:</label>
        <textarea name="description" id="description" required></textarea>

        <!-- Hidden fields -->
        <input type="hidden" name="_next" value="https://yourdomain.com/jobs.html">
        <input type="hidden" name="_subject" value="New Job Posting on Work Finder">
        <input type="hidden" name="_captcha" value="false">

        <button type="submit">Submit Job</button>
      </form>
    `;
  }
}
