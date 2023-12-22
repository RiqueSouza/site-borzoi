document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
  
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const subtopics = this.parentNode.querySelector('.subtopics');
        if (subtopics) {
          subtopics.style.display = subtopics.style.display === 'block' ? 'none' : 'block';
        }
      });
    });
  });

/* Funcionamento do footer */
document.addEventListener("DOMContentLoaded", function() {
  const navBar = document.querySelector("nav");
  const menuBtns = document.querySelectorAll(".menu-icon");
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");
  const footer = document.querySelector(".footer");

  menuBtns.forEach(function(menuBtn) {
    menuBtn.addEventListener("click", function() {
      navBar.classList.toggle("open");
      body.classList.toggle("menu-open");
      footer.classList.toggle("hide");
    });
  });

  overlay.addEventListener("click", function() {
    navBar.classList.remove("open");
    body.classList.remove("menu-open");
    footer.classList.remove("hide");
  });
});