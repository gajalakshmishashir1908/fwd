// Get the popup elements
const signInPopup = document.getElementById('signInPopup');
const signUpPopup = document.getElementById('signUpPopup');

// Get the buttons to open popups
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');

// Get the close buttons for popups
const closeSignIn = document.getElementById('closeSignIn');
const closeSignUp = document.getElementById('closeSignUp');

// Open Sign In Popup
signInBtn.addEventListener('click', () => {
  signInPopup.style.display = 'flex';
});

// Open Sign Up Popup
signUpBtn.addEventListener('click', () => {
  signUpPopup.style.display = 'flex';
});

// Close Sign In Popup
closeSignIn.addEventListener('click', () => {
  signInPopup.style.display = 'none';
});

// Close Sign Up Popup
closeSignUp.addEventListener('click', () => {
  signUpPopup.style.display = 'none';
});

// Handle Sign In form submission
document.getElementById('signInForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  // Show the success message
  document.getElementById('signInMessage').style.display = 'block';
  
  // After 2 seconds, redirect to index1.html
  setTimeout(function() {
    window.location.href = 'index.html'; // Redirect to new page
  }, 2000); // 2 seconds delay for message display
});

// Handle Sign Up form submission
document.getElementById('signUpForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  // Show the success message
  document.getElementById('signUpMessage').style.display = 'block';
  
  // After 2 seconds, redirect to index1.html
  setTimeout(function() {
    window.location.href = 'index.html'; // Redirect to new page
  }, 2000); // 2 seconds delay for message display
});
