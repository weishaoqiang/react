import React, { Component } from 'react'
import { Divider, Button } from 'antd'
import style from './artical-list.less'

import { getArtical } from '@/api/articalsManeger'

class ArticalList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articals: []
    }
    this.addArtical = this.addArtical.bind(this)
  }

  componentDidMount() {
    this.getArticals()
  }

  addArtical(e) {
    this.props.history.push('/home/add-artical')
  }

  async getArticals(params) {
    const resp = await getArtical()
    this.setState({ articals: resp.data })
  }

  render() {
    return (
      <div className={style.content}>
        <div className={style.title}>
          <div className={style.name}>文章列表</div>
          <div className={style.btn}>
            <Button type="primary" onClick={this.addArtical}>
              新添文章
            </Button>
          </div>
        </div>
        <Divider />
        <div className={style.list}>
          {
            this.state.articals.map((item) => 
              <div key={item._id} className={style.item}>
                <div className={style['item-header']}>
                  <h4 className={style['item-title']}>{item.title}</h4>
                  <p className={style.author}>作者：{item.author}</p>
                </div>
                <div className={style['item-content']}>
                  <p>{item.content}</p>
                </div>
              </div>)
          }
        </div>
      </div>
    )
  }
}

export default ArticalList