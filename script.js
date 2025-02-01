// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Add event listener for scroll to trigger animations
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.parallax-section');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('visible');
      }
    });
  });
  
  // Highlight active navigation link on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.parallax-section');
    const navLinks = document.querySelectorAll('nav ul li a');
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      }
    });
  });