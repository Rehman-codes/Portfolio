import './contact.css'

function Contact() {


    return (
        <>

        <section id="contact">

        <h1>Contact</h1>

        <form action="">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" autoComplete='on' required/>

            <label htmlFor="email">Email</label>
            <input id="email" type="email"  autoComplete='on' required/>

            <label htmlFor="query">Query</label>
            <textarea id="query"  autoComplete='on' required></textarea>

            <button type='submit'></button>
        </form>
        
        </section>
        </>
    )
}

export default Contact;