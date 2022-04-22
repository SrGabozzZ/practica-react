import hStyle from "./Header.module.css"
import NotifyButton from "./NotifyButton";
import { useState } from "react";


const Header = ()=> {
	const [show,setShow] = useState(false);
    return <>
<     header className={hStyle.header}>
		<div className={hStyle.logo}>
			<p className={hStyle.logoItem }>ColdBrain</p>
		</div>
		<div className={hStyle.buscador}>
			<input type="search" name="" className={hStyle.search}></input>
		</div>
		<div className={hStyle.perfil}>
			<i className="fa-solid fa-bell icon-bell"></i>
			<div onClick={()=>setShow(!show)} className={hStyle.containerPerfilIniciales}>
				<div className={hStyle.iniciales}>HR</div>
				<i className="fa-solid fa-angle-down icon-arrow"></i>
			</div>
			{show ? <NotifyButton/> : null }
		</div>
		
	</header>
    </>
}

export default Header;