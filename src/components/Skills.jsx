
import './Skills.css'

function Skills() {

    return (
        <>
            <section className='skills-section'>
                <div className="container">
                    <h1>Skills & Technologies</h1>
                    <div className="skills-container">
                        <div className="frontend">
                            <p>Frontend</p>
                            <div className="boxFront">
                                <div className="box">
                                    <p><i class="fa-brands fa-html5"></i></p>
                                    <p>HTML5</p>
                                </div>
                                <div className="box">
                                    <p><i class="fa-brands fa-css3"></i></p>
                                    <p>CSS3</p>
                                </div>
                                <div className="box">
                                    <p><i class="fa-regular fa-file-code"></i></p>
                                    <p>JavaScript</p>
                                </div>
                                <div className="box">
                                    <p><i class="fa-brands fa-react"></i></p>
                                    <p>React</p>
                                </div>
                                <div className="box">
                                    <p><i class="fa-brands fa-bootstrap"></i></p>
                                    <p>Bootstrap</p>
                                </div>
                                <div className="box">
                                    <p><i class="fa-solid fa-palette"></i></p>
                                    <p>Tailwind CSS</p>
                                </div>
                                <div className="box">
                                    <p><i class="fa-solid fa-mobile-screen"></i></p>
                                    <p>Responsive</p>
                                </div>
                                <div className="box">
                                    <p><i class="fa-solid fa-palette"></i></p>
                                    <p>UI/UX</p>
                                </div>
                            </div>
                        </div>
                        <div className="database">
                            <p>Database</p>
                            <div className="box">
                                <p><i class="fa-solid fa-database"></i></p>
                                <p>PostgreSQL</p>
                            </div>
                        </div>
                        <div className="tools">
                            <p>Tools</p>
                            <div className="box">
                                <p><i class="fa-brands fa-git-alt"></i></p>
                                <p>Git/GitHub</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;

