import _ from 'lodash'
import greet from './components/greet';

import './style.scss'

greet('ja')
greet('en')
greet('es')
greet('de')

const component = () => {
  const element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack4', '!!!!'], ' ')

  return element
}

document.body.appendChild(component())
