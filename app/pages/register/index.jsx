import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Form, Button, Row, Col, Icon, } from 'antd'
// 引入api
import {
  register
} from '@/api/login.js'

import style from "./register.less"
import { fromByteArray } from 'ipaddr.js';

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordComfirm: ''
    }
    this.compareToFirstPassword = this.compareToFirstPassword.bind(this)
    this.validateToNextPassword = this.validateToNextPassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err,values) => {
      if (!err) {
        console.log(values)
        register(values).then(res => {
          console.log(res)
        })
      }
    })
  }

  compareToFirstPassword(rule, value, callback) {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback()
    }
  }

  validateToNextPassword(rule, value, callback) {
    const { form } = this.props
    if (value && this.state.passwordComfirm) {
      form.validateFields(['confirm'], { force: true });
    }
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { sm: { span: 6 } },
      wrapperCol: { sm: { span: 14 } }
    }
    const tailFormItemLayout = {
      wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 }},
    };
    return (
      <div className={style.register}>
        <div className={style.inputBox}>
          <Form {...formItemLayout} labelAlign="right" onSubmit={this.handleSubmit} className="register-form">
            <Form.Item label="邮箱">
              {getFieldDecorator('email', {
                rules: [
                  { type: 'email', message: 'The input is not valid E-mail!'},
                  { required: true, message: 'Please input email!' }
                ],
              })(
                <Input allowClear placeholder="email" />
              )}
            </Form.Item>
            <Form.Item label="密码" hasFeedback> 
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input password' },
                  { validator: this.validateToNextPassword }
                ],
              })(
                <Input.Password placeholder="password" />
              )}
            </Form.Item>
            <Form.Item label="确认密码" hasFeedback>
              {getFieldDecorator('passwordConfirm', {
                rules: [
                  { required: true, message: 'Please input confirm password' },
                  { validator: this.compareToFirstPassword }
                ],
              })(
                <Input.Password placeholder="password" />
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

const Register = Form.create({ name: 'register_form' })(RegisterForm)

export default Register