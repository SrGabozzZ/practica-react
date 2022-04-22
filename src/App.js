import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Header from './components/Header/Header';
import BarraLateral from './components/BarraLateral/BarraLateral';
import Footer from './components/Footer/Footer';
import Cursos from './components/Cursos/Cursos';
import Home from './components/Home/HomeBase/Home.js';
import Pintar from "./components/Quiz/quizPadre";
import Perfil from "./components/Perfil/Perfil";


const App = () => {

    
    return <>
     <BrowserRouter>
     <Header/>
     <BarraLateral/>
     <Footer/>
	  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cursos' element={<Cursos/>}/>
      <Route path='/prueba' element={<Pintar/>}/>
      <Route path='/perfil' element={<Perfil/>}/>
	  </Routes>
	</BrowserRouter>
    </>
}

export default App;