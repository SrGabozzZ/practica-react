import { Link  } from "react-router-dom"
import Notify from "./Header.module.css"
const NotifyButton = () => {
    return <>
<div className={Notify.notifyCard}>
				<div className={Notify.notifyCardItem1}>
					<div className={Notify.notifyCardInicialContainer}>
					</div>
					<div className={Notify.notifyName1}>
						<p className={Notify.notifyName1Item2}>Hermes Ramirez</p>
						<p className={Notify.notifyName1Item2}>@SrGabrielol</p>	
					</div>	
				</div>
				<div className={Notify.notifyCardItem2}>
						<Link to="/perfil" style={{ textDecoration: 'none' }}><p className={Notify.notifyName2Item}>Perfil</p></Link>
						<p className={Notify.notifyName2Item}>Ajustes</p>
				</div>
				<div className={Notify.notifyCardItem3}>
					<p>Cerrar</p>
				</div>
			</div>
    </>
}
export default NotifyButton;

