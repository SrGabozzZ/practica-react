import React,{ useState} from 'react';
import FinishQuiz from './finishQuiz';
import Quiz from './Quiz';
import qStyle from "./Quiz.module.css"

const data = [
    {
        question: "¿Cual es el nombre de mi mascota?",
        choices: [
            {choose:"Peluche", style:""},
            {choose:"Titi", style:""},
            {choose:"Kata", style:""},
            {choose:"Ghost", style:""},
        ],
        answer: "Ghost",
        respuestaC:""
    },
    {
        question: "¿Donde vivo actualmente?",
        choices: [
            {choose:"Colombia", style:""},
            {choose:"Peru", style:""},
            {choose:"Chile", style:""},
            {choose:"Venezuela", style:""},    
        ],
        answer: "Venezuela",
        respuestaC:""
    },
    {
        question: "¿Donde quieres vivir?",
        choices: [
            {choose:"Brasil", style:""},
            {choose:"Argentina", style:""},
            {choose:"Estados unidos", style:""},
            {choose:"España", style:""},  
        ],
        answer: "España",
        respuestaC:""
        
    },
    {
        question: "¿Que genero de videojuegos te gustan?",
        choices: [
            {choose:"Indie", style:""},
            {choose:"Plataformas", style:""},
            {choose:"Dance", style:""},
            {choose:"First person shooter", style:""},   
        ],
        answer: "First person shooter",
        respuestaC:""    
    },
    {
        question: "¿Cual es el genero que te gusta actualmente?",
        choices: [
            {choose:"Salsa", style:""},
            {choose:"Rock", style:""},
            {choose:"Kpop", style:""},
            {choose:"Indie Dance", style:""},  
        ],
        answer: "Indie Dance",
        respuestaC:""
       
    },

]

const Pintar = () => {
    const [finish,setFinish] = useState(false);
    const mostrarDatos = () => setFinish(true);
    return<>

    <div className={qStyle.quizDefault}>
      {finish ? <FinishQuiz data={data}/> : <Quiz data={data} mostrarDatos={mostrarDatos} />}
   </div>

    </>
}


export default Pintar;