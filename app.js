// Menu Mobile ===============================
const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');
const menuLista = document.querySelectorAll('.cabecalho-menu ul li')

let show = true;

menuToggle.addEventListener('click', () => {
    document.body.style.overflow = show ? "hidden" : "initial";

    menuSection.classList.toggle("on", show);
    show = !show;
})

    
menuLista.forEach((i) => {
    i.addEventListener('click', () => {
        document.body.style.overflow = "initial";
        menuSection.classList.remove("on");
    })
})

// Efeito de escrever ================================
function typeWrite(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            element.innerHTML += letra;
        }, 250 * i)
    });
}
typeWrite(document.querySelector('.name'));