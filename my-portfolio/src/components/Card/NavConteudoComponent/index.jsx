import { Component } from 'react';
import './styles.css'

export class NavConteudoComponent extends Component {
    render() {
        return (
            <main>
                <div className='navAction-Conteudo'>
                    <h1>Sobre</h1>
                    <div id='artigo-1' className='artigo artigoDisplayOn'>
                        
                        <h3 id='conteudo'>
                            <p>Seja bem-vindo(a)!</p>
                            Sou um apaixonado pela Programação desde de 
                            quando eu era um joven adolecente. sempre tive 
                            um sonho, que era trabalhar com programação e 
                            atualmenet venho colocando esse sonho em pratica 
                            estudando sobre <strong id='html'>HTML</strong>, <strong id='css'>CSS</strong> e <strong id='javascript'>JavaScript</strong>.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, ullam dicta. Autem odio qui enim mollitia quaerat delectus similique voluptatem dolorem nam quidem nesciunt quas, nobis, reprehenderit impedit cum eos!
                        </h3>
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