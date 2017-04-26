import React from 'react'

import { render } from 'react-dom'

import Awesome from './Awesome.js'

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello react </p>
        <Awesome />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
