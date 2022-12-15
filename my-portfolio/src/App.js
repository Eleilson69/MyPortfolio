import './App.css';

import { Component } from 'react'
import { Hearder } from '../src/components/Header/index.jsx'
import { Card } from './components/Card/index.jsx'
import { AstronautaSvg } from './components/AstronautaSvg';
import {  RdsVizinhasComponent } from './components/RdsVizinhasComponent/RdsVizinhasComponent.jsx'
import { WatchComponent, renderAmPm } from './components/Header/WatchComponent/WatchComponent.js'


class App extends Component {
  componentDidMount() {
    setInterval(() => {
      renderAmPm();
      WatchComponent();
    },1000)
  }
 
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
              <RdsVizinhasComponent />
            </div>
        </section>
      </div>
    )
  }
}

export default App;
