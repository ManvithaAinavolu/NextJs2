import './contact.css';
const Contact = () => (
<section id="page3" className="contact-container">
        <div className="contact-me">
            <h2>Get in Touch</h2>
            <div className="collab">Let's Collaborate</div>
            <p>Feel free to reach out to me!</p>
            <div className="contact-links">
                <a href="mailto:manvithaainavolu@gmail.com" className="btn"><i className="fas fa-envelope"></i> Email</a>
                <a href="https://github.com/ManvithaAinavolu" className="btn"><i className="fab fa-github"></i> GitHub</a>
                <a href="https://www.linkedin.com/in/manvitha-ainavolu-22090424b" className="btn"><i className="fab fa-linkedin"></i> LinkedIn</a>
            </div>
            <div className="additional-contact">
                <p>Connect with me on social media:</p>
                <div className="social-icons">
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                 </div>
            </div>
            <p className="quote">"If you think you can,you can.
                <br/>
                If you think you can't ,You are right!" -Manvitha Ainavolu.
            </p>
        </div>
    </section>
)
export default Contact;