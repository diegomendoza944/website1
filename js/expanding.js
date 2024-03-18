heros = document.querySelectorAll('.hero')

heros.forEach(panel => {
    hero.addEventListener('click', () => {
        removeActiveClasses()
        hero.classList.add('active')
    })
})
function removeActiveClasses(){
    heros.forEach(hero => {
        hero.classList.remove('active')
    })
}