// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animation for feature cards on scroll
const cards = document.querySelectorAll(".card");
const observerOptions = {
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

cards.forEach((card) => observer.observe(card));

// Toggle hamburger menu in navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Validation for Login and Sign Up forms
const loginForm = document.querySelector(".login-form");
const signUpForm = document.querySelector(".signup-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = loginForm.querySelector("#email").value;
    const password = loginForm.querySelector("#password").value;

    if (email === "" || password === "") {
      alert("Please fill in all fields!");
    } else {
      alert("Login Successful!");
    }
  });
}

if (signUpForm) {
  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = signUpForm.querySelector("#name").value;
    const email = signUpForm.querySelector("#email").value;
    const password = signUpForm.querySelector("#password").value;

    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields!");
    } else {
      alert("Sign Up Successful!");
    }
  });
}
let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");

  // Reset all slides to display:none
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Increment slideIndex and reset if it exceeds the number of slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";

  // Call the function every 5 seconds to switch slides
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Call the function to start the slideshow
showSlides();
