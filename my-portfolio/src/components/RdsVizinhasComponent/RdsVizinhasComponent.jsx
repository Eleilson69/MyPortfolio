import './styles.css'
import { Component } from "react";
import { FuncSelectDot } from './FuncSelectDot'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from '../../../node_modules/react-icons/fa'

export class RdsVizinhasComponent extends Component {
    render() {
        return (
            <div>
                <ul onMouseEnter={FuncSelectDot} className="redes">
                    <li className="rds-conteiner">
                        <div className='icon'>
                            <a 
                                className='rds-link' 
                                href="https://wa.me/5598985598696"
                            >
                                <FaWhatsapp 
                                    className='rds-icon' 
                                />     
                            </a>
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
                        <div className='icon'>
                            <a 
                                className='rds-link' 
                                href="https://www.instagram.com/rei_da_cena/"
                            >
                                <FaInstagram 
                                    className='rds-icon' 
                                />
                            </a>
                        </div>
                    </li>
                    <li className="rds-conteiner">
                        <div className='icon'>
                            <a 
                                className='rds-link'
                                href="https://www.linkedin.com/in/eleilson-santos-408b55222/"
                            >
                                <FaLinkedin     
                                    className='rds-icon'  
                                />
                            </a>
                        </div>
                    </li>
                    <li className="rds-conteiner">
                        <div className='icon'>
                            <a 
                                className='rds-link' 
                                href="https://www.tiktok.com/@diario_do_code?lang=pt-BR"
                            >
                                <FaTiktok     
                                    className='rds-icon'  
                                />
                            </a>
                        </div>
                    </li>
                    <li className="rds-conteiner">
                        <div className='icon'>
                            <a 
                                className='rds-link' 
                                href="https://twitter.com/DiariodoMalvado"
                            >
                                <FaTwitter     
                                    className='rds-icon'  
                                />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}