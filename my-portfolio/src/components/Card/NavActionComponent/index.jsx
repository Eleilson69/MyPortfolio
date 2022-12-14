import { Component } from 'react';
import './styles.css';
import imgHeart from '../imgs/03-9.png';
import imgCassete from '../imgs/cassete.png';
import { FuncAction1 } from '../FuncOfActions/FuncAction1.js'
import { FuncAction2 } from '../FuncOfActions/FuncAction2.js'


export class NavActionComponent extends Component {
    render() {
        return (
            <div className='navAction'>
                <div onClick={FuncAction1} className='navAction-left backgroundOn'>
                    <img className='imgCassete' src={imgCassete} />
                </div>
                <div onClick={FuncAction2} className='navAction-right'>
                    <img className='imgHeart animateRotate' src={imgHeart} />
                </div>
            </div>
        )
    }
}