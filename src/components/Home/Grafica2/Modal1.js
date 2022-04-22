import G2Style from './Grafica2.module.css';
import { useState } from "react";


const Modal1 = ({setToggleConfig,meta,setMeta}) => {

    const [safe,setSafe] = useState("");

        

    const calcular = () => {
        
             if(safe % 1 !== 0){
               alert("Solo puedes introducir intervalos de una hora") 
             }else{
                 setMeta(safe)
                setToggleConfig(false);
            }
               

  
    }

    return (
        <div className={G2Style.modalContainer}>
            <div className={G2Style.modalItem}>
                <p>Configura tu objetivo</p>
                <input  
                className={G2Style.modalItemInput} 
                placeholder={meta}
                onChange={(e)=>setSafe(e.target.value)}
                >
               
                </input>
                <div>
                <button onClick={()=> setToggleConfig(false)}>Cancelar</button>
                <button
                onClick={calcular}
                >Guardar</button>
                </div>
               
            </div>
        </div>
    )

    
}
                                         

export default Modal1;