import PStyle from './Perfil.module.css'
import { useState } from 'react';

const Perfil = () => {

   
	const [cambio,setCambio] = useState("1");
 

    return <>
       <div className={PStyle.vista3Container}>
		<div className={PStyle.bgPerfil}></div>
		<div className={PStyle.containerPerfil}>
			<div className={PStyle.perfilItem}>
				<div className={PStyle.inicialesPerfilContainer}>
					<div className={PStyle.inicialesPerfilContainerItem1}></div>
				</div>
				<div className={`${PStyle.perfilItemCommon } ${PStyle.title}` }>
					<h1>Hermes Gabriel</h1>
				</div>
				<div className={PStyle.perfilItemCommon }>
					<p className="nick">@hermesgabriel</p>
				</div>
				<div className={PStyle.perfilItemCommon}> 
				    <p>Alto de los Godos, Venezuela</p></div>
				<div className={PStyle.perfilItemCommon}>
					<button className={PStyle.perfilEditar}>Editar Perfil</button>
				</div>						
			</div>
		</div> 
		<div className={PStyle.switch}>
			<div className={PStyle.containerButtons}><button value={1} onClick={(e)=> setCambio(e.target.value)} className={PStyle.buttons} style={{ borderBottom: cambio === "1" ? '5px solid #20e3b2' : "5px solid #ffffff" }}>Certificados</button></div>
			<div className={PStyle.containerButtons}><button value={2} onClick={(e)=> setCambio(e.target.value)} className={PStyle.buttons} style={{ borderBottom: cambio === "2" ? '5px solid #20e3b2' : "5px solid #ffffff" }}>Ranking</button></div>
			<div className={PStyle.containerButtons}><button value={3} onClick={(e)=> setCambio(e.target.value)} className={PStyle.buttons} style={{ borderBottom: cambio === "3" ? '5px solid #20e3b2' : "5px solid #ffffff" }}>opcion3</button></div>
		</div>
		<div className={PStyle.varios}>
		        { cambio === "1" && <p>Certificados</p>}
                { cambio === "2" && <p>Ranking</p>}
                { cambio === "3" && <p>opcion3</p>}
		</div>
	</div>


    </>
}

export default Perfil;