toggle = document.getElementById('toggle')
open = document.getElementById('open')
model = document.getElementById('model')
close = document.getElementById('close')

// toggle Nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav')
})

// show Modal
open.addEventListener('click', () => {
  modal.classList.add('show-modal')
})

// hide Modal
close.addEventListener('click', () => {
  modal.classList.remove('show-modal')
})

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.classList.remove('show-modal')
  }
}
)