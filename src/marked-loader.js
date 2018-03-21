const marked = require('marked')
const hljs = require('highlight.js')

module.exports = function (content) {
  this.cacheable()

  const renderer = new marked.Renderer()

  renderer.hr = function () {
    return '---'
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })

  return marked(content)
}