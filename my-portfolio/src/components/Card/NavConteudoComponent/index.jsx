import { Component } from 'react';
import './styles.css'
import imgHeart from '../imgs/03-9.png'
import imgCassete from '../imgs/cassete.png'

export class NavConteudoComponent extends Component {
    render() {
        return (
            <div className='navAction'>
            <div className='navAction-left'>
                <img className='imgCassete' src={imgCassete} />
            </div>
            <div className='navAction-right'>
                <img className='imgHeart animateRotate' src={imgHeart} />
            </div>
        </div>
        )
    }
}