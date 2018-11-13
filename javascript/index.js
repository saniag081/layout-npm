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

$(function () {
    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 1000);
                return false;
            }
        }
    });
});
