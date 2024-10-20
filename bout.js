document.addEventListener('scroll', function() {
    const experienceItems = document.querySelectorAll('.experience-item');
  
    experienceItems.forEach((item) => {
      const position = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
  
      if (position < screenPosition) {
        item.classList.add('visible');
      }
    });
  });
  