document.addEventListener('DOMContentLoaded', function(){
    const sectionLogo = document.querySelector('.logo');
    const heightSectionLogo = sectionLogo.clientHeight
    
    let lastPosition = window.scrollY

    window.addEventListener('scroll', function(){
        const currentPosition = window.scrollY
        const dragon = document.querySelector('.dragon')

        if (currentPosition < heightSectionLogo){
            hiddenDragon()
        }else{
            displayDragon()
        }

        if (currentPosition >lastPosition){
            dragon.style.transform = 'rotate(180deg)';
        }else{
            dragon.style.transform = 'rotate(0deg)';
        }

        lastPosition = currentPosition
    })

    window.addEventListener('load', function () {
        const logoGame = document.querySelector('.logo__item')
        setTimeout(function () {
            logoGame.style.opacity = 1
            logoGame.style.transform = 'scale(1.10)'

        }, 500)
    })
})

function hiddenDragon(){
    const dragon = document.querySelector('.dragon')
    dragon.classList.add('dragon--is-hidden')
}

function displayDragon(){
    const dragon = document.querySelector('.dragon')
    dragon.classList.remove('dragon--is-hidden')
}

