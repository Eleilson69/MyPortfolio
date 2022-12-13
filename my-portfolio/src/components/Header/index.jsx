import { Component } from 'react'
import './styles.css' 

export class Hearder extends Component {
    render() {
        return (
            <div className='header'>
                <h1 className='title-header'>Towards Space</h1>
                <ul className='rotas'>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Projects</li>
                </ul>
                <div className='Relogio'>
                    <h1>23:22:14</h1>
                    <h3>PM</h3>
                </div>
            </div>
        )
    }
}