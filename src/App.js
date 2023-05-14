
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/pages/Home';
import Empresa from './components/pages/Projetos';
import Contato from './components/pages/contato';
import Footer from './components/Footer';
import ProjetoPage from './components/pages/ProjetosPage';
import Curso from './components/pages/Cursos';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/Projetos" element={<Empresa />} />
          <Route path='/ProjetosPage' element={<ProjetoPage/>}/>
          <Route path='/Cursos' element={<Curso/>}/> 
        </Routes>
        <div id='footer'>
        <Footer/> </div>
      </Router>
      


    </div>
  );
}

export default App;
