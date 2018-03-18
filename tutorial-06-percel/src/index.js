import { h, render, Component } from 'preact'
import TodoList from './components/TodoList'

class Clock extends Component {
  constructor () {
    super()
    this.state.time = Date.now()
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() })
    }, 1000)
  }

  componentWillMount () {
    clearInterval(this.timer)
  }

  render (props, state) {
    let time = new Date(state.time).toLocaleString()
    return (
      <div>
        <time>{ time }</time>
      </div>
    )
  }
}

render((
  <div class="page">
    <h1>Hello, preact!</h1>
    <Clock/>
    <button onClick={ e => alert('Hi!') }>Click me!</button>
    <TodoList/>
  </div>
), document.getElementById('app'))
