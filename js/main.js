
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navLink.forEach(elem => elem.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(elem => elem.addEventListener('click', linkAction));