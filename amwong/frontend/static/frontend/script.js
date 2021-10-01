window.addEventListener('scroll', function(e) {

    const targets = document.querySelectorAll('.scroll');

    targets.forEach(target => {
        var posStart = parseInt(target.dataset.start)
        var posX = window.scrollY * target.dataset.ratex;
        var posY = window.scrollY * target.dataset.ratey;
        var dir = target.dataset.direction

        if ((dir === 'left') || (dir === 'up')) {
            posX = posStart - posX
        } else {
            posX = posStart + posX
        }

        if ((posStart > 0) && (posX < 0)) {
            posX = 0
        } else if ((posStart < 0) && (posX > 0)){
            posX = 0
        }
        target.style.transform = 'translate3d('+posX+'px,'+posY+'px, 0px)';

    })
});