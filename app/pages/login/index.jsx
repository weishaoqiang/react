import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { createHashHistory } from "history"
import { Input, Form, Button, Row, Col, Icon, } from 'antd'
import { login } from '@/api/login.js'
import { setToken } from '@/utils/utils'

import style from "./login.less"

console.log(createHashHistory)

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if(!err) {
        const resp = await login(values)
        setToken(resp.data.token)
        // const history = createHashHistory.createHistory()
        // history.push('/home')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { sm: { span: 6 } },
      wrapperCol: { sm: { span: 14 } }
    }
    const formButonLayout = {
      wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } }
    }

    return (
      <div className={style.login}>
        <div className={style.inputBox}>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item className="Item" label="邮箱">{
              getFieldDecorator('email', {
                rules: [
                  {type: 'email', massage: 'the input is not valid E-mail'},
                  { required: true, message: 'Please input email' }
                ],
              })(
                <Input allowClear placeholder="email" />
              )}</Form.Item>
              <Form.Item className="Item" label="密码">{
                getFieldDecorator('password', {
                  rules: [
                    { required: true, massage: 'place input password!' }
                  ]
                })(
                  <Input.Password placeholder="password" />
                )
              }</Form.Item>
              <Form.Item {...formButonLayout}>
                <Row>
                  <Col span={12}><Button type="link">注册</Button></Col>
                  <Col span={12}><Button type="primary" htmlType="submit">登陆</Button></Col>
                </Row>
              </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

const Login = Form.create({ name: 'login_form' })(LoginForm)
export default Login