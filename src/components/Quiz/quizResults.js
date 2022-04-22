import qStyle from "./Quiz.module.css"

const QuizResults = ({el}) => {
    return <>
          <h3>{el.question}</h3>
          <p>Respuesta correcta: </p><p className={qStyle.correct}>{el.answer}</p>
          <br></br>
          <p>Tu respuesta: </p>
          {el.respuestaC === el.answer ? <p className={qStyle.correct}>{el.respuestaC} +1</p> : <p className={qStyle.wrong}>{el.respuestaC}</p> }
          <br></br>
           </>
}

export default QuizResults;