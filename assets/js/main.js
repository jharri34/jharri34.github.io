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

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible fade show" role="alert" style="position: fixed; top: 25%; left: 40%; z-index: 1050; width: 300px; font-size: 1.25rem; font-weight: bold; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); animation: bounceIn 0.5s;">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  const alertElement = wrapper.firstChild;
  alertPlaceholder.append(alertElement);

  // Automatically fade out and remove the alert after 5 seconds
  setTimeout(() => {
    alertElement.classList.add('fade-out'); // Add fade-out class
    setTimeout(() => {
      alertElement.remove(); // Remove the alert from the DOM
    }, 1000); // Wait for the fade-out animation to complete
  }, 5000); // 5 seconds before starting fade-out
};

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent navigation or form submission
    appendAlert('Your message has been sent successfully!', 'success');
  });
}