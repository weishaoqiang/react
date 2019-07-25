import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Form, Button, Row, Col, Icon, } from 'antd'

import style from "./login.less"

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { sm: { span: 6 } },
      wrapperCol: { sm: { span: 14 } }
    }
    return (
      <div className={style.login}>
        <div className={style.inputBox}>
          <From>
            <From.Item { ...formItemLayout } className="Item" label="邮箱">{
              getFieldDecorator('email', {
                rules: [
                  {type: 'email', massage: 'the input is not valid E-mail'},
                  { required: true, message: 'Please input email' }
                ],
              })(
                <Input allowClear placeholder="email" />
              )}</From.Item>
              <Form.Item>{
                getFieldDecorator('password', {
                  rules: [
                    { required: true, massage: '' }
                  ]
                })
              }</Form.Item>
            <From.Item { ...formItemLayout } className="Item" label="密码">
              
            </From.Item>
          </From>
        </div>
      </div>
    )
  }
}

const Login = Form.create({ name: 'login_form' })(LoginForm)
export default Login