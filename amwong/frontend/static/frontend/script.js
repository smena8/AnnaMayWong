

document.querySelector("a[href='#bio']").addEventListener('click', scrollToBio)

function scrollToBio() {
    console.log('clicked')
    document.querySelector('#bio').scrollIntoView();
}


window.addEventListener('scroll', function(e) {

    const targets = document.querySelectorAll('.scroll');

    targets.forEach(target => {
        var posStart = parseInt(target.dataset.start)
        var posX = window.scrollY * target.dataset.ratex;
        var posY = window.scrollY * target.dataset.ratey;
        var dir = target.dataset.direction

        if (posX) {
            if (dir === 'left') {
                posX = posStart - posX
            } else {
                posX = posStart + posX
            }
        }

        if (posY) {
            if (dir === 'up') {
                posY = posStart - posY
            } else {
                posY = posStart + posY
            }
        }


        if ((posStart > 0) && (posX < 0)) {
            posX = 0
        } else if ((posStart < 0) && (posX > 0)){
            posX = 0
        }

        if (target.className != 'gallery-column scroll') {
            if ((posStart > 0) && (posY < 0)) {
                posY = 0
            } else if ((posStart < 0) && (posY > 0)){
                posY = 0
            }
        }
        target.style.transform = 'translate3d('+posX+'px,'+posY+'px, 0px)';

    })
});