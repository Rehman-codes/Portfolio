import './App.css';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';
import Intro from './components/Introduction.jsx';

function App() {

  return (
    <>
      <Intro />
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App;
