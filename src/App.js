import React from 'react'

class App extends React.Component {

  state = {
    astronauts: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(astronautArr => {
      this.setState({
        astronauts: astronautArr.people
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Humans Currently In Space</h1>
        <ul>
          {this.state.astronauts.map(astronaut =>
            <li key={astronaut.name}>{astronaut.name}</li>
          )}
        </ul>
      </div>
    )
  }

}

export default App
