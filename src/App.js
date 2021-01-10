import React, { Component } from 'react'
import './App.css';
import Map from './components/Map'
import Marker from './components/Marker'
import Pins from './components/Pins'



export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      map: null,
      latitude: 37.57259827614173,
      longitude: -106.09388182533371,
      zoom: 9
    }
  }
  render() {
    
    return (
      <div className="App">
        <Map app={this} />
        <Pins app={this}/>
        <Marker app={this}/>
        <div className="Mapoverlay">
          <h1>Landlines</h1>
          <h2>M12 Studio</h2>
        </div>
      </div>
    )
  }
}

export default App