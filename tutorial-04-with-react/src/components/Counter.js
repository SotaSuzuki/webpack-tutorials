import React, { Component } from 'react'

export class Counter extends Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick () {
    this.increment()
  }

  increment () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick.bind(this)}>+</button>
      </div>
    )
  }
}
