import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Counter } from './components/Counter'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello React!</h1>
        <Counter name="my counter"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'))
