import $ from 'jquery'
import hello from './components/hello'

console.log(hello())

$('#app, body, html').css({
  'height': '100%'
})

$('#app').css({
  'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center',
})

$('.title').css({
  'margin': 0,
  'color': '#333',
  'font-size': '120px',
  'font-family': 'Helvetica, sans-serif'
})

const title = $('.title').text()
$('.title').text('')


title
  .split('')
  .map((str, i) => {
    const $strElement = $(`<span>${str}</span>`)
    $strElement.css({
      'font-size': 0
    })
    $('.title').append($strElement)
    return $strElement
  })
  .map(($element, i) => {
    $element
      .delay(100 * i)
      .queue(() => {
        $element.css({
          'font-size': 'inherit'
        })
      })
  })
