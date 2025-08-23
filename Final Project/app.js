// Highlight current nav link
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  const current = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});

// Button alert test
const btn = document.querySelector(".btn");
if (btn) {
  btn.addEventListener("click", () => {
    alert("Redirecting to registration page!");
  });
}
// Instructor cards animation
gsap.from(".instructor-cards .card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".instructors",
    start: "top 80%"
  }
});
// Form validation
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;

  if (!name || !email || !phone || !course) {
    document.getElementById("formMsg").textContent = "Please fill all required fields.";
    document.getElementById("formMsg").style.color = "red";
    return;
  }

  document.getElementById("formMsg").textContent = "✅ Registration Successful!";
  document.getElementById("formMsg").style.color = "green";

  // Reset form after success
  this.reset();
});

// Animate form
gsap.from("#registerForm", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".register",
    start: "top 80%"
  }
});
// Tools animation
gsap.from(".tool-card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".tools",
    start: "top 80%",
  }
});
// Certification Page Animation
if (document.querySelector(".cert-cards")) {
  gsap.from(".cert-card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".cert-cards",
      start: "top 80%",
    }
  });
}



