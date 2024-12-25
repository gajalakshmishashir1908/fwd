let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active'); // Hide login form on scroll
    menu.classList.remove('fa-times');
    navbar.classList.remove('active'); 
};

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active'); // Show the login form
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active'); // Hide the login form on close button click
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector(' .controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
});


  document.getElementById("arrival-date").addEventListener("change", function () {
    const arrivalDate = new Date(this.value);
    if (!isNaN(arrivalDate.getTime())) {
      // Add 5 days to the arrival date
      arrivalDate.setDate(arrivalDate.getDate() + 5);

      // Format the date to YYYY-MM-DD
      const formattedDate = arrivalDate.toISOString().split('T')[0];

      // Set the leaving date input's value
      document.getElementById("leaving-date").value = formattedDate;
    }
  });


