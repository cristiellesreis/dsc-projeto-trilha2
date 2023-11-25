/*transicao menu*/

window.addEventListener('scroll', function() {
    var menuSuperior = document.getElementById('cabecalho');
    console.info('scroll')

    var scrollHeight = 20;

    if (window.scrollY > scrollHeight) {
        menuSuperior.style.backgroundColor = 'black';
    } else {
        menuSuperior.style.backgroundColor = 'transparent';
    }
  });

/*menu mobile*/

const btnMobile = document.getElementById('btn-mobile');
function toggleMenu() {
    const navegacao = document.getElementById('navegacao');
    navegacao.classList.toggle('active')
}
btnMobile.addEventListener('click',toggleMenu);

/* transição categorias do cardapio */

function exibirHamburgueres(){
    document.getElementById('hamburgueres').classList.remove('oculta')
    document.getElementById('bebidas').classList.add('oculta')
    document.getElementById('acompanhamentos').classList.add('oculta')
}

function exibirAcompanhamentos(){
    document.getElementById('hamburgueres').classList.add('oculta')
    document.getElementById('bebidas').classList.add('oculta')
    document.getElementById('acompanhamentos').classList.remove('oculta')
}

function exibirBebidas(){
    document.getElementById('hamburgueres').classList.add('oculta')
    document.getElementById('bebidas').classList.remove('oculta')
    document.getElementById('acompanhamentos').classList.add('oculta')
}


/* Carrossel de imagens */

const controls =
document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item-evento');
const maxItens = items.length;

controls.forEach(control =>{
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');
        console.log('control clicked', isLeft);

        if(isLeft){
            currentItem -= 1;
        }else{
            currentItem += 1;
        }

        if (currentItem >= maxItens){
            currentItem = 0;
        }

        if (currentItem < 0){
            currentItem = maxItens - 1;
        }

        items.forEach(item => item.classList.remove ('item-evento-atual'));

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });
        items[currentItem].classList.add('item-evento-atual');
    })
});

/*confirmar a reserva e limpar formulario*/

function exibirConfirmacao(){
    event.preventDefault();

    var mensagemReserva = document.getElementById('mensagem-reserva')

    mensagemReserva.classList.remove('oculto')
}
