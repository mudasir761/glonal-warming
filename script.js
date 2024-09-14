const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle menu open/close
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('open');
});


const navItems = document.getElementById('home');
navItem.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});


