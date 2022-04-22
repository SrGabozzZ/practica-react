import BarraLateral from "./BarraLateral.module.css"
import { Link  } from "react-router-dom"
const AsideBar = () => {
    return <>
    <div className={BarraLateral.barraLateral}>
		<Link to="/" className={BarraLateral.barraLateralA}><div className={BarraLateral.barraLateralItems}><i className="fa-solid fa-house"></i></div></Link>
		<Link to="/cursos" className={BarraLateral.barraLateralA}><div className={BarraLateral.barraLateralItems}><i className="fa-solid fa-book"></i></div></Link>
	</div> 
    </>
}
export default AsideBar ;