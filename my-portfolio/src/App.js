import './App.css';

import { Component } from 'react'
import { Hearder } from '../src/components/Header/index.jsx'
import { Card } from './components/Card/index.jsx'
import { AstronautaSvg } from './components/AstronautaSvg';


class App extends Component {
  render() {
    return (
      <div className='content'>
        <Hearder />
        <section className='conteiner-left-and-right'>
            <div className='conteiner-left'>
              <Card />
            </div>
            <div className='conteiner-right'>
              <AstronautaSvg />
            </div>
        </section>
      </div>
    )
  }
}

export default App;
