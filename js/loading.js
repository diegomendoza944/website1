loadText = document.querySelector(',loading.text')
bg = document.querySelector('.bg')
load = 0

int = setInterval(blurring, 50)

fuction blurring (){
    load = load + 1
    loadText.innerText = '${load}%'
    loadText.style.opacity = 1
    bg.style.filter = "blur(10px)"
}