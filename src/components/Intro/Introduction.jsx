import './intro.css';
import profilePic from '../../assets/file.png'

function Intro() {


    return (
        <section id="intro">
            <div id='intro-sub-section-1' className='intro-sub-section'>
                <h1>Abdur Rehman</h1>
                <h4>Software Engineer | Web Developer | Designer</h4>
            </div>

            <div id='intro-sub-section-2' className='intro-sub-section'>
                <img src={profilePic} alt="profile pic" />
            </div>

        </section>
    )
}

export default Intro;