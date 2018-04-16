const slides = document.querySelector('.slides')
const slideCount = slides.childElementCount
let currentPosition = 0

document.addEventListener('keydown', event => {
  slides.classList.add('enable-transition')

  const code = event.keyCode ? event.keyCode : event.which
  if (code === 37 && currentPosition > 0) {
    currentPosition--
  } else if (code === 39 && currentPosition < slideCount - 1) {
    currentPosition++
  }

  slides.style.marginLeft = window.matchMedia('(max-aspect-ratio: 16/9)').matches
    ? `-${currentPosition * 100}vw`
    : `-${currentPosition * (16 / 9) * 100}vh`

})

window.onresize = () => slides.classList.remove('enable-transition')
