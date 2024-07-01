import './skills.css'
import cpp from '../../assets/skillsLogos/c.png'; 
import figma from '../../assets/skillsLogos/figma.png'; 
import firebase from '../../assets/skillsLogos/firebase.png'; 
import js from '../../assets/skillsLogos/js.png'; 

function Skills() {


    return (
        <>
        <h1>Skills</h1>

        <section id="skills">
            <div id='skill'>
            <img src={cpp} alt="Image 1" />
            <img src={js} alt="Image 1" />
            <img src={figma} alt="Image 1" />
            <img src={firebase} alt="Image 1" />
            </div>
        </section>

        </>
    )
}

export default Skills;