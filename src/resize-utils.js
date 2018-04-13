export function resizeSlidesContainer (slidesContainer, { width, height, left, top }) {
  slidesContainer.style.width = `${width}px`
  slidesContainer.style.left = `${left}px`
  slidesContainer.style.height = `${height}px`
  slidesContainer.style.top = `${top}px`
}

export function resizeSlides (slides, currentPosition, slideCount, { width }) {
  slides.style.width = `${slideCount * width}px`
  slides.style.marginLeft = `-${currentPosition * width}px`
  for (let i = 0; i < slideCount; i++) {
    for (let j = 0; j < slides.children[i].childElementCount; j++) {
      slides.children[i].children[j].style.transform = `scale(${width / 1080})`
    }
  }
}

export function getDimensions (ratio, parentWidth, parentHeight) {
  let width, height, left, top
  const parentRatio = parentWidth / parentHeight

  if (parentRatio > ratio) {
    width = parentWidth * ratio / parentRatio
    height = parentHeight
    left = (parentWidth - width) / 2
    top = 0
  } else {
    width = parentWidth
    height = parentHeight * parentRatio / ratio
    left = 0
    top = (parentHeight - height) / 2
  }
  width = Math.floor(width)
  left = Math.floor(left)
  height = Math.floor(height)
  top = Math.floor(top)

  return { width, height, left, top }
}
