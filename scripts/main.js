import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  message = 'yo'

  render() {
    return <h1>Hello {this.message}</h1>
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
