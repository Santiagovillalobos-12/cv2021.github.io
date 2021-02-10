/* function stickyHeader() {
    try {
        window.addEventListener('scroll', function () {
            const header = document.querySelector('header');
            header.classList.toggle("sticky", window.scrollY > 0);
        });
    } catch (error) {
        console.log(`error`, error);
    }
}

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');

    function open() {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    }
    menuToggle.addEventListener("click",open);
    navigation.addEventListener("click",open);
}

stickyHeader();
toggleMenu(); */