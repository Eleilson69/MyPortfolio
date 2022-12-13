import { Component } from 'react';
import './styles.css'
import imgHeart from '../imgs/03-9.png'
import imgCassete from '../imgs/cassete.png'

export class NavActionComponent extends Component {
    render() {
        const actionFunc = () => {
            console.log('.navAction-left')
        }
        return (
            <div className='navAction'>
            <div onClick={actionFunc} className='navAction-left'>
                <img className='imgCassete' src={imgCassete} />
            </div>
            <div onClick={actionFunc} className='navAction-right'>
                <img className='imgHeart animateRotate' src={imgHeart} />
            </div>
            </div>
        )
    }
}