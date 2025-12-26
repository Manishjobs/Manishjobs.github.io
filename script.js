const jobs = [
  {
    title: "SSC GD Constable 2025",
    lastDate: "15 January 2025",
    qualification: "10th Pass",
    link: "https://ssc.gov.in"
  },
  {
    title: "Railway Group D",
    lastDate: "20 January 2025",
    qualification: "10th / ITI",
    link: "https://indianrailways.gov.in"
  }
];

const jobList = document.getElementById("job-list");

jobs.forEach(job => {
  jobList.innerHTML += `
    <div class="job">
      <h3>${job.title}</h3>
      <p><strong>Last Date:</strong> ${job.lastDate}</p>
      <p><strong>Qualification:</strong> ${job.qualification}</p>
      <a href="${job.link}" target="_blank">Apply Now</a>
    </div>
  `;
});
