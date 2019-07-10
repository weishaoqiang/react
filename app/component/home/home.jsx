import React, { Component } from 'react'

import homeStyle from './home.css'

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
    return (
      <div className="home"></div>
    )
  }
}

export default HelloMessage