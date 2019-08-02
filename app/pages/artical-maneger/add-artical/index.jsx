import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { addArtical } from '@/api/articalsManeger'
const { TextArea } = Input

import style from './add-artical.less'

class AddArticalFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articalValues: {
        title: '',
        author: '',
        content: '哈哈哈'
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const { content } = this.state.articalValues
    this.props.form.validateFields((err, values) => {
      if (err) throw err
      values.articalValues.content = content
      this.addArtical(values.articalValues)
      console.log(values)
    })
  }

  async addArtical(params) {
    try {
      const resp = await addArtical(params)
      console.log(resp)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { sm: { span: 4 } },
      wrapperCol: { sm: { span: 16 } }
    }
    const editorLayout = {
      wrapperCol: { sm: { span: 24 } }
    }
    return (
      <div className={style.content}>
        <Form {...formItemLayout} layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item className={style.item} label="标题">{
            getFieldDecorator('articalValues.title', {
              rules: [{
                required: true, message: '请输入标题'
              }]
            })(
              <Input placeholder="标题"></Input>
            )
          }</Form.Item>
          <Form.Item className={style.item} label="作者">{
            getFieldDecorator('articalValues.author', {
              rules: [{
                required: true, message: '请输入作者'
              }]
            })(
              <Input placeholder="作者"></Input>
            )
          }</Form.Item>
          <Form.Item className={style['hidden-textarea']} {...editorLayout}>{
            getFieldDecorator('articalValues.content', {})(
              <TextArea autosize/>
            )
          }
          </Form.Item>
          <CKEditor editor={ClassicEditor}
            data={this.state.articalValues.content}
            onInit={editor => {}}
            onChange={(event, editor) => {
              const data = editor.getData()
              this.state.articalValues.content = data
              this.setState({ 
                articalValues: this.state.articalValues
               })
            }}
            onBlur={editor => {}}
            onFocus={editor => {}}
          />
          <Form.Item className={style['footer']}>
            <Button className={style.btn} type="primary" htmlType="submit">提交</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const AddArtical = Form.create({ name: 'add-artical' })(AddArticalFrom)
export default AddArtical