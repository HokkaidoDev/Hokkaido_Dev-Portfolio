document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  const body = document.body;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
      body.style.paddingTop = header.offsetHeight + 'px';
    } else {
      header.classList.remove('scrolled');
      body.style.paddingTop = '0';
    }
  });
});