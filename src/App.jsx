import './App.css';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Skills from './components/Skills/Skills.jsx';
import Intro from './components/Intro/Introduction.jsx';
import Top from './components/Top/top.jsx';

function App() {

  return (
    <>
      <Top/>
      <Intro />
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App;
