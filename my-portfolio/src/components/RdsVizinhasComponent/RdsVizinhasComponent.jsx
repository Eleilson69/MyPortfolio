import './styles.css'
import { Component } from "react";
import { FuncSelectDot } from './FuncSelectDot'

export class RdsVizinhasComponent extends Component {
    render() {
        return (
            <div>
                <ul onMouseEnter={FuncSelectDot} className="redes">
                    <li className="rds-conteiner">
                        <div className='icon'>

                        </div>
                        <div className='dotPai'>
                            <div className='dot'></div>
                            <div className='dot-card'></div>
                            <div className='dot-card-two'>
                                <p>
                                    Oi! me chama no 
                                    <strong style={{ color: 'rgb(0, 255, 102)' }}>
                                        Whatsapp
                                    </strong> vamos converssar
                                </p>
                            </div>
                        </div>
                    </li>
                    <li  className="rds-conteiner">
                        <div className='icon'></div>
                    </li>
                    <li className="rds-conteiner">
                        <div className='icon'></div>
                    </li>
                    <li className="rds-conteiner">
                        <div className='icon'></div>
                    </li>
                    <li className="rds-conteiner">
                        <div className='icon'></div>
                    </li>
                </ul>
            </div>
        )
    }
}