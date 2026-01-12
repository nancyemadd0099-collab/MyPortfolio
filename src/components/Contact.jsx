
import { useRef } from 'react';
import './Contact.css'
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_6u1q5wf",
            "template_3a1j0jc",
            form.current,
            "nx_dO9dpTdzk7D15P"
        ).then(() => {
            alert("✅ Message sent successfully!")
            e.target.reset();
        },
            (error) => {
                alert("❌ Failed to send message. Try again later.");
                console.log(error.text);
            }
        )
    };

    return (
        <>
            <section className='contact-section'>
                <div className="container">
                    <div className="header-contact">
                        <h1>Get In Touch</h1>
                    </div>
                    <div className="form-container">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="para-form">
                                <h4><i class="fa-solid fa-envelope"></i>Contact Form</h4>
                                <p>Fill out the form below and I'll get back to you as soon as possible.</p>
                            </div>
                            <input type="text" name='form-name' placeholder='Your Name' className='input-name' required />
                            <input type="email" name='form-mail' placeholder='Your Email' className='input-mail' required />
                            <textarea name="message" placeholder='Your Message' required></textarea>
                            <button className='btn-submit' type="submit"><i class="fa-regular fa-paper-plane"></i> Send</button>
                        </form>
                    </div>

                    <div className="box-mail">
                        <p>Or reach out directly via email:</p>
                        <a href="#">nancyemadd009@gmail.com</a>
                    </div>
                </div >

            </section >
        </>
    )
}

export default Contact;

