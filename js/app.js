function toggleMenu() {
    try {
        const toggle = document.querySelector('.toggle');
        const navigation = document.querySelector('.navigation-movil');
        const links = document.querySelectorAll('.navigation li a');
        const linksMovil = document.querySelectorAll('.navigation-movil li a');
 


        function active() {
            toggle.classList.toggle('active');
            navigation.classList.toggle('active');
        }
        toggle.addEventListener('click', active);
        links.forEach(i => {
            i.addEventListener('click', active);
        })
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
toggleMenu();
/* containerBx(); */



