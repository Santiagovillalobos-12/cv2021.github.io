function toggleMenu() {
    try {
        const toggle = document.querySelector('.toggle');
        const navigation = document.querySelector('.navigation-movil');
        const linksMovil = document.querySelectorAll('.navigation-movil li a');

        function active() {
            toggle.classList.toggle('active');
            navigation.classList.toggle('active');
        }
        toggle.addEventListener('click', active);
        linksMovil.forEach(i => {
            i.addEventListener('click', active);
        })
        

    } catch (error) {
        console.log(`error`, error);
    }
}

/* 
function containerBx() {

    try {
        const container = document.querySelector('.containerBx');
        const toggle = document.querySelector('.active');

        if(toggle){
            container.classList.add('d-none');
        }

    } catch (error) {
        console.log(`error`, error);
    }
} */

function positionToggleResponsive() { 
    try {
        window.addEventListener('scroll', function () {
            const toggle = document.querySelector('.toggle');
            toggle.setAttribute('style', 'display: initial', window.scrollY >= 0);
            if (window.scrollY == 0){
                toggle.setAttribute('style', 'display: none');
            }
            if(screen.width > 767){
                toggle.setAttribute('style', 'display: none');
            }
        })
    }
    catch (error) {
        console.log(`error`, error);
    }
}


toggleMenu();
/* containerBx(); */
positionToggleResponsive();



