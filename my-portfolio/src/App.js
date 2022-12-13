import './App.css';
import { Component } from 'react'
import { Hearder } from '../src/components/Header/index'

class App extends Component {
  render() {
    return (
      <div className='content'>
        <Hearder />
      </div>
    )
  }
}

export default App;
