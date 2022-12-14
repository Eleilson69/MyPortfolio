import { Component } from 'react';
import './styles.css';
import imgHeart from '../imgs/03-9.png';
import imgCassete from '../imgs/cassete.png';

export class NavActionComponent extends Component {
    render() {
        const actionFunc1 = () => {
            const elem1 = document.querySelector('.navAction-left');
            const elem2 = document.querySelector('.navAction-right');
            elem1.classList.add('backgroundOn')
            elem2.classList.remove('backgroundOn')
        }
        const actionFunc2 = () => {
            const elem1 = document.querySelector('.navAction-left');
            const elem2 = document.querySelector('.navAction-right');
            elem1.classList.remove('backgroundOn')
            elem2.classList.add('backgroundOn')
        }
        return (
            <div className='navAction'>
            <div onClick={actionFunc1} className='navAction-left backgroundOn'>
                <img className='imgCassete' src={imgCassete} />
            </div>
            <div onClick={actionFunc2} className='navAction-right'>
                <img className='imgHeart animateRotate' src={imgHeart} />
            </div>
                   
            </div>
        )
    }
}