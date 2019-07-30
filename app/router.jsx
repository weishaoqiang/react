import React, { Component } from 'react'
import createReactClass from 'create-react-class'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// 引入组件
import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'

const DefaultComponent = createReactClass({
  render() {
    return <h3>默认路由</h3>
  }
})

class AppRouter extends Component{
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={DefaultComponent}></Route>
          <Route path="/home" component={Home} ></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </Router>
    )
  }
}

export default AppRouter