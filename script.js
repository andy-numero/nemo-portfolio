document.addEventListener('DOMContentLoaded', () => {
  // 1. Intersection Observer for fade-in animations on scroll
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // 2. Simple interactivity for contact form submission button
  const contactButton = document.querySelector('.contact-form-box .btn-pixel');
  if (contactButton) {
    contactButton.addEventListener('click', (e) => {
      e.preventDefault();
      const nameInput = document.querySelector('.contact-form-box input[type="text"]');
      const emailInput = document.querySelector('.contact-form-box input[type="email"]');
      const messageInput = document.querySelector('.contact-form-box textarea');

      if (nameInput && nameInput.value.trim() === '') {
        alert('▶ ERROR: PLEASE INSERT YOUR NAME, PLAYER!');
        return;
      }

      alert('▶ MESSAGE SENT SUCCESSFULLY! THANK YOU FOR REACHING OUT.');
      
      // Clear form fields
      if (nameInput) nameInput.value = '';
      if (emailInput) emailInput.value = '';
      if (messageInput) messageInput.value = '';
    });
  }
});