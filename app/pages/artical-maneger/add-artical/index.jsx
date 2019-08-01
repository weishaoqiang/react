import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { addArtical } from '@/api/articalsManeger'

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
    this.props.form.validateFields((err, values) => {
      console.log(values)
    })
    console.log(e)
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
            getFieldDecorator('articalValues.title', {})(
              <Input placeholder="标题"></Input>
            )
          }</Form.Item>
          <Form.Item className={style.item} label="作者">{
            getFieldDecorator('articalValues.author', {})(
              <Input placeholder="作者"></Input>
            )
          }</Form.Item>
          <Form.Item {...editorLayout} className={style['editor']}>{
            getFieldDecorator('articalValues.centent', {})(
              <CKEditor editor={ClassicEditor} 
                data={this.state.articalValues.content}
                onInit={editor => {
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={editor => {
                  console.log('Blur.', editor);
                }}
                onFocus={editor => {
                  console.log('Focus.', editor);
                }}
              />
            )
          }
          </Form.Item>
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