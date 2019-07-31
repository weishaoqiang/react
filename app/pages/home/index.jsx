import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ArticalList from '@/pages/artical-list'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
import style from '@/pages/Home/home.less'
import MenuItem from 'antd/lib/menu/MenuItem'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <Layout className={style.contenter}>
        <Header></Header>
        <Layout className={style['content-box']}>
          <Sider className={style.sider}>
            <Menu mode="inline">
              <SubMenu title={
                <span>
                  <Icon type="appstore" />
                  <span>Navigator</span>
                </span>}>
                <Menu.Item key="1">
                  <Link to="/home/artical-list">文章列表</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/home">数据管理</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/home">权限管理</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/home">图表分析</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className={style.main}>
            <Router>
              <Route path="/home/artical-list" component={ArticalList}></Route>
            </Router>
          </Content>
        </Layout>
      </Layout>
    )
  }
}