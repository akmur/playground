import '../styles/styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return <div className="App">Works</div>
}

const rootElement = document.getElementById('app')
ReactDOM.render(<App />, rootElement)
