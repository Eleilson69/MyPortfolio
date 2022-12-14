import { Component } from 'react';
import './styles.css'

export class NavConteudoComponent extends Component {
    render() {
        return (
            <main>
                <div className='navAction-Conteudo'>
                    <h1>Sobre</h1>
                    <div id='artigo-1' className='artigo artigoDisplayOn'>
                        <p>Seja bem-vindo(a)!</p>
                        <p>
                            Sou um apaixonado pela Programação desde de 
                            quando eu era um joven adolecente. sempre tive 
                            um sonho que era trabalhar com programação e 
                            atualmenet venho colocando esse sonho me pratica 
                            estudando sobre <strong id='html'>HTML</strong>, <strong id='css'>CSS</strong> e <strong id='javascript'>JavaScript</strong>. 
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Nulla praesentium expedita quam 
                            tempora ullam. Dicta et perferendis sunt repudiandae 
                            explicabo dolores obcaecati, commodi aperiam 
                            natus beatae fugit qui adipisci itaque!
                        </p>
                    </div>
                    <div id='artigo-2' className='artigo'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolorem voluptatem autem laudantium nesciunt, neque eligendi 
                            officiis necessitatibus quisquam, veniam ut explicabo sapiente 
                            quaerat et, eaque iure porro labore cum dolor.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolorem voluptatem autem laudantium nesciunt, neque eligendi 
                            officiis necessitatibus quisquam, veniam ut explicabo sapiente 
                            quaerat et, eaque iure porro labore cum dolor.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolorem voluptatem autem laudantium nesciunt, neque eligendi 
                            officiis necessitatibus quisquam, veniam ut explicabo sapiente 
                            quaerat et, eaque iure porro labore cum dolor.
                        </p>
                    </div>
                </div>
            </main>
        )
    }
}