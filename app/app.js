import React from 'react'
import { render } from 'react-dom'
import HelloMessage from 'component/home/home'
render(
  <HelloMessage name="wei"/>,
  document.getElementById('app')
)