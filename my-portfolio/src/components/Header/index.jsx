import { Component } from 'react'
import './styles.css' 
import RocketRed from './imgs/Rocket-Red.png'

export class Hearder extends Component {
    render() {
        return (
            <div className='header'>
                <h1 className='title-header'>Towards Space</h1>
                <img className='RocketRed' src={RocketRed} />
                <ul className='rotas'>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Projects</li>
                </ul>
                <div className='Relogio'>
                    <h1 className='watch'>00:00:00</h1>
                    <h3 className='am-pm' >PM</h3>
                </div>
            </div>
        )
    }
}