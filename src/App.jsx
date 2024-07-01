import './App.css';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Skills from './components/Skills/Skills.jsx';
import Intro from './components/Intro/Introduction.jsx';

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
