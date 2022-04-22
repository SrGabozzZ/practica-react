import fStyle from "./Footer.module.css"
import { Link  } from "react-router-dom"
const Footer = () => {
    return <>
      <footer>
		<Link to="/" ><div className={fStyle.barraLateraFooterItem}><i className="fa-solid fa-house"></i></div></Link>
		<Link to="/cursos"><div className={fStyle.barraLateraFooterItem}><i className="fa-solid fa-book"></i></div></Link>
	   </footer>     
    </>
}
export default Footer;