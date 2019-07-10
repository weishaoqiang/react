import React, { Component } from 'react'

class HelloMessage extends React.Component {
  constructor(props) {
    super(props)
    this.say = this.say.bind(this)
    this.state = {
      name: this.props.name
    }
  }
  say() {
    this.setState({name: 'haha'})
  }
  render() {
    return (<div onClick={this.say}>Hello, {this.state.name}</div>)
  }
}

export default HelloMessage