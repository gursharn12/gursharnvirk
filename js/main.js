// const hamburger = document.querySelector('.hamburger');
// const navLink = document.querySelector('.nav__link');

// hamburger.addEventListener('click', () => {
//   navLink.classList.toggle('hide');
// });



const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

// Toggle the navigation menu when the hamburger is clicked
hamburger.addEventListener('click', (e) => {
  navLink.classList.toggle('hide');
  e.stopPropagation(); // Stop the click event from propagating to the body
});

// Close the navigation menu when clicking outside of it (on the body)
document.body.addEventListener('click', (e) => {
  // Check if the clicked target is not the hamburger or the nav menu itself
  if (!navLink.contains(e.target) && !hamburger.contains(e.target)) {
    navLink.classList.add('hide'); // Close the navigation menu
  }
});


function goHome() {
  window.location.href = "#hero";  
}


const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}




// contact us js   

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show loading message
    document.querySelector(".loading").style.display = "block";

    // Hide error and success messages (in case they were shown previously)
    document.querySelector(".error-message").style.display = "none";
    document.querySelector(".sent-message").style.display = "none";

    // Collect form data
    const name = document.getElementById("name-field").value;
    const email = document.getElementById("email-field").value;
    const subject = document.getElementById("subject-field").value;
    const message = document.getElementById("message-field").value;

    // Simulate an AJAX call (since you're not using PHP or a backend, this is just for the sake of UX)
    setTimeout(function() {
      // Hide loading message
      document.querySelector(".loading").style.display = "none";
      
      // Show success message
      document.querySelector(".sent-message").style.display = "block";

      // Clear the form (optional)
      document.getElementById("contact-form").reset();
    }, 2000); // Simulate a 2-second delay for form submission (you can adjust this)
  });





  document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const navbarMenu = document.getElementById("navbarMenu");
  
    // Toggle the visibility of the menu
    toggleButton.addEventListener("click", function() {
      navbarMenu.classList.toggle("active");
    });
  
    // Close the menu when a menu item is clicked
    const menuItems = navbarMenu.querySelectorAll("a");
    menuItems.forEach(item => {
      item.addEventListener("click", function() {
        navbarMenu.classList.remove("active");
      });
    });
  });

  
