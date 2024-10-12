window.onload = function() {
    initSmoothScroll();
};

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a, .logo a');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent any default action
            const targetId = this.getAttribute('data-scroll-to');

            if (targetId === 'top') {
                // Scroll to the top of the page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight + 20;
                    
                    // Scroll to target position
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }

            // Update the URL without navigating
            history.pushState(null, '', targetId === 'top' ? '#' : `#${targetId}`);
        });
    });
}