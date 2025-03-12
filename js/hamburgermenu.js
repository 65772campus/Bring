document.addEventListener('DOMContentLoaded', function() {
    const menuOpener = document.querySelector('.menuopener');
    const menuIcon = document.querySelector('.menuicon');
    const closeIcon = document.querySelector('.closeicon');
    const menu = document.querySelector('nav ul');

    menuOpener.addEventListener('change', function() {
        if (menuOpener.checked) {
            menu.style.display = 'flex';
            menu.style.flexDirection = 'column';
            menu.style.transition = 'all .5s ease-in-out';
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            menu.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
});