import React from 'react'
import { render } from 'react-dom'
import AppRouter from '@/router'
import { LocaleProvider, Input } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
moment.locale('zh-cn')
require('@/assets/common/common.less')

render(
  <LocaleProvider locale={zhCN}>
    <AppRouter/>
  </LocaleProvider>,
  document.getElementById('app')
) 