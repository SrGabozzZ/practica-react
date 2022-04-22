import Grafica1 from "../Grafica1/Grafica1.js";
import Grafica2 from "../Grafica2/Grafica2.js";
import HomeStyle from "./Home.module.css"



const Home = () => {
    return <>
      <div className={HomeStyle.containerPerfil}>
		<div className={HomeStyle.cursos}>
		</div>
		<div className={HomeStyle.grafica1}>
			<Grafica1/>
		</div>
		<div className={HomeStyle.grafica2}>
			<Grafica2/>
			</div>
		<div className={HomeStyle.titulos}></div>
	 </div>
    </>
}

export default Home ;