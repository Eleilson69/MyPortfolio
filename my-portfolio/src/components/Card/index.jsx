import { Component } from 'react';
import './styles.css'
import { NavConteudoComponent } from './NavConteudoComponent/index.jsx'
import { NavActionComponent } from './NavActionComponent/index.jsx'

export class Card extends Component {
    render() {
        return (
            <div className='Card-conteiner'>
                <div className='cardHeader'>
                    <div className='profileCircle'></div>
                    <h1>Elleylson Santtos</h1>
                    <p>Front-End Developer</p>
                </div>
                <NavConteudoComponent />
                <div className='cardConteudo'>
                    <NavActionComponent />
                </div>
            </div>
        )
    }
}