import './styles.css'
import svgAstronalta from './imgs/header-img.svg'
import { Component } from 'react';

export class AstronautaSvg extends Component {
    render() {
        return (
            <img className='astronauta' src={svgAstronalta} />  
        )
    }
}