import './top.css'
import gitHub from '../../assets/github.png'
import LinkedIn from '../../assets/LinkedIn.png'
import Instagram from '../../assets/instagram.png'

function Top() {


    return (
        <>
            <section id='top'>
                    <a href="https://github.com/Rehman-codes" target="_blank"><img src={gitHub} alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/rehman-chaudhary" target="_blank"><img src={LinkedIn} alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/8Bits.solutions/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
            </section>
        </>
    )
}

export default Top;