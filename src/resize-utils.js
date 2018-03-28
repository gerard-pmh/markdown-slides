export function resizeSlidesContainer (slidesContainer, { width, height, left, top }) {
  slidesContainer.style.width = `${width}px`
  slidesContainer.style.left = `${left}px`
  slidesContainer.style.height = `${height}px`
  slidesContainer.style.top = `${top}px`
}

export function resizeSlides (slides, currentPosition, slideCount, { width }) {
  slides.style.width = `${slideCount * width}px`
  slides.style.marginLeft = `-${currentPosition * width}px`
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
  width = parseInt(width)
  left = parseInt(left)
  height = parseInt(height)
  top = parseInt(top)

  return { width, height, left, top }
}
