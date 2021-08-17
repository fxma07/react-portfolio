
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Fade from 'react-reveal/Fade'
function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <About/>
      <Projects/>
      <Fade>
        <Contact/>
      </Fade>
      <Footer/>
    </>   
  );
}

export default App;
