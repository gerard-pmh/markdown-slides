const marked = require('marked')
const hljs = require('highlight.js')

module.exports = function (content) {
  this.cacheable()

  const renderer = new marked.Renderer()

  renderer.hr = function () {
    return '</div><div class="slide">'
  }

  renderer.code = function (code, language) {
    return '<pre><code class="hljs ' + language + '">' +
      hljs.highlight(language, code).value +
      '</code></pre>'
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true
  })

  return marked(content)
}
