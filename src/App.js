// create your App component here
import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }




  componentDidMount(){
    const url = "http://api.open-notify.org/astros.json"

    fetch(url)
    .then(r=>r.json())
    .then(obj => {
      console.log(obj)
    })
  }

  render(){
    return (
      <div>
      {this.obj}
      </div>
    )
  }
}

export default App
