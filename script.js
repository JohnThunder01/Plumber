const phoneLinks = document.querySelectorAll('nav a');

phoneLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const phoneId = link.getAttribute('href');
    const phoneElement = document.querySelector(phoneId);
    phoneElement.scrollIntoView({ behavior: 'smooth' });
  });
});