import { h, render, Component } from 'preact'

export default class TodoList extends Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      text: ''
    }
  }

  setText (e) {
    this.setState({ text: e.target.value })
  }

  addTodo () {
    let { todos, text } = this.state
    todos = todos.concat({ text })
    this.setState({ todos, text: '' })
  }

  render ({}, { todos, text }) {
    return (
      <form onSubmit={this.addTodo.bind(this)} action="javascript:">
        <input type="text" value={text} onInput={this.setText.bind(this)}/>
        <button type="submit">Add</button>
        <ul>
          { todos.map(todo => (
            <li>{todo.text}</li>
          )) }
        </ul>
      </form>
    )
  }
}
