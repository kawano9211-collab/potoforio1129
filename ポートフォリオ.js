document.querySelectorAll('.hamburger-menu').forEach(hamburgerMenu => {
    const container = hamburgerMenu.parentElement;
    const navMenu = container.querySelector('.nav-menu');
    const overlay = container.querySelector('.overlay');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');

        if (navMenu.classList.contains('active')) {
            overlay.classList.add('active');
            setTimeout(() => {
                const menuItems = navMenu.querySelectorAll('a');
                menuItems.forEach((item, index) => {
                    setTimeout(() => { item.classList.add('show'); }, index * 150);
                });
            }, 300);
        } else {
            const menuItems = navMenu.querySelectorAll('a');
            menuItems.forEach(item => item.classList.remove('show'));
            setTimeout(() => { overlay.classList.remove('active'); }, 200);
        }
    });
});
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav-menu').classList.toggle('active');
});