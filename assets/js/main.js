// Change navbar style on scroll
document.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNavbar');
  if (window.scrollY > 50) {
    navbar.classList.add('bg-solid', 'navbar-light', 'shadow-sm', 'small-navbar');
    navbar.classList.remove('bg-transparent', 'large-navbar');
  } else {
    navbar.classList.remove('bg-solid', 'shadow-sm', 'small-navbar');
    navbar.classList.add('bg-transparent', 'large-navbar');
  }
});
