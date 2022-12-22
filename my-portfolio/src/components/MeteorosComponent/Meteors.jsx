import './styles.css';

import { Component } from "react";
import { MeteorsInit } from './MeteorsInit.js';

export class CanvasMeteors extends Component {
  componentDidMount(){
    MeteorsInit()
  }
  render() {
    return (
      <canvas className='canvas'></canvas>
    )
  }
}
