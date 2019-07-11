import React from 'react'
import { render } from 'react-dom'
import Router from '@/router'

console.log(RouterConfig)
require('@/assets/common/common.css')
render(
  <Router />,
  document.getElementById('app')
)