import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button, Row, Col, Icon, Form } from 'antd'

import style from "./register.less"

class RegistorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordComfirm: ''
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
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { xs: { span: 24 }, sm: { span: 6 } },
      wrapperCol: { xs: { span: 24 }, sm: { span: 14 } }
    }
    return (
      <div className={style.register}>
        <div className={style.inputBox}>
          <Form {...formItemLayout} onSubmit={this.handleSubmit} className="register-form">
            <Form.Item label="E-mail">
              {getFieldDecorator('username', {
                rules: [
                  { type: 'email', message: 'The input is not valid E-mail!'},
                  { required: true, message: 'Please input email!' }
                ],
              })(
                <Input allowClear placeholder="email" />
              )}
            </Form.Item>
            {/* <Row className="row-gap__15">
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
              <Col span={4} offset={2}>
                <div className={style.label}>确认密码：</div>
              </Col>
              <Col span={16}>
                <Input
                  placeholder="password comfirm"
                  data-name="passwordComfirm"
                  value={this.state.passwordComfirm}
                  onChange={this.inputHandle}></Input>
              </Col>
            </Row>
            <Row className="row-gap__15">
              <Col span={4} offset={6}>
                <Button type="primary">注册</Button>
              </Col>
            </Row> */}
          </Form>
        </div>
      </div>
    )
  }
}

const Registor = Form.create({ name: 'normal_login' })(RegistorForm);

export default Registor