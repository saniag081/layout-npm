var buttom = document.getElementById('buttom');
var menu = document.getElementById('menu');

var consulta = window.matchMedia('(max-width: 770px)');

consulta.addListener((() =>{

    if (consulta.matches) {

        console.log('se cumplio');

        buttom.addEventListener('click', toggle);
    }
    else{
        
        console.log('no se cumplio');

        buttom.removeEventListener('click', toggle);
    }
})());

function toggle() {
    
    menu.classList.toggle('-active');
}
