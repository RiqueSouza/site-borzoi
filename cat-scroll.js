   window.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const targetOffsetTop = target.offsetTop;

        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth'
        });
      });
    });
  });