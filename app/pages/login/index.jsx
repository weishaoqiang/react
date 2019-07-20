import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button, Row, Col } from 'antd'

import style from "./login.less"

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.inputHandle = this.inputHandle.bind(this)
  }

  inputHandle(event) {
    let name = event.currentTarget.getAttribute('data-name')
    this.setState({
      [`${name}`]: event.target.value
    })
  }

  render() {
    return (
      <div className={style.login}>
        <div className={style.inputBox}>
          <Row className="row-gap__15">
            <Col span={4} offset={2}>
              <div className={style.label}>邮箱：</div>
            </Col>
            <Col span={16}>
              <Input allowClear
                placeholder="email"
                data-name="email"
                value={this.state.email}
                onChange={this.inputHandle}></Input>
            </Col>
          </Row>
          <Row className="row-gap__15">
            <Col span={4} offset={2}>
              <div className={style.label}>密码：</div>
            </Col>
            <Col span={16}>
              <Input
                placeholder="password"
                data-name="password"
                value={this.state.password}
                onChange={this.inputHandle}></Input>
            </Col>
          </Row>
          <Row className="row-gap__15">
            <Col span={4} offset={8}>
              <Button type="link"><Link to="/register">没有账号？</Link></Button>
            </Col>
            <Col span={4} offset={2}>
              <Button type="primary">登陆</Button>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}