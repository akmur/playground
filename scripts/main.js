import '../styles/styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App">
      <h1>React Works :)</h1>
    </div>
  )
}

const rootElement = document.getElementById('app')
ReactDOM.render(<App />, rootElement)
