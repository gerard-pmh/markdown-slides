import { getDimensions, resizeSlides, resizeSlidesContainer } from './resize-utils'

const ratio = 16 / 9

const slidesContainer = document.querySelector('.slides-container')
const slides = document.querySelector('.slides')

const slideCount = slides.childElementCount

let currentPosition = 0

resize()
window.addEventListener('resize', resize)

document.addEventListener('keydown', function (e) {
  const code = e.keyCode ? e.keyCode : e.which
  if (code === 37 && currentPosition > 0) {
    currentPosition--
  } else if (code === 39 && currentPosition < slideCount) {
    currentPosition++
  }
  resizeSlides(slides, currentPosition, slideCount, { width: slidesContainer.offsetWidth })
})

function resize () {
  const dimensions = getDimensions(ratio, window.innerWidth, window.innerHeight)
  resizeSlidesContainer(slidesContainer, dimensions)
  // slides.classList.remove('enable-transition')
  resizeSlides(slides, currentPosition, slideCount, dimensions)
  // slides.classList.add('enable-transition')
}
