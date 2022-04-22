import React,{ useState} from 'react'
import qStyle from "./Quiz.module.css"

const Quiz = ({data,mostrarDatos}) =>{

   //Variables de estado
    const [count,setCount] = useState(0);
    const [cambio,setCambio] = useState(0);

   //Funciones
    const nextCount = () => data[count].respuestaC === "" ? alert("¡No elejiste una opcion!") : setCount(count + 1)
    const prevCount = () => setCount(count - 1) 
      
    const setRespuesta = (data,elemento,index) =>{ 
        data.respuestaC=elemento;
        data.choices.forEach(el => el.style="");
        data.choices[index].style="true";
        setCambio(cambio + 1);
        console.log(data.respuestaC);
    }  

 
    return <>
        <div className={qStyle.quizDefaultChildren}>
           <div className={qStyle.tittle}>
           <h3>{data[count].question}</h3>
           </div>
         
        <div className={qStyle.choices}>
           {data[count].choices.map((el,index)=> {
              const key = `item-${index}`;    
              return(
      <div onClick={()=> setRespuesta(data[count],el.choose,index)} key={key} cambio={cambio} style={{outline: el.style === "true" ? "2px solid #03ff46" : "" }} className={qStyle.buttonChoose}> 
                {el.choose}</div>
              )
         })}
        </div>
        <div className={qStyle.buttonMove}>
           {count === 0  || <button onClick={()=>prevCount() } className={qStyle.styleButton}>prev</button>}
           { count === 4 && data[4].respuestaC !== "" ?  <button onClick={()=>mostrarDatos(data)} className={qStyle.styleButton}>mostrar datos</button>:<button onClick={()=>nextCount()} className={qStyle.styleButton}>next</button>}
</div>
</div>
</>
}
export default Quiz;