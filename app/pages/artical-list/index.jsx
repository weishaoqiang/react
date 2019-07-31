import React, { Component } from 'react'
import { Divider } from 'antd'
import style from '@/pages/artical-list/artical-list.less'

import { getArtical } from '@/api/articalsManeger'

class ArticalList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articals: []
    }
  }

  componentDidMount() {
    this.getArticals()
  }

  async getArticals(params) {
    const resp = await getArtical()
    this.setState({ articals: resp.data })
  }

  render() {
    return (
      <div className={style.content}>
        <div className={style.title}>
          文章列表
        </div>
        <Divider />
        <div className={style.list}>
          {
            this.state.articals.map((item) => <div key={item._id} className={style.item}>{item.content}</div>)
          }
        </div>
      </div>
    )
  }
}

export default ArticalList