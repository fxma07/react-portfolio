
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Zoom from 'react-reveal/Zoom'
function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <About/>
      <Projects/>
      <Zoom>
      <Contact/>
      </Zoom>
      <Footer/>
    </>   
  );
}

export default App;
