
import './Aboutme.css'

function Aboutme() {

    return (
        <>
            <section id='about-section'>
                <div className="container">
                    <div className="content-about">
                        <h1>What I do?</h1>
                        <p>
                            I build modern frontend web applications using React.js, focusing on clean and reusable components, responsive layouts, and seamless integration with APIs to deliver consistent and user-friendly experiences across different devices and screen sizes.</p>
                    </div>

                    <div className="cards-about">
                        <div>
                            <h4>Frontend Integration</h4>
                            <p>I integrate RESTful APIs, handle authentication and protected routes, and manage application state and user interactions efficiently.</p>
                        </div>
                        <div>
                            <h4>Responsive Design</h4>
                            <p>I implement mobile-first responsive layouts using Bootstrap and modern CSS, ensuring cross-browser compatibility across different devices.</p>
                        </div>
                        <div>
                            <h4>UI Development</h4>
                            <p>I build clean and reusable React components, translate Figma designs into pixel-accurate user interfaces, and maintain consistent layouts and spacing.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutme;
