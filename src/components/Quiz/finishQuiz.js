import React from "react";
import qStyle from "./Quiz.module.css"
import QuizResults from "./quizResults";

const FinishQuiz = ({data}) =>{
    
    return <>
    <div className={qStyle.quizDefaultChildren}>
    <h2>¡Haz finalizado el Quiz!</h2>
    <div>  
    {data.map((el)=><QuizResults key={el.respuestaC} el={el} />)}
    </div>
    <h2 className={qStyle.correct}>Puntaje</h2>
  </div>
    </> 

}

export default FinishQuiz;