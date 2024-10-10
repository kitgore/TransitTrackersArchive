document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a, .logo a');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetId === '#top') {
                // Scroll to the top of the page
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }

            else if (targetSection) {
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight + 20;
                //Scroll to target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});