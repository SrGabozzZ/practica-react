import cStyle from  "./Cursos.module.css";
import { Link  } from "react-router-dom"
const Cursos = () => {
    return <>
    <div className={cStyle.containerVista2}>
		<div className={cStyle.barraBuscador}>
			<div className={cStyle.secc1}>
				<select className={cStyle.secc1Item}>
					  <option value="matematica">Matematica</option>
					  <option value="quimica">Quimica</option>
                      <option value="ghc">GHC</option>
                      <option value="historia">Historia</option>
				</select>				
			</div>
			<div className={cStyle.secc2}>
				<input type="search" name="" className={`${cStyle.secc2Item} ${cStyle.item1}`}></input>
				<select className={`${cStyle.secc2Item} ${cStyle.item2}`}>
					  <option value="Niveles">Niveles</option>
					  <option value="Nivel 1">Nivel 1</option>
                      <option value="Nivel 2">Nivel 2</option>
                      <option value="Nivel 3">Nivel 3</option>
				</select>
			</div>
		</div>
		<div className={cStyle.cursos}>
			<article className={cStyle.item}>
				<div className={cStyle.itemBg}>
					<p className={cStyle.bgTittle}>Historia</p>
				</div>
				<div className={cStyle.itemInfo}>
					<p className={cStyle.cursosItemInfo}>Tarea:1</p>
					<p className={cStyle.cursosItemInfo}>Tema:Independencia de Venezuela</p>
				</div>
				<Link to="/prueba" className={cStyle.iniciar} style={{ textDecoration: 'none' }} ><div>Iniciar</div></Link>	
			</article>	
		</div>
		</div>
    </>
}

export default Cursos;