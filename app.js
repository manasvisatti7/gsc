let issues = [];
let volunteers = [];

// Submit Issue
document.getElementById("issueForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let issue = {
    location: document.getElementById("location").value,
    category: document.getElementById("category").value,
    urgency: document.getElementById("urgency").value
  };

  issues.push(issue);
  displayIssues();
});

// Register Volunteer
document.getElementById("volunteerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let volunteer = {
    name: document.getElementById("vname").value,
    location: document.getElementById("vlocation").value
  };

  volunteers.push(volunteer);
  matchVolunteer(volunteer);
});

// Display Issues
function displayIssues() {
  let list = document.getElementById("issuesList");
  list.innerHTML = "";

  issues.sort((a, b) => b.urgency - a.urgency);

  issues.forEach(issue => {
    list.innerHTML += `
      <p>
        ${issue.category} - ${issue.location} - Urgency: ${issue.urgency}
      </p>
    `;
  });
}

// Matching Logic
function matchVolunteer(volunteer) {
  let matched = issues.find(issue => 
    issue.location === volunteer.location && issue.urgency >= 4
  );

  if (matched) {
    alert(`${volunteer.name} assigned to ${matched.category} issue`);
  } else {
    alert("No urgent issue found nearby");
  }
}