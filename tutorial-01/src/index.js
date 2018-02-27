import _ from 'lodash'
import greet from './components/greet';

greet.hello()
greet.konichiwa()

const component = () => {
  const element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack4'], ' ')

  return element
}

document.body.appendChild(component())
