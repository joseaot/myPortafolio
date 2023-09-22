import './App.css'
import Contactame from './components/Contactame/Contactame'
import Foot from './components/Feet/Foot'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Proyectos from './components/Proyectos/Proyectos'
import Skills from './components/Skills/Skills'
import Sobremi from './components/SobreMi/Sobremi'


function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Sobremi/>
      <Skills/>
      <Proyectos/>
      <Contactame/>
      <Foot/>
    </>
  )
}

export default App
