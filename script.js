// Load Jobs page content based on role
const jobsContent = document.getElementById("jobsContent");
const userData = localStorage.getItem("registeredUser");

if (jobsContent && userData) {
  const user = JSON.parse(userData);

  if (user.role === "find") {
    // Show job listings
    jobsContent.innerHTML = `
      <h2>Available Jobs</h2>
      <ul class="job-list">
        <li><strong>Software Engineer</strong> - Remote</li>
        <li><strong>Marketing Specialist</strong> - Lagos, Nigeria</li>
        <li><strong>Data Analyst</strong> - London, UK</li>
      </ul>
    `;
  } else if (user.role === "post") {
    // Show job posting form connected to Formspree
    jobsContent.innerHTML = `
      <h2>Post a New Job</h2>
      <form id="postJobForm" action="https://formspree.io/f/xpqewnwz" method="POST">
        <label for="title">Job Title:</label>
        <input type="text" name="title" id="title" required>

        <label for="location">Location:</label>
        <input type="text" name="location" id="location" required>

        <label for="description">Description:</label>
        <textarea name="description" id="description" required></textarea>

        <button type="submit">Submit Job</button>
      </form>
    `;
  }
}
