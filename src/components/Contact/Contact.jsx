import './contact.css'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {

    const [state, handleSubmit] = useForm("mqazkanr");
    
    if (state.succeeded) {
    return <p>Thanks for Contacting!</p>;
    }

    return (
        <>
            <h1>Contact</h1>
            <section id="contact">
                <form action='https://formspree.io/f/mqazkanr' method='POST'>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name='name' autoComplete='on' required />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name='email' autoComplete='on' required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <label htmlFor="query">Query</label>
                    <textarea id="query" name='query' autoComplete='on' required></textarea>
                    <ValidationError prefix="Query" field="query" errors={state.errors} />

                    <button type='submit' disabled={state.submitting}>Submit</button>
                </form>

            </section>
        </>
    )
}

export default Contact;